# week3-IP-Python-Cipherschool
class 1
a = 5
def func():
  pass
type(func)
object
a = 5
isinstance(func, object)
class A:
  name = "harsha"
  marks = 50
type(A)
A = 5
type(A)
class A:
  def __call__(self):
    print("You called me")
a = A()
type(a)
a()
a = {"name": "harsha"}
a["name"]
class Exponent:
  def __init__(self, n):
    self.n = n
  
  def __getitem__(self, x):
    return x ** self.n

e = Exponent(3)
e[6]
class Dog:

  tricks = []
  def __init__(self, name):
    self.name = name
  
  def add_trick(self, trick):
    self.tricks.append(trick)

d1 = Dog("Bruno")
d1.add_trick("fetch")
d1.add_trick("walk")
d1.tricks
d2 = Dog("Maxx")
d2.tricks
#inheritance
class A:
  def __init__(self, x):
    print("A init executed")
class B(A):
  def __init__(self):
    print("B init executed")

abc =B()
#MRO(method resolution order)
class A:
  pass

class B(A):
  pass

class C(B):
  pass

class D(A):
  x = 10

class E(C, D):
  pass

e = E()
print(e.x)
E.mro()
#Iteration protocol
for any object to be an iterable,it should have 2 dundles

__iter__
__next__
a = range(5)
it = a.__iter__()
it
a = [1, 2, 3, 4]
iter(a)
class myrange:
  def __init__(self, n):
    self.n = n

  def __iter__(self):
    return myrange_iterator(self)

class myrange_iterator:
  def __init__(self, myrange):
    self.myrange = myrange
    self.i = 0

  def __next__(self):
    ret = self.i
    self.i += 1

    if ret >= self.myrange.n:
      raise StopIteration

    return ret


for i in myrange(5):
  print(i)
#concept of generators
 # Eager loading
def generate_squares(n):
  return [ i**2 for i in range(1, n) ]

for x in generate_squares(100):
  print(x)
       # Lazy loading
def generate_squares(n):
  for i in range(1, n):
    yield i**2
 
for i in generate_squares(10):
  print(i)
  a = generate_squares(10)
type(a)
def func():
  print("start")
  yield 1
  print("yielded 1")
  yield 2
  print("yielded 2")

it = iter(func())
next(it)
a = ( i**2 for i in range(10) )
for i in a:
  print(i)
  a = ( i**2 for i in range(10) )
iter(a)
