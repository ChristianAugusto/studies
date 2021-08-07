


def func_a():
    print('oi')

def func_b(func):
    func()

def func_c():
    def dobro(num):
        return num * 2

    return dobro



if __name__ == '__main__':
    func_b(func_a)

    print(func_c()(2))