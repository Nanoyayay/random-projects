import turtle
import random
import time
import threading

print("makin uncle bob guy")

win = turtle.Screen()
win.title("uncle bob 🐢")
win.bgcolor("burlywood")
win.setup(width=600, height=400)
win.tracer(0)

bob = turtle.Turtle()
bob.shape("turtle")
bob.color("darkgreen")
bob.penup()
bob.goto(0, -100)
bob.turtlesize(4)

text = turtle.Turtle()
text.hideturtle()
text.penup()
text.goto(0, 100)

sayings = [
    "sudo rm -rf /* --no-preserve-root",
    "i fixed your computer, check your robux",
    "wait ik just add a semicolon",
    "uh what did you have for brekky",
    "buy an rtx 5090 its 1 pound trust",
    "i dare you to run a os on a washing machine ontop of a dryer while eating a greggs sausage roll",
    "make a computer in minecraft",
    "buy a 3ds",
    "AHH",
    "delete ts its bad",
    "make an os rq vro just make kernel.c",
    "whats that one app called whatsapp?",
    "C:/Users/UncleBob/Desktop",
    "can you make me a cup of tea please",
    "ZZZZZZZZZZZZZ",
    "cut the red wire it gives ruubox",
    "can i have ur gpu?",
    "see that silver thing in your motherboard? take it out when ur pc is on trust me",
    "i am google chrome i want your ram... im hungry PLEASE!!",
    "this message is 1/21 chance to show so uh gg ig (9+10 lol)",
    "i am the uncle bob, i am the one who codes",
]

def say_random():
    text.clear()
    phrase = random.choice(sayings)
    text.write(phrase, align="center", font=("Courier", 16, "bold"))
    win.update()

def move_random():
    x = random.randint(-280, 280)
    y = random.randint(-180, 180)

    steps = 40
    start_x, start_y = bob.position()
    dx = (x - start_x) / steps
    dy = (y - start_y) / steps

    for i in range(steps):
        bob.goto(start_x + dx * i, start_y + dy * i)
        win.update()
        time.sleep(0.02)
    bob.goto(x, y)

def talking_loop():
    while True:
        say_random()
        time.sleep(8)  # uncle bob’s chill talk delay

def walking_loop():
    while True:
        move_random()
        time.sleep(1)

talk_thread = threading.Thread(target=talking_loop, daemon=True)
walk_thread = threading.Thread(target=walking_loop, daemon=True)
talk_thread.start()
walk_thread.start()

try:
    turtle.mainloop()
except turtle.Terminator:
    print("ok he good")
