fade = 3
visible = 5

print("\n")
print(f"{'visible time':15}: {visible} sec")
print(f"{'fade time':15}: {fade} sec")
print("\n")

n = int(input("Enter number of slides: "))
print("\n")
# n = 3
time = n * (fade + visible)

sec = 100 / (n * (fade + visible))

a0 = 0
a1 = fade * sec
a2 = (fade + visible) * sec
a3 = (fade + visible + fade) * sec
a4 = 100

a = [a0, a1, a2, a3, a4]

print(f"time = {time:3.2f}")
print(f"slide time = {(fade + visible):3.2f}\n")

for i in range(5):
    print(f"a{i}  : {a[i]:>3.2f} %  ")
