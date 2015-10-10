require 'json'
require 'pry'

class Scraper
  def initialize(json_file)
    @json_file = File.read(json_file)
    @samples_hash = JSON.parse(@json_file)
  end

  def write_ids_to_file
    @samples_hash.each do |sample|
      File.open('ids.txt', 'a') { |file| file.puts(sample['_id']) }
    end
  end
end

scraper = Scraper.new('all_samples.json')
scraper.write_ids_to_file
