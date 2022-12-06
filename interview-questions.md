# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.
First, without external resources. Challenge yourself to answer from memory.
Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.



1. What does calling super do in a class?

Your answer: Calling super on a class allows that class to access the properties of the 'parent' class that was called upon by 'super'. It has access to the same methods of the parent class, but still needs to be specified within the initialize method of the child class, and this is done with the 'super' keyword.

Researched answer: As mentioned before, yes you need to call super within the initialize method of the child class. But also, super goes in tandem with the declaration of the child class. The parent class must be mentioned, and the syntax looks as below. 

class ChildClass < ParentClass
end



2. What is a gem?

Your answer: Gem is a Ruby library that allows for users to perform tests with their code to ensure that it runs properly and as intended. Going on a limb here I hope I'm right but when we say Gem is a Ruby library, that means that it is a collection of files created by developers worldwide, and this library runs behind the scenes to allow the testing to happen in the first place. It's the code that lets the testing happen, the code behind the code.

Researched answer: In addition to my answer prior, it should be noted that gems are managed with RubyGems, a package manager (would you have guessed). Gems also allow for code to be shared between developers from anywhere. Gems to Ruby is comparable to Yarn with JavaScript.



3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is an organized database containing data on the entirety of one particular subject, like the countries database that these laptops came installed with. I'm not sure if it comes in other forms, but I know that it at least can come in table format, with rows dictating single entries (the countries) and the columns dictating different points of data for those entries (country population, country surface area, etc.).

Researched answer: Oh yes, relational databases do indeed come in table format (excel but better). Another point to mention though, is the schema, which is the term defining every table and defining point (column headers) within that specific database.



4. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifiers in relational databases that ensures that every single entry has at least one distinct characteristic about it. So for example, if two identical entries are put down, everything would be the same except for their primary keys. Typically, those primary keys will look like a random jumble of letters and/or numbers, kind of like car license plates.

Researched answer: Additionally, primary keys can be defined as being either explicit or general. Explicit primary keys refer to primary keys pertaining to one specific table, whereas general primary keys can span across different tables with the same properties (like column headers, table names, etc.).



5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Need to come back with a researched answer.

Researched answer: The primary HTTP verbs consist of post, get, put, patch, and delete, which correspond to the values of CRUD (create, read, update, and delete). Post corresponds to the create CRUD action, in which you 'post' a new element. Get = Read, can display the element. Put = Update, you can replace the content. Patch = Update (again), in which you can patch up the content, or replace pieces of content. Delete = Delete (wow), and you can remove content with this.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: A rails router is what handles a user request (the request they make is them inputting a certain URL to the browser in an attempt to reach a certain web page) so the user is directed where they need to go on the internet. REST is a syntaxical style utilized as default by Rails, and it allows for custom, or extra default routes to be created by the user.

2. Ruby on Rails: A method or way of creating web applications (in the same way REACT utilizes JavaScript/HTML/CSS, a.k.a programming languages to create apps). Ruby on Rails utilizes Ruby as its programming language and is based on a model-view-controller framework. This allows for default structure creation for applications.

3. Database migrations: This is the process of moving data across databases through web services. These migrations may serve to alter the structure of the databases being utilized or migrated through.

4. Params: Short for parameters (I hope I'm not misunderstanding this), but it's a method in itself rather than using parameters as placeholders for other variables as we've done so far. Params is a Rails method that returns an object that lets users send data to web applications.

5. ERB: A templating system for Ruby in which Ruby code can be added to documents to gather data.