class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.value = key

def height(node):
    # Base case: if the tree is empty
    if node is None:
        return -1  # Return -1 for the height of an empty tree
    
    # Recursively find the height of the left and right subtrees
    left_height = height(node.left)
    right_height = height(node.right)
    
    # Return the greater of the two heights plus one for the current node
    return max(left_height, right_height) + 1

# Example usage:
# Constructing the following binary tree
#         1
#        / \
#       2   3
#      / \
#     4   5

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("Height of the binary tree is:", height(root))
