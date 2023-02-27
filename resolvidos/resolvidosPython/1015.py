import math

xUm, yUm = map(float, input().split())
xDois, yDois = map(float, input().split())

distancia = math.sqrt(pow(xDois - xUm, 2) + pow(yDois - yUm, 2))

print("%.4f" % distancia)