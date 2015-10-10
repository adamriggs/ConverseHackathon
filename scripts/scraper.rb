require 'json'
require 'curb'
require 'uri'
require 'pry'

class Scraper
  def initialize(instrument_name)
    @instrument = formatted_for_api(instrument_name)
    @instrument_file_name = formatted_for_filename(instrument_name)
    @api_endpoint = "http://hackathon.indabamusic.com/samples?instruments=#{@instrument}&per_page=99999"
    @text_file = File.new(File.expand_path("../data/ids/#{@instrument_file_name}.json", File.dirname(__FILE__)), 'w')
  end

  def formatted_for_api(instrument_name)
    instrument_name_array = instrument_name.downcase.split(' ')

    if (instrument_name_array.length > 1)
      instrument_name_array = instrument_name_array.map {|word| word.capitalize}.join(' ')
      URI.escape(instrument_name_array)
    else
      instrument_name_array.first.capitalize
    end
  end

  def formatted_for_filename(instrument_name)
    instrument_name_array = instrument_name.downcase.split(' ')

    if (instrument_name_array.length > 1)
      instrument_name_array.join('_')
    else
      instrument_name_array.first
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
    File.open(@text_file, 'a') { |file| file.puts("[") }

    instrument_json.each do |sample|
      File.open(@text_file, 'a') { |file| file.puts("\"#{sample['_id']}\",") }
    end

    File.open(@text_file, 'a') { |file| file.puts("]") }

    done_scraping
  end

  def done_scraping
    puts "Done scraping, file saved to data/ids/#{File.basename(@text_file)}"
  end
end

puts 'Input instrument name to scrape ids from:'
json_file_name = gets.chomp
scraper = Scraper.new(json_file_name)
scraper.get_json_data
