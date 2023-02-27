x = int(input())

print(x)
print("%d nota(s) de R$ 100,00" % (x / 100))
mod = x % 100

print("%d nota(s) de R$ 50,00" % (mod / 50))
mod = mod % 50

print("%d nota(s) de R$ 20,00" % (mod / 20))
mod = mod % 20

print("%d nota(s) de R$ 10,00" % (mod / 10))
mod = mod % 10

print("%d nota(s) de R$ 5,00" % (mod / 5))
mod = mod % 5

print("%d nota(s) de R$ 2,00" % (mod / 2))
mod = mod % 2

print("%d nota(s) de R$ 1,00" % mod)
