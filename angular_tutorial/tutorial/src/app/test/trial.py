s = "sdsad"
p = "rg"

def func(s, p):
    temp = ""
    flag = False
    for i in s:
        if not flag:
            if i == p[0]:
                temp = i
                flag = True
        else:
            if i != p[1]:
                temp += i
            else:
                temp += i
                break
    return temp

print(func(s, p))
