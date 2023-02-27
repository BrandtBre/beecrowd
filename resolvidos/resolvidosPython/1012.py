a, b, c = map(float, input().split())

triangulo = (a * c) / 2
circulo = 3.14159 * (c * c)
trapezio = ((a + b) * c) / 2
quadrado = b * b
retangulo = a * b

print("TRIANGULO: %.3f" % triangulo)
print("CIRCULO: %.3f" % circulo)
print("TRAPEZIO: %.3f" % trapezio)
print("QUADRADO: %.3f" % quadrado)
print("RETANGULO: %.3f" % retangulo)