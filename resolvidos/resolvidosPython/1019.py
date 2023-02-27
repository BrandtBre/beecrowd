segundos = int(input())

horas = segundos / 3600
segundos = segundos % 3600
minutos = segundos / 60
segundos = segundos % 60

print("%d:%d:%d" % (horas, minutos, segundos))
