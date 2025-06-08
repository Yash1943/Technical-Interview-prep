#write the program to convert an infix expression to postfix expression
# Function to return precedence of operators
def precedence(op):
    if op == '+' or op == '-':
        return 1
    if op == '*' or op == '/':
        return 2
    if op == '^':
        return 3
    return 0

# Function to perform infix to postfix conversion
def infix_to_postfix(expression):
    stack = []  # Stack to hold operators
    output = []  # List for the output expression
    
    for char in expression:
        # If the character is an operand, add it to the output
        if char.isalnum():
            output.append(char)
        
        # If the character is '(', push it to the stack
        elif char == '(':
            stack.append(char)
        
        # If the character is ')', pop and output from the stack until '(' is found
        elif char == ')':
            while stack and stack[-1] != '(':
                output.append(stack.pop())
            stack.pop()
        
        # An operator is encountered
        else:
            while stack and precedence(stack[-1]) >= precedence(char):
                output.append(stack.pop())
            stack.append(char)
    
    # Pop all the operators from the stack
    while stack:
        output.append(stack.pop())
    
    return ''.join(output)

# Example usage:
expression = "a+b*(c^d-e)^(f+g*h)-i"
postfix_expression = infix_to_postfix(expression)
print("Infix Expression:", expression)
print("Postfix Expression:", postfix_expression)
