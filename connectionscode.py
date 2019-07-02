#Import Libraries
from bs4 import BeautifulSoup
from selenium import webdriver

driver = webdriver.Chrome('chromedriver')
profile_link="https://www.linkedin.com/in/christinelam320/"
driver.get(profile_link)
raw_input("Press enter when you're logged in.")
driver.get(profile_link)
html = driver.page_source
soup = BeautifulSoup(html) #specify parser or it will auto-select for you

summary = soup.find('div', { "id" : "profile-wrapper" })
profile = summary.find('ul', {"class" : "pv-top-card-v3--list" })
name = profile.find("li")
education = profile.find("ltr")

print education.getText()