codigoPecaUm, numeroPecaUm, valorPecaUm = input().split()
codigoPecaDois, numeroPecaDois, valorPecaDois = input().split()

valorPagar = (int(numeroPecaUm) * float(valorPecaUm)) + (float(valorPecaDois) * int(numeroPecaDois))

print("VALOR A PAGAR: R$ %.2f" % valorPagar)