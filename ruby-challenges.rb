# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN



# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudocode
    # Create method (words_and_letter) that takes in an array and string as its parameters.
    # Perform higher order function .select upon the array, and provide parameter i (index).
    # We want to select indexes, or elements, from the array that include the desired string.
    # End of .select method.
    # End of words_and_letter method.

def words_and_letter(arr, str)
    arr.select do |i|
        i.include?(str)
    end
end

p words_and_letter(beverages_array, letter_o)   # ["coffee", "soda water"]
p words_and_letter(beverages_array, letter_t)   # ["tea", "water", "soda water"]



# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = {
    northwest: ['Washington', 'Oregon', 'Idaho'],
    southwest: ['California', 'Arizona', 'Nevada'],
    northeast: ['Maine', 'New Hampshire', 'Rhode Island']
}
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington']

# Pseudocode
    # Create method (combine) that takes in a hash as its parameter.
    # Calling .values on the hash extracts from the hash only its values (from key:value pairs). Calling .flatten breaks down the inner arrays so that everything resides in one array, and .sort alphabetizes them.

def combine hash
    hash.values.flatten.sort
end

p combine(us_states)
# ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]
# why did this take me an hour and a half to figure out :')



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

#Pseudocode
    # Create class (Bike1) with class keyword.
    # Create initialize method that takes in parameter of model. We also initialize wheels and current_speed, but do not provide parameter placeholders for those values since they are assigned default values.
    # Create bike_info method that returns a string that gets interpolated into it, the values of model, wheels, and current_speed and returns it in a cohesive sentence.
    # End all methods (3).
    # Create new instance of Bike1 class by appending Bike1 with the new keyword, and providing an argument for the model parameter. Save it to 'retrospec'.

class Bike1

    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

end

retrospec = Bike1.new('Retrospec')
p retrospec.bike_info
# "The Retrospec bike has 2 wheels and is going 0 mph."



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudocode
    # Copy and paste the class creation from above, but now we need to add a few things.
    # Create pedal_faster method that takes in a num parameter. Within the block, we add num to the current_speed.
    # Create brake method that takes in a num parameter. The block needs to contain a conditional that says if the amount we're braking by is greater than the current_speed, then we just assign current_speed to 0 (cannot brake more than the current_speed and enter a negative speed, don't break physics please!). Else, we can just subtract num from current_speed.
    # Create accessor method for model (not necessary for this problem, but just to make the class more complete and proper). Create reader method for the current_speed, so that the user may choose to access it later on.
    # Create new instance of Bike2 class and provide an argument for the model parameter.
    # Showcasing that the class works properly, call the .pedal_faster method. Call the .brake method on it twice, once to show that it decreased current_speed as intended, and second to show that braking by more than current_speed just brings you to a stop (0).

class Bike2

    attr_accessor :model
    attr_reader :current_speed

    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster num
        @current_speed += num
    end

    def brake num
        if @current_speed <= num
            @current_speed = 0
        else
            @current_speed -= num
        end
    end

end

retrospec = Bike2.new('Retrospec')
p retrospec.pedal_faster(25)   # 25
p retrospec.brake(15)   # 10
p retrospec.brake(15)   # 0 (note, this stops at 0 rather than going into a negative value)