from selenium import webdriver
from time import sleep

driver = webdriver.Chrome('chromedriver')

driver.get("https://www.google.com")

input = driver.find_element_by_xpath('//input[@type="text"]')
input.send_keys("Barack Obama Gay ?")

submit = driver.find_element_by_xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]')
submit.click()