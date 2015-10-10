require 'json'
require 'pry'

class Scraper
  def initialize(json_file_name)
    @json_file = File.read(File.expand_path("../data/json/#{json_file_name}.json", File.dirname(__FILE__)))
    @text_file = File.new(File.expand_path("../data/ids/#{json_file_name}.txt", File.dirname(__FILE__)), 'w')
    @samples_hash = JSON.parse(@json_file)
  end

  def write_ids_to_file
    @samples_hash.each do |sample|
      File.open(@text_file, 'a') { |file| file.puts(sample['_id']) }
    end

    done_scraping
  end

  def done_scraping
    puts "Done scraping, file saved to data/ids/#{File.basename(@text_file)}"
  end
end

puts 'Input json file to scrape ids from (do not include .json extension):'
json_file_name = gets.chomp
scraper = Scraper.new(json_file_name)
scraper.write_ids_to_file
