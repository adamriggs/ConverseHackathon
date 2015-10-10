### Getting and scraping IDs from sample JSON data

Run `scraper.rb` and input the name of the instrument (this is used as the argument for the api endpoint 'instrument' parameter)

    ruby scripts/scraper.rb
    Input instrument name to scrape ids from:
    > bass

### Notes to self

- Maybe differentiate between one shot and looped samples? API filter &type=one_shot && &type=loop