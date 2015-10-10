require 'json'
require 'curb'
require 'pry'

class Scraper
  def initialize(instrument_name)
    @instrument = instrument_name
    @instrument_file_name = instrument_name.downcase
    @api_endpoint = "http://hackathon.indabamusic.com/samples?instruments=#{instrument_name}&per_page=99999"
    @text_file = File.new(File.expand_path("../data/ids/#{@instrument_file_name}.txt", File.dirname(__FILE__)), 'w')
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
    instrument_json.each do |sample|
      File.open(@text_file, 'a') { |file| file.puts(sample['_id']) }
    end

    done_scraping
  end

  def done_scraping
    puts "Done scraping, file saved to data/ids/#{File.basename(@text_file)}"
  end
end

puts 'Input instrument name to scrape ids from:'
json_file_name = gets.chomp
json_file_name = json_file_name.capitalize
scraper = Scraper.new(json_file_name)
scraper.get_json_data
