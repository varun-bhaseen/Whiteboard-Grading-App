from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import selenium
from selenium.webdriver.common.by import By
# For using sleep function because selenium
# works only when the all the elements of the
# page is loaded.
import time
browser = webdriver.Chrome("chromedriver.exe")
wait = WebDriverWait(browser, 10)

# webdriver path set

# To maximize the browser window
browser.maximize_window()

browser.get('https://app.projects.wasaequreshi.com/')

time.sleep(3)
# Enter your user name and password here.
username = "esp.thefive.automation@gmail.com"
password = "Sjsu&256"


# signin element clicked
browser.find_element_by_xpath("//*[@id='navbarNav']/ul/li[6]/a").click()
# time.sleep(2)

# Login clicked
element = '1-email'
browser.implicitly_wait(5000)
browser.find_element_by_id(element).click()

a = browser.find_element_by_id(element)
for character in username:
    a.send_keys(character)
    time.sleep(0.1)

# password send
browser.implicitly_wait(5000)
b = browser.find_element_by_xpath(
    '//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div/div[2]/div[2]/span/div/div/div/div/div/div/div/div/div[2]/div[3]/div[2]/div/div/input')
b.send_keys(password)


# submit button clicked
browser.find_element_by_xpath(
    '//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div/button/span').click()

print('Login Successful')
# browser.close()