### Getting sample JSON data

Make a curl request and save the response to a text file

    curl http://hackathon.indabamusic.com/samples\?instruments\=Drums\&\per_page\=99999 > data/json/drums.json

### Scraping IDs from JSON data

Run `scraper.rb` and input the name of the json file without the .json extension

    ruby scripts/scraper.rb
    Input json file name to scrape ids from (do not include .json extension):
    > bass

### Notes to self

- Maybe differentiate between one shot and looped samples? API filter &type=one_shot && &type=loop