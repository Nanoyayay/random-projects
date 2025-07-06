# this is a simple calculator that can perform basic arithmetic operations.
# i got bored some random sunday and decided to make this.
# it can add, subtract, multiply, and divide numbers.
# it uses the eval function to evaluate the expression entered by the user.
# so be careful with what you enter, as it can execute any valid Python expression.
# and, please do not delete system32 or dev/sda or anything like that.
# it will destroy your computer.
# you may of expected that.
# if you are even able to exit the calculator and get into actual python.
# please. do not. i will not give you a new os and a hug.
print("----------------------------------------------------------------------------------")
print("Coded by Nanoyayay on github.com - Do not distribute")
print("----------------------------------------------------------------------------------")
def calculator():
    print("Welcome to the random calculator!")
    print("You can add, subtract, multiply, and divide numbers.")
    print("Type 'exit' to quit the calculator.")
    
    while True:
        try:
            expression = input("Enter your calculation: ")
            if expression.lower() == 'exit':
                print("Exiting the calculator. Goodbye!")
                break
            result = eval(expression)
            print(f"Result: {result}")
        except Exception as e:
            print(f"Error: {e}. Please try again.")
if __name__ == "__main__":
    calculator()                                                                                                         
