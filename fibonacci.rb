# Method to return nth value of fibonnacci sequence.
# Storing just the last two values as variables. Could alternately use an array.

def fib (n)
    # return appropriate starter values if n is 0 or 1
    if n == 0 
        return 0
    elsif n == 1
        return 1
    end
    # set up initial constants
    prevNum = 0
    currNum = 1
    # Loop through fibonacci numbers, starting at index 2.
    2.upto(n) do
        nextNum = prevNum + currNum
        prevNum = currNum
        currNum = nextNum
    end
    return currNum
end