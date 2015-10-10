require 'json'
require 'curb'
require 'uri'
require 'pry'

class Scraper
  def initialize(instrument, sample_type='all')
    @instrument = formatted_for_api(instrument)
    @instrument_filename = formatted_for_filename(instrument)

    set_endpoint_and_filename_for_sample_type(sample_type)
  end

  def formatted_for_api(instrument)
    instrument_string_array = instrument.downcase.split(' ')

    if (instrument_string_array.length > 1)
      instrument_string_array = instrument_string_array.map {|word| word.capitalize}.join(' ')
      URI.escape(instrument_string_array)
    else
      instrument_string_array.first.capitalize
    end
  end

  def formatted_for_filename(instrument)
    instrument_string_array = instrument.downcase.split(' ')

    if (instrument_string_array.length > 1)
      instrument_string_array.join('_')
    else
      instrument_string_array.first
    end
  end

  def set_endpoint_and_filename_for_sample_type(sample_type)
    valid_sample_types = ['one_shot', 'loop']

    if sample_type && valid_sample_types.include?(sample_type)
      @json_file = File.new(File.expand_path("../data/ids/#{@instrument_filename}_#{sample_type}.json", File.dirname(__FILE__)), 'w')
      @api_endpoint = "http://hackathon.indabamusic.com/samples?instruments=#{@instrument}&per_page=99999&type=#{sample_type}"
    else
      @json_file = File.new(File.expand_path("../data/ids/#{@instrument_filename}_all.json", File.dirname(__FILE__)), 'w')
      @api_endpoint = "http://hackathon.indabamusic.com/samples?instruments=#{@instrument}&per_page=99999"
    end
  end

  def get_json_data
    json_response = Curl.get(@api_endpoint).body_str
    instrument_json = JSON.parse(json_response)

    if instrument_json.empty?
      puts "#{@instrument} returned an empty response"
    else
      write_ids_to_file(instrument_json)
    end
  end

  def write_ids_to_file(instrument_json)
    File.open(@json_file, 'a') { |file| file.puts("[") }

    instrument_json.each do |sample|
      File.open(@json_file, 'a') { |file| file.puts("\"#{sample['_id']}\",") }
    end

    File.open(@json_file, 'a') { |file| file.puts("]") }

    puts "Done scraping, file saved to data/ids/#{File.basename(@json_file)}"
  end
end

puts 'Input instrument name to scrape ids from:'
instrument = gets.chomp
puts 'Input sample type:'
sample_type = gets.chomp

scraper = Scraper.new(instrument, sample_type)
scraper.get_json_data
