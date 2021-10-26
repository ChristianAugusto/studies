from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains


def main():
    browser = webdriver.Chrome()

    browser.get("https://www.unasp.br/")

    browser.set_window_size(1920, 1080)

    menu_hover = WebDriverWait(browser, 20).until(
        EC.element_to_be_clickable(
            (By.XPATH, "/html/body/header/div/nav/ul/li[2]/a")
        )
    )

    hover = ActionChains(browser).move_to_element(menu_hover)
    hover.perform()

    button = WebDriverWait(browser, 20).until(
        EC.element_to_be_clickable(
            (By.XPATH,
             "/html/body/header/div/nav/ul/li[2]/div/div[2]/ul/li[1]/a")
        )
    )

    button.click()

    browser.implicitly_wait(5)

    cursos_elems = browser.find_elements(
        By.CSS_SELECTOR, ".unasp-card-grid.courses .una-card .una-card__title")

    for curso in cursos_elems:
        print(curso.get_attribute("textContent"))

    browser.quit()


main()
