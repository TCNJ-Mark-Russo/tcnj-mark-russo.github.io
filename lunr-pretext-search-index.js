var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " We gratefully acknowledge The College of New Jersey and the TCNJ Open Educational Resources Committee who supported the development of this book.  This book was built with PreTeXt .  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  This book was born from materials developed to teach many sections of the course CSC 220: Computational Problem Solving at The College of New Jersey . Rather than start with the Java compiler, this book introduces students to the interactive Java Shell named JShell with which we explore primitive types, basic objects, and expressions, interactively. We avoid starting with the magical  public static void main(String[] args) {… in favor of core topics such as types and memory. The Java compiler and runtime is deferred until .  This book also introduces the learning library for Java called DoodlePad . DoodlePad is an open-source, interactive object graphics library for Java which was developed expressly to teach computing in a fun and engaging context. The DoodlePad library provides introductory students with the ability to create Java AWT\/Swing applications and to render basic graphic objects without the need to master advanced Java concepts (like interface implementation and method overriding) required for using Swing and the AWT. DoodlePad works by bootstrapping the Swing intrastructure automatically, as necessary to create a graphics Window and to draw shapes. It also implements a pixel-prefect event dispatch system, which allows introductory students to interact with shapes using the mouse. The event system uses methods references , introduced Java 8, to assign student-authored methods as individual event handlers.  Note that JShell and DoodlePad may be used together. For example, the following interactive JShell session containing three lines is all that is necessary for the student to create their first Java AWT\/Swing Program with an interactive Oval displayed. This gives students the ability to get running very quickly, on the first day. It builds confidence and dispels the real fear felt by so many introductory programming students entering a Java class for the first time.   jshell>  \/env -c doodlepad.jar  jshell>  import doodlepad.*;  jshell>  new Oval()   DoodlePad was designed conservatively. All user-initiated graphics commands are first checked to see if they are being invoked on a thread different than the main AWT event-dispatching thread. If so, it uses SwingUtils.invokeLater() to invoke the user-initiated command to ensure that the command is added to the AWT event-dispatching thread. This makes it possible for student programs to interact with Swing programs seamlessly. It also makes the interactive nature of invoking graphics programs from JShell work without a hitch. While crossing thread boundaries does incur a performance penalty, it shelters introductory students from the complexities of cross-thread programming and achieves one of the libraries main goals, which is for a program to \"just work.\"  An advantage of self-publishing a book online is that corrections, clarifications, and additions may be made immediately. There is no need to wait for the next edition. If you find any problems with this book, or would like to make suggestions, please send an email to: russom@tcnj.edu .  Enjoy!  "
},
{
  "id": "section-gs-learning",
  "level": "1",
  "url": "section-gs-learning.html",
  "type": "Section",
  "number": "1.1",
  "title": "Learning to Program",
  "body": " Learning to Program  Why learn to program a computer? Blikstein and Moghadam list four rationales for why we all should learn to program a computer.    The labor market rationale  Computer Science knowledge is useful not only for CS professionals but also for a variety of twenty-first century non-technical careers. A basic understanding of computers and how they work is an essential skill for being successful in the labor market.    The computational thinking rationale  The way a computer scientist thinks, problem-solving strategies and heuristics, is universally important and transfers to a variety of knowledge domains and everyday problems. Learning how to apply these unique strategies will give you a skill that can be applied broadly.    The computational literacy rationale  Computational literacy is a set of material, cognitive and social elements that generate new ways of thinking and learning. This new literacy is necessary for full and meaningful participation in society.  In contrast, by not having this basic literacy you run the risk of being left out of some of what might become the most important and impactful societal conversations.    The equity of participation rationale  Computer Science knowledge is required for civic participation, lucrative employment, and for understanding the impact of computing on society.  Equity of participation in computing education is necessary for future success. An opportunity to gain this basic knowledge should be a right extended to us all.    There is a fifth reason to learn how to program, it can be fun ! Some readers may be skeptical about this claim. I urge you to press on. There is nothing more satisfying than seeing the first window pop up on your computer display containing interactive shapes and other widgets that you created yourself.  In this book we introduce the OOP ( OOP ) style using the Java programming language. Java is one of the most popular and mature programming languages in use. Unlike some of the other popular programming languages, Java was designed from the outset to follow the object oriented style. Consequently, you will find Java being used to build large and powerful software applications that benefit from the power and safety of the object oriented programming style.  "
},
{
  "id": "p-12",
  "level": "2",
  "url": "section-gs-learning.html#p-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The labor market rationale "
},
{
  "id": "p-14",
  "level": "2",
  "url": "section-gs-learning.html#p-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The computational thinking rationale "
},
{
  "id": "p-16",
  "level": "2",
  "url": "section-gs-learning.html#p-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The computational literacy rationale "
},
{
  "id": "p-19",
  "level": "2",
  "url": "section-gs-learning.html#p-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The equity of participation rationale "
},
{
  "id": "p-22",
  "level": "2",
  "url": "section-gs-learning.html#p-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fun "
},
{
  "id": "section-gs-computers",
  "level": "1",
  "url": "section-gs-computers.html",
  "type": "Section",
  "number": "1.2",
  "title": "Computational Devices",
  "body": " Computational Devices  Computers and computational devices are electronic machines designed to process and manipulate data, perform calculations, and execute instructions to solve problems or perform specific tasks. They are the foundation of modern technology and play a crucial role in various aspects of our lives, from personal communications to complex weather predictions. Computational devices come in many shapes and sizes. They range from small microprocessors found in your smart thermostat to very large multiprocessor systems that execute computations at ever-increasing speeds. All computational devices have similar characteristics and are made up of the same or similar key components.   Hardware : Computers consist of physical components that perform the actual computations. The hardware includes the central processing unit (CPU), which serves as the \"brain\" of the computer and executes instructions. Other important hardware components include memory (RAM), storage devices (hard drives, solid-state drives), input devices (keyboard, mouse), output devices (monitor, printer), and various peripheral devices (USB devices, network cards, etc.).  Software : Software refers to the programs and instructions that tell the hardware what to do. It includes operating systems (such as Windows, macOS, or Linux) that manage the computer's resources, as well as application software that performs specific tasks or provides services. Software is typically written in programming languages and compiled or interpreted into machine code that the hardware can understand and execute.  Data Representation : Computers use binary representation, which means they store and manipulate data in the form of binary digits (bits). Binary digits are either 0 or 1, and they can represent various types of information, such as numbers, text, images, and sound. Higher-level abstractions are used to interpret and manipulate data, allowing for complex operations and computations.  Processing and Execution : Computers perform computations by executing instructions sequentially. These instructions are represented in machine code, which is a low-level language that the CPU can directly understand and execute. The CPU fetches instructions from memory, decodes them, and performs the necessary calculations or operations. The results are then stored back in memory or sent to output devices.  Input and Output : Computers interact with users and the external world through input and output devices. Input devices, like keyboards and mice, allow users to provide data and instructions to the computer. Output devices, such as monitors and printers, display or present the results of computations or provide information to users. Other input and output devices include scanners, microphones, speakers, and various sensors used in embedded systems.  Connectivity and Networking : Computers can be connected to networks, allowing them to communicate and share data with other devices. This enables tasks like accessing the internet, transferring files, sharing resources, and remote collaboration. Networking protocols and technologies, such as Ethernet and Wi-Fi, facilitate data exchange between computers and other devices.   It is worth taking a moment to understand what is meant by binary data representation . If you could look at computer memory and see the data stored, you'd see that all memory locations can store only two states. Depending upon the kind of memory, these two state are represented in different ways: charged or neutral, a local magnetic field pointing up or down, reflective or dispersive of a laser, conductive or not. We represent these two states as 0 and 1, and call them bits . Also, we always consider bits in groups of 8, called bytes. One byte is composed of eight ordered bits.  We can translate a byte into a base 10 number by defining each bit as contributing a value equal to a power of 2 to a final sum. To compute a base 10 number from a byte, we find all its bits with a value of 1 and add up the corresponding powers of 2. For example, the rightmost bit in a byte is assigned to the value . If the rightmost bit in a byte is 1 (i.e. 00000001 ), than we add to a total sum, and so the byte 00000001 encodes the base 10 number 1. If the bit is 0, we skip it when forming the final base 10 value. If both the first and second bits from the right in a byte are set to 1 (i.e. 00000011 ) then the encoded base 10 value of the byte 00000011 is , and so on.  Use the interactive widget below to check your understanding. The widget illustrates the bits from two sequential bytes, where the byte on the left encodes even larger powers of 2. Click each bit to toggle its value and watch how the encoded base 10 number changes. Make sure you understand how the bits of a byte form a base 10 number.   Interactively build base 10 integers from bits    Here are a few challenges and additional things to consider.   What is the binary representation for the decimal number 255?  Can you encode all the base 10 numbers 0, 1, through 10 in binary?  Do you see a pattern in the way bits are flipped as you count up?  What is the maximum base 10 number that can be represented by the bits of one byte?  How might we represent negative numbers?   Computers and computational devices have revolutionized the way we work, communicate, learn, and entertain ourselves. They have become an integral part of industries such as finance, healthcare, transportation, and entertainment, driving innovation and transforming society as a whole. Understanding what they can, and what they cannot do, is critical to being a knowledgeable and productive participant in society. Furthermore, understanding how programming languages work is our way in to the world of computational devices.  "
},
{
  "id": "gs-fig-binary",
  "level": "2",
  "url": "section-gs-computers.html#gs-fig-binary",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Interactively build base 10 integers from bits   "
},
{
  "id": "section-gs-languages",
  "level": "1",
  "url": "section-gs-languages.html",
  "type": "Section",
  "number": "1.3",
  "title": "Programming Languages",
  "body": " Programming Languages  Programming languages are formal languages that allow programmers to write instructions or code to communicate with computers and create software applications. They serve as a means of instructing the computer to perform specific tasks or calculations. Each programming language has its own syntax and set of rules that dictate how code is written and interpreted. In fact, learning a programming language is not dissimilar to learning a foreign spoken language. There are rules that must be followed in order to speak any language correctly, and this goes for progamming languages as well. What is different is the interpretation. Unlike a human who interprets a spoken language, a programming language is read by a computer, which is very strict about the use of proper grammar and syntax. Fortunately, the computer programs that read the programs we write will tell us when we make a mistake. This gives us the the opportunity to learn and try again.  In this book we will study the Java programming language, one of the most popular object oriented programming languages, especially for writing large software systems.  Programming languages can be classified by type, including low-level languages , high-level languages , and scripting languages . Low-level languages, such as assembly language , execute closer to machine code and provide direct control over hardware resources. High-level languages, like C++ and Java, offer more abstraction and are designed to be more user-friendly and easier for humans to create. They provide built-in features and libraries that simplify complex tasks.  Executing code written in a high-level programming language is usually (but not always) a two-step process. First a program is translated from its high-level syntax files to a low-level syntax file. Once this translation is successful, the low-level program file is executed by the computer's hardware. You will perform this translation using a special helper program called the compiler . Depending upon the programming language, this compiled program may be run directly, or it may require other helper programs called a runtime engine and a virtual environment . Learning the toolkit that comes with a programming language is part of learning how to program in the language itself.   Scripting language s, such as JavaScript and PHP , are often used for small tasks and web development, and are compiled or interpreted at runtime rather than compiled ahead-of-time. These languages are typically used to write small programs that automate tasks or enhance web pages.  Programming languages may also be categorized based on their purpose or application domain. For example, there are languages specifically designed for web development (e.g., HTML, CSS, JavaScript), preferred for data science (e.g., R, Python), and better for mobile app development (e.g., Swift, Kotlin).  Each programming language has its strengths and weaknesses, and the choice of language depends on factors like project requirements, project size, performance needs, available libraries, and personal preference of the developer.  "
},
{
  "id": "section-gs-oop",
  "level": "1",
  "url": "section-gs-oop.html",
  "type": "Section",
  "number": "1.4",
  "title": "Object Oriented Programming",
  "body": " Object Oriented Programming   Object-oriented programming (OOP) is a programming paradigm centered around the idea of organizing and structuring a program as software objects that encapsulate data and behavior . In a way, these object are models of discrete elements that work together as part of a larger system designed to solve a particular problem.   Imagine that you have been called upon to write a program that manages the items in a brick-and-mortar library. Among other things, the job of a library is to maintain, track, and lend items from its collection, including books, reference materials, digital recordings, and more. It must also track who has permission to borrow items from the library. Stop and think for a moment about what might be the software objects associated that would make up a library management system?     There are several physical items that we can identify right away. For example, a Book, a DVD, a Borrower, or even a Bookshelf, might be items that your library management software system might need to model and manage. A Book object may be described by several data items, including a title, authors, publication date, a Dewey Decimal identifier, library storage location, and whether or not it is currently checked out or available for circulation. Each of these data items are properties of a Book object and, in accordinate with the the principles of object oriented programming, should be encapsulated within the Book software object. The same arguments may be made for other library system objects, such as DVD, Borrower, and Bookshelf.  It is not necessary for objects to be physical. For example, a book Collection might itself be an object. A book Collection might have encapsulated properties such as the number of Book objects it contains, the name of the building to which the Collection belongs, who is responsible for the collection, and of course the Book objects themselves. A book Collection object may be able to do things, such as add a Book object to or remove a Book object from its collection and iterate over the collection, returning one Book object at a time.  Another example of an object might be the relationship between a Book object and a Borrower object. A Book may have had many Borrowers and a Borrower may be borrowing many Books. Rather than choose to encapsulate a list of Books in a Borrower or a list of Borrows in a Book, you might want an object that captures that relationship between a book and a borrower. We might encapsulate the properties of this relationship in a Circulate object. A Circulate object might have one reference to a Book, one to a Borrower, a date that the Book was lent, a date that the Book is due to be returned to the Library, and whether or not it is overdue.   Because we can define many types of objects (e.g. Book vs. Borrower), and there may be many instances of each kind, we must have a unique template for creating each type. In object oriented programming this template is called a class . Classes serve as blueprints for creating new objects. They define the data that each object instance can hold (e.g. title and author) as well as what it can do (e.g. add or remove a Book). We will learn how to do this ourselves in the chapter .     One of the real benefits of object oriented programming is abstraction . When I drive a car, I don't need to know all the underlying technical details about how the car is able to move. I know that if I press the start button in my electric vehicle, then engine turns on. I know if I put the car in gear and press the accelerator pedal, the car moves. There is quite a lot of engineering that makes this possible, but I don't need to know all the details.   From my perspective as a driver, I need only understand how to make the car move, turn, and stop. The details of how the car works have been abstracted away, making it possible for me to operate a car with a minimal amount of knowledge and skill. This is power of abstraction.  Let's think again about our library Collection object. A Collection knows how to add a reference to a Book object so the Book is considered to be in the Collection. How does this work? What is involved with actually putting a Book object into a Collection object? If you are adding this behavior to the Collection class, then you'll need to know the details. But if you are only using the behavior, then you can ignore the details and just invoke the behavior when you need it, very similar to driving a car. You can just ask your Collection object to add a Book object to itself. The details don't matter (assuming you trust the author). They have been abstracted away . As we'll learn, most modern programming languages come with prewritten and tested software libraries that we can use to write our programs. It is not necessary for us to learn the underlying details about how each works, only how to use them. The detail has been abstracted away and encapsulated by libraries of classes that we can use. Nice!  One more benefit of object oriented programning is inheritance . In most object oriented programming languages it is possible to relate classes to one another in a hierarchical fashion. For example, a Book class and a DVD class might both be related to a more general class called CirculationItem , which encapsualtes all the common properties and behavior shared by all items in a library that circulate. A Book object has its unique properties, like number of pages, and a DVD object has its unique properties, such as run duration, but both have properties like Decimal Dewey number or storage location. Rather than duplicate these common properties in each class, we can add them to the more general CirculationItem class, and then relate both Book and DVD to CirculationItem through inheritance . The inheritance relationship provides both Book and DVD with access to the properties and behaviors in the more general CirculationItem class. As programmers, this allows us to author these common properties and behaviors once, in CirculationItem, but give all inheriting classes access to the same properties and behaviors. Updating the behaviors in CirculationItem automatically shares these updates with both Book and DVD. When used correctly, inheritance can be very powerful.  From an object oriented programming standpoint, both Book and DVD are two kinds of CirculationItem. In that sense, Book and DVD are different forms of CirculationItem, and so it is possible to treat both as if they were CirculationItem classes. This is one way that object oriented programming supports another concept called polymorphism (many forms). We'll learn more about inheritance in and the many forms of polymorphism in object oriented programming throughout the remainder of this book.   The CirculationItem inheritance hierarchy    Taken together, the key principles of object-oriented programming are:  Encapsulation : Encapsulation refers to the bundling of data and related behavior (methods or functions) into a single unit called an object. The data, also known as attributes, fields, or properties, tend be accessed and modified by the methods defined in the class. Encapsulation helps in organizing code, as the internal workings of an object are hidden from the outside, and it also provides data protection and security.  Inheritance : Inheritance allows the creation of new classes based on existing classes, inheriting their attributes and behaviors. The existing class is called the \"parent class\", \"base class\", or \"superclass\", and the new class is called the \"child class\",\"derived class\", or \"subclass\". The child class may extend or modify the behavior of the parent class by adding new methods or overriding existing ones. Inheritance promotes code reuse and supports the concept of hierarchical relationships between classes.  Polymorphism : Polymorphism means that objects of different classes can be treated as objects of a common superclass. It allows you to write code that can work with objects of different types (classes), as long as they share a common interface or base class. Polymorphism enables more flexible and extensible code, as it allows for method overriding and method overloading . Method overriding means that a subclass can provide its own implementation of a method defined in the superclass, while method overloading allows multiple methods with the same name but different parameters to coexist in a class.  Abstraction : Abstraction focuses on capturing the essential features and behaviors of an object while hiding unnecessary details. It allows you to create abstract classes or interfaces that define a set of methods without specifying their implementation. Concrete classes , which inherit from abstract classes or implement interfaces, provide the implementation details. Abstraction helps in designing complex systems by breaking them down into manageable and modular components.    By applying these principles, object oriented programming promotes modular, reusable, and maintainable code. It allows you to model real-world entities or concepts as objects, which interact with each other to solve problems or simulate systems. OOP languages, such as Java, C++, and Python, provide constructs to support these principles and enable the creation of object oriented systems.  Don't worry if these concept seem vague or confusing. They will become more clear as we explore examples of how each is implemented in Java and explain their benefits.  "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "section-gs-oop.html#figure-2",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " The CirculationItem inheritance hierarchy   "
},
{
  "id": "p-52",
  "level": "2",
  "url": "section-gs-oop.html#p-52",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Encapsulation Inheritance Polymorphism Abstraction "
},
{
  "id": "section-gs-java",
  "level": "1",
  "url": "section-gs-java.html",
  "type": "Section",
  "number": "1.5",
  "title": "The Java Programming Language",
  "body": " The Java Programming Language    The Java programming language was created by James Gosling and his team at Sun Microsystems in the mid-1990s (now owned by Oracle Corporation). The development of Java began in 1991 as a project called \"Oak\" and was initially intended for use in consumer electronics devices.      However, as time progressed, Java's focus shifted towards more general-purpose software development and it became widely known for its ability to create platform-independent applications.  The features of Java include the following.  Simple and Object-Oriented : Java was designed to be a simple and easy-to-learn language. It follows the principles of object oriented programming and provides features such as classes, objects, inheritance, and polymorphism. This makes it suitable for building modular and reusable code.  Platform-Independence : One of the key features of Java is its \"write once, run anywhere\" capability. Java programs are compiled into bytecode, which can run on any system with a Java Virtual Machine (JVM). Once the JVM is ported to run on a computational device, programs written in Java, or one of the JVM family of languages, will run on the device. This allows Java applications to be executed on different platforms without the need for recompilation, making it highly portable.  Robust and Secure : Java was built with a strong emphasis on reliability and security. It includes features like automatic memory management (garbage collection), exception handling, and runtime type checking, which help in writing robust and error-free code. Additionally, Java has a security model that prevents unauthorized access to resources and protects against malicious code execution.  Rich Core Library : Java comes with a vast and comprehensive core library that provides a wide range of pre-built classes and application programming interfaces (APIs) for common tasks. The core library includes packages for networking, input\/output (I\/O), data structures, graphical user interfaces (GUIs), and much more. This extensive library reduces the need to write code from scratch and accelerates development.  Multi-threading : Java has built-in support for multi-threading, which enables the concurrent execution of multiple tasks at the same time on a single processor. Multi-threading enables developers to create efficient and responsive applications. However, proper synchronization mechanisms need to be employed to ensure the safety of threads.  Garbage Collection : Java's automatic garbage collection feature relieves developers from manually managing memory allocation and deallocation. The garbage collector automatically detects and removes unreferenced objects, freeing up memory and reducing the chances of memory leaks and crashes.  Community and Ecosystem : Java has a vast and active developer community, which has contributed to the growth of numerous open-source libraries, frameworks, and tools. This vibrant ecosystem makes it easier for developers to leverage existing solutions and accelerates software development.    Over the years, Java has evolved through various versions, introducing new features and enhancements with each release. The language is used etensively in enterprise software development, web applications, mobile development (Android), scientific research, and more. Java's versatility, performance, and wide adoption have made it one of the most popular programming languages in the world.  Java is packaged in editions that include a different set of tools tailored for specific purposes and platforms. Java editions include the following.  Java Standard Edition (Java SE). Java SE is the core edition of Java and serves as the foundation for developing general-purpose applications. It provides a robust set of libraries, APIs, and tools for creating desktop, web, and server applications. Java SE includes the Java Development Kit (JDK), which has the necessary tools and resources for Java development.  Java Enterprise Edition (Java EE). Java EE, now known as Jakarta EE, is an extension of Java SE specifically designed for developing enterprise-level applications. It provides an enterprise application framework with additional libraries, APIs, and services to facilitate the development of large-scale, distributed, and scalable applications. Java EE includes features such as web services, messaging, security, and JavaServer Pages (JSP).  Java Micro Edition (Java ME). Java ME is a scaled-down version of Java designed for resource-constrained devices such as mobile phones, embedded systems, and other small devices. It provides a runtime environment and a set of APIs optimized for these devices, enabling developers to create mobile applications and embedded systems with limited resources.  Other Java Editions. In addition to the main editions mentioned above, there are other specialized editions of Java, including Java Card (for running Java applications on smart cards), JavaFX (for building rich client applications with a modern user interface), and Java Embedded (for developing applications for embedded systems and IoT devices).  It's worth repeating that Java SE forms the foundation of the other editions, and many developers primarily work with Java SE while leveraging specific features or APIs from other editions as needed. We use the Java SE edition throughout this book.  "
},
{
  "id": "p-58",
  "level": "2",
  "url": "section-gs-java.html#p-58",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simple and Object-Oriented Platform-Independence Java Virtual Machine Robust and Secure Rich Core Library Multi-threading Garbage Collection Community and Ecosystem "
},
{
  "id": "p-61",
  "level": "2",
  "url": "section-gs-java.html#p-61",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Java Standard Edition (Java SE). "
},
{
  "id": "p-62",
  "level": "2",
  "url": "section-gs-java.html#p-62",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Java Enterprise Edition (Java EE). "
},
{
  "id": "p-63",
  "level": "2",
  "url": "section-gs-java.html#p-63",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Java Micro Edition (Java ME). "
},
{
  "id": "p-64",
  "level": "2",
  "url": "section-gs-java.html#p-64",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Other Java Editions. "
},
{
  "id": "section-gs-toolkit",
  "level": "1",
  "url": "section-gs-toolkit.html",
  "type": "Section",
  "number": "1.6",
  "title": "The Java Development Kit",
  "body": " The Java Development Kit  The Java Development Kit (JDK) is a software development kit that allows developers to create, compile, and run Java applications. It includes tools, libraries, and documentation necessary for Java development. The JDK is available for multiple platforms, including Windows, macOS, and Linux.  The key components and features of the Java Development Kit include the following.  Java Compiler (javac) for compiling source code into bytecode.  Java Virtual Machine (JVM) which is responsible for executing Java bytecode.  Java Runtime Environment (JRE) which contains the JVM and essential class libraries required to run Java applications.  The Java Shell (JShell) is a Read-Evaluate-Print Loop (REPL) application that runs in a terminal. It evaluates entered declarations, statements, and expressions immediately and prints results.  Other Java Development Tools including the Java Debugger (jdb) and the Java Archive (JAR) tool .  Libraries and APIs , a large set of core class libraries and APIs that provide pre-built functionality for various tasks.  Development Documentation , a comprehensive set of documentation that describes all of the above.    One item worth highlighting is the platform-independence of the Java Virtual Machine (see ). The JVM plays a fundamental role in achieving Java's \"write once, run anywhere\" capability. Since the JVM executes bytecode, which is a platform-neutral format, Java programs can be executed on any system that has a compatible platform-specific JVM. This makes Java programs highly portable and eliminates the need to recompile the code for different operating systems or architectures.   Java programs are platform-independent. The JVM is not.    Another item worth expanding upon is the JShell REPL. JShell provides a lightweight and interactive way to explore and experiment with Java code. It is particularly useful for learning the Java language, prototyping, and debugging small code snippets. It offers a flexible and dynamic environment for interactive Java development without the need to set up a complete project structure or compile and run separate Java files. JShell tracks history and stores past results. It also acts as an interactive help tool.  In verbose mode JShell not only produces the output from evaluating Java, but it also prints the type of the result -- something that we will be using extensively in the next chapter.  Overall, the Java Development Kit is an essential tool for Java developers, providing everything needed to create, compile, and run Java applications. It offers a rich set of development tools, libraries, and documentation, enabling developers to build robust and platform-independent Java software.  "
},
{
  "id": "p-66",
  "level": "2",
  "url": "section-gs-toolkit.html#p-66",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Java Compiler (javac) Java Virtual Machine (JVM) Java Runtime Environment (JRE) Java Shell (JShell) Java Debugger (jdb) Java Archive (JAR) tool Libraries and APIs Development Documentation "
},
{
  "id": "gs-java-platform-independence",
  "level": "2",
  "url": "section-gs-toolkit.html#gs-java-platform-independence",
  "type": "Figure",
  "number": "1.6.1",
  "title": "",
  "body": " Java programs are platform-independent. The JVM is not.   "
},
{
  "id": "section-gs-install",
  "level": "1",
  "url": "section-gs-install.html",
  "type": "Section",
  "number": "1.7",
  "title": "Installing Your Toolkit",
  "body": " Installing Your Toolkit  To get the most from this book you must install  a recent version of the Java JDK, and  a good programmer's editor  There are no-cost and paid options for both of these tools. We will focus on the no-cost options. Typically, paid options include a better experience and support. Note that these tools change quickly, and so the information in this section may be out of date. Use your best judgement to acquire or get access to the tools you need.   Install the Java Development Kit (JDK)  As we discussed in , to develop Java programs, you must install or have available the Java Development Kit (JDK). Only the JDK includes necessary tools, including the Java compiler ( javac ).  JDK installers are specific to the operating system of your computer. As we've described, the JVM executes Java bytecode in a platform-independent manner. That is possible because there is a different JVM for each platform which runs Java bytecode by translating bytecode to native platform instructions.  To download an installer, visit Adoptium with a browser from the computer you plan to use for Java development. You will be offered the option to download a matching installer for OpenJDK, an open-source implementation of the Java Platform, Standard Edition. Download and run the installer. Follow the instructions for your particular operating system to install the JDK.  JDK tools like javac are executed using programs like a terminal or command prompt program. Every operating system provides one or more terminal programs with a shell for executing commands, and they differ in subtle ways. Typically, these programs start as black boxes that accept text commands and usually output results as text as well. Terminal programs may run a shell , which provides more sophisticated capabilities for running commands and interacting with the underlying operating system. The shell you choose also can impact the commands you may use. While we cannot cover the details of every terminal and every shell, we will point out common pitfalls for popular options.  One pitfall often experienced after a new installation is the inability to access JDK commands from the shell. For example, assume the JDK installs successfully, the new user opens and terminal running a shell, and proceeds to test the new installation by entering the command java -version , which should print the version of Java that is installed. Instead, the command is not found and an error is printed. Frustrating!  If the JDK is indeed installed successfully, the program is almost always automatically associated with the directory paths that a shell searches to find an entered command program. Only if the command program can be found at one of those predetermined paths will the command be executed. These search paths are stored in an operating system environment variable, frequently named PATH . For example, on Windows you can search for and start the \"Environment Variables\" configuration program to inspect the PATH environment variable value and edit it to add a file system path to the bin subdirectory under the location of where the JDK is installed. It is the bin subdirectory where you'll find the JDK commands. If your systemm cannot find the java command after entering into a shell, check your environments search location paths.   Install a Programming Editor  A Java source code program is a \"plain text file.\" When a file is referred to as \"plain text\" the implication is that the file contains characters only, from the default character set of the file. You will find no formatting or other commands that set font family or font style, such as bold or italics. Character codes are the only data in the file. One important feature of a programming editor is that it edits and saves plain text files .  Another important feature of a good programming editor is knowledge of the programming language being edited. This gives the editor the ability to categorize and colorize the symbols and keywords in a given program file, and to format and indent the program's text automatically, using standard rules. Modern editors can do even more, such as detecting syntax errors or performing advanced context aware searching and editing of the file.  There are many good programming editors available for use. You may choose any editor known to be suitable for writing Java programs. If you do not have an editor installed or one that is preferred, the Visual Studio Code (VSCode) editor from Microsoft, is a good option. Note that the VS Code editor is different that the Visual Studio Integrated Development Environment (IDE), which is a much more full-featured environment. VSCode is a simple and freely available editor suitable for many programming languages. Visit the url https:\/\/code.visualstudio.com, download a suitable installer, and install it on your computer. Using a suitable editor will pay off quickly.  If you do choose to install VSCode, consider adding the Extension Pack for Java . Installing this extension pack will add functionality to the editor specific for the Java programming language.   "
},
{
  "id": "p-71",
  "level": "2",
  "url": "section-gs-install.html#p-71",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "javac "
},
{
  "id": "p-74",
  "level": "2",
  "url": "section-gs-install.html#p-74",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "javac "
},
{
  "id": "section-gs-jshell",
  "level": "1",
  "url": "section-gs-jshell.html",
  "type": "Section",
  "number": "1.8",
  "title": "The JShell REPL",
  "body": " The JShell REPL  JShell is an interactive commandline tool introduced in Java 9 as part of the Java Development Kit (JDK). As mentioned in , JShell provides a Read-Eval-Print Loop (REPL) environment for evaluating and executing Java code snippets interactively, and is an excellent tool to explore Java syntax while learning the language. JShell runs in a terminal on top of your standard terminal shell program.  Several key features and characteristics of JShell include the following.  Interactive Java Execution: JShell allows developers to enter Java code directly into the command-line interface and immediately see the results without the need for writing a complete Java program. It eliminates the need to compile and run a separate Java file.  Code Exploration and Experimentation: JShell enables developers to explore and experiment with Java features, APIs, and libraries in an interactive manner. They can quickly test code snippets, try out new language constructs, and experiment with different approaches before incorporating them into a full-fledged Java application.  Instant Feedback: As you enter code in JShell, it evaluates and executes each line immediately, providing instant feedback on the results. It displays the output, errors, and any generated exceptions right after each statement is executed.  Tab Completion: JShell provides tab completion functionality, allowing developers to easily explore available classes, methods, variables, and packages. By typing a partial name and pressing the tab key, JShell suggests and completes the remaining portion, helping reduce typing errors and providing a convenient way to discover available options.  Variable Retention: JShell remembers and retains previously defined variables and their values, allowing developers to refer to and use them in subsequent code snippets. This feature facilitates incremental development and experimentation, as you can build upon previously defined variables without redefining them.  Multiline Input: JShell supports multiline input, enabling the entry of code blocks or longer code snippets spread across multiple lines. This is useful for writing more complex Java statements, loops, or methods interactively.  To start JShell, first open a terminal and enter the command jshell . You will see the JShell prompt, similar to the following. At the JShell prompt you may enter any valid Java expression. We'll explore this more in .  >jshell | Welcome to JShell -- Version 17.0.6 | For an introduction type: \/help intro jshell> 2 + 2 $1 ==> 4 jshell>  To exit JShell enter the command \/exit .  While learning Java, it is useful to start JShell in verbose mode . To accomplish that, add the -v option to the initial jshell command, in other words enter jshell -v into the terminal. Once in verbose mode, the output from executing Java expressions is more verbose, including the output type.  >jshell -v | Welcome to JShell -- Version 17.0.6 | For an introduction type: \/help intro jshell> 2 + 2 $1 ==> 4 | created scratch variable $1 : int jshell>  JShell includes many additional commands, all of which begin with the forward slash, like \/exit (see below). We will explore several of these additional commands in .  jshell> \/help | Type a Java language expression, statement, or declaration. | Or type one of the following commands: | \/list [<name or id>|-all|-start] | list the source you have typed | \/edit <name or id> | edit a source entry | \/drop <name or id> | delete a source entry | \/save [-all|-history|-start] <file> | Save snippet source to a file | \/open <file> | open a file as source input | \/vars [<name or id>|-all|-start] | list the declared variables and their values | \/methods [<name or id>|-all|-start] | list the declared methods and their signatures | \/types [<name or id>|-all|-start] | list the type declarations | \/imports | list the imported items | \/exit [<integer-expression-snippet>] | exit the jshell tool | \/env [-class-path <path>] [-module-path <path>] [-add-modules <modules>] ... | view or change the evaluation context | \/reset [-class-path <path>] [-module-path <path>] [-add-modules <modules>]... | reset the jshell tool | \/reload [-restore] [-quiet] [-class-path <path>] [-module-path <path>]... | reset and replay relevant history -- current or previous (-restore) | \/history [-all] | history of what you have typed | \/help [<command>|<subject>] | get information about using the jshell tool | \/set editor|start|feedback|mode|prompt|truncation|format ... | set configuration information | \/? [<command>|<subject>] | get information about using the jshell tool | \/! | rerun last snippet -- see \/help rerun | \/<id> | rerun snippets by ID or ID range -- see \/help rerun | \/-<n> | rerun n-th previous snippet -- see \/help rerun  JShell is particularly helpful for learning Java, prototyping code, and exploring the language's features in an interactive manner.  "
},
{
  "id": "p-83",
  "level": "2",
  "url": "section-gs-jshell.html#p-83",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Interactive Java Execution: "
},
{
  "id": "p-84",
  "level": "2",
  "url": "section-gs-jshell.html#p-84",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Code Exploration and Experimentation: "
},
{
  "id": "p-85",
  "level": "2",
  "url": "section-gs-jshell.html#p-85",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Instant Feedback: "
},
{
  "id": "p-86",
  "level": "2",
  "url": "section-gs-jshell.html#p-86",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tab Completion: "
},
{
  "id": "p-87",
  "level": "2",
  "url": "section-gs-jshell.html#p-87",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Variable Retention: "
},
{
  "id": "p-88",
  "level": "2",
  "url": "section-gs-jshell.html#p-88",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Multiline Input: "
},
{
  "id": "section-gs-doodlepad",
  "level": "1",
  "url": "section-gs-doodlepad.html",
  "type": "Section",
  "number": "1.9",
  "title": "The DoodlePad Library",
  "body": " The DoodlePad Library  DoodlePad is an open source object oriented graphics library that is designed to help you learn Java in a fun and engaging manner. It automatically sets up the Java graphics environment for you, including graphic object management, rendering, double buffering and a diverse set of pixel-perfect, shape-specific events and event handling. DoodlePad is ideal for introductory computing education as students are free to focus on developing core programming skills while working with interactive computer graphics. DoodlePad is designed to help you get started quickly and to have a Java graphics program running in no time.  From a user's perspective, DoodlePad is nothing more than a zip archive file containing precompiled Java classes ready for use, and packaged as a Java Archive (JAR) file. No installation is required other than to download the doodlepad.jar file from the project's GitHub repository . You will find a direct link to the GitHub repository and the JAR file at the site https:\/\/doodlepad.org\/ .  While developing the DoodlePad library, care has been taken to ensure that the library works across process boundaries. This allows us to use DoodlePad interactively from tools like JShell. As a preview, below you'll find a JShell session that creates a default Oval object in a graphics window. The result of executing these commands will be similar to the Window that follows. After downloading the doodlepad.jar file and saving to your working folder, make sure to tell Java where to find the file using the \/env --class-path doodlepad.jar command, and to import all classes into JShell using the import doodlepad.*; command. Creating the new Oval object is as simple as executing the command new Oval(); .  This simple script demonstrates how DoodlePad allows a programmer to focus on writing their program, such as the creation of an Oval object, and not on details such as creating all the ancilliary AWT and Swing infrastructure, such as the JFrame and JPanel objects, as well as how to use a Graphics2D object, etc.  >jshell | Welcome to JShell -- Version 17.0.6 | For an introduction type: \/help intro jshell> \/env --class-path doodlepad.jar | Setting new options and restoring state. jshell> import doodlepad.*; jshell> new Oval() $2 ==> Oval x=61.94595675351811, y=130.01502432069648, width=100.0, height=100.0, layer=doodlepad.Layer@47ef968d jshell>   A DoodlePad Oval created from JShell     is a small gallery of random DoodlePad graphic objects. We will begin using DoodlePad library classes in    DoodlePad Gallery of Graphic Objects    "
},
{
  "id": "figure-gs-oval",
  "level": "2",
  "url": "section-gs-doodlepad.html#figure-gs-oval",
  "type": "Figure",
  "number": "1.9.1",
  "title": "",
  "body": " A DoodlePad Oval created from JShell   "
},
{
  "id": "figure-gs-doodlepad-gallery",
  "level": "2",
  "url": "section-gs-doodlepad.html#figure-gs-doodlepad-gallery",
  "type": "Figure",
  "number": "1.9.2",
  "title": "",
  "body": " DoodlePad Gallery of Graphic Objects   "
},
{
  "id": "section-gs-concepts",
  "level": "1",
  "url": "section-gs-concepts.html",
  "type": "Section",
  "number": "1.10",
  "title": "Key Concepts",
  "body": " Key Concepts   There are many programming styles and languages available for use. We focus on the object oriented programming style using the Java programming language.  Object oriented programming is a programming style based on software objects.  Encapsulation refers to the bundling of data and related behavior (methods or functions) into a single object.  Inheritance allows the creation of new classes based on existing classes, sharing their attributes and behaviors. Inheritance promotes code reuse and supports the concept of hierarchical relationships between classes.  Polymorphism means that objects of different classes can be treated as objects of a common inherited class. It allows you to write code that can work with objects of different types (classes), as long as they share a common interface or base class.  Abstraction focuses on capturing the essential features and behaviors of an object while hiding unnecessary details. Abstraction helps in designing complex systems by breaking them down into manageable and modular components.  The Java ecosystem is composed of several core components, including the JVM , JRE , JDK , and JShell .  The Java Virtual Machine  (JVM) is a platform independent utility responsible for executing compiled Java bytecode.  The Java Runtime Environment  (JRE) adds to the JVM a very large libary of prewritten classes used to within Java applications. The JRE is the minimum required to run Java programs.  The Java Development Kit  (JDK) adds to the JRE a suite of tools required to develop Java programs, including the Java compiler (javac).  The Java Shell  (JShell) is a tool for executing Java code snippets interactively.  The Java Core Library provides a large number of prewritten classes.  Other prewritten classes may be available from external libraries, often stored in JAR files.  JAR is an acronym for Java ARchive.  Low-level Language Execute closer to machine code and provide direct control over hardware resources.  High-level Language Offer more abstraction and are designed to be more user-friendly and easier for humans to create.  Scripting Language Often used for small tasks and web development, and are interpreted at runtime rather than compiled ahead-of-time.  Event-driven computer graphics is one of our learning contexts. We will create objects that we can see on our screen as shapes and interact with them using the mouse and keyboard.  DoodlePad is an open source Java interactive object graphics library we will use for developing fun and engaging Java programs. It was designed for teaching Java programming in an event-driven computer graphics context.  DoodlePad classes encapsulate shapes, render them in a graphics window, and respond to interaction using the mouse and keyboard.   "
},
{
  "id": "section-gs-exercises",
  "level": "1",
  "url": "section-gs-exercises.html",
  "type": "Section",
  "number": "1.11",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-pe-primitives",
  "level": "1",
  "url": "section-pe-primitives.html",
  "type": "Section",
  "number": "2.1",
  "title": "Primitive Data Types",
  "body": " Primitive Data Types  The foundation of any program is its data, which is created, manipulated, and stored using a computer. Unlike the numerical values that we might write on paper in a mathematics class, when using a computer we must also consider the type of numeric values because each must be stored in our computer's memory, and each has a different memory size requirement. It will be no surprise that the amount of memory used to store a particular type will increase with the range of values desired as well as how they are encoded in memory. For this reason Java offers multiple primitives types which you may choose to match the anticipated range of values required by your computation.  Following is a table of the eight Java primitive types. Study the table carefully. Notice how as the range the values that can be stored using each type increases with the number of bytes required to store it (see Description column).   Primitive Types    Type  Size (bytes)  Description    byte  1  small integers from -128 to 127    short  2  integers from -32,768 to 32,767    int  4  integers from -2,147,483,648 to 2,147,483,647    long  8  larger integers from -9,223,372,036,854,775,808 to  9,223,372,036,854,775,807    float  4  floating-point numbers with decimal places    double  8  larger floating-point numbers with double precision    char  2  single characters such as 'A', 'b', '5' or '!'    boolean  1  one of two boolean values, represented by the keywords true and false .     We'll consider each of these types in more detail. But first let's talk more about variables .  "
},
{
  "id": "table-1",
  "level": "2",
  "url": "section-pe-primitives.html#table-1",
  "type": "Table",
  "number": "2.1.1",
  "title": "Primitive Types",
  "body": " Primitive Types    Type  Size (bytes)  Description    byte  1  small integers from -128 to 127    short  2  integers from -32,768 to 32,767    int  4  integers from -2,147,483,648 to 2,147,483,647    long  8  larger integers from -9,223,372,036,854,775,808 to  9,223,372,036,854,775,807    float  4  floating-point numbers with decimal places    double  8  larger floating-point numbers with double precision    char  2  single characters such as 'A', 'b', '5' or '!'    boolean  1  one of two boolean values, represented by the keywords true and false .    "
},
{
  "id": "section-pe-variables",
  "level": "1",
  "url": "section-pe-variables.html",
  "type": "Section",
  "number": "2.2",
  "title": "Variables and Comments",
  "body": " Variables and Comments  In Java, a variable is a named storage location that holds a value of a particular data type. Variables are used to access data stored in memory and manipulate that data within a program. Before using a variable, it must be declared with a specific data type, which determines the kind of data it can store. Java is a statically typed language, which means that the type of a variable is known at at the time your program is compiled, and must be declared explicitly.  Here is the syntax for declaring a variable in Java:  dataType variableName;  Here, dataType represents the type of data the variable can hold, such as int for integers, double for floating-point numbers, boolean for boolean values, String for text, etc. variableName is an identifier that you choose for the variable representing the underlying memory. But don't worry, we don't have to think about the memory itself. Java will take care of choosing a location and setting asside the correct amount. It know how much to set asign using the dataType that you specified when declaring the variable. Also note how the statement ends with a semicolon ( ; ). All Java statements must end with a semicolon.  For example, let's declare a few variables in Java. Note the \/\/ to the right of each declaration. These are Java single-line comments . Anything to the right of a \/\/ on a line in Java is ignored. We use single-line comments extensively.  int age; \/\/ declare an integer variable named 'age' double pi; \/\/ declare a double variable named 'pi' boolean isStudent; \/\/ declare a boolean variable named 'isStudent' String name; \/\/ declare a String variable named 'name'  You may not choose just any sequence of characters for your variable name. Java variable names must follow certain rules.  Variable names must start with a letter (upper or lower case), an underscore ( _ ) or a dollar sign ($)  After the first character, variable names may be made up of additional letters (A-Za-z), digits (1-9), an underscore ( _ ) and\/or a dollar sign ($)  Spaces are not permitted in a variable name.    After declaring a variable you can assign it an initial value using the assignment operator (=):  age = 25; \/\/ assign the value 25 to the 'age' variable pi = 3.14; \/\/ assign the value 3.14 to the 'pi' variable isStudent = true; \/\/ assign the value true to the 'isStudent' variable name = \"Moonman\"; \/\/ assign the value \"Moonman\" to the 'name' variable  Optionally, you can combine the declaration of a variable and initial assignment in a single statement:  int age = 25; \/\/ declare and initialize the 'age' variable double pi = 3.14; \/\/ declare and initialize the 'pi' variable boolean isStudent = true; \/\/ declare and initialize the 'isStudent' variable String name = \"Moonman\"; \/\/ declare and initialize the 'name' variable  Once a variable is declared and assigned a value, you can use it in various operations and expressions within your program.  Now it's your turn. Open a new terminal on your computer or in your editor and start JShell by entering the command jshell -v . The -v at the end of this command tells JShell to run in verbose mode. In verbose mode JShell prints additional information after each entry, which is useful to see while you are still learning. Additional information includes the type of the result just calculated. Following s a sample JShell session for you to try.   jshell -v | Welcome to JShell -- Version 17.0.6 | For an introduction type: \/help intro jshell> 1 $1 ==> 1 | created scratch variable $1 : int jshell> 255 $2 ==> 255 | created scratch variable $2 : int jshell> 1 + 255 $3 ==> 256 | created scratch variable $3 : int jshell> int x; x ==> 0 | created variable x : int jshell> int y = 100; y ==> 100 | created variable y : int jshell> x = 200; x ==> 200 | assigned to x : int jshell> x + y; $7 ==> 300 | created scratch variable $7 : int jshell> \/exit | Goodbye    Complete the following.  Declare a variable of type double named amount and initialize it to 10.5  Declare a variable of type int named nCats and initialize it to 3  Enter the expression nCats * amount  Compare the variable types used in the expressed and the type of the computed result? Why do you think Java produced a result of this type?   Java provides different modifier terms that may be used when declaring a variable. For example, you may preceded a declaration with the additional keyword final . This turns your variable into a constant (the value cannot be changed after initialized). We'll explore these topics in more detail later.   You now know how to declare, assign, initialize and use variables in simple mathematical expressions. Variables in Java are essential for storing and manipulating data, and they play a fundamental role in programming with Java.  "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-pe-variables.html#exercise-1",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "Complete the following.  Declare a variable of type double named amount and initialize it to 10.5  Declare a variable of type int named nCats and initialize it to 3  Enter the expression nCats * amount  Compare the variable types used in the expressed and the type of the computed result? Why do you think Java produced a result of this type?  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-pe-variables.html#exercise-2",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": "Java provides different modifier terms that may be used when declaring a variable. For example, you may preceded a declaration with the additional keyword final . This turns your variable into a constant (the value cannot be changed after initialized). We'll explore these topics in more detail later. "
},
{
  "id": "section-pe-integers",
  "level": "1",
  "url": "section-pe-integers.html",
  "type": "Section",
  "number": "2.3",
  "title": "Integer Primitives",
  "body": " Integer Primitives  Java divides numeric values into two broad categories: integers and floating point numbers . An integer is a numeric value having no decimal places. It may optionally be preceded by a sign, like - or +, but it may not have commas or a decimal place (.). Consequently, integers are whole numbers (positive, negative or zero). No fractional part is permitted. Examples of Java integer value include 2, -64, 0, and 2147483647. We may enter these values directly into JShell, with no comma, at least up to a point. For example, if we enter 2147483647, JShell happily reads it and saves it with a new variable name generated automatically (beginning with $ and followed a number). But if we enter a value that is larger by 1, that is 2147483648, we see an error.   jshell> 2147483647; $1 ==> 2147483647 | created scratch variable $1 : int jshell> 2147483648 | Error: | integer number too large: 2147483648; | 2147483648 | ^   The error tells us that the number is too large . More specifically, the number is too large to be stored in the memory allotted by the default type that JShell uses to store integers values, int . To store 2147483648 in memory, we must choose a different Java integer type, one capable of holding larger numbers by virtue of being allocated more memory.  Recall that Java provides four primitive integer types, byte , short , int , long . We use the term primitive because these types are fundamental to the Java language. These four types are listed in the following table along with the amount of memory used to store each as well as the range of values that may be stored as min and max. All integer variables are stored as one of these types. JShell chooses int to store integers by default. We can see this in the $1 scratch variable above when JShell produces the output created scratch variable $1 : int . The final int tells us that $1 is of type int . Attempting to create the value 2147483648 and store it as an int produces an error because, according to the following table, that value is outside the range of values capable of being stored as an int . What we really need is a way to store the number as a long .   Integer types, range, and memory requirements.    type min max memory    byte -128 127 1 byte    short -32,768 32,767 2 bytes    int -2,147,483,648 2,147,483,647 4 bytes    long -9,223,372,036,854,770,000 9,223,372,036,854,770,000 8 bytes     Any time we enter a number directly into a Java program, even if we don't store it using a variable, Java must interpret it and hold in memory, at least temporarily. Whenever any value is entered directly into a Java program, such as a number, it is called a literal . Integer literals of type int are written as a sequence of digits, using no other special syntax. But other literal types require extra care, such as by adding trailing characters to indicate their type. For example, a long literal is written as a sequence of digits followed by a trailing L . The special trailing character tells Java to set aside twice the amont of memory used to store an int (8 bytes). To create a long literal, terminate the literal's sequence of integer digits with an L , as follows. Note that when we enter an integer value like this, JShell in verbose mode tells us that the type is long .   jshell> 2147483648L; $3 ==> 2147483648 | created scratch variable $3 : long   Java now knows you intend to create a long and so is declares the scratch variable $3 with a type of long and initializes it with the value entered. This time, because a variable of type long is capable of storing the number 2147483648, JShell does not produce an error. long literals are made up of digits and a trailing L >. Unfortunately, Java provides no way to express a short and byte literals. We can declare short and byte variables and initialise them, but we must use integer literals as the initial value. Java handles the automatic conversion from an int to a short and byte before it is written to the variable's memory. If the initial value is too big to fit, we'll see an error.  As we've seen, declaring a variable is accomplished by entering a type followed by the name of the variable we wish to create and a final semicolon. For example, let's say we want to create a variable named n of type long . We would enter long n; . Java assigns a default value of 0 to all new integer variables that have not been initialized.  With the variable n and its associated memory created, we may safely assign our larger number to the variable because as a type long it is capable of holding the larger value.   jshell> long n; n ==> 0 | created variable n : long jshell> n = 2147483648L; n ==> 2147483648 | assigned to n : long jshell>   Using similar procedures you may declare variables with one of the four integer types and assign values. You may also use these variable names any place you would normally use its associated value, such as in a mathematical expression. Make sure to be careful that all variables assigned values have enough memory to hold assigned values. Assigning an int value to a long variable is permitted, but not the other way around.   Declare and initialize integer variables of all four integer types.  Write simple mathematical expressions that combine the different types.  What do you notice about the result type when you add an int and a long . Why is this the case?   "
},
{
  "id": "table-pe-int-info",
  "level": "2",
  "url": "section-pe-integers.html#table-pe-int-info",
  "type": "Table",
  "number": "2.3.1",
  "title": "Integer types, range, and memory requirements.",
  "body": " Integer types, range, and memory requirements.    type min max memory    byte -128 127 1 byte    short -32,768 32,767 2 bytes    int -2,147,483,648 2,147,483,647 4 bytes    long -9,223,372,036,854,770,000 9,223,372,036,854,770,000 8 bytes    "
},
{
  "id": "p-121",
  "level": "2",
  "url": "section-pe-integers.html#p-121",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "literal "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-pe-integers.html#exercise-3",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "Declare and initialize integer variables of all four integer types. "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-pe-integers.html#exercise-4",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "Write simple mathematical expressions that combine the different types. "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-pe-integers.html#exercise-5",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "What do you notice about the result type when you add an int and a long . Why is this the case? "
},
{
  "id": "section-pe-chars",
  "level": "1",
  "url": "section-pe-chars.html",
  "type": "Section",
  "number": "2.4",
  "title": "Character Primitives",
  "body": " Character Primitives  In Java, the char primitive type is used to represent a single character. It can hold any character from the ASCII or Unicode character sets, which includes characters from various languages and scripts.  The char type is declared using the keyword char and occupies 2 bytes of memory. It can store characters using either their Unicode representation or the corresponding escape sequences. For example:  char letterA = 'A'; char digit7 = '7'; char euroSymbol = '\\u20AC'; \/\/ Unicode representation for the Euro symbol char newLine = '\\n'; \/\/ Escape sequence for a new line  In the above examples, letterA stores the character 'A', digit7 stores the character '7', euroSymbol stores the Euro symbol (€), and newLine stores the newline command character.  Java provides various methods and operators to work with char values. Some commonly used methods include:     Character.isLetter(char ch) Checks if the specified character is a letter.    Character.isDigit(char ch) Checks if the specified character is a digit.    Character.isWhitespace(char ch) Checks if the specified character is a whitespace character.    Character.toLowerCase(char ch) Converts the specified character to lowercase.    Character.toUpperCase(char ch) Converts the specified character to uppercase.     Note that char values can also be used in arithmetic expressions, as they are internally represented as two-byte integers. For example, in JShell:   jshell> char ch; \/\/ Declare a char variable ch ch ==> '\\000' \/\/ Default value of 0 | created variable ch : char jshell> ch = 'A' + 1; \/\/ Assign 'A' + 1 to it ch ==> 'B' | assigned to ch : char jshell> ch \/\/ The value of ch is 'B' ch ==> 'B' \/\/ ASCII code for 'A' is 65 and 'B' is 66 | value of ch : char jshell>  Overall, the char primitive type in Java allows you to work with individual characters, making it useful for text processing, string manipulation, and various other tasks involving character-level operations.   Using JShell in verbose mode, enter a char literal using the single-quote notation. Make sure that JShell tells you that your literal is of type char .  What happens if you enter a multi-char char literal, like 'abc' ? Why do you get that response?  char s are stored as two-byte numbers. To what does the expression 'A' + 0; evaluate?  What does the previous result tell you about the way capital-A is stored in memory? Is that consistent with the corresponding ASCII Table entry for capital-A?   "
},
{
  "id": "table-3",
  "level": "2",
  "url": "section-pe-chars.html#table-3",
  "type": "Table",
  "number": "2.4.1",
  "title": "",
  "body": "   Character.isLetter(char ch) Checks if the specified character is a letter.    Character.isDigit(char ch) Checks if the specified character is a digit.    Character.isWhitespace(char ch) Checks if the specified character is a whitespace character.    Character.toLowerCase(char ch) Converts the specified character to lowercase.    Character.toUpperCase(char ch) Converts the specified character to uppercase.    "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-pe-chars.html#exercise-6",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": "Using JShell in verbose mode, enter a char literal using the single-quote notation. Make sure that JShell tells you that your literal is of type char . "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-pe-chars.html#exercise-7",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": "What happens if you enter a multi-char char literal, like 'abc' ? Why do you get that response? "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-pe-chars.html#exercise-8",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": "char s are stored as two-byte numbers. To what does the expression 'A' + 0; evaluate? "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-pe-chars.html#exercise-9",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "",
  "body": "What does the previous result tell you about the way capital-A is stored in memory? Is that consistent with the corresponding ASCII Table entry for capital-A? "
},
{
  "id": "section-pe-floats",
  "level": "1",
  "url": "section-pe-floats.html",
  "type": "Section",
  "number": "2.5",
  "title": "Floating Point Primitives",
  "body": " Floating Point Primitives   In Java, the float and double primitive types are used to represent floating-point numbers. Both types are used for storing numeric values with a fractional part. The main difference between the two lies in the precision and range of values they can store.  The float type is a single-precision floating-point number, while the double type is a double-precision floating-point number. Here are the key characteristics of each type:    Floating-point types, range, and memory requirements.    type  type suffix  min  max  memory  precision    float  F or f    4 bytes  6-7 digits    double  D or d    8 bytes  15-16 digits     Due to their larger size and higher precision, double is the preferred choice when working with floating-point numbers in Java. Use double s unless there are specific memory or performance constraints that necessitate the use of float . double is the default floating-point number type; if you write down a floating-point number literal with no special literal type suffix character, the type of that floating-point value is double . The literal 3.14 is a double . Adding an F or f to the end of a floating-point literal, like 3,14F , tells Java that you want the number of be a float .  Both float and double types support standard arithmetic and mathematical operations, such as addition, subtraction, multiplication, and division. Java provides built-in mathematical functions in the Math class that can be used with float and double values.  When performing calculations involving floating-point numbers, it is important to be aware of the limitations of floating-point representation. Floating-point numbers are stored as approximations, and certain calculations can introduce rounding errors. Therefore, comparing floating-point numbers for equality is not recommended. Instead, it is common practice to compare the difference between two floating-point values to a small epsilon value.  Here's an example in JShell showcasing the usage of float and double types:   jshell> float myFloat = 3.14F; myFloat ==> 3.14 | created variable myFloat : float jshell> double myDouble = 3.14; myDouble ==> 3.14 | created variable myDouble : double jshell> float result = myFloat * 2; result ==> 6.28 | created variable result : float jshell> double otherResult = myDouble \/ 2; otherResult ==> 1.57 | created variable otherResult : double jshell>  In summary, the float and double primitive types in Java are used for storing floating-point numbers. The choice between them depends on the desired precision and range of values. double provides higher precision and is the default choice, while float is used in situations where memory or performance constraints exist.  "
},
{
  "id": "table-pe-float-info",
  "level": "2",
  "url": "section-pe-floats.html#table-pe-float-info",
  "type": "Table",
  "number": "2.5.1",
  "title": "Floating-point types, range, and memory requirements.",
  "body": " Floating-point types, range, and memory requirements.    type  type suffix  min  max  memory  precision    float  F or f    4 bytes  6-7 digits    double  D or d    8 bytes  15-16 digits    "
},
{
  "id": "section-pe-strings",
  "level": "1",
  "url": "section-pe-strings.html",
  "type": "Section",
  "number": "2.6",
  "title": "Strings",
  "body": " Strings  The Java String type is used to represent a sequence of characters. Note that a String is not a Java primitive type like the type we've considered this far. Rather, as String is a more complex type called a class . While primitive types are just data stored in memory, class types, like Strings, are capable of more than just access to data, including the ability to work on data itself. For example, a String can interrogate and manipulate its character data in numerous ways. You can ask a String for the number of characters it holds, to return a copy of itself with all upper case or all lower case letters, whether or not the characters contains a smaller String, etc.  Strings are special in the Java language. Strings are the only non-literal Java type that has its own literal notation. Strings may be created in Java simply by writing a sequence of zero or more characters surrounded by double-quotes (\"\"). Compare this with the Java char literal, which is written as exactly one character surrounded with single-quotes (''). The String literal notation is very useful because Strings are so common.  Creating a String in Java can be done in several ways. A common approach is to write a String  literal , which are written as a character sequence that is enclosed in double quotation marks. In the following example, the String variable myString is declared and initialized with the character sequence Hello, world! .  String myString = \"Hello, world!\";  Strings in Java are immutable , which means that once a String is created, its value cannot be changed. Any operation that seems to modify a String actually creates a new String holding with the modified value. For example, consider the following JShell session.  jshell> String original = \"Hello\"; \/\/ Creates a new String original ==> \"Hello\" | created variable original : String jshell> String modified = original + \", world!\"; \/\/ Creates a modified String modified ==> \"Hello, world!\" | created variable modified : String jshell>  In the previous example, you'll see that the + operator was used to \"add\" two Strings, one stored in the variable original and the other written as a String literal surrounded by double-quotes. When operands of the + operator are Strings, the + operator concatenates the two String operands and returns a new String. By contrast, when operands of + are numbers, the two numeric operands are added together to produce the sum. This is a good example of how the behavior of an operator can depend on the operand types. We will explore this further in the next section, and learn much more about Strings in the Section .  "
},
{
  "id": "p-146",
  "level": "2",
  "url": "section-pe-strings.html#p-146",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "class "
},
{
  "id": "section-pe-enumerated",
  "level": "1",
  "url": "section-pe-enumerated.html",
  "type": "Section",
  "number": "2.7",
  "title": "Enumerated Types",
  "body": " Enumerated Types  In Java, enumerated types , also known as enums , provide a way to define a fixed set of named constants. Enums allow you to create a custom data type with a predefined and automatically assigned set of values, making your code more readable, maintainable, and type-safe.  To define an enum in Java, use the enum keyword followed by the name of the enum type. Here's an example of a simple enum representing clothing sizes:  >jshell | Welcome to JShell -- Version 17.0.6 | For an introduction type: \/help intro jshell> enum Size { ...> XSMALL, ...> SMALL, ...> MEDIUM, ...> LARGE, ...> XLARGE ...> } | created enum Size jshell>  In this example, Size is the name of the enum type, and the constants SMALL , MEDIUM , LARGE , etc., are the possible values of the enum. Note that capitalization of constant name is not required, but useful for communicating the fact that these are constants.  You can use enum constants in your code just like any other static variables. For example:  jshell> Size mySize = Size.LARGE; mySize ==> LARGE jshell> System.out.println(\"Please order a \" + mySize); Please order a LARGE jshell>  Enums also have some useful methods automatically provided by Java. For instance, you can retrieve the name of an enum constant using the name() method:  jshell> System.out.println(\"Please order a \" + mySize.name()); Please order a LARGE  You can compare enum constants using the equality operator ( == ) because each constant is a unique instance of the enum type.  In summary, Java enumerated types (enums) provide a convenient way to define a fixed set of named constants, making your code more expressive and robust. Enums are type-safe, can have custom behavior, and provide useful methods out-of-the-box for working with the constants they define.  "
},
{
  "id": "p-151",
  "level": "2",
  "url": "section-pe-enumerated.html#p-151",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "enumerated types enums "
},
{
  "id": "section-pe-math",
  "level": "1",
  "url": "section-pe-math.html",
  "type": "Section",
  "number": "2.8",
  "title": "Mathematical Expressions",
  "body": " Mathematical Expressions   Expressions in Java are combinations of variables, literals, operators, and other expressions that evaluate to a value with a type. Expressions are the building blocks of Java programs and are used to perform computations and help make decisions programmatically.  Four of the more common types of Java expressions are:  Mathematical Expressions  Assignment Expressions  Relational Expressions  Logical Expressions     Mathematical Expressions involve mathematical operations such as addition (+), subtraction (-), multiplication (*), division (\/), and modulus (%). The evaulation of an arithmetic expression produces a number. For instance:   jshell> 9 + 5; \/\/ Addition $1 ==> 14 | created scratch variable $1 : int jshell> 9 - 5; \/\/ Subtraction $2 ==> 4 | created scratch variable $2 : int jshell> 9 * 5; \/\/ Multiplication $3 ==> 45 | created scratch variable $3 : int jshell> 9 \/ 5; \/\/ Integer division $4 ==> 1 | created scratch variable $4 : int jshell> 9 % 5; \/\/ Modulus (remainder of division) $5 ==> 4 | created scratch variable $5 : int jshell>  Following is a list of many of the most common Java mathematical operators.  Common Java Mathematical Operators    Operator  Type  Description    +  binary, infix  addition    -  binary, infix  subtraction    -  unary, prefix  negation    *  binary, infix  multiplication    \/  binary, infix  division    %  binary, infix  modulus     The unary prefix operator - in Java is negation , which is used to compute the additive inverse of a numeric value or variable. In other words, it turns a positive value negative, and a negative value positive.  An important general rule of thumb to know regarding Java's binary operators is that both operands must be of the same type going in, and the type of the result produced is the generally the same as the operands . This applies to the numeric operand types int , long , float , and double , and implies the following.   If we add two double s, the sum produced is a double .  If we multiply two float s, the product is a float .  If we subtract two long s, the difference is a long .  If we divide two int s, the quotient is an int .   That last implication is a bit troubling. The value 3 divided by 2 is 1.5. If 3 and 2 are int types, how can the quotient hold the correct value? Let's give it a try in JShell.   jshell> int x = 3, y = 2; \/\/ Declare and init two ints x ==> 3 | created variable x : int y ==> 2 | created variable y : int jshell> x \/ y; \/\/ Divide ints $3 ==> 1 \/\/ Is this a mistake? | created scratch variable $3 : int jshell>   Sure enough, as you can see by the session above, dividing 3 by 2 produces an int with a value of 1, not 1.5. Because 1.5 cannot be stored in an int , the result produced has value of 1. Specifically, dividing two integer number types performs integer division , not floating point division. Integer division drops any fractional parts of the result. A frequent pitfall of novice Java programmers is to expect a fractional part in a result after dividing two integer types, which is impossible, where would it be stored? Of course, this is not a problem when dividing floating point types.  Mathematical functions are available in Java by preceding the function with Math. , for example Math.pow(2,3) evaluates producing 8 . Technically, when using this notation we are accessing static methods of the Math class. The following table lists many of the common mathematical functions implemented in Math . These may be included in any Java expression and will be invoked during expression evaluation.   Java Math class static methods    Method\/Constant  Description    Math.PI  The mathematical constant .    Math.E  Euler's mathematical constant .    Math.pow(x, y)  Raise x to the power of e and return result    Math.abs(x)  Return the absolute value of x.    Math.sqrt(x)  Compute the square root of x.    Math.min(x, y)  Return the minimum of x and y.    Math.max(x, y)  Return the maximum of x and y.    Math.ceil(x)  Return the next integer greater than x .    Math.floor(x)  Return the next integer below than x .    Math.round(x)  Round x to the nearest integer.    Math.exp(x)  Raise Euler's number ( ) to the power of x ( ).    Math.log(x)  Compute the natural logarithm of x ( ).    Math.log10(x)  Compute the base-10 logarithm of x ( ).    Math.sin(x)  Compute the sine function of x.    Math.cos(x)  Compute the cosine function of x.    Math.tan(x)  Compute the tangent function of x.    Math.sinh(x)  Compute the hyperbolic sine function of x.    Math.cosh(x)  Compute the hyperbolic cosine function of x.    Math.tanh(x)  Compute the hyperbolic tangent function of x.    Math.asin(x)  Compute the inverse (arc) sine function of x.    Math.acos(x)  Compute the inverse (arc) cosine function of x.    Math.atan(x)  Compute the inverse (arc) tangent function of x.    Math.atan2(x, y)   An alternative inverse tangent function taking rectilinear  coordinates x,y and returning the angle .      For example, consider the following JShell session, where we compute .   jshell> double a = 3, b = 4; a ==> 3.0 | created variable a : double b ==> 4.0 | created variable b : double jshell> double c = Math.sqrt( Math.pow(a,2) + Math.pow(b,2) ); c ==> 5.0 | created variable c : double jshell>   When expressions become more complex, involving multiple operators, operands, functions, etc., the standard mathematical operator precedence determines the order of evaluation, which is: parentheses > exponents > multiplication and division > addition and subtraction . PEMDAS is an mnemonic that helps us recall operator precedence in arithmetic expressions. When multiple operators of the same precedence are adjacent, evaluation is performed left-to-right. Expressions within parentheses take precedence over all other operations.  The PEMDAS mnemonic is represented below with standard operator precedence   (4) P : parentheses, ()  (3) E : exponents, (not available in Java as an operator)  (2) M : multiplication, *  (2) D : division, \/  (1) A : addition, +  (1) S : subtraction, -   In the following example, note how the result of is 14, not 20. A value of 20 would be expected if the expression was evaluated strictly left-to-right. Because the * operator takes precedence over + , the multiplication is performed before the addition. Surrounding the first subexpression with parentheses causes the subexpression to be evaluated first due to the high precedence of parentheses.   jshell> 2 + 3 * 4; $1 ==> 14 | created scratch variable $1 : int jshell> (2 + 3) * 4; $2 ==> 20 | created scratch variable $2 : int jshell>    Using JShell in verbose mode, evaluate the expression 1 \/ 3 . Why did you get the answer you did?  Evaluate 8 - 4 \/ 2 and (8 - 4) \/ 2 . Why are the answers different?  Evaluate 14 % 12 . Where did that answer come from?  A customer just ordered 100 bagels from my shop. I charge one price for each baker's dozen (13) and another prices for single bagels. How might I calculate the number of baker's dozens and the number of remain single bagels using the operators \/ and % ?  Write an expression that calculates the length of the hypotenuse if a right-triangle with two sides of length 5 and 12 connected by a right angle.   "
},
{
  "id": "table-5",
  "level": "2",
  "url": "section-pe-math.html#table-5",
  "type": "Table",
  "number": "2.8.1",
  "title": "Common Java Mathematical Operators",
  "body": " Common Java Mathematical Operators    Operator  Type  Description    +  binary, infix  addition    -  binary, infix  subtraction    -  unary, prefix  negation    *  binary, infix  multiplication    \/  binary, infix  division    %  binary, infix  modulus    "
},
{
  "id": "table-6",
  "level": "2",
  "url": "section-pe-math.html#table-6",
  "type": "Table",
  "number": "2.8.2",
  "title": "Java <code class=\"code-inline tex2jax_ignore\">Math<\/code> class static methods",
  "body": " Java Math class static methods    Method\/Constant  Description    Math.PI  The mathematical constant .    Math.E  Euler's mathematical constant .    Math.pow(x, y)  Raise x to the power of e and return result    Math.abs(x)  Return the absolute value of x.    Math.sqrt(x)  Compute the square root of x.    Math.min(x, y)  Return the minimum of x and y.    Math.max(x, y)  Return the maximum of x and y.    Math.ceil(x)  Return the next integer greater than x .    Math.floor(x)  Return the next integer below than x .    Math.round(x)  Round x to the nearest integer.    Math.exp(x)  Raise Euler's number ( ) to the power of x ( ).    Math.log(x)  Compute the natural logarithm of x ( ).    Math.log10(x)  Compute the base-10 logarithm of x ( ).    Math.sin(x)  Compute the sine function of x.    Math.cos(x)  Compute the cosine function of x.    Math.tan(x)  Compute the tangent function of x.    Math.sinh(x)  Compute the hyperbolic sine function of x.    Math.cosh(x)  Compute the hyperbolic cosine function of x.    Math.tanh(x)  Compute the hyperbolic tangent function of x.    Math.asin(x)  Compute the inverse (arc) sine function of x.    Math.acos(x)  Compute the inverse (arc) cosine function of x.    Math.atan(x)  Compute the inverse (arc) tangent function of x.    Math.atan2(x, y)   An alternative inverse tangent function taking rectilinear  coordinates x,y and returning the angle .     "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-pe-math.html#exercise-10",
  "type": "Exercise",
  "number": "2.8.1",
  "title": "",
  "body": "Using JShell in verbose mode, evaluate the expression 1 \/ 3 . Why did you get the answer you did? "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-pe-math.html#exercise-11",
  "type": "Exercise",
  "number": "2.8.2",
  "title": "",
  "body": "Evaluate 8 - 4 \/ 2 and (8 - 4) \/ 2 . Why are the answers different? "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-pe-math.html#exercise-12",
  "type": "Exercise",
  "number": "2.8.3",
  "title": "",
  "body": "Evaluate 14 % 12 . Where did that answer come from? "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-pe-math.html#exercise-13",
  "type": "Exercise",
  "number": "2.8.4",
  "title": "",
  "body": "A customer just ordered 100 bagels from my shop. I charge one price for each baker's dozen (13) and another prices for single bagels. How might I calculate the number of baker's dozens and the number of remain single bagels using the operators \/ and % ? "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-pe-math.html#exercise-14",
  "type": "Exercise",
  "number": "2.8.5",
  "title": "",
  "body": "Write an expression that calculates the length of the hypotenuse if a right-triangle with two sides of length 5 and 12 connected by a right angle. "
},
{
  "id": "section-pe-assignment",
  "level": "1",
  "url": "section-pe-assignment.html",
  "type": "Section",
  "number": "2.9",
  "title": "Assignment Expressions",
  "body": " Assignment Expressions  Assignment expressions are used to store values in variable memory. Java provides a range of assignment operators for manipulating numerical values.  Assignment is performed using the assignment operator ( = ). This operator assigns the value of the evaluated expression on the right side of the operator to the variable on the left side. As we've seen, we can perform a variable assignment alone and during variable declaration as an initializer. The right side of an assignment need not be a constant value. For instance:  int age; age = 19; \/\/ Assign a value to a variable int height = 6; \/\/ Declare and initialize a variable double hypotenuse = Math.sqrt( Math.pow(3,2) + Math.pow(4,2) );  Compound assignment operators combine assignment with an arithmetic operation. They provide a shorthand way to perform an operation and assign the result back to the same variable. For example, the += infix binary operator performs addition followed by assignment. The value of the right operand is added to the variable given as the left operand and then reassigned to the variable on the left. Similarly, the *= infix binary operator performs multiplication followed by assignment in a similar manner. Following are descriptions of several of Java's common compound assignment, increment, and decrement operators.   Common Compound Assignment, Increment, and Decrement Operators    Operator  Type  Description    ++  unary, prefix or postfix  increment by 1    --  unary, prefix or postfix  decrement by 1    +=  binary, infix  increment the left operand by the right operand and reassign    -=  binary, infix  decrement the left operand by the right operand and reassign    *=  binary, infix  multiply the left operand by the right operand and reassign    \/=  binary, infix  divide the left operand by the right operand and reassign    %=  binary, infix  compute modulus the left operand using the right operand and reassign     The following code snippet illustrates all of the Java compound infix binary and postfix or prefix unary operators.  x++; \/\/ Equivalent to x = x + 1 ++x; \/\/ Equivalent to x = x + 1 x--; \/\/ Equivalent to x = x - 1 --x; \/\/ Equivalent to x = x - 1 x += y; \/\/ Equivalent to x = x + y x -= y; \/\/ Equivalent to x = x - y x *= y; \/\/ Equivalent to x = x * y x \/= y; \/\/ Equivalent to x = x \/ y x %= y; \/\/ Equivalent to x = x % y  Two of these operators require a little more explanation: the increment operator ( ++ ) and the decrement operator ( -- ). Both of these operators may be used in prefix and postfix form on a variable. The ++ increment operator simultaneously adds a value of 1 to the existing value of a variable and reassigns the variable to the incremented value. The -- decrement operator subtracts a value of 1 from the existing variable value and reassigns it. Why are there both prefix and postfix versions?  When either of these operators are applied to a variable in prefix form, the result is what you would expect. The expression evaluates to the incremented or decremented values. Consider the following JShell session. The variable a is declared and initialized to a value of 5. After the prefix ++ is executed on a , the value changes to 6. Following this the prefix -- operator is applied, and the value is decrements a back to 5. Nothing unusual here. Repeat this example yourself by declaring and initializing new variables, and incrementing and\/or decrementing them using the prefix ++ and -- operators.  jshell> int a = 5; a ==> 5 jshell> ++a $2 ==> 6 jshell> --a $3 ==> 5 jshell>  Let's repeat that exercise, only this time we will use the postfix versions of the operators. Remember, the ++ increment operator always increments the variable by 1 and reassigns to the variable, and the -- decrement operator always decrements by 1 and reassigns to the variable.  jshell> int a = 5; a ==> 5 jshell> a++ \/\/ Let's increment by 1 using the postfix operator. $2 ==> 5 \/\/ The new value appears to remain 5. jshell> a \/\/ Let's check that. a ==> 6 \/\/ Now it is 6. What gives? jshell> a-- \/\/ Let's decrement by 1 using the postfix operator. $4 ==> 6 \/\/ Once again, it appears that the value did not change. jshell> a \/\/ Let's check that. a ==> 5 \/\/ Now it is 5! jshell>  Clearly, something is different about ++ and -- when they are used as postfix operators.  Both the ++ and -- operators change the value of the variable operated upon. The core difference between the prefix and postfix forms of these operators is that expressions using the postfix operators evaluate to the original value of the variable , not the new value. To clarify, in postfix form, both operators do increment or decrement the variable, but the expression evaluates to the original value of the variable, not the new value. With the postfix forms of these operators, even though the value of the variable has changed the evaluated value of the entire expression (including the postfix operator) is the value of the variable before the value was updated.  Another item worth noting is that an assignment expression itself evaluates to a value, similar to other mathematical expressions. For example, we know that the expression 2 + 2 evaluates to the value 4 . Also, we know that if we put that expression on the right side of an assignment expression, the variable on the left will be assigned to 4 .  jshell> int x = (2 + 2); x ==> 4 | created variable x : int jshell>  Similarly, an assignment expression itself evaluates to the value being assigned. This implies that if we assign a second variable to an assignment expression, then the second variable will also be assigned to the value. Extending further, we can use this feature to assign multiple variables all as once, even when used as an initialization expression during declaration.  jshell> int y = (x = 5); \/\/ Both x and y are assigned to 5 y ==> 5 \/\/ y has the value 5 | created variable y : int jshell> x x ==> 5 \/\/ x also has the value 5 | value of x : int jshell> int z = y = x = 6; \/\/ z is declared and initialized z ==> 6 | created variable z : int jshell> y y ==> 6 | value of y : int jshell> x x ==> 6 \/\/ x, y, and z all have the value 6 | value of x : int jshell>  By using compound assignment, increment and decrement operations effectively, you can perform various calculations in a compact and succint format.   Declare an int variable x , initialize to 0 and then increment it by 1.  Evaluate the expressions int x = 0; int y = x++; . What are the values of x and y and why?  Evaluate the expressions int x = 0; x -= 10; . What is the value of x and why?   "
},
{
  "id": "p-177",
  "level": "2",
  "url": "section-pe-assignment.html#p-177",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Compound assignment operators "
},
{
  "id": "table-7",
  "level": "2",
  "url": "section-pe-assignment.html#table-7",
  "type": "Table",
  "number": "2.9.1",
  "title": "Common Compound Assignment, Increment, and Decrement Operators",
  "body": " Common Compound Assignment, Increment, and Decrement Operators    Operator  Type  Description    ++  unary, prefix or postfix  increment by 1    --  unary, prefix or postfix  decrement by 1    +=  binary, infix  increment the left operand by the right operand and reassign    -=  binary, infix  decrement the left operand by the right operand and reassign    *=  binary, infix  multiply the left operand by the right operand and reassign    \/=  binary, infix  divide the left operand by the right operand and reassign    %=  binary, infix  compute modulus the left operand using the right operand and reassign    "
},
{
  "id": "p-179",
  "level": "2",
  "url": "section-pe-assignment.html#p-179",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "increment operator decrement operator "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-pe-assignment.html#exercise-15",
  "type": "Exercise",
  "number": "2.9.1",
  "title": "",
  "body": "Declare an int variable x , initialize to 0 and then increment it by 1. "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-pe-assignment.html#exercise-16",
  "type": "Exercise",
  "number": "2.9.2",
  "title": "",
  "body": "Evaluate the expressions int x = 0; int y = x++; . What are the values of x and y and why? "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-pe-assignment.html#exercise-17",
  "type": "Exercise",
  "number": "2.9.3",
  "title": "",
  "body": "Evaluate the expressions int x = 0; x -= 10; . What is the value of x and why? "
},
{
  "id": "section-pe-relational",
  "level": "1",
  "url": "section-pe-relational.html",
  "type": "Section",
  "number": "2.10",
  "title": "Relational Expressions",
  "body": " Relational Expressions  Relational expressions include the familiar greater-than ( > ), less-than ( < ) and equal-to ( == ) operators. Note that testing for equality in Java uses the double-equal operator ( == ) because the single-equal operator ( = ) is reserved for assignment.  In addition to these operators, Java implements compound relational operators , including greater-than or equal-to ( >= ), less-than or equal-to ( <= ) and not-equal-to ( != ). These have the obvious interpretations.   Type Promotion    Operator  Type  Description    <  binary, infix  less-than    <=  binary, infix  less-than or equal-to    >  binary, infix  greater-than    >=  binary, infix  greater-than or equal-to    ==  binary, infix  equal-to    !=  binary, infix  not equal-to     All relational operators evaluate to a boolean value ( true or false ). If you think about that for a moment, you should see the logic in that statement. In general, relational operators involving > or < take numerical operands only.  Relational operators may be used in larger expressions that also involve arithmetic and even assignment operators. All relational operators have a precedence that is lower than arithmetic operators. When evaluating expressions that mix both, evaluate the arithmetic operators first, and then the relational operators. Consider the following examples.  jshell> int a = 1, b = 2, c = 3; a ==> 1 | created variable a : int b ==> 2 | created variable b : int c ==> 3 | created variable c : int jshell> a < b; $4 ==> true | created scratch variable $4 : boolean jshell> a > b; $5 ==> false | created scratch variable $5 : boolean jshell> a + b < c; $6 ==> false | created scratch variable $6 : boolean jshell> a + b == c; $7 ==> true | created scratch variable $7 : boolean jshell> a + b <= c; $8 ==> true | created scratch variable $8 : boolean jshell> c > a; $9 ==> true | created scratch variable $9 : boolean jshell> c >= a; $10 ==> true | created scratch variable $10 : boolean jshell> c != a + b; $11 ==> false | created scratch variable $11 : boolean jshell> a < b < c; | Error: | bad operand types for binary operator '<' | first type: boolean | second type: int | a < b < c; | ^-------^ jshell>  Note how that last example in the above results in a \"bad operand type\" error. The syntax a < b < c is common mathematics notation, but it is invalid Java. When evaluating this expression, the left-most operator is evaluated first to the boolean value of true . That is, a < b becomes true . Then the right-most operator is evaluated as true < c . The < operator cannot take a boolean value type as an operand, therefore the expression results in an error.  Consider one more example.  jshell> 0.1 + 0.2 == 0.3; $12 ==> false | created scratch variable $12 : boolean jshell>  Clearly, we know that is exactly equal to . Why does Java evaluate this expression to false ? Is Java broken?  It turns out that the problem is not with Java, but with floating point number representation in general. The explanation is obvious by observing the result of 01 + 0.2 .  jshell> 0.1 + 0.2; $13 ==> 0.30000000000000004 | created scratch variable $13 : double jshell>  The answer is not the expected value of 0.3, but instead it has an extra \"4\" way out in the last decimal place. The fundamental reason for this is that the numbers 0.1 , 0.2 , and 0.3 cannot be represented exactly in the 16 decimal places of a double-precision number. Recall from  that computer memory stores numeric values in binary (base 2 numbers), not base 10. While integer values may be represented exactly in binary, certain fractional floating-point numbers are not.  The nearest binary-encoded floating-point number to the value 0.3 , out to 55 decimal places, is  0.299999999999999988897769753748434595763683319091796875 .  By contrast, without considering all the technical detail associated with the rounding and approximation required, the sum 0.1 + 0.2 evaluates to the value  0.3000000000000000444089209850062616169452667236328125  a different number. This helps explain why 0.1 + 0.2 == 0.3 evaluates to false , and teaches us an important lesson about comparing floating-point numbers.  Never compare floating-point numbers with == .  Instead, when testing floating-point numbers, check if the absolute value of the difference between two floating-point values is close enough , for your purposes. See the following example for the better way to test if 0.1 + 0.2 is \"close enough\" to 0.3 .  jshell> Math.abs((0.1 + 0.2) - 0.3) < 0.000000000000001; $1 ==> true | created scratch variable $1 : boolean jshell>   Start with the following declarations.  double xc = 0.5, yc = 0.5, r = 0.3, x = 0.6, y = 0.7;  Write one or more Java expressions that test if the distance between the points and is less than . Recall the distance formula . If is the center of a circle with radius , then your computation will test if the point is within the circle.   "
},
{
  "id": "table-8",
  "level": "2",
  "url": "section-pe-relational.html#table-8",
  "type": "Table",
  "number": "2.10.1",
  "title": "Type Promotion",
  "body": " Type Promotion    Operator  Type  Description    <  binary, infix  less-than    <=  binary, infix  less-than or equal-to    >  binary, infix  greater-than    >=  binary, infix  greater-than or equal-to    ==  binary, infix  equal-to    !=  binary, infix  not equal-to    "
},
{
  "id": "p-204",
  "level": "2",
  "url": "section-pe-relational.html#p-204",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Never compare floating-point numbers with == . "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "section-pe-relational.html#exercise-18",
  "type": "Exercise",
  "number": "2.10.1",
  "title": "",
  "body": "Start with the following declarations.  double xc = 0.5, yc = 0.5, r = 0.3, x = 0.6, y = 0.7;  Write one or more Java expressions that test if the distance between the points and is less than . Recall the distance formula . If is the center of a circle with radius , then your computation will test if the point is within the circle. "
},
{
  "id": "section-pe-logical",
  "level": "1",
  "url": "section-pe-logical.html",
  "type": "Section",
  "number": "2.11",
  "title": "Logical Expressions",
  "body": " Logical Expressions   Java provides three logical operators that you can use to form logical expressions:   Java Logical Operators    Operator  Type  Description    &&  infix, binary  Logical conjunction (AND)    ||  infix, binary  Logical disjunction (AND)    !  prefix, unary  Negation (NOT)     Logical expressions combine subexpressions using logical operators. All input operands for logical operators must be boolean in type, and logical logical expressions always evaluate to a boolean . In short, when it comes to logical expressions, its boolean s in and boolean s out.  Logical operator precedence is lower than relational operators. That means that relational subexpressions involving inequalities used as operands for a logical operator, will be evaluated before the logical operator is evaluated. This is a good thing because relational expressions evaluate to exclusively to boolean s and logical expression operands are exclusively boolean , so the two fit together nicely.  With the conjunction operator ( && ), if both the first operand AND the second operand both evaluate to true , then the conjunction expression evaluates to true . If either the first or second operand evaluates to false , then the conjunction expression is false .  jshell> true && true; $1 ==> true | created scratch variable $1 : boolean jshell> true && false; $2 ==> false | created scratch variable $2 : boolean jshell> false && true; $3 ==> false | created scratch variable $3 : boolean jshell> false && false; $4 ==> false | created scratch variable $4 : boolean jshell>  The above can be summarized as a truth table.   Truth Table for Conjunction ( && )    A  B  A && B    true  true  true    true  false  false    false  true  false    false  false  false     As an example, if day is a variable holding the number of the day in any given month following is a logical expression that tells us to pay the rent during the first week of the month: day >= 1 && day <=7 .  The disjunction operator ( || ) is similar. If either the first operand OR the second operand evaluates to true , then the disjunction expression evaluates to true . If both the first and second operand evaluates to false , then the disjunction expression is false .  jshell> true || true; $1 ==> true | created scratch variable $1 : boolean jshell> true || false; $2 ==> true | created scratch variable $2 : boolean jshell> false || true; $3 ==> true | created scratch variable $3 : boolean jshell> false || false; $4 ==> false | created scratch variable $4 : boolean jshell>  The above also can be summarized as a truth table.   Truth Table for Disjunction ( || )    A  B  A || B    true  true  true    true  false  true    false  true  true    false  false  false     A comfortable water temperature for an adult to swim laps in a pool is between 78°F and 82°F. What is an expression that tells me when to avoid swimming laps in a pool based on its water temperature? If tempF is the water temperature in °F, tempF < 78 || tempF > 82 . If either of these relational expressions is true , we'll go out for a run instead.  Negation ! is the simplest of the Java logical operators. It turns a true value into false and a false value into true . Consider the following example and truth table.  jshell> !true; $1 ==> false | created scratch variable $1 : boolean jshell> !false; $2 ==> true | created scratch variable $2 : boolean jshell>   Truth Table for Negation ( ! )    A  !A    true  false    false  true     Let's consider a few more practical examples of logical expressions.  Test if age is greater than 17 AND less than or equal to 67.  Logical expression: age > 17 && age <= 67  jshell> int age = 40; age ==> 40 | created variable age : int jshell> age > 17 && age <= 67; \/\/ Logical test $2 ==> true | created scratch variable $2 : boolean jshell> age = 12; age ==> 12 | assigned to age : int jshell> age > 17 && age <= 67; \/\/ Logical test $4 ==> false | created scratch variable $4 : boolean jshell>  Test if age is less-than or equal-to 17 OR greater than 67.  Logical expression: age <= 17 || x > 67  jshell> int age = 40; age ==> 40 | created variable age : int jshell> x <= 17 || x > 67; \/\/ Logical test $2 ==> false | created scratch variable $2 : boolean jshell> age = 12; age ==> 12 | assigned to age : int jshell> age <= 17 || x > 67; \/\/ Logical test $4 ==> true | created scratch variable $4 : boolean jshell> age = 70; age ==> 70 | assigned to age : int jshell> age <= 17 || x > 67; \/\/ Logical test $6 ==> true | created scratch variable $6 : boolean jshell>  Are the last two examples complementary? Is the truth table of one expression equal to the negated truth table of the other? Let's check.  Logical expression: !(age <= 17 || age > 67) == (age > 17 && age <= 67)  jshell> int age = 40; age ==> 40 | created variable age : int jshell> !(age <= 17 || age > 67) == (age > 17 && age <= 67); $2 ==> true | created scratch variable $2 : boolean jshell> age = 12; age ==> 12 | assigned to aeg : int jshell> !(age <= 17 || age > 67) == (age > 17 && age <= 67); $4 ==> true | created scratch variable $4 : boolean jshell> age = 70; age ==> 70 | assigned to age : int jshell> !(age <= 17 || age > 67) == (age > 17 && age <= 67); $6 ==> true | created scratch variable $6 : boolean jshell>  Forming logical expressions to test complex conditions takes practice. The more you practice the better you'll be able to solve form the expressions you need to solve your computing problems.    Practice  You've invented a dart game that awards a different number of points to a player when a dart lands within each of four concentric circles. The game board is 600mm by 600mm, so the center is at (300mm, 300mm). The outer (yellow) band is bounded by circles with radii 75mm and 100mm and has a point value of 1. This next (blue) band is bounded by circles with radii 50mm and 75mm and has a point value of 2. This next (green) band is bounded by circles with radii 20mm and 50mm and has a point value of 3. And the center (red) circle has radius of 20mm with a point value of 4. The game board is instrumented with sensors; it reports the (x, y) coordinates in mm when any dart lands.    See the illustration of your game board on the right.  Write a logical expression that evaluates to true if a dart lands within the centermost circle -- centered at (300, 300) with radius 20 -- and false otherwise. Write a second logical expression that evaluates to true if a dart lands within the next circular band (green) between circles with raddi 20mm and 50mm.    Dart Game Board     We can test if a point is within a circle by checking if the distance between a point and the center of the circle is less than the radius of the circle. The distance formula ( ) gives us the way to compute the distance between and , where one of the two points will be chosen as the circle center and the other is the point we are testing. Because our game board is a set of nested circles, the distance formula will be an integral part of our logical expressions.  A simple relational expression will tell us if a dart's landing coordinate falls within the centermost circle. It is convenient to compute the distance to the circle center first and save it to a temporary variable, and then test the value of that distance variable. The following code snippet initializes variables, computes distance, and tests that distance to see if the dart has landed in the centermost circle. Note how we have organized these computations as a sequence of steps.   \/\/ Circle parameters double xc = 300.0, yc = 300.0; \/\/ Dart coordinates double x1 = 310.0, y1 = 319.0; \/\/ Compute distance double dist = Math.sqrt( Math.pow(x1-xc, 2) + Math.pow(y1-yc, 2) ); \/\/ Test System.out.println( dist < 20 );   Let's test the logic interactively using JShell.   jshell> \/\/ Circle parameters ...> double xc = 300.0, yc = 300.0;  xc ==> 300.0 yc ==> 300.0  jshell> \/\/ Dart coordinates ...> double x1 = 310.0, y1 = 319.0;  x1 ==> 310.0 y1 ==> 319.0  jshell> \/\/ Compute distance ...> double dist = Math.sqrt( Math.pow(x1-xc, 2) + Math.pow(y1-yc, 2) );  dist ==> 21.470910553583888  jshell> \/\/ Test if in center red circle ...> System.out.println( dist < 20 ); false  jshell>   The final false tells us that the dart did not land in the centermost circle.  How about the next outer circular band with radius greater than or equal to 20 but less than 50. This test is more complex because two conditions must be true simultaneously in order for the dart to have landed in the green band. Here is the logical expression to be evaluated.   \/\/ Test if in green circle System.out.println( dist >= 20 && dist < 50 );   Enter this into our previous JShell session.   jshell> System.out.println( dist >= 20 && dist < 50 );  true  jshell>   The dart has landed in the green band. The player is awarded 3 points.    Demonstrate the following two De Morgan's laws using Java logical expressions.       "
},
{
  "id": "table-9",
  "level": "2",
  "url": "section-pe-logical.html#table-9",
  "type": "Table",
  "number": "2.11.1",
  "title": "Java Logical Operators",
  "body": " Java Logical Operators    Operator  Type  Description    &&  infix, binary  Logical conjunction (AND)    ||  infix, binary  Logical disjunction (AND)    !  prefix, unary  Negation (NOT)    "
},
{
  "id": "p-212",
  "level": "2",
  "url": "section-pe-logical.html#p-212",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "AND "
},
{
  "id": "table-10",
  "level": "2",
  "url": "section-pe-logical.html#table-10",
  "type": "Table",
  "number": "2.11.2",
  "title": "Truth Table for Conjunction (<code class=\"code-inline tex2jax_ignore\">&&<\/code>)",
  "body": " Truth Table for Conjunction ( && )    A  B  A && B    true  true  true    true  false  false    false  true  false    false  false  false    "
},
{
  "id": "p-215",
  "level": "2",
  "url": "section-pe-logical.html#p-215",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "OR "
},
{
  "id": "table-11",
  "level": "2",
  "url": "section-pe-logical.html#table-11",
  "type": "Table",
  "number": "2.11.3",
  "title": "Truth Table for Disjunction (<code class=\"code-inline tex2jax_ignore\">||<\/code>)",
  "body": " Truth Table for Disjunction ( || )    A  B  A || B    true  true  true    true  false  true    false  true  true    false  false  false    "
},
{
  "id": "table-12",
  "level": "2",
  "url": "section-pe-logical.html#table-12",
  "type": "Table",
  "number": "2.11.4",
  "title": "Truth Table for Negation (<code class=\"code-inline tex2jax_ignore\">!<\/code>)",
  "body": " Truth Table for Negation ( ! )    A  !A    true  false    false  true    "
},
{
  "id": "gs-exercises",
  "level": "2",
  "url": "section-pe-logical.html#gs-exercises",
  "type": "Figure",
  "number": "2.11.5",
  "title": "",
  "body": " Dart Game Board   "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-pe-logical.html#exercise-19",
  "type": "Exercise",
  "number": "2.11.2.1",
  "title": "",
  "body": "Demonstrate the following two De Morgan's laws using Java logical expressions.     "
},
{
  "id": "section-pe-conversion",
  "level": "1",
  "url": "section-pe-conversion.html",
  "type": "Section",
  "number": "2.12",
  "title": "Type Conversions",
  "body": " Type Conversions  Back in section  we mentioned that Java binary operators require both operands to be the same type. Remember to pay close attention to operand types when dividing int s. A common source of errors occurs when dividing two int s, which has the potential to drop the fractional part to the right of the decimal in the resulting quotient.  What happens if two dissimilar types are passed as operands to an operator? For example, what happens if we add an int and a double ? And what happens if we add a String and a double , or subtract a double from a String ? Let's find out.  jshell> int a = 2; double b = 2.0; a ==> 2 | created variable a : int b ==> 2.0 | created variable b : double jshell> a + b; $3 ==> 4.0 | created scratch variable $3 : double jshell> \"a\" + b; $4 ==> \"a2.0\" | created scratch variable $4 : String jshell> \"a\" - b; | Error: | bad operand types for binary operator '-' | first type: java.lang.String | second type: double | \"a\" - b; | ^-----^ jshell>  In the first test above, the result produced is a double . Apparently, the int a was converted to a double automatically before the addition was performed. In the second test, we added the String \"a\" to the double b . This time the value of b was converted to a String first and then the + operator was executed on the String types, which results in String concatenation. The third test failed. Apparently it is not possible to subtract a double from a String in Java.  In fact, this demonstrates a general rule for evaluating mixed type expressions in Java. When two operands of a binary operator are NOT of the same type, Java tries to promote one of the operands to the type of the other operand before it performs the operation indicated by the operator. This is not always successful. The error printed by the third test above clearly indicates that the - binary operator is not valid for the operand types provided.  How do we know when and which operand will be promoted ? The answer is that automatic type conversions generally take place for widening primitive conversions . A widening primtiive conversion occurs when the initial data type requires less memory than the converted type. In the case of adding an int and a double , we know from and that a double consumes 8 bytes of memory while an int consumes only 4 bytes of memory. Consequently, automatic promotion will occur from an int to a double , but not the other way around.  The following table shows all valid widening primitive type conversions. The type listed in the FROM column may be promoted to any type in the TO column. Notice that in general the amount of memory used by the types in the TO column increases progressively from left to right. Note especially the expection that a long is promoted to a float , and not the other way around. A long consumes 8 bytes while a float consumes only 4 bytes.   Widening Primitive Conversions    FROM  TO    byte  short , int , long , float , double    short  int , long , float , double    int  long , float , double    long  float , double    float  double    char  int , long , float , double     There are a few other special cases to consider.  In the previous example we added a String and a double . As we know, a String is not primitive type. Yet, a primitive type may be promoted to a String automatically in an exprssion when the operator can take String operands. This type of conversion is called String conversion . Any type in Java may be converted to a String . This may occur automatically as part of the evaluation of an exprssion, or explicitly. The best way to perform the explicit convertion of a primitive type to a String is to use the built-in String.valueOf(...) static method. For example, the expression String.valueOf(3.14) evaluates to the String \"3.14\" . But the automatic type conversion performed by expression evaluation gives us another way to convert anything to a String . Just add \"\" to any individual data. See the session below, for an example.  jshell> String.valueOf(3.14); $1 ==> \"3.14\" | created scratch variable $1 : String jshell> 3.14 + \"\"; $2 ==> \"3.14\" | created scratch variable $2 : String jshell>  When you perform arithmetic operations like + on byte or short integers, you'll notice that the result is always of type int , and not byte or short . The reason for this is that Java does not define arithmetic operators for byte and short integer types. Instead, it promotes both operands to an int before performing the operation. This is the reason the result is always an int . If you really want the result to be a byte or a short integer expression, you'll have to explicitly convert the result back to the desired type. This is the subject of the next section.  Narrowing primitive conversions occur when converting a value of a data type that consumes more memory to one that consumes less memory. In narrowing primitive conversions, there is a potential loss of information or precision. Clearly this is case when we force more bytes into less memory. Narrowing primitive conversions must be performed explicitly using a technique called casting . To cast an expression, precede the expression with the desired type surrounded with parentheses.  For example, converting a double to an int requires explicit casting:  jshell> double pi = 3.14; pi ==> 3.14 | created variable pi : double jshell> (int)pi; \/\/ Narrowing primitive conversion cast double to int $2 ==> 3 | created scratch variable $2 : int jshell>  In the above example, the value of pi (a double) is explicitly cast to int using the (int) cast. The double stored in 8 bytes was reformulated and copied to the 4 bytes of memory available to the int .  The following table shows all valid narrowing primitive conversions of primitive types, which can be performed using a cast.   Narrowing Primitive Conversions    FROM  TO    byte  char    short  byte , char    int  byte , short , char    long  byte , short , char , int    float  byte , short , char , int , long    double  byte , short , char , int , long , float    char  byte , short     It's important to remember that narrowing conversions may result in data loss or truncation. For example, when converting a floating-point value to an integer, the fractional part is discarded, leading to the potential loss of precision. It is also worth pointing out that the we can convert freely between seven of the eight primitive types. In Java, even a char may be converted to a numeric type. Only the boolean primitive type cannot be converted to a numeric type.  There is a way to reverse a String conversion , that is, to turn a String representation of a primitive back into a primitive type. This process is more sophisticated, requiring careful parsing of the characters in the String . For most Java primitives (all except char ) Java provides a class equivalent for the primitive type that implements a static method that starts with parse... . These methods take a String parameter and attempt to parse it, returning a value having the corresponding primitive type. The following table lists the class equivalents of each primitive type and demonstrates the use of the relevant static method.   Class primitive equivalents and Java primitive parsing    Primitive  Class  Parse method  Evaluates to    byte  Byte  Byte.parseByte(\"1\")  1 (byte)    short  Short  Short.parseShort(\"1\")  1 (short)    int  Integer  Integer.parseInt(\"1\")  1 (int)    long  Long  Long.parseLong(\"1\")  1 (long)    float  Float  Float.parseFloat(\"3.15\")  3.14 (float)    double  Double  Double.parseDouble(\"3.15\")  3.14 (double)    boolean  Boolean  Boolean.parseBoolean(\"true\")  true (boolean)     As we've seen, type conversions (e.g. primitive promotion and String conversion) take place automatically during expression evaluation. The specific conversion that occurs depends entirely on the types that operands have at the moment the operator is about to be evaluated. This might not be obvious by looking at an expression before evaluation. Prediction of the type from the evaluation of a given expression requires a careful tracking of the expression evaluation process intermixed with necessary types conversions. The order of subexpression evaluation must follow operator precedence and left-to-right evaluation.  Consider the following expression examples and their evaluated value and type. Can you explain how each value and type result is arrived?   Expression evaluation value and type    Expression  Evaluated Value  Evaluated Type    1 + 1.0  2.0  double    1.0F + 1  2.0F  float    1 + 1L  2L  long    (long)1.5 + 1F  2.0  float    1 + \"1\"  \"11\"  String    \"2\" + 2  \"22\"  String    1 + 1 + \"1\"  \"21\"  String    \"1\" + 1 + 1  \"111\"  String    \"1\" + (1 + 1)  \"12\"  String    (2 > 1) + \"blue\"  \"trueblue\"  String     Type promotion and conversions are essential in Java for maintaining compatibility between different data types and enabling operations involving different types. Understanding the rules and implications of type promotion and conversions is crucial to ensure correct and reliable behavior in Java programs.     "
},
{
  "id": "p-241",
  "level": "2",
  "url": "section-pe-conversion.html#p-241",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "promote "
},
{
  "id": "p-242",
  "level": "2",
  "url": "section-pe-conversion.html#p-242",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "promoted widening primitive conversions "
},
{
  "id": "table-13",
  "level": "2",
  "url": "section-pe-conversion.html#table-13",
  "type": "Table",
  "number": "2.12.1",
  "title": "Widening Primitive Conversions",
  "body": " Widening Primitive Conversions    FROM  TO    byte  short , int , long , float , double    short  int , long , float , double    int  long , float , double    long  float , double    float  double    char  int , long , float , double    "
},
{
  "id": "p-245",
  "level": "2",
  "url": "section-pe-conversion.html#p-245",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "String conversion "
},
{
  "id": "p-247",
  "level": "2",
  "url": "section-pe-conversion.html#p-247",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Narrowing primitive conversions casting "
},
{
  "id": "table-14",
  "level": "2",
  "url": "section-pe-conversion.html#table-14",
  "type": "Table",
  "number": "2.12.2",
  "title": "Narrowing Primitive Conversions",
  "body": " Narrowing Primitive Conversions    FROM  TO    byte  char    short  byte , char    int  byte , short , char    long  byte , short , char , int    float  byte , short , char , int , long    double  byte , short , char , int , long , float    char  byte , short    "
},
{
  "id": "table-15",
  "level": "2",
  "url": "section-pe-conversion.html#table-15",
  "type": "Table",
  "number": "2.12.3",
  "title": "Class primitive equivalents and Java primitive parsing",
  "body": " Class primitive equivalents and Java primitive parsing    Primitive  Class  Parse method  Evaluates to    byte  Byte  Byte.parseByte(\"1\")  1 (byte)    short  Short  Short.parseShort(\"1\")  1 (short)    int  Integer  Integer.parseInt(\"1\")  1 (int)    long  Long  Long.parseLong(\"1\")  1 (long)    float  Float  Float.parseFloat(\"3.15\")  3.14 (float)    double  Double  Double.parseDouble(\"3.15\")  3.14 (double)    boolean  Boolean  Boolean.parseBoolean(\"true\")  true (boolean)    "
},
{
  "id": "table-16",
  "level": "2",
  "url": "section-pe-conversion.html#table-16",
  "type": "Table",
  "number": "2.12.4",
  "title": "Expression evaluation value and type",
  "body": " Expression evaluation value and type    Expression  Evaluated Value  Evaluated Type    1 + 1.0  2.0  double    1.0F + 1  2.0F  float    1 + 1L  2L  long    (long)1.5 + 1F  2.0  float    1 + \"1\"  \"11\"  String    \"2\" + 2  \"22\"  String    1 + 1 + \"1\"  \"21\"  String    \"1\" + 1 + 1  \"111\"  String    \"1\" + (1 + 1)  \"12\"  String    (2 > 1) + \"blue\"  \"trueblue\"  String    "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-pe-conversion.html#exercise-20",
  "type": "Exercise",
  "number": "2.12.1",
  "title": "",
  "body": ""
},
{
  "id": "section-pe-concepts",
  "level": "1",
  "url": "section-pe-concepts.html",
  "type": "Section",
  "number": "2.13",
  "title": "Key Concepts",
  "body": " Key Concepts   Java defines primitive types, which may be organized into four groups:  Primitive Types  primitive types    integer number types  byte , short , int , long    floating point number types  float , double    boolean type  boolean    a single character type  char      Java has an additional type called String , which is a class, not a primitive. What makes String unique is that Java provides a literal notation for creating new String objects. Merely writing a sequence of characters surrounded by a pair of double-quotes (\") is enough to create a String in Java. This makes String objects easy to create and use in expressions. We'll learn much more about String objects. String  Using Java we can write down arithmetic, and arithmetic-like, expressions. Java will automatically evaluate these expressions, producing a final value with a well-defined type.  The rules for evaluating expressions are nearly the same as the standard rules used to evaluate mathematical expressions. For example, recall PEMDAS .  All data items in Java have a type, which informs Java about the memory required to store it. The value resulting from evaluating an expression also has a type, which informs Java how to store it.  Java implements all standard mathematical operators. These include +, -, * (multiplication), and \/ (division). Java also implements the % operator (modulo), which produces the remainder after Euclidian division (division with a remainder).  The operation performed by an operator on its operands may change, depending upon the types of the operands. For example, Java has two implemenations of the \/ operator: one that operates on float point operands producing a floating point result, and another that operates on int operands producing an integer result.  Another special operator is + . This operator works as you expect with any number type. But, if one operand is a String , then Java changes the meaning of + from addition to String concatenation (it joins the two Strings producing one new String). You must identify the operand types of a + operator to predict the result.  Java will operate only on operands having the same type. For example, Java will not add an int and long . Similarly, Java will not add a float and a double . Before evaluating an expression with different operand types, Java attempts to promote the type automatically of one of the operands to match the type of the other. These type changes are called widening conversions because more memory is used to store the converted data compared to the original data (the memory required widens).  There are rules for what types may be promoted automatically during expression evaluation. Types that may be promoted automatically during expression evaluation are summarized in the following table.  Type Promotion (Widening Conversions)    FROM  TO    byte  short , int , long , float , double    short  int , long , float , double    int  long , float , double    long  float , double    float  double    char  int , long , float , double      There is a way to force data type conversions in the other direction. That is, to force data into a smaller amount of memory. These conversions are called narrowing conversions because less memory is used to store the converted data as compared to the original data (the amount of memory narrows).  One way to force a narrowing conversion is called a cast . We say that the type of one data value is cast to another.  There are rules for which primitive types may be cast to another. These are summarized in the following table.  Type Casting (Narrowing Conversions)    FROM  TO    byte  char    short  byte , char    int  byte , short , char    long  byte , short , char , int    float  byte , short , char , int , long    double  byte , short , char , int , long , float    char  byte , short      To cast data from one type to another, precede the given value, variable, or expression with parentheses containing the new type. For example, to convert a long to an int, precede a variable, value or expression with (int).  jshell>  (int)123L  $2 ==> 123 | created scratch variable $2 : int To convert a double to a float, precede a variable, value, or expression with (float)  jshell>  (float)12.34  $3 ==> 12.34 | created scratch variable $3 : float    Java provides ways of writing down literal values with many (but not all) primitive types and a String. You can look at data in a Java expression and identify its type by the way it is written.   Numbers without decimal places are of type int (eg, 1, 345, -10, 0)  Numbers without decimal places and a trailing L are of type long (eg, 1L, 25L, -10L, 0L)  Numbers with decimal places are of type double (eg, 1.2, -0.07, 100.0, 4E-3)  Numbers with decimal places and a trailing F are of type float (eg, 1.2F, -0.07F, 4E-3F)  The reserved words true and false are booleans  A single letter surrounded by single quotes is of type char (eg, 'a', '0', '*')  A sequence of zero or more characters surrounded by double quotes is of type String (eg, \"Hello\", \"1234\", \"\")   We may declare variables to hold data of any type. Notation for variable declaration is the data type followed by the new variable name. Variables may be used in any expression in place of values. Examples of variable declarations include: int i; double x; String name; boolean result;   Variables may be initialized with a value at the same time they are declared. For example: int i = 1; double x = 3.1415926; String name = \"Roscoe\"; boolean result = true;   Comments are text that are ignored by Java. They are useful for describing a program. Java comments come in two forms. In the first form, Java ignores any text between \/* and *\/ . Comments of this form may span any number of lines. In second form of comment, Java ignores everything from the characters \/\/ through the end of a line.   "
},
{
  "id": "table-17",
  "level": "2",
  "url": "section-pe-concepts.html#table-17",
  "type": "Table",
  "number": "2.13.1",
  "title": "Primitive Types",
  "body": " Primitive Types  primitive types    integer number types  byte , short , int , long    floating point number types  float , double    boolean type  boolean    a single character type  char    "
},
{
  "id": "table-18",
  "level": "2",
  "url": "section-pe-concepts.html#table-18",
  "type": "Table",
  "number": "2.13.2",
  "title": "Type Promotion (Widening Conversions)",
  "body": " Type Promotion (Widening Conversions)    FROM  TO    byte  short , int , long , float , double    short  int , long , float , double    int  long , float , double    long  float , double    float  double    char  int , long , float , double    "
},
{
  "id": "table-19",
  "level": "2",
  "url": "section-pe-concepts.html#table-19",
  "type": "Table",
  "number": "2.13.3",
  "title": "Type Casting (Narrowing Conversions)",
  "body": " Type Casting (Narrowing Conversions)    FROM  TO    byte  char    short  byte , char    int  byte , short , char    long  byte , short , char , int    float  byte , short , char , int , long    double  byte , short , char , int , long , float    char  byte , short    "
},
{
  "id": "section-pe-exercises",
  "level": "1",
  "url": "section-pe-exercises.html",
  "type": "Section",
  "number": "2.14",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-jp-compile",
  "level": "1",
  "url": "section-jp-compile.html",
  "type": "Section",
  "number": "3.1",
  "title": "Your First Java Program",
  "body": " Your First Java Program   In  we installed the entire JDK, which includes not only JShell, but several other tools including the Java compiler program ( javac ) and the program that runs compiled Java programs ( java ). Beginning in this section we will start using these tools to compile and run our Java programs. JShell remains an incredibly useful tool for testing Java expressions and small code snippets. Keep it close.    A Java Program File  Java programs can be composed of a sequence of the declarations, initializations, and expressions that we have studied thus far. There are several additional requirements that must be satisfied before your program will compile.  Your statements must be written to a file with the proper name and the \".java\" extension.  All statements must be grouped into a named structure called a method .  This and any other methods defined must be contained within an organizing structure called a class . The name of the class must match the name of the file.  Unlike JShell, a Java program does not print results to the terminal automatially. Results must be printed explicitly. In Java, the command System.out.println(...) may be used to print the results of an expression to the terminal. We'll need a print statement in order to see the computed result.    Let's say we want to calculate the distance between two points. One point is at the coordinates and the other is at . Once computed we want to print the result to the terminal. In order to write a complete Java program that will compile and run, we need to fulfill all the above requirements. The following program satisfies these requirements. Using your programmer's editor, create a new file at a known location and enter the text of the following program into that file. Save the program to a file with name ComputeDistance.java (satisfying the first requirement). Don't forget the curly braces ( {} ) that enclose the body of the entire class and the nested curly braces that enclose the statements in the main() method. These are important syntactical elements that must be present.   ComputeDistance.java  public class ComputeDistance { \/\/ 1) Open the class public static void main(String[] args) { \/\/ 2) Start the method double x1 = 0.0, y1 = 20.0; \/\/ Declare and init point 1 double x2 = 30.0, y2 = 0.0; \/\/ Declare and init point 2 \/\/ Apply distance formula double distance = Math.sqrt( Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) ); System.out.println(distance); \/\/ 3) Print distance } \/\/ Close the method } \/\/ Close the class     Compiling a Java Program  Once saved, open a terminal on your computer. The terminal will run a shell program automically that let's you interact with your operating system. Use your shell's commands to make sure the current working directory is set to the location on your file system where your Java program file is saved.  Different operating systems support a variety of terminals and shell programs implementing a variety of commands. Choose the terminal and shell that you prefer. Refer tp for more information about common shell programs and shell commands.  Into your shell enter the following command, which compiles your Java program.  javac ComputeDistance.java  If you see errors, correct them and try again. When the command executes without error, your progam has compiled successfully. If you list the files in your directory, you will see that the javac program created a new file named CalculateDistance.class . This is your compiled program.    Running a Compiled Java Program  To run your compiled Java program, enter the following command into your shell. Note that the java command does not take the name of the compiled program, but rather takes the name of the Class with the main() static method to run. In our case, the name of the class is ComputeDistance . If you see the following output, yu have successfully compiled and run your first Java program. Make sure you have mastered the javac and java commands. You will be using them quite a lot.   java ComputeDistance  36.05551275463989   Once you have that working, try the following longer program, which computes and print the roots of a quadratic polynomial using the quadratic formula. Study this program carefully. Every part of it should look familiar to you. Notice the use of the + and += operators to assemble the output.   \/\/ Roots.java public class Roots { public static void main(String[] args) { \/\/ Define coefficient values for the quadratic polynomial double a = 1.0; double b = 0.0; double c = -4.0; \/\/ Compute the roots double discr = b * b - 4 * a * c; \/\/ the discriminant double root1 = (-b - Math.sqrt(discr)) \/ (2 * a); double root2 = (-b + Math.sqrt(discr)) \/ (2 * a); \/\/ Print the results String resp = \"Coefficients: a=\" + a + \", b=\" + b + \", c=\" + c; resp += \"\\nRoots: \" + root1 + \" and \" + root2; System.out.println(resp); } }    javac Roots.java  java Roots  Coefficients: a=1.0, b=0.0, c=-4.0 Roots: -2.0 and 2.0   Many programming editors streamline the compile and run process by running all steps for you at the click of a button. Make sure you first master at least one shell as well as the commands necessary to work with your computer's operating system and the commands required to compile and run a Java program. Once you feel comfortable, feel free to use your editor's shortcut buttons. You'll understand exactly what they do.   "
},
{
  "id": "p-257",
  "level": "2",
  "url": "section-jp-compile.html#p-257",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method class "
},
{
  "id": "listing-jp-computedistance",
  "level": "2",
  "url": "section-jp-compile.html#listing-jp-computedistance",
  "type": "Listing",
  "number": "3.1.1",
  "title": "",
  "body": " ComputeDistance.java  public class ComputeDistance { \/\/ 1) Open the class public static void main(String[] args) { \/\/ 2) Start the method double x1 = 0.0, y1 = 20.0; \/\/ Declare and init point 1 double x2 = 30.0, y2 = 0.0; \/\/ Declare and init point 2 \/\/ Apply distance formula double distance = Math.sqrt( Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) ); System.out.println(distance); \/\/ 3) Print distance } \/\/ Close the method } \/\/ Close the class  "
},
{
  "id": "section-jp-static-methods",
  "level": "1",
  "url": "section-jp-static-methods.html",
  "type": "Section",
  "number": "3.2",
  "title": "Static Methods",
  "body": " Static Methods   public static void main(...)  In the last section we authored, compiled, and executed our first Java program. To make a complete program suitable for executaion, one of our requirements was to wrap our Java statements in a method named main() . In fact, the main() method must have the exact signature  public static void main(String[]) . This signature is what Java looks for as the starting point for a program's execution. When we entered the shell commands java ComputeDistance , we were telling Java to look in the ComputeDistance class for the method with the signature public static void main(String[]) and begin execution there.  The main() method uses several keywords. The following figure shows the purpose for each. You will learn about each of these as we progress through the topics that follow. For now, understand that it is necessary to create a main(…) method with this exact signature so Java knows where to begin execution.   Anatomy of the main(…) method      Other static Methods  Grouping Java statements in named methods is a very useful technique that will benefit us as our programs grow in size. It is a form of encapsulation that supports abstraction . Abstracting away the details of a particular computation, exposing it as the name of the concept, is an important way of reducing complexity, which gives us a fighting chance at writing large and complex programs.  As an example, consider our ComputeDistance() method from the last section. Rather than having to remember the distance formula every time we wanted to compute distance, a btter approach would be to encapsulate that computation in its own method and give that method a meaningful name, like distanceBetween() . This new method would take the four parameters x1 , y1 , x2 , y2 , and return a double that was the computed distance. Following the guidance of , we can construct the following updated program that encapsulates teh distance formula in a new method. This lets us reuse the method without reentering the distance formula over and over again.   ComputeDistance.java (version 2)   public class ComputeDistance { public static void main(String[] args) { \/\/ Computation starts here \/\/ Reuse distanceBetween() to calculate and sum two distances double dist1 = distanceBetween(0.0, 20.0, 30.0, 0.0); double dist2 = distanceBetween(30.0, 0.0, 40.0, 10.0); System.out.println(\"Total distance: \" + (dist1+dist2)); } \/\/ New method that encapsulates the distance formula computation \/\/ Parameters are four doubles representing the two point coordinates public static double distanceBetween(double x1, double y1, double x2, double y2 ) { double term1 = Math.pow(x1-x2, 2); \/\/ Compute temporary terms double term2 = Math.pow(y1-y2, 2); \/\/ Apply the distance formula double distance = Math.sqrt( term1 + term2 ); \/\/ Return the computed distance return distance; } }    Compile and run our updated program from a shell.   javac ComputeDistance.java java ComputeDistance  Total distance: 50.19764837837084   Now we have something very nice. In our second version of the ComputeDistance program, we have our outer class defined with a name that matches its file ( ComputeDistance.java ). Within the class we declare a main() method with the proper signature so Java knows were to start exectuion. And we have a helper method named distanceBetween() that encapsulates and abstracts away the details associated with computing the distance between two points. Because we encapsulated the distance formula in its own method, we can invoke the method twice using only its name and passing the four doubles . Never again do we have to remember the details of the distance formula nor how to write it in Java. This is the power of abstraction and encapsulation .    Source Code Formatting  Another item to note about our updated program is how the code itself is laid out. You'll notice that the two methods are indented within the set of curly braces that enclose the class declaration, and the statements that define each method are indented further. The parameter delcarations of the distanceBetween() method are even indented so the second pair of parameters is right under the first pair. This formatting helps us see and understand how a program is organized at a glance, but it is not necessary, at least as far as the Java compiler is concerned. In fact, the Java compiler will compile the following listing with no trouble. But I don't recommend it.   ComputeDistance.java (messy version)   public class ComputeDistanceMessy{public static void main(String[] args){ double dist1=distanceBetween(0.0,20.0,30.0,0.0);double dist2= distanceBetween(30.0,0.0,40.0,10.0);System.out.println(\"Total distance: \" +(dist1+dist2));}public static double distanceBetween(double x1,double y1, double x2,double y2){double term1=Math.pow(x1-x2,2);double term2 = Math.pow(y1-y2,2);double distance=Math.sqrt(term1+term2);return distance;}}    This illustrates an important fact about Java. That is, Whitespace rarely matters . We do need a space or linefeed here or there to separate certain language tokens, but not too many. But that doesn't mean your programs should look like the above. In fact, part of your job while programming is to write your code so that it is understandable by others. To that end, Always format and comment your code . This is your way of communicating your program organization and how it works, even if you are communicating only to your future self. It's best not to be the person who looks back at a program they wrote in the past and has no idea about what it does.   "
},
{
  "id": "figure-jp-method-anatomy",
  "level": "2",
  "url": "section-jp-static-methods.html#figure-jp-method-anatomy",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Anatomy of the main(…) method   "
},
{
  "id": "listing-jp-computedistance2",
  "level": "2",
  "url": "section-jp-static-methods.html#listing-jp-computedistance2",
  "type": "Listing",
  "number": "3.2.2",
  "title": "",
  "body": " ComputeDistance.java (version 2)   public class ComputeDistance { public static void main(String[] args) { \/\/ Computation starts here \/\/ Reuse distanceBetween() to calculate and sum two distances double dist1 = distanceBetween(0.0, 20.0, 30.0, 0.0); double dist2 = distanceBetween(30.0, 0.0, 40.0, 10.0); System.out.println(\"Total distance: \" + (dist1+dist2)); } \/\/ New method that encapsulates the distance formula computation \/\/ Parameters are four doubles representing the two point coordinates public static double distanceBetween(double x1, double y1, double x2, double y2 ) { double term1 = Math.pow(x1-x2, 2); \/\/ Compute temporary terms double term2 = Math.pow(y1-y2, 2); \/\/ Apply the distance formula double distance = Math.sqrt( term1 + term2 ); \/\/ Return the computed distance return distance; } }   "
},
{
  "id": "listing-3",
  "level": "2",
  "url": "section-jp-static-methods.html#listing-3",
  "type": "Listing",
  "number": "3.2.3",
  "title": "",
  "body": " ComputeDistance.java (messy version)   public class ComputeDistanceMessy{public static void main(String[] args){ double dist1=distanceBetween(0.0,20.0,30.0,0.0);double dist2= distanceBetween(30.0,0.0,40.0,10.0);System.out.println(\"Total distance: \" +(dist1+dist2));}public static double distanceBetween(double x1,double y1, double x2,double y2){double term1=Math.pow(x1-x2,2);double term2 = Math.pow(y1-y2,2);double distance=Math.sqrt(term1+term2);return distance;}}   "
},
{
  "id": "p-273",
  "level": "2",
  "url": "section-jp-static-methods.html#p-273",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Whitespace rarely matters Always format and comment your code "
},
{
  "id": "section-jp-string",
  "level": "1",
  "url": "section-jp-string.html",
  "type": "Section",
  "number": "3.3",
  "title": "The String Class",
  "body": " The String Class   Another way that we benefit from encapsulation is unique to object oriented programming. That is to encapsulate both state (data) and behavior (methods) in a larger structure called an object . The way that we create an instance of an object is by using the code we write when declaring a class . In fact, an object is often referred to as an instance of a class , and creating a new object as instanciating a class . We won't be writing new classes to be instantiated until a bit later. Fortunately, The JDK ships with a huge number of prewritten and debugged classes that we can use directly. The first class we will investigate is String .    Instantiating a String  It may surprise you to learn that String is a class because it also has a handy literal notation that allows us to create String s objects directly using double-quotes ( \"\" ). In fact, there is a second way to instantiate a new String , which is the way we instantiate any object in Java. That is, by using the new keyword to invoke the class constructor . In the following program we create two String objects, one using literal notation and the other by invoking the String constructor using new . Both result in a new String object.   Two ways to create String objects.   \/\/ Strings.java public class Strings { public static void main(String[] args) {\/\/ Start execution here String name1, name2; \/\/ Declare variables name1 = \"Athos\"; \/\/ Assign String literal name2 = new String(\"Porthos\"); \/\/ Invoke String constructor System.out.println(name1 + \" and \" + name2); } }    Once we know the name of the class we want to create and the parameters expected by its constructor we use the new keyword to invoke the constructor using the following pattern for invocation. The result is a new object, an instance of the class, which we save by assigning to a variable declared with the class type. The following figure demonstrates constructor invocation and assignment of the created object.  Invoking a constructor (TODO: Replace with figure)    variable  assign  keyword  class  parameters    name2  =  new  String  (\"Porthos\")        String Methods  As we've discussed, the idea of encapsulation in object oriented programming implies that objects (and classes) may implement their own state and behavior . The state of an object is captured by its internal variables that it defines, and its behavior by the methods it implements. Often, an object's methods manipulate and manage its internal data, which is consist with encapsulation .  To access the variables and methods of an object, we must gain access to its inner scope. We do this using what's know as the dot operator . If we follow an object with a dot ( . ), we are effectively peering into the inner scope of the object. We are able to access anything within the object that the object makes available. To demonstrate, let's have a look at what objects of type String implement.  As you know, the data held and managed by a String object is a sequence of characters. A String object implements several methods that allows us to interrogate and manipulate these internal data.  For example, one of the String object methods is named toUpperCase() . As the method name implies, it converts all characters in a String to uppercase and returns a new String composed of all uppercase letters. Recall that in we learned that a String object is immutable. All String methods that seemingly modify internal character data, actually return a new String object.  Let's return to JShell for a moment to explore methods of the String class. In the following JShell session, we create a new String object and then invoke its toUpperCase() method which returns a new String made up of all uppercase characters.  jshell> String name2 = new String(\"Porthos\"); \/\/ Create a new String object name2 ==> \"Porthos\" | created variable name2 : String jshell> String name3 = name2.toUpperCase(); \/\/ Produce an uppercase version name3 ==> \"PORTHOS\" | created variable name3 : String jshell>  The variable name3 now references an object of type String with the value \"PORTHOS\" .  Here is something interesting to try. JShell is able to look up all the items within the scope of an object and print out a list of their names. Enter the variable name of one of your String objects into JShell followed by the dot-operator, for example, the new variable name3. and then press the TAB key. JShell will give you a list of all accessible names, like the following. In the case of String everything accessible is a method, hence each item in the list is followed by one or two parentheses.  jshell> name3. \/\/ Press the TAB key charAt( chars() codePointAt( codePointBefore( codePointCount( codePoints() compareTo( compareToIgnoreCase( concat( contains( contentEquals( describeConstable() endsWith( equals( equalsIgnoreCase( formatted( getBytes( getChars( getClass() hashCode() indent( indexOf( intern() isBlank() isEmpty() lastIndexOf( length() lines() matches( notify() notifyAll() offsetByCodePoints( regionMatches( repeat( replace( replaceAll( replaceFirst( resolveConstantDesc( split( startsWith( strip() stripIndent() stripLeading() stripTrailing() subSequence( substring( toCharArray() toLowerCase( toString() toUpperCase( transform( translateEscapes() trim() wait( jshell> name3.  As you can see by the list, Java provides a rich set of methods and functionalities in the String class, making it powerful and versatile for working with text and string manipulation. Here are some commonly used methods and functionalities of the String class:   Common String methods   Retrieving string length: int length = myString.length();  Comparing strings:  boolean isEqual = myString1.equals(myString2);  Concatenating strings:  char concat = myString1.concatenate(myString2);  Accessing characters:  char firstChar = myString.charAt(idx);  Extracting substrings:  String substring = myString.substring(startIdx, endIdx);  Finding substring:  int index = myString.indexOf(subStr);  Converting case:  String lowercase = myString.toLowerCase();  Converting case:  String uppercase = myString.toUpperCase();  Replacing substrings:  String replaced = myString.replace(oldValue, newValue);  Removing whitespace:  String trimmed = myString.trim(response);    To compare the content of two Strings, you should use the equals() method instead of the == operator. The equals() method compares the two Strings character-by-character, while the == operator checks if the two String references point to the same memory location. Using == to compare Strings is rarely what you want to do. Use it only if you understand the difference. Otherwise, .equals() is the better choice.    String Examples  The following program which demonstrates several String methods.  \/\/ StringExample.java public class StringExample { public static void main(String[] args) { String part1 = new String(\"Anti\"); \/\/ String constructor String part2 = \"disestablishmentarianism\"; \/\/ String literal String word = part1.concat(part2); \/\/ Concat Strings \/\/ Get word length int len = word.length(); System.out.println(word + \" has \" + len + \" characters\"); \/\/ Get character at an index (starts at 0) char first = word.charAt(0); char last = word.charAt( word.length() - 1 ); System.out.println(\"The first character is \" + first); System.out.println(\"The lst character is \" + last); \/\/ Find a substring int idx = word.indexOf(\"dis\"); System.out.println(\"The substring 'dis' starts at index \" + idx); \/\/ Replace substrings String newWord = word.replace(\"Anti\", \"Pro\"); System.out.println(\"The new word is \" + newWord); } }  Compile and run the program.  javac StringExample.java java StringExample  Antidisestablishmentarianism has 28 characters The first character is A The lst character is m The substring 'dis' starts at index 4 The new word is Prodisestablishmentarianism   Some things to note.  The .concate() method of String does the same job as the + operator with String operands. You may nest .concat() invocations.  The index of the first character is 0. Passing 0 to the .charAt(0) method returns 'A' . To get the last character, we must pass an index equal to length() - 1. If the first index is 0, then the last index must be 1 less than the length. This is a general rule in Java. All indexes start at 0 .     "
},
{
  "id": "p-274",
  "level": "2",
  "url": "section-jp-string.html#p-274",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "object instance class "
},
{
  "id": "p-275",
  "level": "2",
  "url": "section-jp-string.html#p-275",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "new constructor new "
},
{
  "id": "listing-4",
  "level": "2",
  "url": "section-jp-string.html#listing-4",
  "type": "Listing",
  "number": "3.3.1",
  "title": "",
  "body": " Two ways to create String objects.   \/\/ Strings.java public class Strings { public static void main(String[] args) {\/\/ Start execution here String name1, name2; \/\/ Declare variables name1 = \"Athos\"; \/\/ Assign String literal name2 = new String(\"Porthos\"); \/\/ Invoke String constructor System.out.println(name1 + \" and \" + name2); } }   "
},
{
  "id": "p-276",
  "level": "2",
  "url": "section-jp-string.html#p-276",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "new "
},
{
  "id": "p-278",
  "level": "2",
  "url": "section-jp-string.html#p-278",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot operator "
},
{
  "id": "table-21",
  "level": "2",
  "url": "section-jp-string.html#table-21",
  "type": "Table",
  "number": "3.3.3",
  "title": "Common String methods",
  "body": " Common String methods   Retrieving string length: int length = myString.length();  Comparing strings:  boolean isEqual = myString1.equals(myString2);  Concatenating strings:  char concat = myString1.concatenate(myString2);  Accessing characters:  char firstChar = myString.charAt(idx);  Extracting substrings:  String substring = myString.substring(startIdx, endIdx);  Finding substring:  int index = myString.indexOf(subStr);  Converting case:  String lowercase = myString.toLowerCase();  Converting case:  String uppercase = myString.toUpperCase();  Replacing substrings:  String replaced = myString.replace(oldValue, newValue);  Removing whitespace:  String trimmed = myString.trim(response);   "
},
{
  "id": "p-288",
  "level": "2",
  "url": "section-jp-string.html#p-288",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "All indexes start at 0 "
},
{
  "id": "section-jp-scanner",
  "level": "1",
  "url": "section-jp-scanner.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Scanner Class",
  "body": " The Scanner Class  The Scanner utility class provided by Java is useful for reading user responses from an input stream, such as the terminal or a file. When reading from the terminal, a Scanner will wait until the user enters a token and presses the Enter or Return key. Not only can Scanner read a response as text, but it also can parse a response and return a particular data type, when you know what to expect. A Scanner reads one token at a time. By default, tokens are delineated with spaces. We'll use the Scanner class to make our terminal programs interactive.   Instantiating a Scanner  The first thing to note is that, unlike String , the Scanner class is not available in Java by default. It first must be imported from the library that comes with the JDK. This is done by adding the following line to the top of your Java program.  import java.util.Scanner;  Instantiating a Scanner class follows the same pattern as other classes, using the new keyword. The Scanner constructor needs a parameter that tells it where to read responses. The terminal can be read using the precreated object at System.in . Compare this to the Java print statement System.out.println(...) , which writes to the terminal. Following the standard constuctor syntax and using the System.in constructor parameter, we can declare a new Scanner variable and initialize it by instantiating a new Scanner object using the following statement.  Scanner scnr = new Scanner(System.in);    Scanner Methods  Scanner provides a variety of methods to read data from the terminal and even check if there is data to read before reading. The followng table describes many of these methods.   Common Scanner Methods    Method  Returns  Description    hasNext()  boolean  true if there is another token to read    hasNextBoolean()  boolean  true if there is a boolean waiting to be read    hasNextInt()  boolean  true if there is a int waiting to be read    hasNextDouble()  boolean  true if there is a double waiting to be read    hasNextLine()  boolean  true if there is a line in the input waiting to be read    next()  String  Read and return the next token as a String    nextLine()  String  Read and return the next complete line of text as a String    nextBoolean()  boolean  Read the next token as a boolean and return    nextInt()  int  Read the next token as an int and return    nextDouble()  double  Read the next token as a double and return    close()  void  Close when done to prevent resource leak.       Scanner Examples  The following program demonstrates how to instantiate a Scanner object and invoke its methods. We add an initial interactive step to our first Java Program in . Once again, we are using the distanceBetween() method twice to compute and sum the distance between the first two points and the second two points. Don't forget to close() the Scanner to avoid a resource leak. Closing a Scanner sets a flag in the object so other parts of your code knows it is not safe to read, it closes any underlying resource that it may be using, and it also makes it suitable for garbage collection to avoid memory leaks, a concept that we will investigate in more detail later. Also note that you may close an already closed Scanner multiple times -- no harm is done.   \/\/ InteractiveDistance.java import java.util.Scanner; \/\/ Import java.util.Scanner public class InteractiveDistance { public static void main(String[] args) { \/\/ Computation starts here double x1, y1, x2, y2, x3, y3; \/\/ Create a Scanner object that reads from the terminal Scanner scnr = new Scanner(System.in); \/\/ Prompt the user for two points System.out.print(\"Please enter x1 y1: \"); x1 = scnr.nextDouble(); y1 = scnr.nextDouble(); System.out.print(\"Please enter x2 y2: \"); x2 = scnr.nextDouble(); y2 = scnr.nextDouble(); System.out.print(\"Please enter x3 y3: \"); x3 = scnr.nextDouble(); y3 = scnr.nextDouble(); \/\/ Close the scanner scnr.close(); \/\/ Reuse the method to calculate and sum two distances double dist1 = distanceBetween(x1, y1, x2, y2); double dist2 = distanceBetween(x2, y2, x3, y3); System.out.println(\"Total distance: \" + (dist1+dist2)); } \/\/ New method that encapsulates the distance formula computation \/\/ Parameters are four doubles representing the two point coordinates public static double distanceBetween(double x1, double y1, double x2, double y2) { double term1 = Math.pow(x1-x2, 2); \/\/ Compute temporary terms double term2 = Math.pow(y1-y2, 2); \/\/ Apply the distance formula double distance = Math.sqrt( term1 + term2 ); \/\/ Return the computed distance return distance; } }   Compile, run, and enter data into your program. As you'll see, using the Scanner object to read data from the terminal is a great way to make your programs more useful. By reading in data values, the computations performed by your programs will be more generally applicable.   javac InteractiveDistance.java java InteractiveDistance  Please enter x1 y1: 0.0 20.0 Please enter x2 y2: 30.0 0.0 Please enter x3 y3: 40.0 10.0 Total distance: 50.19764837837084    "
},
{
  "id": "p-290",
  "level": "2",
  "url": "section-jp-scanner.html#p-290",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "new "
},
{
  "id": "table-jp-scanner-methods",
  "level": "2",
  "url": "section-jp-scanner.html#table-jp-scanner-methods",
  "type": "Table",
  "number": "3.4.1",
  "title": "Common Scanner Methods",
  "body": " Common Scanner Methods    Method  Returns  Description    hasNext()  boolean  true if there is another token to read    hasNextBoolean()  boolean  true if there is a boolean waiting to be read    hasNextInt()  boolean  true if there is a int waiting to be read    hasNextDouble()  boolean  true if there is a double waiting to be read    hasNextLine()  boolean  true if there is a line in the input waiting to be read    next()  String  Read and return the next token as a String    nextLine()  String  Read and return the next complete line of text as a String    nextBoolean()  boolean  Read the next token as a boolean and return    nextInt()  int  Read the next token as an int and return    nextDouble()  double  Read the next token as a double and return    close()  void  Close when done to prevent resource leak.    "
},
{
  "id": "p-292",
  "level": "2",
  "url": "section-jp-scanner.html#p-292",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "garbage collection "
},
{
  "id": "section-jp-random",
  "level": "1",
  "url": "section-jp-random.html",
  "type": "Section",
  "number": "3.5",
  "title": "The Random Class",
  "body": " The Random Class  Another useful class provided by the JDK is Random . This class gives you the ability to generate pseudorandom numbers. The Random class is a great example of encapsulation in object oriented programming. Performing high quality pseudorandom number generation can be tricky. I should not need to implement an algorithm when high quality an thoroughly debugged algorithms exist already. I can understand what the algorithm produces without knowing the specific details for how the algorithm works. The Random class encapsulates these algorithms and exposes them using simple methods. Let's explore a bit more of what Random can do.   Instantiating a Random Object  Pseudorandom numbers are just that -- not truly random, but rather an approximation of true randomness. While they appear random, that are generated in a well-defined order using a deterministic algorithm. A sequence of pseudorandom numbers is repeated when it starts at the same seed value, which has type long . A Random object may be instantiated with a seed as the parameter, or with no parameters at all. If no seed is specified in the Random constructor, then one is selected for you, usually derived from current value of the running JVM's high-resolution time source.  Like Scanner , the Random class is not available automatically in java. It must first be imported from java.util.Random . A Random object is instantiated using the new keyword and the standard constructor syntax. Once instantiated, the Random object can be used to generate various types of random numbers.   Random constructor examples.   Random rnd1 = new Random(123L); \/\/ Create Random object with seed 123L Random rnd2 = new Random(); \/\/ Create Random object with automatic seed      Random Methods  Random object methods give us the ability to generate a variety of different random number types, selected from uniform and normal distributions. The following table describes many of these methods.   Several Random Methods    Method  Returns  Description    nextInt(int max)  int  Compute a uniformly distributed  pseudorandom int in [0, max) .  Inclusive of 0 but exclusive of max .    nextDouble()  double  Compute a uniformly distributed  pseudorandom double in [0.0, 1.0) .    nextBoolean()  boolean  Compute an equally distributed  pseudorandom boolean in {true, false} .    nextGaussian()  double  Compute a normally distributed  pseudorandom double with mean 0.0  and standard deviation 1.0    setSeed(long seed)  void  Reset the seed of the pseudorandom  number generator.       Random Example  In the following example program we create a Random object and assign it to the variable rnd . Then we use the object to test the .nextInt(...) , .nextDouble() , and .nextGaussian() methods. Note that we are invoking the version of .nextInt(...) that takes a single int argument. This argument will be the exclusive maximum of the random number range, with 0 being the inclusive minimum. In other words, the method invocation rnd.nextInt(10) , we generate integer numbers from 0, 1, 2 ... 9, but never the number 10.  Random method examples.   \/\/ RandomExample.java import java.util.Random; public class RandomExample { public static void main(String[] args) { int i1, i2; double x1, x2, x3; Random rnd = new Random(); \/\/ Pseudorandom ints in range [0, 10) \/\/ The value 10, is out of range i1 = rnd.nextInt(10); i2 = rnd.nextInt(10); System.out.println(i1 + \", \" + i2); \/\/ Pseudorandom doubles in range [0.0, 1.0) x1 = rnd.nextDouble(); x2 = rnd.nextDouble(); System.out.println(x1 + \", \" + x2); \/\/ Pseudorandom double with mean 0.0 \/\/ and standard deviation 1.0 x1 = rnd.nextGaussian(); x2 = rnd.nextGaussian(); x3 = rnd.nextGaussian(); System.out.println(x1 + \", \" + x2 + \", \" + x3); } }     javac RandomExample.java java RandomExample  3, 2 0.46419492484058866, 0.7672336564431435 -0.539505561690596, 0.3820743615836469, 1.5448345622446626    java RandomExample  8, 4 0.4287714292408068, 0.8200307030697347 0.39003589589258647, 0.609691139278949, -0.3421636964155645    java RandomExample  9, 0 0.06465674365837526, 0.6659245501706238 0.6516158074847989, -0.678154539495678, -0.7702039482811629   While the Random object methods give us the basis for generating pseudorandom numbers, practical applications will require us to modify the range within which the numbers are generated to suit our application requirements. Specifically, we'll often need to scale random number ranges to make them wider or more narrow, and we'll often have to translate (shift) ranges to higher and lower values. It is fortunate that the pseudorandom number generator methods include 0 at one end of the range of generated numbers. As you'll see, this is convenient when manipulating these numeric ranges.  The easist way to scale and translate pseudorandom number ranges is to operate on their lower and higher bounds. If we modify the bounds correctly, the inner values of the range will follow. For example, we can easily modify the width of a range by multiplying values generated by a suitable scale factor. For example, if we are interested in a pseudorandom double in the range [0.0, 2.0) we would simply multiply values returned from .nextDouble() by 2.0, as follows. We know that the new generated values will fall in the range [0.0, 2.0).       Similarly, we can add a constant to a range to translate it to a new location.  Consider the following examples. In all cases assume rnd is a previously instantiated Random object.   Write a Java expression that returns a uniformly distributed double in the range [-1.0, 1.0).  First multiply the range by a suitable scale factor, then shift by subtracting a suitable constant.   2.0 * rnd.nextDouble() - 1.0     Write a Java expression that returns a uniformly distributed int in the range [1, 10].  Watch out for the upper bound; it is inclusive of 10. Also note that the range includes 10 integers, and is shifted by 1.   rnd.nextInt(10) + 1     Write a Java expression that returns a uniformly distributed int in the range [-10, -5].  Watch out for the lower bound; it is inclusive of -10. The range includes 6 integers and is shifted. Multiplying by a negative number causes the bounds of a range to swap roles.   rnd.nextInt(6) - 10 or -5 - rnd.nextInt(6)     Write a Java expression that returns a normally distributed double with mean 5.0 and standard deviation of 2.0.  Multiply to scale range to width of standard deviation and add a constant to translate to mean.   rnd.nextGaussian()*2.0 + 5.0     "
},
{
  "id": "p-295",
  "level": "2",
  "url": "section-jp-random.html#p-295",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "new "
},
{
  "id": "listing-jp-random-constructor",
  "level": "2",
  "url": "section-jp-random.html#listing-jp-random-constructor",
  "type": "Listing",
  "number": "3.5.1",
  "title": "",
  "body": " Random constructor examples.   Random rnd1 = new Random(123L); \/\/ Create Random object with seed 123L Random rnd2 = new Random(); \/\/ Create Random object with automatic seed   "
},
{
  "id": "table-23",
  "level": "2",
  "url": "section-jp-random.html#table-23",
  "type": "Table",
  "number": "3.5.2",
  "title": "Several <code class=\"code-inline tex2jax_ignore\">Random<\/code> Methods",
  "body": " Several Random Methods    Method  Returns  Description    nextInt(int max)  int  Compute a uniformly distributed  pseudorandom int in [0, max) .  Inclusive of 0 but exclusive of max .    nextDouble()  double  Compute a uniformly distributed  pseudorandom double in [0.0, 1.0) .    nextBoolean()  boolean  Compute an equally distributed  pseudorandom boolean in {true, false} .    nextGaussian()  double  Compute a normally distributed  pseudorandom double with mean 0.0  and standard deviation 1.0    setSeed(long seed)  void  Reset the seed of the pseudorandom  number generator.    "
},
{
  "id": "listing-jp-randomexmaple",
  "level": "2",
  "url": "section-jp-random.html#listing-jp-randomexmaple",
  "type": "Listing",
  "number": "3.5.3",
  "title": "",
  "body": " Random method examples.   \/\/ RandomExample.java import java.util.Random; public class RandomExample { public static void main(String[] args) { int i1, i2; double x1, x2, x3; Random rnd = new Random(); \/\/ Pseudorandom ints in range [0, 10) \/\/ The value 10, is out of range i1 = rnd.nextInt(10); i2 = rnd.nextInt(10); System.out.println(i1 + \", \" + i2); \/\/ Pseudorandom doubles in range [0.0, 1.0) x1 = rnd.nextDouble(); x2 = rnd.nextDouble(); System.out.println(x1 + \", \" + x2); \/\/ Pseudorandom double with mean 0.0 \/\/ and standard deviation 1.0 x1 = rnd.nextGaussian(); x2 = rnd.nextGaussian(); x3 = rnd.nextGaussian(); System.out.println(x1 + \", \" + x2 + \", \" + x3); } }   "
},
{
  "id": "table-24",
  "level": "2",
  "url": "section-jp-random.html#table-24",
  "type": "Table",
  "number": "3.5.4",
  "title": "",
  "body": "      "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-jp-random.html#example-1",
  "type": "Example",
  "number": "3.5.5",
  "title": "",
  "body": " Write a Java expression that returns a uniformly distributed double in the range [-1.0, 1.0).  First multiply the range by a suitable scale factor, then shift by subtracting a suitable constant.   2.0 * rnd.nextDouble() - 1.0   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-jp-random.html#example-2",
  "type": "Example",
  "number": "3.5.6",
  "title": "",
  "body": " Write a Java expression that returns a uniformly distributed int in the range [1, 10].  Watch out for the upper bound; it is inclusive of 10. Also note that the range includes 10 integers, and is shifted by 1.   rnd.nextInt(10) + 1   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-jp-random.html#example-3",
  "type": "Example",
  "number": "3.5.7",
  "title": "",
  "body": " Write a Java expression that returns a uniformly distributed int in the range [-10, -5].  Watch out for the lower bound; it is inclusive of -10. The range includes 6 integers and is shifted. Multiplying by a negative number causes the bounds of a range to swap roles.   rnd.nextInt(6) - 10 or -5 - rnd.nextInt(6)   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-jp-random.html#example-4",
  "type": "Example",
  "number": "3.5.8",
  "title": "",
  "body": " Write a Java expression that returns a normally distributed double with mean 5.0 and standard deviation of 2.0.  Multiply to scale range to width of standard deviation and add a constant to translate to mean.   rnd.nextGaussian()*2.0 + 5.0   "
},
{
  "id": "section-jp-concepts",
  "level": "1",
  "url": "section-jp-concepts.html",
  "type": "Section",
  "number": "3.6",
  "title": "Key Concepts",
  "body": " Key Concepts   Java program files must have the extension .java .  The root name of a Java program file must match the name of the public class defined in that file.  All Java program files must start with the definition of a public class.  A class can act as the starting point for execution only if it has implemented a method with the signature public static void main(String[] args) .  The javac terminal command is used to compile a Java program by passing it the name of a Java source code file.  The java terminal command is used to run compiled Java programs by passing it the name of a compile class that implements a public static void main(String[] args) method.  Both javac and java commands are installed with the JDK.  Other methods may be defined in a class that encapsulate and execute an arbitrary number of Java statements.  Naming a method with the higher level concept that it implements and defining it to take any necessary parameters to perform its computationis a good example of abstaction in object oriented programming.  Java rarely needs whitespace to be used when writing source code. Nevertheless, use whitespace to format your source code so that it is easy to understand. This is an obligation of all programmers.  All new objects may be instantiated in Java by invoking its constructor using the new keyword.  In spite of having a literal notation, String is a class that may be instantiated using its constructor and the new keyword.  An object's encapsulated behavior is accessed by adding the dot-operator ( . ) after an object and them a field or method name.  String objects have many methods that you may invoke to operate on a String's internal data.  String objects are immutable . All modifications to a String object's internal data results in the creation of a new String object.  The Scanner class is a utility that is provided by Java in its Core Library for reading data from an input stream like a file or the terminal. The input stream to read is specified as an argument to the Scanner constructor.  The Scanner class is installed with the Java Core Library.  The Scanner class is not available by default. You must import it first from the Core Library by adding the following command to the top of your Java program file: import java.util.Scanner; .  The Scanner class has many useful methods for testing if there is input waiting to be read from its input stream and for reading and parsing input tokens to a desired data type.  Remember to invoke the Scanner object's .close() method when done using it to avoid resource leakage.  The Scanner is very useful for making your programs more generally useful by reading input data before performing calculations.  Random is another useful class provided in the Java Core Library that generates pseudorandom numbers.  Like Scanner , to use Random you must first invoke import java.util.Random; at the top of your source code file.  The Random class a constructor has many useful methods for generating random numbers drawn from uniform and normal distributions.  Pseudorandom numbers generated may have a boolean type or different primitive numerical types.  To be useful in practical applications, the range of pseudorandom numbers generated often must be scaled and translated.   "
},
{
  "id": "section-jp-exercises",
  "level": "1",
  "url": "section-jp-exercises.html",
  "type": "Section",
  "number": "3.7",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-dp-doodlepad",
  "level": "1",
  "url": "section-dp-doodlepad.html",
  "type": "Section",
  "number": "4.1",
  "title": "DoodlePad Library",
  "body": " DoodlePad Library  Below you'll find a complete Java program that uses the DoodlePad library to create a graphics window (encapsulated as a Pad object) and instantiate an Oval object. Once you compile and run your program, you will see a window like that shown in the figure on the right. This simple program demonstrates how DoodlePad removes the detail of the underlying windowing libraries allowing you to focus on learning Java and object oriented programming. Other than the include statement added to the top of the program, we simply instantiated an Oval object, and the rest was handled automatically.   A DoodlePad Pad window object with an Oval object    \/\/ MyFirstOval.java import doodlepad.*; public class MyFirstOval { public static void main(String[] args) { Oval oval1 = new Oval(); } }      As we've seen, the import statement is necessary to load classes from external libraries that are not included in Java by default. The DoodlePad library (certainly) is not distributed with the JDK and therefore must be downloaded separately. Fortunately, this library is distributed as a single file named  doodlepad.jar and is freely available for you to download and use. The file extension JAR is a clever shorthand for the term Java ARchive . In fact, a JAR file is just a zip archive. Go ahead and use your favorite zip utility to open the file and peer into its contents. What you'll see is a list of .class files, which we know are compiled Java files. The doodlepad.jar file is just a zip archive of precompiled Java classes.  Unlike the classes that are included in the Java Platform, when compiling and running a program that uses DoodlePad classes, you must tell Java where to find them on your filesystem. That is, you must tell Java where to look for the doodlepad.jar file. Once it knows where to find these classes, the Java compiler will compile your program and check that you are using these classes in accordance with their exposed public interfaces. The Java runtime will bring it all to life as a running program.  Most editors and Java programming environments provide ways to create projects that reference libraries so compiling and running is convenient. Here we will not use any special editor. Instead we use the commandline approach provided by the JDK shell commands to demonstrate how to compile and run programs that make use of the DoodlePad class library. We want to demonstrate how to use the library independent of any specific editor.  So, our core goal is to tell Java where to find our class libraries (i.e. our .class and .jar files). Both the javac command and the java command allow the addition of several options when executed. We want to use the --class-path option which informs the command which file system path to search for class libraries. This option can be shortened to -cp for convenience.  You may want to store all your JAR files in a common location on your file system, or take some other organizational approach. In the following example, we assume you have downloaded the  doodlepad.jar file and saved it to the same folder as your Java program. One word of caution. Many web browers consider JAR files to be dangerous, and rightly so. They contain executable code. Your browser may refuse to download the doodlepad.jar file until you give special permission to do so. This file is not executable. It contains only libraries to be used by other programs.  Let's assume you want to compile and run the MyFirstOval.java program given above. You already have the following two files in your folder: MyFirstOval.java and doodlepad.jar . Open a terminal window running your shell program and make sure the current directory is set to the folder containing your files. To compile your program execute the following command.  javac -cp doodlepad.jar MyFirstOval.java  If all goes well, the compilation will finish and you will have a MyFirstOval.class file in your folder. If you see errors, double-check that the files are in your folder and that your shell has the current directory set to the same folder.  The syntax for running the program will depend upon your operating system and shell. The reason being that you will use a separator character in your Java command, and that character is different between Windows and macOS\/Linux. On Windows, the separator character is semicolon ( ; ) and on macOS and Linux it is colon ( : ). In your java command you want Java to look for classes both in the current folder, which is specified by the special . character, as well as in the doodlepad.jar file. The MyFirstOval.class file is saved in the current folder while the DoodlePad class files are in the doodlepad.jar archive. The command to run your program on macOS or Linux is as follows. Note the use of the : character to separate the current folder path ( . ) and the doodlepad.jar archive. Also recall that the last argument is the class at which to start execution -- the class having a public static void main(String[] args) static method implemented.  java -cp .:doodlepad.jar MyFirstOval  On Windows using the Command Prompt, use the following command syntax, which is the same as above except the path separator is now ; .  java -cp .;doodlepad.jar MyFirstOval  If using PowerShell on Windows, note that ; character is used by the PowerShell language to terminal statements. We must escape the ; character to ensure that it is not used by PowerShell, but instead is passed through unmodified to Java. To escape any character in PowerShell, preceded the character with a backtick ( ` ). The syntax for running a Java program while specifying a class path in PowerShell is as follows. Note the use of the backtick ( ` ) to escape the semicolon character ( ; ).  java -cp .`;doodlepad.jar MyFirstOval  If successful, you will see a window like that in .  If you plan to use DoodlePad classes in your examples (which I strongly encourage), make sure you have these details mastered and that you are able to compile and run a DoodlePad program like MyFirstOval.java on the operating system and shell of your choice. There is quite a bit of fun to come while writing interactive graphics program that make use of the DoodlePad library.  "
},
{
  "id": "figure-dp-oval",
  "level": "2",
  "url": "section-dp-doodlepad.html#figure-dp-oval",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " A DoodlePad Pad window object with an Oval object    \/\/ MyFirstOval.java import doodlepad.*; public class MyFirstOval { public static void main(String[] args) { Oval oval1 = new Oval(); } }     "
},
{
  "id": "p-309",
  "level": "2",
  "url": "section-dp-doodlepad.html#p-309",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Java ARchive "
},
{
  "id": "section-dp-model",
  "level": "1",
  "url": "section-dp-model.html",
  "type": "Section",
  "number": "4.2",
  "title": "Drawing Model",
  "body": " Drawing Model  In DoodlePad a Pad object encapsulates the graphic window on which zero or more graphics objects may be drawn. In fact, a Pad is a kind of container that holds graphic objects. Graphic objects may be created and added to a Pad. (See diagram). You may create more than one Pad object in a single DoodlePad program, but at least one Pad is required.   An interesting feature of DoodlePad is that if you do not explicitly create a Pad object, one will be created for you. This is a good example of DoodlePad's core design philosophy, which is to automatically provide missing components and default parameters as necessary so that your program runs successfully right off the bat :-) . You need to create only an instance of a graphic object; DoodlePad will create a default Pad for you automatically and add your object to the Pad.    DoodlePad Drawing Model     Of course, you may create one or more Pad objects yourself and add graphic objects to them selectively. In fact, this may be necessary in order to achieve the goals of your particular program. You may also create graphic objects that are not automatically placed in a Pad container. This is accomplished using the appropriate graphic object constructor and specifying a null pad. At a later time your graphic objects may be added to or removed from Pads using standard methods.  Many of the examples that follow will illustrate how to create one or more Pad objects manually, and how to add and\/or remove graphic objects from a Pad.    Drawing Coordinates     By default, distances on a Pad are measured in pixels. While x-coordinate values increase from left to right, y-coordinate values increase from top to bottom. As a result, the origin (0,0) in located in the upper left corner of the Pad window. The coordinate system of a Pad window and each individual graphic object may be modified using affine transformations. This technique is discussed in more detail later.   "
},
{
  "id": "figure-dp-model",
  "level": "2",
  "url": "section-dp-model.html#figure-dp-model",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " DoodlePad Drawing Model   "
},
{
  "id": "figure-dp-coordinates",
  "level": "2",
  "url": "section-dp-model.html#figure-dp-coordinates",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " Drawing Coordinates   "
},
{
  "id": "section-dp-shapes",
  "level": "1",
  "url": "section-dp-shapes.html",
  "type": "Section",
  "number": "4.3",
  "title": "Creating Shapes",
  "body": " Creating Shapes   In we created our first Oval object. We used the Oval class constructor that takes no arguments. every Shape in DoodlePad has a nullary (no-argument) constructor for convenience. For all Shapes, the nullary constructor chooses the initial location of the Shape to be random (using a Random object) and sets the width and height to 100. Alternative Shape constructors let use set the location and size as parameters.  DoodlePad defines a variety of graphic objects that you can instantiate and interact with, including basic shapes. Available basic shape classes include the following. Don't miss other DoodlePad classes such as Polygon , Pad , Path , Image , Text , Sprite and more.   Basic Shapes    Shape  Description    Rectangle  Your garden variety Rectangle    Oval  Another name for an Ellipse    RoundRect  A Rectangle with rounded corners    Line  A straight line between two points    Arc  A curved line that is part of an ellipse       Rectangle  Rectangles are one of the more simple shapes in DoodlePad. Creating a new Rectangle is as simple as creating an instance of the Rectangle class. The Rectangle class's nullary constructor creates a 100 pixel × 100 pixel Rectangle at a randomly selected location, but other Rectangle constructors give you more control of the Rectangle created. For example, the following sample program creates a 70 pixel × 40 pixel Rectangle with its upper left corner at the location (50, 60).  \/\/ RectangleDemo1.java import doodlepad.*; public class RectangleDemo1 { public static void main(String[] args) { Rectangle r1 = new Rectangle(50, 60, 70, 40); } }  The Rectangle size and location are passed as numerical arguments to the Rectangle constructor. The first pair of arguments correspond to the Rectangle location (x=50, y=60) and the second pair correspond to its size (width=70, height=40). This is a pattern that is repeated in many graphic object constructors in DoodlePad.    Oval  Creating an Oval is very similar to creating a Rectangle. An Oval's nullary constructor creates a new 100 pixel × 100 pixel ellipse Shape with a randomly selected starting location. An Oval also has a four-argument constructor similar to a Rectangle. The first two arguments of this constructor are the x and y coordinates of the upper left corner of the Oval's bounding box and the second two arguments are the Oval's width and height. Note that the four numerical argument values of this Oval constructor can be thought of as describing the bounding box within which the Oval is be created.  The only difference between the following example program and the previous example is that the following sample program creates a 70 pixel × 40 pixel Oval with its upper left corner at the location (50, 60) isntead of a Rectangle.  \/\/ OvalDemo1.java import doodlepad.*; public class OvalDemo1 { public static void main(String[] args) { Oval r1 = new Oval(50, 60, 70, 40); } }    RoundRect   The RoundRect class differs from Rectangle in that the corners of a RoundRect are, well, rounded. In addition to specifying the location and size of a RoundRect, you must also specify the width and height of the arcs that form the rounded corners. These additional parameters are called arcWidth and arcHeight and come after x-location, y-location, width and height in the RoundRect constructor.    RoundRect Measurements     In the following example we create a RoundRect object at (10, 10) with width = 200, height = 150, arcWidth and arcHeight = 30. The diagram on the right illustrates how these parameters are used to define the shape. Note that the arcWidth and arcHeight parameters are not required to have equal values.    \/\/ RoundRectDemo1.java import doodlepad.*; public class RoundRectDemo1 { public static void main(String[] args) { RoundRect r1 = new RoundRect(10, 10, 200, 150, 30, 30); } }      Arc   The Arc shape class can be thought of as a pie-section taken from an Oval. In fact, to define an Arc one starts with the location and dimensions of an Oval and then adds the start and angular extent of the section to be taken. In DoodlePad these angles are defined with 0° indicated by a horizontal line extending from the center of the oval to the right. As the angle increases the line rotates in the counter clockwise direction.    Arc Measurements     The beginning of an arc is specified with an angle between 0° and 360°, and the length of the arc is determined by an angle that the arc sweeps. The arc itself follows the outline of the equivalent oval. The figure on the right describes the arc specified (in red) by the program below. The first four arguments of the Arc constructor are the same as an Oval (x, y, width, height). The last two parameters are the starting angle (startAngle) and the extent of the arc (arcAngle) measure in degrees.  When an arc is filled, it becomes a pie section, which can be filled and outlined to form a pie-shaped graphic object. When an arc is not filled, as is the case with the example below, only the segment of the equivalent Oval's outline is rendered.    \/\/ ArcDemo1.java import doodlepad.*; public class ArcDemo1 { public static void main(String[] args) { \/\/ Create the Arc starting at 45 degrees and extending for 90 degrees Arc a1 = new Arc(100, 100, 200, 200, 45, 90); \/\/ Do not fill the arc so only the arc is drawn. a1.setFilled(false); } }      Line  The Line shape is created by specifying its two endpoint coordinates. The Line constructor takes four values, (x1, y1, x2, y2), where (x1, y1) is the first endpoint and (x2, y2) is the second endpoint. The example below creates a diagonal Line shape between the endpoints (100, 100) and (200, 200).    \/\/ LineDemo1.java import doodlepad.*; public class LineDemo1 { public static void main(String[] args) { \/\/ Create a diagonal Line shape from (100, 100) and (200, 200) Line l1 = new Line(100, 100, 200, 200); } }      DoodlePad provides more ways to create Shape classes beyond those described in this chapter. If you'd like to skip ahead to investigate more complex techniques, have a look at Path Shapes , Polygon Shapes . Images , and Sprites .   "
},
{
  "id": "p-328",
  "level": "2",
  "url": "section-dp-shapes.html#p-328",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nullary "
},
{
  "id": "table-25",
  "level": "2",
  "url": "section-dp-shapes.html#table-25",
  "type": "Table",
  "number": "4.3.1",
  "title": "Basic Shapes",
  "body": " Basic Shapes    Shape  Description    Rectangle  Your garden variety Rectangle    Oval  Another name for an Ellipse    RoundRect  A Rectangle with rounded corners    Line  A straight line between two points    Arc  A curved line that is part of an ellipse    "
},
{
  "id": "figure-11",
  "level": "2",
  "url": "section-dp-shapes.html#figure-11",
  "type": "Figure",
  "number": "4.3.2",
  "title": "",
  "body": " RoundRect Measurements   "
},
{
  "id": "listing-7",
  "level": "2",
  "url": "section-dp-shapes.html#listing-7",
  "type": "Listing",
  "number": "4.3.3",
  "title": "",
  "body": "  \/\/ RoundRectDemo1.java import doodlepad.*; public class RoundRectDemo1 { public static void main(String[] args) { RoundRect r1 = new RoundRect(10, 10, 200, 150, 30, 30); } }   "
},
{
  "id": "figure-12",
  "level": "2",
  "url": "section-dp-shapes.html#figure-12",
  "type": "Figure",
  "number": "4.3.4",
  "title": "",
  "body": " Arc Measurements   "
},
{
  "id": "listing-8",
  "level": "2",
  "url": "section-dp-shapes.html#listing-8",
  "type": "Listing",
  "number": "4.3.5",
  "title": "",
  "body": "  \/\/ ArcDemo1.java import doodlepad.*; public class ArcDemo1 { public static void main(String[] args) { \/\/ Create the Arc starting at 45 degrees and extending for 90 degrees Arc a1 = new Arc(100, 100, 200, 200, 45, 90); \/\/ Do not fill the arc so only the arc is drawn. a1.setFilled(false); } }   "
},
{
  "id": "listing-9",
  "level": "2",
  "url": "section-dp-shapes.html#listing-9",
  "type": "Listing",
  "number": "4.3.6",
  "title": "",
  "body": "  \/\/ LineDemo1.java import doodlepad.*; public class LineDemo1 { public static void main(String[] args) { \/\/ Create a diagonal Line shape from (100, 100) and (200, 200) Line l1 = new Line(100, 100, 200, 200); } }   "
},
{
  "id": "section-dp-position-size",
  "level": "1",
  "url": "section-dp-position-size.html",
  "type": "Section",
  "number": "4.4",
  "title": "Shape Position and Size",
  "body": " Shape Position and Size  All graphic objects have a location and a size, where location is the upper left x-y coordinate of the object's bounding box and size is the width and height of the bounding box. A Shape object's bounding box is the smallest box that surrounds the Shape. If a Shape is set to be selectable, the light gray selection box drawn around the Shape while it is selected corresponds with the Shape's bounding box. All Shapes may be moved and sized by setting the location and size of its bounding box.   Position- and Size-related Methods  Shape implements a number of mutator and accessor methods that may be used to modify its location and size, as well as to interrogate its current location and size. In all cases the methods can be thought of a modifying the Shape's bounding box. The Shape itself is modified to fill the new bounding box. The manner in which the Shape's defining coordinates change depend upon the Shape.  One additional Shape method to note is move(double dx, double dy). This is a convenience method that moves the location of a Shape by dx in the x-direction and by dy in the y-direction. It is useful when you have the amount by which a Shape should move relative to its current location rather than the new absolute position of a Shape.  The following Shape methods permit a Shape's bounding box to be modified. These methods may be used on all Shape subclasses.   Shape size and location methods    Method  Description    public double getHeight()  Return the Shape's height.   public void setHeight(double height)  Set the height of the Shape.   public double getWidth()  Return the Shape's width.   public void setWidth(double width)  Set the width of the Shape.   public Dimension getSize()  Return the Shape's height and width as a Dimension object.   public void setSize(double width, double height)  Set both the width and height of the Shape.   public Point getLocation()  Return the location of the upper left corner of the Shape's bounding box as a Point object.   public void setLocation(double x, double y)  Set the coordinates of the upper left corner of teh Shape's bounding box.   public double getX()  Return the x-location of the upper left corner of the Shape's bounding box.   public void setX(double x)  Set the x-coordinate of the upper left corner of the Shape's bounding box.   public double getY()  Return the y-coordinate of the upper left corner of the Shape's bounding box.   public void setY(double y)  Set the y-coordinate of the upper left corner of the Shape's bounding box.   public Point getCenter()  Return the coordinates of the Shape's bounding box center.   public void setCenter(double cx, double cy)  Move the Shape so that its bounding box has specified center coordinates.   public void move(double dx, double dy)  Move a Shape by the distance (dx, dy).     "
},
{
  "id": "table-26",
  "level": "2",
  "url": "section-dp-position-size.html#table-26",
  "type": "Table",
  "number": "4.4.1",
  "title": "Shape size and location methods",
  "body": " Shape size and location methods    Method  Description    public double getHeight()  Return the Shape's height.   public void setHeight(double height)  Set the height of the Shape.   public double getWidth()  Return the Shape's width.   public void setWidth(double width)  Set the width of the Shape.   public Dimension getSize()  Return the Shape's height and width as a Dimension object.   public void setSize(double width, double height)  Set both the width and height of the Shape.   public Point getLocation()  Return the location of the upper left corner of the Shape's bounding box as a Point object.   public void setLocation(double x, double y)  Set the coordinates of the upper left corner of teh Shape's bounding box.   public double getX()  Return the x-location of the upper left corner of the Shape's bounding box.   public void setX(double x)  Set the x-coordinate of the upper left corner of the Shape's bounding box.   public double getY()  Return the y-coordinate of the upper left corner of the Shape's bounding box.   public void setY(double y)  Set the y-coordinate of the upper left corner of the Shape's bounding box.   public Point getCenter()  Return the coordinates of the Shape's bounding box center.   public void setCenter(double cx, double cy)  Move the Shape so that its bounding box has specified center coordinates.   public void move(double dx, double dy)  Move a Shape by the distance (dx, dy).   "
},
{
  "id": "section-dp-colors",
  "level": "1",
  "url": "section-dp-colors.html",
  "type": "Section",
  "number": "4.5",
  "title": "Colors",
  "body": " Colors   Color Components  Most DoodlePad Shape subclasses may be filled with one color and stroked (outlined) with a separate color. It is also possible to disable Shape fill or stroke, drawing empty shapes or shapes without an outline. Colors in DoodlePad are constructed from color components: red, green, and blue, and one transparency component called alpha. The value of each of the four components may be an integer in the range [0, 255].  Use the interactive widget below to explore how these four values combine to achieve a desired fill or stroke color. Drag the colored slider knobs up and down with the mouse to change a component's value. The color that results from combining the four components is shown in the rectangular swatch on the right. To illustrate transparency (alpha), behind the swatch there are three colored lines. Transparency is increased by decreasing the alpha component. When alpha is 0, the resulting color is completely transparent. When alpha is 255, the color is completely opaque. Drag the alpha slider up and down to see the impact on color.   Pure red, green or blue is achieved by setting the corresponding color component value to its maximum (255) and leaving the other two color color values at 0. Other colors are constructed from different combinations of the color components. All shades of gray, from black to white, are formed by setting the values of red, green, and blue to equal values between 0 and 255.  The following table lists the components of several named colors. Drag the sliders to values that match settings to see the named color.  Named Color Components    Name  Red  Green  Blue    Red  255  0  0    Green  0  128  0    Blue  0  0  255    Yellow  255  255  0    Orange  255  128  0    Cyan  0  255  255    Magenta  255  0  255    Lime  0  255  0    Chartreuse  127  255  0    Purple  128  0  128    Maroon  128  0  0    Teal  0  128  128    Navy  0  0  128    Black  0  0  0    White  255  255  255    Gray  128  128  128        Setting Fill and Stroke Color  Each Shape object's fill color and stroke color may be specified using color component values. There are two mutator methods for setting Shape color: setFillColor(...) and getStrokeColor(...) . These setter methods each have three overloads. The base method signature has four parameters, one for each of the four color components: red, green, blue and alpha. A second overloaded method has only three parameters, which specify red, green and blue components. In this case the alpha component is assumed to have a value of 255, meaning that the Shape color has no transparency. The third overloaded method has only one parameter, often called gray. In this case the parameter value is repeated for all three color components, and alpha once again is set to 255.    Fill And Stroke Color Examples   The following example program creates four shapes with various fill and stroke colors. The resulting Shape objects are shown in the image on the right. Note that the Oval is unfilled, so the underlying red Rectangle is visible. Also note that the filled Arc has a semi-transparent yellow fill, so the underlying Line is partially visible.    Stroke and fill colors       \/\/ Colors.java import doodlepad.*; public class Colors { public static void main(String[] args) { \/\/ Red Rectangle with no stroke Rectangle myRect = new Rectangle( 10, 55, 50, 40); myRect.setFillColor(255, 0, 0); myRect.setStroked(false); \/\/ Unfilled Oval with thick light gray stroke Oval myOval = new Oval(40, 50, 50, 50); myOval.setFilled(false); myOval.setStrokeColor(200); myOval.setStrokeWidth(5); \/\/ Gray Line with thick stroke Line myLine = new Line(80, 50, 120, 90); myLine.setStrokeColor(127); myLine.setStrokeWidth(10); \/\/ Semi-transparent yellow filled Arc with default stroke style Arc myArc = new Arc(100, 50, 50, 50, 30, 290); myArc.setFillColor(255, 255, 0, 127); } }      Color-related Methods  The following table lists all color-related Shape methods and their overloads with descriptions. Both setter and getter methods are listed.   Color-related Shape object methods    Method  Description    public void setFillColor(double red, double green, double blue, double alpha)   Set the color used to fill a Shape  by specifying all four color components.    public void setFillColor(double red, double green, double blue)   Set the color used to fill a Shape.  The alpha color component is set to 255,  meaning that the Shape fill is not transparent.    public void setFillColor(double gray)  Set the fill color of a Shape to a shade of gray. The single parameter value is used for red, green and blue. The alpha component is set to 255, meaning that the Shape fill is not transparent.    public int getFillRed()  Return the red fill color component.    public int getFillBlue()  Return the blue fill color component.    public int getFillGreen()  Retrun the green fill color component.    public int getFillAlpha()  Return the alpha fill color component indicating the degree to which the shape fill is transparent.    public java.awt.Color getFillColor()  Return the color used to fill a Shape as a java.awt.Color object.    public void setFilled(boolean filled)  Specify whether or not a Shape is to be filled with a color. If set to false the Shape will not be filled.    public boolean getFilled()  Return a boolean indicating whether or not the Shape is filled.    public void setStrokeColor(double red, double green, double blue, double alpha)  Set the color used to stroke (outline) a Shape by specifying al four color components    public void setStrokeColor(double red, double green, double blue)  Set the color used to outline a Shape. The alpha color component is set to 255, meaning that the Shape outline is not transparent.    public void setStrokeColor(double gray)  Set the color used to outline a Shape to a shade of gray. The single parameter value is used for red, green and blue. The alpha component is set to 255, meaning that the Shape outline is not transparent.    public int getStrokeRed()  Return the red outline color component.    public int getStrokeBlue()  Return the blue outline color component.    public int getStrokeGreen()  Return the green outline color component.    public int getStrokeAlpha()  Return the alpha outline color component indicating the degree to which the shape outline is transparent.    public java.awt.Color getStrokeColor()  Return the color used to outline a Shape as a java.awt.Color object.    public void setStroked(boolean filled)  Specify whether or not a Shape is to be outline with a color. If set to false the Shape will not be outlined.    public boolean getStroked()  Return a boolean indicating whether or not the Shape is outlined.     The Pad object also has a few color-related methods. These are used only for setting and getting the Pad's background color. The Pad has only two overloads for its method of setting background color. Because a Pad's color may not be transparent, no overload is available that includes an alpha parameter.   Color-related Pad object methods    Method  Description    public void setBackground(double red, double green, double blue)  Specify the color to use to fill the background of a Pad object. Only red, green and blue color components are specified because Pad objects may not be transparent.    public void setBackground(double gray)  Specify the shade of gray to use to fill the background of a Pad object. The single parameter value is used for red, green and blue.    public java.awt.Color getBackground()  Return the color used to fill the background of a Pad object as a java.awt.Color object.      "
},
{
  "id": "table-27",
  "level": "2",
  "url": "section-dp-colors.html#table-27",
  "type": "Table",
  "number": "4.5.1",
  "title": "Named Color Components",
  "body": " Named Color Components    Name  Red  Green  Blue    Red  255  0  0    Green  0  128  0    Blue  0  0  255    Yellow  255  255  0    Orange  255  128  0    Cyan  0  255  255    Magenta  255  0  255    Lime  0  255  0    Chartreuse  127  255  0    Purple  128  0  128    Maroon  128  0  0    Teal  0  128  128    Navy  0  0  128    Black  0  0  0    White  255  255  255    Gray  128  128  128    "
},
{
  "id": "figure-13",
  "level": "2",
  "url": "section-dp-colors.html#figure-13",
  "type": "Figure",
  "number": "4.5.2",
  "title": "",
  "body": " Stroke and fill colors   "
},
{
  "id": "listing-dp-color_example",
  "level": "2",
  "url": "section-dp-colors.html#listing-dp-color_example",
  "type": "Listing",
  "number": "4.5.3",
  "title": "",
  "body": "  \/\/ Colors.java import doodlepad.*; public class Colors { public static void main(String[] args) { \/\/ Red Rectangle with no stroke Rectangle myRect = new Rectangle( 10, 55, 50, 40); myRect.setFillColor(255, 0, 0); myRect.setStroked(false); \/\/ Unfilled Oval with thick light gray stroke Oval myOval = new Oval(40, 50, 50, 50); myOval.setFilled(false); myOval.setStrokeColor(200); myOval.setStrokeWidth(5); \/\/ Gray Line with thick stroke Line myLine = new Line(80, 50, 120, 90); myLine.setStrokeColor(127); myLine.setStrokeWidth(10); \/\/ Semi-transparent yellow filled Arc with default stroke style Arc myArc = new Arc(100, 50, 50, 50, 30, 290); myArc.setFillColor(255, 255, 0, 127); } }   "
},
{
  "id": "table-28",
  "level": "2",
  "url": "section-dp-colors.html#table-28",
  "type": "Table",
  "number": "4.5.4",
  "title": "Color-related Shape object methods",
  "body": " Color-related Shape object methods    Method  Description    public void setFillColor(double red, double green, double blue, double alpha)   Set the color used to fill a Shape  by specifying all four color components.    public void setFillColor(double red, double green, double blue)   Set the color used to fill a Shape.  The alpha color component is set to 255,  meaning that the Shape fill is not transparent.    public void setFillColor(double gray)  Set the fill color of a Shape to a shade of gray. The single parameter value is used for red, green and blue. The alpha component is set to 255, meaning that the Shape fill is not transparent.    public int getFillRed()  Return the red fill color component.    public int getFillBlue()  Return the blue fill color component.    public int getFillGreen()  Retrun the green fill color component.    public int getFillAlpha()  Return the alpha fill color component indicating the degree to which the shape fill is transparent.    public java.awt.Color getFillColor()  Return the color used to fill a Shape as a java.awt.Color object.    public void setFilled(boolean filled)  Specify whether or not a Shape is to be filled with a color. If set to false the Shape will not be filled.    public boolean getFilled()  Return a boolean indicating whether or not the Shape is filled.    public void setStrokeColor(double red, double green, double blue, double alpha)  Set the color used to stroke (outline) a Shape by specifying al four color components    public void setStrokeColor(double red, double green, double blue)  Set the color used to outline a Shape. The alpha color component is set to 255, meaning that the Shape outline is not transparent.    public void setStrokeColor(double gray)  Set the color used to outline a Shape to a shade of gray. The single parameter value is used for red, green and blue. The alpha component is set to 255, meaning that the Shape outline is not transparent.    public int getStrokeRed()  Return the red outline color component.    public int getStrokeBlue()  Return the blue outline color component.    public int getStrokeGreen()  Return the green outline color component.    public int getStrokeAlpha()  Return the alpha outline color component indicating the degree to which the shape outline is transparent.    public java.awt.Color getStrokeColor()  Return the color used to outline a Shape as a java.awt.Color object.    public void setStroked(boolean filled)  Specify whether or not a Shape is to be outline with a color. If set to false the Shape will not be outlined.    public boolean getStroked()  Return a boolean indicating whether or not the Shape is outlined.    "
},
{
  "id": "table-29",
  "level": "2",
  "url": "section-dp-colors.html#table-29",
  "type": "Table",
  "number": "4.5.5",
  "title": "Color-related Pad object methods",
  "body": " Color-related Pad object methods    Method  Description    public void setBackground(double red, double green, double blue)  Specify the color to use to fill the background of a Pad object. Only red, green and blue color components are specified because Pad objects may not be transparent.    public void setBackground(double gray)  Specify the shade of gray to use to fill the background of a Pad object. The single parameter value is used for red, green and blue.    public java.awt.Color getBackground()  Return the color used to fill the background of a Pad object as a java.awt.Color object.    "
},
{
  "id": "section-dp-events",
  "level": "1",
  "url": "section-dp-events.html",
  "type": "Section",
  "number": "4.6",
  "title": "Event-Driven Programming",
  "body": " Event-Driven Programming   Perhaps the most distinguishing feature of the DoodlePad library is the ease and extent to which it supports event driven programming. All DoodlePad Shape objects as well as the Pad object may be set up to invoke custom methods in response to a wide range of user interaction. For example, you may want the change the fill color of one or more shapes when the user hovers over the shape or clicks the shape with the mouse. Alternatively, you may want to move a Shape in specific direction when the user presses one of the arrow keys. The Pad object implements timer functionality that raises tick events at a user-specified rate. You may want to invoke one or more of your custom methods each time the Pad's timer ticks, which may be accomplished using the Pad's tick event.  By default, all Shape objects as well as Pad objects trigger a wide array of events. But sometimes you don't want a Shape or Pad object to react to events at all, allowing all interactions to be handled by the Shape object or Pad object underneath. For example, imagine a Happy Face made up of a large yellow Oval for the face, two smaller black Ovals for the eyes and an Arc for the smile. You might want the eyes and smile to ignore all mouse interaction so that only the underlying yellow face Oval detects all mouse interaction and triggers mouse events. Another use case occurs when you want to create a button with a label by placing a Text Shape over a RoundRect Shape. In this case you want the Text to ignore all mouse interaction and allow the underlying RoundRect to respond to the mouse. This is easily accomplished by disabling events on your top-level Shapes. Use the setEventsEnabled(...) method to disable or re-enable event triggering for any Shape object or any Pad object.  This ability to respond to mouse, keyboard, timer and other events allows DoodlePad to be used to develop a wide range of fun interactive graphics programs that are limited only by your imagination.    Connecting Events and Methods with Method References  The simplest way to invoke a method in response to an event is to connect the event associated with a given object to one of your methods. The most important prerequisite for making this connection is to ensure that your event handler method's signature matches what the event expects (by implementing the ShapeMouseEventHandler interface). Let's say you want to invoke a method when the user clicks on a Shape object of some kind. All mouse events, including the click event, requires that the method to be connected have the following four parameters in the given order:   Mouse Event Parameters    #  Type  Description    1.  Shape  The Shape object that initiated the mouse event    2.  double  The x-coordinate at which the event occurred    3.  double  The y-coordinate at which the event occurred    4.  int  A number identifying the mouse button used     For example, the following method may be invoked by a mouse event because it implements the necessary four parameter types in the specified order.    public void onPressed(Shape shp, double, x, double y, int button) { System.out.println(\"The mouse was pressed at coordinates (\" + x + \",\" + y + \")\"); }    Every Shape object in DoodlePad inherits a set of methods used to attach mouse events to a suitable method - one method for each mouse event type. Each Shape method takes a single argument: a reference to the method to be invoked when the event occurs. Method references were added to Java in version 8, which is why Java 8 is the minimum required by DoodlePad. Method references are constructed using the :: binary operator. On the left side of the operator is the name of a class or object that implements a method, and on the right side of the operator is the method to reference.  As an example, let's say your class implements the previous onPress method, and you would like to invoke this method when the mouse is pressed on an Oval Shape object, a reference to which was saved as an instance variable named myOval. The following statement establishes this connection, so that when the mouse is pressed on myOval the onPress method implemented by this will be invoked.    myOval.setMousePressedHandler( this::onPress );    The inherited setMousePressedHandler(...) method is what is used to establish the connection for mouse-pressed events.  Following is a complete program demonstrating event handing in DoodlePad using method references.   ToggleButton.java   \/\/ ToggleButton.java import doodlepad.*; \/\/ ToggleButton class public class ToggleButton { private RoundRect shpButton; \/\/ Button Shape private boolean on; \/\/ Button state \/\/ Constructor public ToggleButton() { \/\/ Create button shape and initialize shpButton = new RoundRect(100, 100, 75, 50, 20, 20); on = false; \/\/ Starts off shpButton.setFillColor(200); \/\/ Set button click event handler method shpButton.setMousePressedHandler(this::onPressed); } \/\/ Handle mouse-pressed event private void onPressed(Shape shp, double x, double y, int button) { toggle(); } \/\/ Toggle button public void toggle() { on = !on; \/\/ Flip state if (on) { \/\/ Update graphic shpButton.setFillColor(0, 255, 0); } else { shpButton.setFillColor(200); } } public static void main(String[] args) { \/\/ Create a new ToggleButton ToggleButton myButton = new ToggleButton(); } }     In this example we implement a simple graphical toggle button class named ToggleButton. For the button graphic we use a RoundRect Shape object. The ToggleButton class tracks its state using an on boolean instance variable. Its constructor creates the RoundRect object and initializes its fill color to gray and on = false implying the button is initially off. The constructor also uses the setMousePressedHandler(…) method to set the object's onPressed(…) method to be invoked when the RoundRect shape is pressed with the mouse. The onPressed(…) method invokes a toggle() method that flips the value of on and then resets the RoundRect fill color based on the current object state.    ToggleButton.java     The image on the right shows the output from running this example program and pressing the RoundRect Shape once with the mouse.    Shape Mouse Event-Related Methods  A wide variety of mouse events are captured and can be handled in a similar manner. Following is a list of all methods used to connect a mouse event with a Shape. Each method is used to associate a particular mouse event with a custom method. Each of the following methods takes a method reference as its only parameter. Each method reference must identify a method with a signature that matches the previously listed four parameter types in the given order, otherwise the compiler will complain.   Shape Mouse Event Methods    Method  Description    public void setMouseClickedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse is clicked on a Shape. A mouse-click event occurs when the mouse is pressed and released at the same location.    public void setMouseDoubleClickedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse is double-clicked on a Shape. A mouse-double-clicked event occurs when the mouse is pressed and released at the same location twice in succession.    public void setMousePressedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse is pressed on a Shape. A mouse-pressed event occurs when the mouse button is pressed while over a Shape.    public void setMouseReleasedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse is released on a Shape. A mouse-released event occurs when the mouse button is released while over a Shape.    public void setMouseMovedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when a mouse is moved on a Shape. A mouse-moved event occurs when the mouse is moved over a Shape while the mouse button is not pressed.    public void setMouseDraggedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse is dragged on a Shape. A mouse-dragged event occurs when the mouse is moved over a Shape while the mouse button is pressed.    public void setMouseEnteredHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse enters a Shape. A mouse-entered event occurs when the mouse is moved from a location outside the bounds of a Shape to a location within the bounds of a Shape.    public void setMouseExitedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse exits a Shape. A mouse-exited event occurs when the mouse is moved from a location within the bounds of a Shape to a location outside the bounds of a Shape.       Other Event-Related Shape Methods  Shapes triggers one additional event beyond the above list of mouse events. The selectionChanged event is triggered whenever the selection status of a Shape changes. For example, if the user clicks on a selectable Shape that is not already selected, the Shape becomes selected, which is indicated by a light gray rectangle drawn around the Shape. If a suitable event handler method is attached to the Shape's selectionChange event, then as the Shape becomes selected, the event method will be invoked, indicating the Shape object whose selection state changed as well as if the Shape is currently selected. Likewise, if another Shape is clicked causing the currently selected Shape to be unselected, the event handler method will once again be invoked.  Both the method reference and overriding methods of handling triggered selectionChanged events are supported. Event handler methods to be attached to the selectionChanged event trigger using the method reference approach must have a signature with two parameters: Shape and boolean. This implements the ShapeSelectionEventHandler interface. The first parameter indicates the Shape object whose selection changed, and the second parameter indicates if that Shape is currently selected (true) or not (false).  The following two methods are used for handling triggered selectionChanged events. The first method attaches an event handler using the method reference approach. Override the second method to handle the triggered event using the method overriding approach.   Shape Selection Event Methods    Method  Description    public void setSelectionChangedHandler(ShapeSelectionEventHandler handler)  Specify a suitable method to handle selectionChanged events triggered by a Shape object. The method reference must implement the signature defined by the ShapeSelectionEventHandler interface.    public void onSelectionChanged(boolean selected)  Override this method in a Shape subclass to handle selectionChanged events by overriding the base class method.       Pad Mouse Event-Related Methods   Pad Mouse Event-Related Methods    Method  Description    public void setMousePressedHandler(PadMouseEventHandler handler)  Assign an onMousePressed event handler using a method reference.    public void setMouseReleasedHandler(PadMouseEventHandler handler)  Assign an onMouseReleased event handler using a method reference.    public void setMouseMovedHandler(PadMouseEventHandler handler)  Assign an onMouseMoved event handler using a method reference.    public void setMouseClickedHandler(PadMouseEventHandler handler)  Assign an onMouseClicked event handler using a method reference.    public void setMouseDoubleClickedHandler(PadMouseEventHandler handler)  Assign an onMouseDoubleClicked event handler using a method reference.    public void setMouseDraggedHandler(PadMouseEventHandler handler)  Assign an onMouseDragged event handler using a method reference.    public void setMouseEnteredHandler(PadMouseEventHandler handler)  Assign an onMouseEntered event handler using a method reference.    public void setMouseExitedHandler(PadMouseEventHandler handler)  Assign an onMouseExited event handler using a method reference.    public void addMouseListener(PadMouseListener o)  Add object to the list of items that are notified on Pad's mouse events.    public void removeMouseListener(PadMouseListener o)  Remove object from Pad's mouse listener list.       Pad Keyboard Event-Related Methods   Pad Keyboard Event-Related Methods    Method  Description   public void setKeyPressedHandler(Pad.PadKeyEventHandler handler) Assign an onKeyPressed event handler using a method reference.  public void setKeyReleasedHandler(Pad.PadKeyEventHandler handler) Assign an onKeyReleased event handler using a method reference.  public void setKeyTypedHandler(Pad.PadKeyTypedEventHandler handler) Assign an onKeyTyped event handler using a method reference.  public void addKeyListener(PadKeyListener o) Add object to the list of items that are notified on Pad's key events.  public void removeKeyListener(PadKeyListener o) Remove object from Pad's key listener list.      Pad Timer Event-Related Methods   Pad Keyboard Event-Related Methods    Method  Description    public void setTickHandler(Pad.PadTimerEventHandler handler)  Assign an onTick event handler using a method reference.    public void addTickListener(PadTickListener o)  Add object to the list if items that are notified on Pad's timer tick action.    public void removeTickListener(PadTickListener o)  Remove object from Pad's timer tick action listener list.       Box Driver Example  In the following example a blue Rectangle is created and positioned on a Pad object. The default Pad object's keyPressed event is handled with a custom method that reacts to the arrow keys being pressed. Only arrow keys are tested; all other keys are ignore. When the down arrow is pressed, the box object's move(...) method is used to move the box 10 pixels down (by increasing its y-location). Likewise, the remaining three arrow keys move the box left, right or up, depending upon the key pressed. The result is a simple program that can be used to drive a box around the Pad using the arrow keys.  One item to note is the way the key String being pressed is tested. For all arrows keys the keyText String argument passed to the event handler method is compared to both a String describing the key (e.g. \"Left\") and a symbol (e.g. \"←\"). An arrow key is identified with a positive match to either the description or symbol String. The reason we test both is that the String passed to the event handler may be different depending upon your operating system. Specifically, Windows sets keyText to key description (\"Left\") while macOS uses a symbol (e.g. \"←\"). Give it a try.   BoxDriver.java   \/\/ BoxDriver.java import doodlepad.*; public class BoxDriver { \/\/ The box to drive around the Pad private Rectangle box; public BoxDriver() { \/\/ Explicitly create a Pad and handle key-pressed event Pad p = new Pad(600, 600); p.setKeyPressedHandler( this::onKeyPressed ); \/\/ Create ans style the box to drive box = new Rectangle(100, 100, 50, 50); box.setFillColor(0, 0, 255); } \/\/ Key pressed event handler moves box according key pressed public void onKeyPressed(Pad p, String keyText, String keyMods) { if (keyText.equals(\"Left\") || keyText.equals(\"←\")) { box.move(-10, 0); } else if (keyText.equals(\"Right\") || keyText.equals(\"→\")) { box.move(10, 0); } else if (keyText.equals(\"Up\") || keyText.equals(\"↑\")) { box.move(0, -10); } else if (keyText.equals(\"Down\") || keyText.equals(\"↓\")) { box.move(0, 10); } } public static void main(String[] args) { BoxDriver myBoxDriver = new BoxDriver(); } }     "
},
{
  "id": "table-30",
  "level": "2",
  "url": "section-dp-events.html#table-30",
  "type": "Table",
  "number": "4.6.1",
  "title": "Mouse Event Parameters",
  "body": " Mouse Event Parameters    #  Type  Description    1.  Shape  The Shape object that initiated the mouse event    2.  double  The x-coordinate at which the event occurred    3.  double  The y-coordinate at which the event occurred    4.  int  A number identifying the mouse button used    "
},
{
  "id": "listing-dp-onpressed",
  "level": "2",
  "url": "section-dp-events.html#listing-dp-onpressed",
  "type": "Listing",
  "number": "4.6.2",
  "title": "",
  "body": "  public void onPressed(Shape shp, double, x, double y, int button) { System.out.println(\"The mouse was pressed at coordinates (\" + x + \",\" + y + \")\"); }   "
},
{
  "id": "listing-dp-setmousepressedhandler",
  "level": "2",
  "url": "section-dp-events.html#listing-dp-setmousepressedhandler",
  "type": "Listing",
  "number": "4.6.3",
  "title": "",
  "body": "  myOval.setMousePressedHandler( this::onPress );   "
},
{
  "id": "listing-dp-togglebutton1",
  "level": "2",
  "url": "section-dp-events.html#listing-dp-togglebutton1",
  "type": "Listing",
  "number": "4.6.4",
  "title": "",
  "body": " ToggleButton.java   \/\/ ToggleButton.java import doodlepad.*; \/\/ ToggleButton class public class ToggleButton { private RoundRect shpButton; \/\/ Button Shape private boolean on; \/\/ Button state \/\/ Constructor public ToggleButton() { \/\/ Create button shape and initialize shpButton = new RoundRect(100, 100, 75, 50, 20, 20); on = false; \/\/ Starts off shpButton.setFillColor(200); \/\/ Set button click event handler method shpButton.setMousePressedHandler(this::onPressed); } \/\/ Handle mouse-pressed event private void onPressed(Shape shp, double x, double y, int button) { toggle(); } \/\/ Toggle button public void toggle() { on = !on; \/\/ Flip state if (on) { \/\/ Update graphic shpButton.setFillColor(0, 255, 0); } else { shpButton.setFillColor(200); } } public static void main(String[] args) { \/\/ Create a new ToggleButton ToggleButton myButton = new ToggleButton(); } }   "
},
{
  "id": "figure-14",
  "level": "2",
  "url": "section-dp-events.html#figure-14",
  "type": "Figure",
  "number": "4.6.5",
  "title": "",
  "body": " ToggleButton.java   "
},
{
  "id": "table-31",
  "level": "2",
  "url": "section-dp-events.html#table-31",
  "type": "Table",
  "number": "4.6.6",
  "title": "Shape Mouse Event Methods",
  "body": " Shape Mouse Event Methods    Method  Description    public void setMouseClickedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse is clicked on a Shape. A mouse-click event occurs when the mouse is pressed and released at the same location.    public void setMouseDoubleClickedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse is double-clicked on a Shape. A mouse-double-clicked event occurs when the mouse is pressed and released at the same location twice in succession.    public void setMousePressedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse is pressed on a Shape. A mouse-pressed event occurs when the mouse button is pressed while over a Shape.    public void setMouseReleasedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse is released on a Shape. A mouse-released event occurs when the mouse button is released while over a Shape.    public void setMouseMovedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when a mouse is moved on a Shape. A mouse-moved event occurs when the mouse is moved over a Shape while the mouse button is not pressed.    public void setMouseDraggedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse is dragged on a Shape. A mouse-dragged event occurs when the mouse is moved over a Shape while the mouse button is pressed.    public void setMouseEnteredHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse enters a Shape. A mouse-entered event occurs when the mouse is moved from a location outside the bounds of a Shape to a location within the bounds of a Shape.    public void setMouseExitedHandler(ShapeMouseEventHandler handler)  Set a method to be invoked when the mouse exits a Shape. A mouse-exited event occurs when the mouse is moved from a location within the bounds of a Shape to a location outside the bounds of a Shape.    "
},
{
  "id": "table-32",
  "level": "2",
  "url": "section-dp-events.html#table-32",
  "type": "Table",
  "number": "4.6.7",
  "title": "Shape Selection Event Methods",
  "body": " Shape Selection Event Methods    Method  Description    public void setSelectionChangedHandler(ShapeSelectionEventHandler handler)  Specify a suitable method to handle selectionChanged events triggered by a Shape object. The method reference must implement the signature defined by the ShapeSelectionEventHandler interface.    public void onSelectionChanged(boolean selected)  Override this method in a Shape subclass to handle selectionChanged events by overriding the base class method.    "
},
{
  "id": "table-33",
  "level": "2",
  "url": "section-dp-events.html#table-33",
  "type": "Table",
  "number": "4.6.8",
  "title": "Pad Mouse Event-Related Methods",
  "body": " Pad Mouse Event-Related Methods    Method  Description    public void setMousePressedHandler(PadMouseEventHandler handler)  Assign an onMousePressed event handler using a method reference.    public void setMouseReleasedHandler(PadMouseEventHandler handler)  Assign an onMouseReleased event handler using a method reference.    public void setMouseMovedHandler(PadMouseEventHandler handler)  Assign an onMouseMoved event handler using a method reference.    public void setMouseClickedHandler(PadMouseEventHandler handler)  Assign an onMouseClicked event handler using a method reference.    public void setMouseDoubleClickedHandler(PadMouseEventHandler handler)  Assign an onMouseDoubleClicked event handler using a method reference.    public void setMouseDraggedHandler(PadMouseEventHandler handler)  Assign an onMouseDragged event handler using a method reference.    public void setMouseEnteredHandler(PadMouseEventHandler handler)  Assign an onMouseEntered event handler using a method reference.    public void setMouseExitedHandler(PadMouseEventHandler handler)  Assign an onMouseExited event handler using a method reference.    public void addMouseListener(PadMouseListener o)  Add object to the list of items that are notified on Pad's mouse events.    public void removeMouseListener(PadMouseListener o)  Remove object from Pad's mouse listener list.    "
},
{
  "id": "table-34",
  "level": "2",
  "url": "section-dp-events.html#table-34",
  "type": "Table",
  "number": "4.6.9",
  "title": "Pad Keyboard Event-Related Methods",
  "body": " Pad Keyboard Event-Related Methods    Method  Description   public void setKeyPressedHandler(Pad.PadKeyEventHandler handler) Assign an onKeyPressed event handler using a method reference.  public void setKeyReleasedHandler(Pad.PadKeyEventHandler handler) Assign an onKeyReleased event handler using a method reference.  public void setKeyTypedHandler(Pad.PadKeyTypedEventHandler handler) Assign an onKeyTyped event handler using a method reference.  public void addKeyListener(PadKeyListener o) Add object to the list of items that are notified on Pad's key events.  public void removeKeyListener(PadKeyListener o) Remove object from Pad's key listener list.   "
},
{
  "id": "table-35",
  "level": "2",
  "url": "section-dp-events.html#table-35",
  "type": "Table",
  "number": "4.6.10",
  "title": "Pad Keyboard Event-Related Methods",
  "body": " Pad Keyboard Event-Related Methods    Method  Description    public void setTickHandler(Pad.PadTimerEventHandler handler)  Assign an onTick event handler using a method reference.    public void addTickListener(PadTickListener o)  Add object to the list if items that are notified on Pad's timer tick action.    public void removeTickListener(PadTickListener o)  Remove object from Pad's timer tick action listener list.    "
},
{
  "id": "listing-dp-box-driver",
  "level": "2",
  "url": "section-dp-events.html#listing-dp-box-driver",
  "type": "Listing",
  "number": "4.6.11",
  "title": "",
  "body": " BoxDriver.java   \/\/ BoxDriver.java import doodlepad.*; public class BoxDriver { \/\/ The box to drive around the Pad private Rectangle box; public BoxDriver() { \/\/ Explicitly create a Pad and handle key-pressed event Pad p = new Pad(600, 600); p.setKeyPressedHandler( this::onKeyPressed ); \/\/ Create ans style the box to drive box = new Rectangle(100, 100, 50, 50); box.setFillColor(0, 0, 255); } \/\/ Key pressed event handler moves box according key pressed public void onKeyPressed(Pad p, String keyText, String keyMods) { if (keyText.equals(\"Left\") || keyText.equals(\"←\")) { box.move(-10, 0); } else if (keyText.equals(\"Right\") || keyText.equals(\"→\")) { box.move(10, 0); } else if (keyText.equals(\"Up\") || keyText.equals(\"↑\")) { box.move(0, -10); } else if (keyText.equals(\"Down\") || keyText.equals(\"↓\")) { box.move(0, 10); } } public static void main(String[] args) { BoxDriver myBoxDriver = new BoxDriver(); } }   "
},
{
  "id": "section-dp-paths",
  "level": "1",
  "url": "section-dp-paths.html",
  "type": "Section",
  "number": "4.7",
  "title": "Path Shapes",
  "body": " Path Shapes   A Path is a complex shape made up of various types of curves and straight lines. Unlike other Shapes in the DoodlePad library, a Path is assembled incrementally by adding line segments and curves to form the Shape outline. This is done a manner similar to the way we might draw a shape with a pencil. A path may even be open, meaning the final Shape is not required to be enclosed by a continuous line covering all sides.   Consider the shape on the right, which looks like a Rectangle missing its top side. Previously, when we created a basic Rectangle object, we made use of a constructor that created a Rectangle shape having all four sides. To create the Path as shown in the figure, we must take a different approach.    Path Object     To create any Path shape we build up the shape incrementally by adding one side at a time. We start by creating an empty Path object (having no sides) and then invoke a sequence of its methods to add new sides, one at a time. When finished, we may choose to close the Path Shape outline with a final line segment, or leave it open. The listing below for the PathDemo1 class is a small program that creates the previous Path object in code using DoodlePad.   PathDemo1.java   \/\/ PathDemo1.java import doodlepad.*; public class PathDemo1 { public static void main(String[] args) { Path p1 = new Path(); \/\/ 1) Create an empty Path object p1.moveTo(150.0, 50.0); \/\/ 2) Move the virtual pencil to (150, 50) p1.lineTo(150.0, 150.0); \/\/ 3) Draw a line down to (150, 150) p1.lineTo( 50.0, 150.0); \/\/ 4) Add a line over to (50, 150) p1.lineTo( 50.0, 50.0); \/\/ 5) Add a line up to (50, 50) } }    Creating the previous Path object required five lines of code. Recall that the DoodlePad drawing model sets the default location of the coordinate system origin to the upper left corner of the drawing window. Following is a more detailed description of the program.   Line 1 uses the nullary Path constructor to create an empty Path object and saves a reference to the variable p1. Path objects each have a notion of the current point, which is initialized to the coordinates (0.0, 0.0). The current point is updated as new sides are added to the Path, with the starting coordinates of each new side being set to the current point and the end coordinates of each new side being set as the current point after the side is added. This assures that sides are added end to end: the endpoint of one side becomes the starting point of the next.  Line 2 starts the Path definition by moving the Path's current point to the coordinates (150.0, 50.0) without adding a side to the Path. In most cases we want to start defining a Path at coordinates other than the origin (0, 0), so the first method invokes is often moveTo(…). This point corresponds to the upper coordinates of the Path's right side.  Lines 3, 4 and 5 add the three more straight lines as sides to the Path: the right side from the starting point of (150.0, 50.0) down to (150.0, 150.0), the bottom from (150.0, 150.0) over to (50.0, 150.0), and the left from (50.0, 150.0) to (50.0, 50.0). The Path object lineTo(…) method is used.  If we wanted to close the Path by adding a final line to form the top of the shape, we could have invoked the closePath() method of the Path object. In this case we leave the Path open.   After creating a Path object, its moveTo(…), lineTo(…), and closePath() methods may be used to create any shape with multiple line segments as sides, open or closed.    Sides made up of Quadratic Curve Segments  It is also possible to add curved side to a Path object. Two types or curved sides are permitted: one based on a quadratic curve, and another based on a Bézier spline.  To add a side to a Path made up of a segment from a quadratic curve, use the Path object's quadTo(…) method. quadTo(…) takes four double parameters instead of two, as was the case with lineTo(…). The first two quadTo(…) parameters define the side's control point, and the second two define its endpoint. As usual, the side starts at the current point coordinates.  The following listing for the PathDemo2 class is identical to PathDemo1 only the second side is changed from from a line to a quadratic curve segment. Notice that in line 4 the quadTo(…) method takes four numeric parameters. The endpoint of (50.0, 150.0) is preceded with a control point of (100.0, 200.0), which defines how the side will curve.   PathDemo2.java   \/\/ PathDemo2.java import doodlepad.*; public class PathDemo2 { public static void main(String[] args) { Path p2 = new Path(); \/\/ 1) Create an empty Path object p2.moveTo(150.0, 50.0); \/\/ 2) Move your pencil to (150, 50) p2.lineTo(150.0, 150.0); \/\/ 3) Draw a line down to (150, 150) \/\/ 4) Add quadratic segment to (50, 150) p2.quadTo(100.0, 200.0, 50.0, 150.0); p2.lineTo( 50.0, 50.0); \/\/ 5) Add a line up to (50, 50) p2.closePath(); \/\/ 6) Close the Path. } }     To illustrate how the control point of the quadTo(…) method impacts the shape of the quadratic segment making up the bottom of the Path, have a look at the interactive widget to the right. The Path shape outlined by the black line is the shape that is drawn by the code in the PathDemo2 sample listing. Gray boxes represent the side endpoints and the red box is the control point for the curved side. The dashed line shows the relationship between the control point of the curved side and its endpoints. The coordinates of the control point are printed at the bottom of the widget.     The boxes in the widget are draggable using your mouse. Move the position of each box to see how it affects the Path shape outline. Of particular interest is the red box representing the control point. Click and drag this box to see how the shape of the side changes. Also note the value of the control point and how it relates to the shape of the side. Dashed lines between the control point and the side's endpoints are tangent to the curved segment at its endpoints.    Sides made of Spline Segments  Curved sides of a Path shape may be more complex than a segment of a quadratic curve. Sides may be made up of a Bézier spline, which requires two control points instead of one. In the following listing for PathDemo3 a Path is created with a Bézier spline as the bottom side.   PathDemo3.java   \/\/ PathDemo3.java import doodlepad.*; public class PathDemo3 { public static void main(String[] args) { Path p3 = new Path(); \/\/ 1) Create an empty Path object p3.moveTo( 150.0, 50.0); \/\/ 2) Move your pencil to (150, 50) p3.lineTo( 150.0, 150.0); \/\/ 3) Draw a line down to (150, 150) \/\/ 4) Add bezier spline to (50, 150) p3.curveTo(100.0, 200.0, 100.0, 100.0, 50.0, 150.0); p3.lineTo( 50.0, 50.0); \/\/ 5) Add a line up to (50, 50) p3.closePath(); \/\/ 6) Close the Path. } }     To add a side composed of a Bézier spline to a Path object, use the curveTo(…) method of Path, which can be found in the listing on line 4. The curveTo(…) method takes six parameters. The first two arguments make up the coordinates of the first control point. The second two arguments make up the coordinates for the second control point. Finally, the last two arguments are used for endpoint coordinates of the side being added.     Once again, to illustrate how these control points impact the shape of the Path side added with the curveTo(…) method, have a cose look at the accompanying interactive widget. In this case the first control point is outlined in red, and the second is outlined in green. The boxes in this widget are interactive; click and drag them to get a sense for how the shape of the side added with curveTo(…) changes with the position of the associated control points. The first control point governs the shape of start of the curved side and the second control point governs the shape of the end of the curved side. The coordinates of both control points are drawn at the bottom of the widget.    Drawing and Styling a Path  Path objects inherit all methods from the Shape class in DoodlePad. In particular, a Path may be moved, resized and styled in a manner identical to any of the other Shape subclasses.   The following example program creates four shapes with various fill and stroke colors. The resulting Shape objects are shown in the image on the right. Note that the Oval is unfilled, so the underlying red Rectangle is visible. Also note that the filled Arc has a semi-transparent yellow fill, so the underlying Line is partially visible.    HeartPath       \/\/ HeartPath.java import doodlepad.*; public class HeartPath { public static void main(String[] args) { \/\/ Create heart-shaped Path Path h = new Path(); h.moveTo(100.0, 70.0); h.quadTo( 10.0, 25.0, 100.0, 150.0); \/\/ 1) Left side of heart h.quadTo(190.0, 25.0, 100.0, 70.0); \/\/ 2) Right side of heart h.closePath(); \/\/ Set fill color and disable stroke h.setFillColor(255, 0, 0); \/\/ 3) Fill with red h.setStroked(false); \/\/ 4) Do not draw outline } }    All standard inherited Shape methods may be invoked on Path objects. For example, it is possible to move a Path using the setX(…), setY(…), setLocation(…), setCenter(…) and translate(…) methods. A path may be resized using the setWidth(…), setHeight(…) and scale(…) methods. It may be rotated with the rotate(…) method and it will even respond to all mouse events in a pixel-perfect manner, no matter how many or the shape of the sides used to construct the Path.   "
},
{
  "id": "figure-15",
  "level": "2",
  "url": "section-dp-paths.html#figure-15",
  "type": "Figure",
  "number": "4.7.1",
  "title": "",
  "body": " Path Object   "
},
{
  "id": "listing-dp-pathdemo1",
  "level": "2",
  "url": "section-dp-paths.html#listing-dp-pathdemo1",
  "type": "Listing",
  "number": "4.7.2",
  "title": "",
  "body": " PathDemo1.java   \/\/ PathDemo1.java import doodlepad.*; public class PathDemo1 { public static void main(String[] args) { Path p1 = new Path(); \/\/ 1) Create an empty Path object p1.moveTo(150.0, 50.0); \/\/ 2) Move the virtual pencil to (150, 50) p1.lineTo(150.0, 150.0); \/\/ 3) Draw a line down to (150, 150) p1.lineTo( 50.0, 150.0); \/\/ 4) Add a line over to (50, 150) p1.lineTo( 50.0, 50.0); \/\/ 5) Add a line up to (50, 50) } }   "
},
{
  "id": "listing-dp-pathdemo2",
  "level": "2",
  "url": "section-dp-paths.html#listing-dp-pathdemo2",
  "type": "Listing",
  "number": "4.7.3",
  "title": "",
  "body": " PathDemo2.java   \/\/ PathDemo2.java import doodlepad.*; public class PathDemo2 { public static void main(String[] args) { Path p2 = new Path(); \/\/ 1) Create an empty Path object p2.moveTo(150.0, 50.0); \/\/ 2) Move your pencil to (150, 50) p2.lineTo(150.0, 150.0); \/\/ 3) Draw a line down to (150, 150) \/\/ 4) Add quadratic segment to (50, 150) p2.quadTo(100.0, 200.0, 50.0, 150.0); p2.lineTo( 50.0, 50.0); \/\/ 5) Add a line up to (50, 50) p2.closePath(); \/\/ 6) Close the Path. } }   "
},
{
  "id": "listing-dp-pathdemo3",
  "level": "2",
  "url": "section-dp-paths.html#listing-dp-pathdemo3",
  "type": "Listing",
  "number": "4.7.4",
  "title": "",
  "body": " PathDemo3.java   \/\/ PathDemo3.java import doodlepad.*; public class PathDemo3 { public static void main(String[] args) { Path p3 = new Path(); \/\/ 1) Create an empty Path object p3.moveTo( 150.0, 50.0); \/\/ 2) Move your pencil to (150, 50) p3.lineTo( 150.0, 150.0); \/\/ 3) Draw a line down to (150, 150) \/\/ 4) Add bezier spline to (50, 150) p3.curveTo(100.0, 200.0, 100.0, 100.0, 50.0, 150.0); p3.lineTo( 50.0, 50.0); \/\/ 5) Add a line up to (50, 50) p3.closePath(); \/\/ 6) Close the Path. } }   "
},
{
  "id": "figure-16",
  "level": "2",
  "url": "section-dp-paths.html#figure-16",
  "type": "Figure",
  "number": "4.7.5",
  "title": "",
  "body": " HeartPath   "
},
{
  "id": "listing-18",
  "level": "2",
  "url": "section-dp-paths.html#listing-18",
  "type": "Listing",
  "number": "4.7.6",
  "title": "",
  "body": "  \/\/ HeartPath.java import doodlepad.*; public class HeartPath { public static void main(String[] args) { \/\/ Create heart-shaped Path Path h = new Path(); h.moveTo(100.0, 70.0); h.quadTo( 10.0, 25.0, 100.0, 150.0); \/\/ 1) Left side of heart h.quadTo(190.0, 25.0, 100.0, 70.0); \/\/ 2) Right side of heart h.closePath(); \/\/ Set fill color and disable stroke h.setFillColor(255, 0, 0); \/\/ 3) Fill with red h.setStroked(false); \/\/ 4) Do not draw outline } }   "
},
{
  "id": "section-dp-images",
  "level": "1",
  "url": "section-dp-images.html",
  "type": "Section",
  "number": "4.8",
  "title": "Images",
  "body": " Images  DoodlePad includes a special Shape class called Image. The Image class implements a rectangular region of pixels (tiny picture elements having a single color) which may be modified programmatically; you may set or get the color of individual pixels. Also, the Image class implements methods that allow you to draw shapes and draw text on the Image. Note that drawing on an Image does not create Shape objects, it only sets the pixels of the Image to form the shape or text. In the end, with an Image, we have only pixels.   Image Constructors  Images may be constructed blank, or upon construction they may load and display an image from a file. This behavior is governed by the constructor used to create an Image. Following are three Image object constructors. The first constructor creates an blank Image with the givel location (xm y) and dimensions (width, height). The second constructor creates an Image object and loads an image from a file, given a path to it on the file system. The dimensions of the Image are set to match the dimensions of the image loaded from the file. The third constructor creats an Image object of the given dimensions, and also loads and resizes the image stored in the given file path prior to displaying it. For all Image constructors, refer to the docs.      Constructor Signature  Description    public Image(double x, double y, double width, double height)   An Image object constructor that creates a blank Image object with an upper left corner at (x,y) and dimensions (width, height).    public Image(java.lang.String path, double x, double y)   An Image object constructor that creates an Image object and loads and displays an image from the path given as the first argument. The upper left corner of the image is at (x,y) and its dimensions map the dimensions of the loaded image. Loadable Image formats include GIF, PNG, JPEG, BMP, and WBMP.    public Image(java.lang.String path, double x, double y, double width, double height)   An Image object constructor that creates an Image object and loads and displays an image from the path given as the first argument. The upper left corner of the image is at (x,y) and its dimensions (width, height). Loadable Image formats include GIF, PNG, JPEG, BMP, and WBMP.      The following simple example demonstrates how to create a new Image object using the constructor that loads and displays an image upon construction. The screenshot on the right shows the result of the Image1.java program. While strictly not required, in this example an instance of the Pad object is created first to set the size of the initial window and to give it a title. The image is a selfie taken by the wild Indonesian macaque named Naturo who was the subject of a well-known copyright dispute.    Naruto Selfie      Image1.java   \/\/ Image1.java import doodlepad.*; public class Image1 { public static void main(String[] args) { Pad pad = new Pad(\"Naruto Selfie\", 355, 355); Image im = new Image(\"naruto-selfie.png\", 0, 0); } }      Image Methods  The Image object implements several methods for modifying its pixels, whether that be one pixel at at time, or by setting pixels to form shapes or text. Following are selected Image object methods with descriptions.   Image Object Methods    Method Signature  Description   public void setPixel(int x, int y, int red, int green, int blue)  Set the color of the pixel at the coordinate (x, y) to the color identified by (red, green, blue). (See Colors .)   public int getRed(int x, int y)  Return an int corresponding to the red component of the pixel color at (x, y).   public int getGreen(int x, int y)  Return an int corresponding to the green component of the pixel color at (x, y).   public int getBlue(int x, int y)  Return an int corresponding to the blue component of the pixel color at (x, y).   public int getAlpha(int x, int y)  Return an int corresponding to the alpha (transparency) component of the pixel color at (x, y).   public void drawArc(double x, double y, double width, double height, double startAngle, double arcAngle)  Draw an arc on the Image defined by a section of an ellipse bounded by the rectangle with upper left corner at (x, y) and size (width, height). The arc starts at angle startAngle (degrees) and extends by arcAngle (degrees).   public void drawLine(double x1, double y1, double x2, double y2)  Draw a line on the Image from the coordinate (x1, y1) to (x2, y2).   public void drawOval(double x, double y, double width, double height)  Draw an oval on the Image within the bounding box having an upper left corner at (x, y) and dimensions (width, height).   public void drawPolygon(double[] xPoints, double[] yPoints)  Draw a polygon on the Image that connects corresponding coordinate pairs stored in the two arrays xPoints and yPoints.   public void drawPolygon(java.util.List<Point> points)  Draw a polygon on the Image that connects coordinates stored as a List<> of Point objects.   public void drawRectangle(double x, double y, double width, double height)  Draw a rectangle within the bounding box having an upper left corner at (x, y) and dimensions (width, height).   public void drawRoundRect(double x, double y, double width, double height, double arcWidth, double arcHeight)  Draw a rounded rectangle within the bounding box having an upper left corner at (x, y), dimensions (width, height), and rounded corners defined by an arc with width arcWidth and height arcHeight.   public void drawText(java.lang.String text, double x, double y)  Draw text on an Image stored in the String text , with an upper left corner defined by (x, y).   public void drawText(java.lang.String text, double x, double y, int size)  Draw text on an Image stored in the String text , with an upper left corner defined by (x, y), and a font size of size .     You will note that none of the previous methods set the fill color, stroke color, or stroke width to be used when drawing on an Image. To set the fill and stroke properties of drawn lines and shapes, set these values using the Image object's methods prior to invoking one its drawing methods. Once set, these settings are used for all subsequent drawing performed on an Image object, until new settings are specified.   Set Image Drawing Context    Method Signature  Description     public void setFillColor(double red, double green, double blue)   Set the color to be used to fill shapes drawn on an Image.     public void setStrokeColor(double red, double green, double blue)   Set the color to be used to outline shapes drawn on an Image.     public void setStrokeWidth(double width)   Set the width in pixels of the stroke to outline any shape that is drawn on an Image.       A Simple Example   The following example program demonstrates the use of Image object methods used to draw on the Image. In this example 200 lines are drawn on the Image object using a for statement. Each line is drawn after setting random endpoint coordinates, random width, and random stroke color.    Image2.java      Image2.java   \/\/ Image2.java import java.util.Random; import doodlepad.*; public class Image2 { public static void main(String[] args) { double x1, x2, y1, y2, w; int r, g, b; \/\/ Create a Pad object, an Image object for the Pad, \/\/ and a Random object for generating random numbers. Pad pad = new Pad(400, 400); Image im = new Image(0, 0, 400, 400); Random rnd = new Random(); for (int i=0; i<100; i++) { \/\/ Random numbers y1 = 400*rnd.nextDouble(); x1 = 200*rnd.nextDouble(); x2 = 200+200*rnd.nextDouble(); w = 10*rnd.nextDouble(); r = rnd.nextInt(256); g = rnd.nextInt(256); b = rnd.nextInt(256); \/\/ Draw line on Image im.setStrokeColor(r,g,b); im.setStrokeWidth(w); im.drawLine(x1,y1,x2,y1); \/\/ More random numbers x1 = 400*rnd.nextDouble(); y1 = 200*rnd.nextDouble(); y2 = 200+200*rnd.nextDouble(); w = 10*rnd.nextDouble(); r = rnd.nextInt(256); g = rnd.nextInt(256); b = rnd.nextInt(256); \/\/ Draw line on Image im.setStrokeColor(r,g,b); im.setStrokeWidth(w); im.drawLine(x1,y1,x1,y2); } } }      An Image as a Shape   Because Image is a subclass of Shape it inherits all of the Shape methods. For example, you may resize and move an Image as well as respond to all the standard mouse events. This gives you the ability to programmatically draw on the Image in response to interacting with it using the mouse. The following example draws a randomly-sized green oval where the mouse is pressed. For a more complete program that uses this technique to create a drawing program using DoodlePad, refer to the Interactive Drawing example.    Image3.java      Image3.java   \/\/ Image3.java import doodlepad.*; public class Image3 { public static void main(String[] args) { \/\/ Create Pad and Image Pad pad = new Pad(400, 400); Image im = new Image(0, 0, 400, 400); \/\/ Set up mouse event handler im.setMousePressedHandler( Image3::onSpot ); \/\/ Set drawing fill color to green im.setFillColor(0,200,0); } \/\/ What to do when mouse is pressed on Image public static void onSpot(Shape shp, double cx, double cy, int button) { \/\/ Cast Shape to Image Image im = (Image)shp; \/\/ Draw randomly sized oval double radius = Math.random()*40; im.drawOval(cx-radius, cy-radius, 2*radius, 2*radius); } }     "
},
{
  "id": "table-36",
  "level": "2",
  "url": "section-dp-images.html#table-36",
  "type": "Table",
  "number": "4.8.1",
  "title": "",
  "body": "    Constructor Signature  Description    public Image(double x, double y, double width, double height)   An Image object constructor that creates a blank Image object with an upper left corner at (x,y) and dimensions (width, height).    public Image(java.lang.String path, double x, double y)   An Image object constructor that creates an Image object and loads and displays an image from the path given as the first argument. The upper left corner of the image is at (x,y) and its dimensions map the dimensions of the loaded image. Loadable Image formats include GIF, PNG, JPEG, BMP, and WBMP.    public Image(java.lang.String path, double x, double y, double width, double height)   An Image object constructor that creates an Image object and loads and displays an image from the path given as the first argument. The upper left corner of the image is at (x,y) and its dimensions (width, height). Loadable Image formats include GIF, PNG, JPEG, BMP, and WBMP.    "
},
{
  "id": "figure-17",
  "level": "2",
  "url": "section-dp-images.html#figure-17",
  "type": "Figure",
  "number": "4.8.2",
  "title": "",
  "body": " Naruto Selfie   "
},
{
  "id": "listing-19",
  "level": "2",
  "url": "section-dp-images.html#listing-19",
  "type": "Listing",
  "number": "4.8.3",
  "title": "",
  "body": " Image1.java   \/\/ Image1.java import doodlepad.*; public class Image1 { public static void main(String[] args) { Pad pad = new Pad(\"Naruto Selfie\", 355, 355); Image im = new Image(\"naruto-selfie.png\", 0, 0); } }   "
},
{
  "id": "table-37",
  "level": "2",
  "url": "section-dp-images.html#table-37",
  "type": "Table",
  "number": "4.8.4",
  "title": "Image Object Methods",
  "body": " Image Object Methods    Method Signature  Description   public void setPixel(int x, int y, int red, int green, int blue)  Set the color of the pixel at the coordinate (x, y) to the color identified by (red, green, blue). (See Colors .)   public int getRed(int x, int y)  Return an int corresponding to the red component of the pixel color at (x, y).   public int getGreen(int x, int y)  Return an int corresponding to the green component of the pixel color at (x, y).   public int getBlue(int x, int y)  Return an int corresponding to the blue component of the pixel color at (x, y).   public int getAlpha(int x, int y)  Return an int corresponding to the alpha (transparency) component of the pixel color at (x, y).   public void drawArc(double x, double y, double width, double height, double startAngle, double arcAngle)  Draw an arc on the Image defined by a section of an ellipse bounded by the rectangle with upper left corner at (x, y) and size (width, height). The arc starts at angle startAngle (degrees) and extends by arcAngle (degrees).   public void drawLine(double x1, double y1, double x2, double y2)  Draw a line on the Image from the coordinate (x1, y1) to (x2, y2).   public void drawOval(double x, double y, double width, double height)  Draw an oval on the Image within the bounding box having an upper left corner at (x, y) and dimensions (width, height).   public void drawPolygon(double[] xPoints, double[] yPoints)  Draw a polygon on the Image that connects corresponding coordinate pairs stored in the two arrays xPoints and yPoints.   public void drawPolygon(java.util.List<Point> points)  Draw a polygon on the Image that connects coordinates stored as a List<> of Point objects.   public void drawRectangle(double x, double y, double width, double height)  Draw a rectangle within the bounding box having an upper left corner at (x, y) and dimensions (width, height).   public void drawRoundRect(double x, double y, double width, double height, double arcWidth, double arcHeight)  Draw a rounded rectangle within the bounding box having an upper left corner at (x, y), dimensions (width, height), and rounded corners defined by an arc with width arcWidth and height arcHeight.   public void drawText(java.lang.String text, double x, double y)  Draw text on an Image stored in the String text , with an upper left corner defined by (x, y).   public void drawText(java.lang.String text, double x, double y, int size)  Draw text on an Image stored in the String text , with an upper left corner defined by (x, y), and a font size of size .    "
},
{
  "id": "table-38",
  "level": "2",
  "url": "section-dp-images.html#table-38",
  "type": "Table",
  "number": "4.8.5",
  "title": "Set Image Drawing Context",
  "body": " Set Image Drawing Context    Method Signature  Description     public void setFillColor(double red, double green, double blue)   Set the color to be used to fill shapes drawn on an Image.     public void setStrokeColor(double red, double green, double blue)   Set the color to be used to outline shapes drawn on an Image.     public void setStrokeWidth(double width)   Set the width in pixels of the stroke to outline any shape that is drawn on an Image.    "
},
{
  "id": "figure-18",
  "level": "2",
  "url": "section-dp-images.html#figure-18",
  "type": "Figure",
  "number": "4.8.6",
  "title": "",
  "body": " Image2.java   "
},
{
  "id": "listing-20",
  "level": "2",
  "url": "section-dp-images.html#listing-20",
  "type": "Listing",
  "number": "4.8.7",
  "title": "",
  "body": " Image2.java   \/\/ Image2.java import java.util.Random; import doodlepad.*; public class Image2 { public static void main(String[] args) { double x1, x2, y1, y2, w; int r, g, b; \/\/ Create a Pad object, an Image object for the Pad, \/\/ and a Random object for generating random numbers. Pad pad = new Pad(400, 400); Image im = new Image(0, 0, 400, 400); Random rnd = new Random(); for (int i=0; i<100; i++) { \/\/ Random numbers y1 = 400*rnd.nextDouble(); x1 = 200*rnd.nextDouble(); x2 = 200+200*rnd.nextDouble(); w = 10*rnd.nextDouble(); r = rnd.nextInt(256); g = rnd.nextInt(256); b = rnd.nextInt(256); \/\/ Draw line on Image im.setStrokeColor(r,g,b); im.setStrokeWidth(w); im.drawLine(x1,y1,x2,y1); \/\/ More random numbers x1 = 400*rnd.nextDouble(); y1 = 200*rnd.nextDouble(); y2 = 200+200*rnd.nextDouble(); w = 10*rnd.nextDouble(); r = rnd.nextInt(256); g = rnd.nextInt(256); b = rnd.nextInt(256); \/\/ Draw line on Image im.setStrokeColor(r,g,b); im.setStrokeWidth(w); im.drawLine(x1,y1,x1,y2); } } }   "
},
{
  "id": "figure-19",
  "level": "2",
  "url": "section-dp-images.html#figure-19",
  "type": "Figure",
  "number": "4.8.8",
  "title": "",
  "body": " Image3.java   "
},
{
  "id": "listing-21",
  "level": "2",
  "url": "section-dp-images.html#listing-21",
  "type": "Listing",
  "number": "4.8.9",
  "title": "",
  "body": " Image3.java   \/\/ Image3.java import doodlepad.*; public class Image3 { public static void main(String[] args) { \/\/ Create Pad and Image Pad pad = new Pad(400, 400); Image im = new Image(0, 0, 400, 400); \/\/ Set up mouse event handler im.setMousePressedHandler( Image3::onSpot ); \/\/ Set drawing fill color to green im.setFillColor(0,200,0); } \/\/ What to do when mouse is pressed on Image public static void onSpot(Shape shp, double cx, double cy, int button) { \/\/ Cast Shape to Image Image im = (Image)shp; \/\/ Draw randomly sized oval double radius = Math.random()*40; im.drawOval(cx-radius, cy-radius, 2*radius, 2*radius); } }   "
},
{
  "id": "section-dp-timers",
  "level": "1",
  "url": "section-dp-timers.html",
  "type": "Section",
  "number": "4.9",
  "title": "Timers",
  "body": " Timers  One way to perform animations or other graphic illustrations requiring repeated sequential execution of code is to make use of a timer. Smilar to its hardware counterpart, a software timer may be started and stopped, set to run at a presepecified tick rate, and take some action at one or more timepoints in the future. In DoodlePad the Pad class provides the functionality of a timer, which may be used to run repeated actions.   Timer Methods  The Pad's timer functionality is encapsulated by five methods:   Timer Methods    Method Signature  Description   public final void setTickRate(double tps)  Set the rate at which the Pad's internal timer fires. The single method argument is the tick rate, provided in the units ticks-per-second. The default tick rate value is 60.   public final double getTickRate()  Return the current tick rate value in ticks-per-second that has been set for a Pad object's internal timer.   public void setTickHandler(Pad.PadTimerEventHandler handler)  Provide a method reference for a method to be executed when a Pad timer ticks, the tick event handler. The method signature for the handler must match the signature void handler(Pad pad, long when) .   public void startTimer()  Start a Pad's timer ticking. The timer will invoke the associated tick event handler at its preset tick rate.   public void stopTimer()  Stop a Pad's timer ticking.       Example: Animating Shape Motion  The following example demonstrates the use of a timer in DoodlePad. In this example a small green \"bug\" (an Oval object) continually seek the mouse location. Moving the mouse on the Pad causes the bug to change direction.   The program's main() method starts by creating and styling new Pad and Oval objects. The Pad's mouseMoved event is handled by a method that updates target coordinates. These target coordinates are continuously being sought by the bug. The Pad timer's tick rate is set to 30 ticks-per-second, and its tick event handler is set to a method named moveBug(). Before exiting main() the Pad timer is started.    Mouse Seeker     The moveBug() method is the Pad timer's event handler. It is fired approximately 30 times per second by the timer. Each time it is fired, it computes a new location that is about 10% of the way between its current location and the target location, and it moves the bug to the new location. Because it does not move the bug all the way to the target location, the bug continuously changes direction as the mouse moves. The result is a fun program to play with, and the basis for more interesting games and animated illustrations.  Finally, note that a Shape's location is not the only thing that may be animated. Any object property may change. For example, a Shapes' fill or stroke color may be animated, as can its width, height or other properties. The only limit is your imagination.   Seeker.java   \/\/ Seeker.java \/\/ Continually move a green bug to follow a moving mouse import doodlepad.*; public class Seeker { \/\/ The mouse-seeking bug Shape private static Oval bug; \/\/ The coordinates being sought by the bug private static double targetX, targetY; public static void main(String[] args) { \/\/ Create a new Pad object Pad pad = new Pad(\"Mouse Seeker\", 400, 400); \/\/ Create the green bug Shape that seeks the mouse bug = new Oval(0, 0, 10, 10); bug.setFillColor(0, 255, 0); \/\/ Handle the Pad mouseMoved event pad.setMouseMovedHandler( Seeker::onMouseMoved ); \/\/ Set up and start the Pad timer pad.setTickRate(30); pad.setTickHandler( Seeker::moveBug ); pad.startTimer(); } \/\/ Set a new target location for the bug every time the mouse is moved public static void onMouseMoved(Pad pad, double x, double y, int button) { targetX = x; targetY = y; } \/\/ Move the bug part-way toward the target mouse location public static void moveBug(Pad pad, long when) { \/\/ Get the current bug location double currX = bug.getX(); double currY = bug.getY(); \/\/ Compute a new location closer to the mouse double newX = currX + 0.1*(targetX - currX); double newY = currY + 0.1*(targetY - currY); \/\/ Update the bug location bug.setX( newX ); bug.setY( newY ); } }     "
},
{
  "id": "table-39",
  "level": "2",
  "url": "section-dp-timers.html#table-39",
  "type": "Table",
  "number": "4.9.1",
  "title": "Timer Methods",
  "body": " Timer Methods    Method Signature  Description   public final void setTickRate(double tps)  Set the rate at which the Pad's internal timer fires. The single method argument is the tick rate, provided in the units ticks-per-second. The default tick rate value is 60.   public final double getTickRate()  Return the current tick rate value in ticks-per-second that has been set for a Pad object's internal timer.   public void setTickHandler(Pad.PadTimerEventHandler handler)  Provide a method reference for a method to be executed when a Pad timer ticks, the tick event handler. The method signature for the handler must match the signature void handler(Pad pad, long when) .   public void startTimer()  Start a Pad's timer ticking. The timer will invoke the associated tick event handler at its preset tick rate.   public void stopTimer()  Stop a Pad's timer ticking.    "
},
{
  "id": "figure-20",
  "level": "2",
  "url": "section-dp-timers.html#figure-20",
  "type": "Figure",
  "number": "4.9.2",
  "title": "",
  "body": " Mouse Seeker   "
},
{
  "id": "listing-22",
  "level": "2",
  "url": "section-dp-timers.html#listing-22",
  "type": "Listing",
  "number": "4.9.3",
  "title": "",
  "body": " Seeker.java   \/\/ Seeker.java \/\/ Continually move a green bug to follow a moving mouse import doodlepad.*; public class Seeker { \/\/ The mouse-seeking bug Shape private static Oval bug; \/\/ The coordinates being sought by the bug private static double targetX, targetY; public static void main(String[] args) { \/\/ Create a new Pad object Pad pad = new Pad(\"Mouse Seeker\", 400, 400); \/\/ Create the green bug Shape that seeks the mouse bug = new Oval(0, 0, 10, 10); bug.setFillColor(0, 255, 0); \/\/ Handle the Pad mouseMoved event pad.setMouseMovedHandler( Seeker::onMouseMoved ); \/\/ Set up and start the Pad timer pad.setTickRate(30); pad.setTickHandler( Seeker::moveBug ); pad.startTimer(); } \/\/ Set a new target location for the bug every time the mouse is moved public static void onMouseMoved(Pad pad, double x, double y, int button) { targetX = x; targetY = y; } \/\/ Move the bug part-way toward the target mouse location public static void moveBug(Pad pad, long when) { \/\/ Get the current bug location double currX = bug.getX(); double currY = bug.getY(); \/\/ Compute a new location closer to the mouse double newX = currX + 0.1*(targetX - currX); double newY = currY + 0.1*(targetY - currY); \/\/ Update the bug location bug.setX( newX ); bug.setY( newY ); } }   "
},
{
  "id": "section-dp-sprites",
  "level": "1",
  "url": "section-dp-sprites.html",
  "type": "Section",
  "number": "4.10",
  "title": "Sprites",
  "body": " Sprites   A core element of many classic computer games and other computer displays are animated characters or other objects called sprites. Sprites appear animated by displaying in a single place the sequential static frames of an animation loop, as you might see with an animated cartoon or flip book. Typical sprite animation loops show characters running, jumping, rotating, or other repetitive activities.  The frames of a sprite animation are stored together in a single image called a sprite sheet. A sprite display engine copies successive frames from the sprite sheet image and displays them in sequence at a given rate to create the sprite animation. The following image is a sprite sheet that may be used by the DoodlePad Sprite class. All five frames of the sprite animation stored in the following sprite sheet, where each frame is separated at a horizontal interval of 190 pixels.   Flying Bird Sprite Sheet. Courtesy Green Iguana Productions      Sprite Constructors  To operate properly, Sprite objects need several items. They must load their sprite sheet images and have the parameters necessary for copying frames from the sprite sheet including frame width and the number of frames stored on the sprite sheet image. In addition, the coordinates for where the frames should be drawn must also be known, and optionally the dimensions of the frames. The following Sprite constructors are two of the most common and include the necessary parameters.   Sprite Constructors    Constructor Signature  Description   Sprite(java.lang.String path, double x, double y, int frameWidth, int nFrames)  Construct a new Sprite specifying a path to the sprite sheet image, the (x, y) coordinates indicating where to render the sprite, the width of a single frame, and the number of frames on the sprite sheet organized horizontally.   Sprite(java.lang.String path, double x, double y, double frameWidth, int nFrames, int targetWidth, int targetHeight)  Construct a new Sprite specifying a path to the sprite sheet image, the (x, y) coordinates indicating where to render the sprite, the width of a single frame, the number of frames on the sprite sheet organized horizontally, and the target dimensions for the sprite when frames are rendered.       Image Methods  As a subclass of Shape, Sprite objects inherit all the standard Shape methods. The primary additional method unique to the Sprite class is advance(). This is the method that instructs a Sprite object to move to the next frame in its animation sequence. The next frame image from the sprite sheet is copied and drawn at the Sprite location, possibly resizing to fit within target dimensions.   Image Methods    Method Signature  Description   public void advance()  Advance sprite frame and repaint new frame image.       Flying Bird Example   The following example program creates a flying bird Sprite object that makes use of the sprite sheet displayed above. On the right is an animated image showing the flying bird Sprite in action. The Pad object's timer functionality is used to drive the Sprite animation by invoking its advance() method repeatedly at a regular interval.    Flying Bird      FlyingBird.java   \/\/ FlyingBird.java import doodlepad.*; public class FlyingBird { public static void main(String[] args) { \/\/ Create a Pad and a Sprite Pad pad = new Pad(300, 300); Sprite sprite = new Sprite(\"FlyingBird.png\", 50, 50, 190, 5); \/\/ Set Pad timer with a Java lambda function that advances sprite pad.setTickHandler( (Pad p, long when) -> { sprite.advance(); } ); pad.setTickRate(10); pad.startTimer(); } }     "
},
{
  "id": "figure-21",
  "level": "2",
  "url": "section-dp-sprites.html#figure-21",
  "type": "Figure",
  "number": "4.10.1",
  "title": "",
  "body": " Flying Bird Sprite Sheet. Courtesy Green Iguana Productions   "
},
{
  "id": "table-40",
  "level": "2",
  "url": "section-dp-sprites.html#table-40",
  "type": "Table",
  "number": "4.10.2",
  "title": "Sprite Constructors",
  "body": " Sprite Constructors    Constructor Signature  Description   Sprite(java.lang.String path, double x, double y, int frameWidth, int nFrames)  Construct a new Sprite specifying a path to the sprite sheet image, the (x, y) coordinates indicating where to render the sprite, the width of a single frame, and the number of frames on the sprite sheet organized horizontally.   Sprite(java.lang.String path, double x, double y, double frameWidth, int nFrames, int targetWidth, int targetHeight)  Construct a new Sprite specifying a path to the sprite sheet image, the (x, y) coordinates indicating where to render the sprite, the width of a single frame, the number of frames on the sprite sheet organized horizontally, and the target dimensions for the sprite when frames are rendered.    "
},
{
  "id": "table-41",
  "level": "2",
  "url": "section-dp-sprites.html#table-41",
  "type": "Table",
  "number": "4.10.3",
  "title": "Image Methods",
  "body": " Image Methods    Method Signature  Description   public void advance()  Advance sprite frame and repaint new frame image.    "
},
{
  "id": "figure-22",
  "level": "2",
  "url": "section-dp-sprites.html#figure-22",
  "type": "Figure",
  "number": "4.10.4",
  "title": "",
  "body": " Flying Bird   "
},
{
  "id": "listing-23",
  "level": "2",
  "url": "section-dp-sprites.html#listing-23",
  "type": "Listing",
  "number": "4.10.5",
  "title": "",
  "body": " FlyingBird.java   \/\/ FlyingBird.java import doodlepad.*; public class FlyingBird { public static void main(String[] args) { \/\/ Create a Pad and a Sprite Pad pad = new Pad(300, 300); Sprite sprite = new Sprite(\"FlyingBird.png\", 50, 50, 190, 5); \/\/ Set Pad timer with a Java lambda function that advances sprite pad.setTickHandler( (Pad p, long when) -> { sprite.advance(); } ); pad.setTickRate(10); pad.startTimer(); } }   "
},
{
  "id": "section-dp-transformations",
  "level": "1",
  "url": "section-dp-transformations.html",
  "type": "Section",
  "number": "4.11",
  "title": "Graphic Transformations",
  "body": " Graphic Transformations   As described in Graphic Object Position and Size, each Shape object may be moved and sized using methods such as setLocation(...) and setSize(...). This approach to moving and resizing Shapes has limitations, including the inability to rotate a Shape object, including Text. Consider for a moment how you might draw an oval rotated at a 45° angle. This is not possible using setLocation(...) and setSize(...). Fortunately, there is another way.  Most 2-D computer graphics systems implement a form of linear 2-D geometric transformations known as affine transformations, and include operations such as scale, rotate, and translate. This class of transformations provides a way to modify a shape while preserving its essential nature, e.g. points remain points and parallel lines remain parallel. The easiest way to understand how 2-D transformations work in computer graphics is to imagine that each and every object has its own coordinate system. As described in DoodlePad Drawing Model, when a new DoodlePad Shape object is created its coordinate system is defined with its origin in the upper left corner of the Pad window: x-coordinate values increasing from left to right, y-coordinate values increasing from top to bottom, and distances measured in pixels. Geometric transformation operations give you the ability to move and modify the coordinate system of each and every Shape object independently, with respect to a master coordinate system of the Pad window. For example, it is possible to create two Rectangle Shapes, both with their location set to (0, 0), but appearing at different parts of the Pad. If the coordinate system of one Rectangle is translated to another part of the Pad, then the two Rectangle Shapes would not be drawn at the same location in spite of the fact that they had the same x- and y-coordinate values.   For example, the image on the right depicts two Rectangle Shapes, both with dimensions 50 pixels × 50 pixels and coordinates x=0, y=0. One Rectangle has a red fill and the other has a green fill. The difference between the two Shapes is that the green Rectangle has been transformed by translating it to the location (100, 100). In other words, the origin of the green Rectangle's coordinate system has been moved (translated) to (100, 100). The green Rectangle's coordinates (0, 0) are at the same screen location as the red Rectangle's coordinates (100, 100). In spite of the fact that both Rectangles have identical dimensions and location with respect to their own coordinate systems, they are drawn at different parts of the Pad due to the fact that the green Rectangle's coordinate system was translated from its default value.    Rectangle Translation       Translate   As suggested by the terminology used in the previous example, the coordinate system of a Shape may be moved in the x- and y-directions by invoking a Shape object's translate(...) method. The translate(...) method takes two double arguments. The first indicates how far to move the Shape's coordinate system in the x-direction, and the second indicates how far to move the Shape's coordinate system in the y-direction. The following example program implements the previous red\/green Rectangle example using DoodlePad. The class constructor creates two Rectangle objects with identical location and dimension values, but different fill colors. Following this, only the green Rectangle is translated by (100, 100) by executing the statement grnRect.translate(100, 100). Because the starting location of the green Rectangle is (0, 0), after the translation by (100, 100), the new coordinates for the origin of the green Rectangle is (100, 100). The image on the right illustrates the result of executing the following example program.    Rectangle Translation      Transform1.java   \/\/ Transform1.java import doodlepad.*; public class Transform1 { private Rectangle redRect; private Rectangle grnRect; public Transform1() { \/\/ Two Rectangles with identical location and dimensions redRect = new Rectangle(0, 0, 50, 50); grnRect = new Rectangle(0, 0, 50, 50); \/\/ Set fill colors redRect.setFillColor(255, 0, 0); grnRect.setFillColor(0, 255, 0); \/\/ Translate the green Rectangle only grnRect.translate(100, 100); } public static void main(String[] args) { Transform1 myTransform1 = new Transform1(); } }      Scale   The second transformation is scale(...). In effect, a scale(...) transformation zooms in or zooms out on the coordinate system of an object. For example, invoking the scale(...) method with an argument of 2 essentially zooms in by a factor of 2. The coordinate x=50 of the unscaled coordinate system will move to a screen location where x=100 used to be located. Similarly, if a coordinate system is scaled by 0.5, the coordinate x=50 in the unscaled coodinate system will move to a screen location where x=25 used to be located. The same arguments apply to the y-coordinate of the coordinate system. When a shape's coordinate system is scaled by a number greater than 1, the effect is to increase the size or zoom in on the shape, thus drawing it larger with respect to other shapes with unscaled coordinate systems. With a scale factor less than 1, the effect is to reduce the size or zoom out on a shape as compared to other shapes with unscaled coordinate systems.    Rectangle Scale     The scale(...) transformation comes in different forms. Thus far we have assumed that the scale factor is applied equally to the x- and y-axes, but this is not necessary. Different scale factors may be applied to the x- and y-axes, and certain overloads of the scale(...) method permit different scale factors for each axis. Also note that when the axes of a Shape's coordinate system are modified due to a scale(...) transformation, by default all changes are performed around the origin (0, 0). That is to say, all points in the scaled coordinate system will appear to move, except (0, 0). The origin remains fixed, unless a special overload of the transformation is applied. The Shape class implements four overloads of the scale(...) method to account for all these options. The first option is scale(double factor) that takes one scale factor applies it to both the x- and y-axes around the origin (0, 0). The second option is scale(double xFactor, double yFactor) in which the separate scale factors may be applied to each axis. The third option is scale(double factor, double xCenter, double yCenter) in which the same scale factor is applied to both axes, but the scale is applied around the point (xCenter, yCenter) instead of (0,0). This is convenient when a point other than the origin should remain fixed, for example when you want to grow or shrink the size of a shape at its current location. The fourth option is scale(double xFactor, double yFactor, double xCenter, double yCenter) in which independent scale factors are to be applied and a point other than the origin should remain fixed. Applying the scale transformation is a very convenient way to change the size of an object, but the outcome may not be what you expect. When a coodinate system is scaled, everything that is drawn is scaled, including a Shape's stroke width. Consider a Shape drawn with a stroke width of 1. After applying a scale transformation of 2 to the Shape's coodinate system, the Shape with the scaled coordinate system will appear to be drawn with stroke width of 2. From the perspective of the scaled Shape, the stroke width is 1. But when compared to Shapes with unscaled coordinate systems, the stroke will appear to have a width of 2. Often, this is not the desired outcome.   Once again, consider our red and green Rectangle shapes, both with dimensions 50 × 50. After applying a scale factor of 2 to the green Rectangle, the width and height of the green rectangle doubles. Note that the total area of the Rectangle quadruples. The following example program Transform2 demonstrates the result.    Rectangle Scale      Transform2.java   \/\/ Transform2.java import doodlepad.*; public class Transform2 { private Rectangle redRect; private Rectangle grnRect; public Transform2() { \/\/ Two Rectangles with identical location and dimensions grnRect = new Rectangle(0, 0, 50, 50); redRect = new Rectangle(0, 0, 50, 50); \/\/ Set fill colors redRect.setFillColor(255, 0, 0); grnRect.setFillColor(0, 255, 0); \/\/ Scale the green Rectangle only grnRect.scale(2); } public static void main(String[] args) { Transform2 myTransform2 = new Transform2(); } }      Rotate   The last transformation method is rotate(...). The rotate(...) method takes an angle argument in degrees and rotates the coordinate system of a Shape around the origin (0, 0) by that angle in a clockwise direction. You may be accustomed to the rotation of an angle to be in the counter-clockwise direction. In fact, this is not inconsistent with 2-D computer graphics. Because the drawing model of 2-D graphics inverts the orientation of the y-axis, the rotation angle appears to proceed in the clockwise direction.    Rectangle Rotation     As with scale(...), there are multiple overloads of the rotate(...) method. The first overload is rotate(double angle) which expects a single argument indicating the angle in degrees to rotate the coordinate system of a Shape object. The rotate occurs around the origin (0, 0). A second overload is rotate(double angle, double xCenter, double yCenter). This option allows you to set the point about which the Shape's coordinate system is rotated. This is useful when you want to rotate an object in place.   In the example program Transform3 our red and green Rectangle are located at (100, 0). We rotate our green Rectangle's coordinate system by 45° while the red Rectangle's coordinate system remains unchanged. Note how the coordinate system is rotated around the origin (0, 0).    Rectangle Rotation      Transform3.java   \/\/ Transform3.java import doodlepad.*; public class Transform3 { private Rectangle redRect; private Rectangle grnRect; public Transform3() { \/\/ Two Rectangles with identical location and dimensions grnRect = new Rectangle(100, 0, 50, 50); redRect = new Rectangle(100, 0, 50, 50); \/\/ Set fill colors redRect.setFillColor(255, 0, 0); grnRect.setFillColor(0, 255, 0); \/\/ Rotate the green Rectangle only grnRect.rotate(45); } public static void main(String[] args) { Transform3 myTransform3 = new Transform3(); } }      Reset  You are free to apply as many transformations as you like, in any order. All transformations are cumulative; you will see only the final accumulated result. For example, if we create a Shape object, translate it by (50, 50), and then translate it by (50, 50) a second time, the Shape's coordinate system will have its origin located at (100, 100). Use the Shape's reset() method to set all transformations back to their default values.    Pad Transformations  In addition to Shape objects, transformations may be applied to a Pad object. In fact, the same transformation methods and their overloads may be applied to a Pad object in a manner identical to a Shape object. Furthermore, when the Pad's coordinate system is transformed, the transformations are applied to all Shapes drawn on the Pad because Shape coordinate systems are relative to their Pad's coordinate system. When you are interested in zooming or rotating an entire diagram rather than an individual Shape object, applying transformations to the Pad object is a much simpler way to go.   "
},
{
  "id": "figure-23",
  "level": "2",
  "url": "section-dp-transformations.html#figure-23",
  "type": "Figure",
  "number": "4.11.1",
  "title": "",
  "body": " Rectangle Translation   "
},
{
  "id": "figure-24",
  "level": "2",
  "url": "section-dp-transformations.html#figure-24",
  "type": "Figure",
  "number": "4.11.2",
  "title": "",
  "body": " Rectangle Translation   "
},
{
  "id": "listing-24",
  "level": "2",
  "url": "section-dp-transformations.html#listing-24",
  "type": "Listing",
  "number": "4.11.3",
  "title": "",
  "body": " Transform1.java   \/\/ Transform1.java import doodlepad.*; public class Transform1 { private Rectangle redRect; private Rectangle grnRect; public Transform1() { \/\/ Two Rectangles with identical location and dimensions redRect = new Rectangle(0, 0, 50, 50); grnRect = new Rectangle(0, 0, 50, 50); \/\/ Set fill colors redRect.setFillColor(255, 0, 0); grnRect.setFillColor(0, 255, 0); \/\/ Translate the green Rectangle only grnRect.translate(100, 100); } public static void main(String[] args) { Transform1 myTransform1 = new Transform1(); } }   "
},
{
  "id": "figure-25",
  "level": "2",
  "url": "section-dp-transformations.html#figure-25",
  "type": "Figure",
  "number": "4.11.4",
  "title": "",
  "body": " Rectangle Scale   "
},
{
  "id": "figure-26",
  "level": "2",
  "url": "section-dp-transformations.html#figure-26",
  "type": "Figure",
  "number": "4.11.5",
  "title": "",
  "body": " Rectangle Scale   "
},
{
  "id": "listing-25",
  "level": "2",
  "url": "section-dp-transformations.html#listing-25",
  "type": "Listing",
  "number": "4.11.6",
  "title": "",
  "body": " Transform2.java   \/\/ Transform2.java import doodlepad.*; public class Transform2 { private Rectangle redRect; private Rectangle grnRect; public Transform2() { \/\/ Two Rectangles with identical location and dimensions grnRect = new Rectangle(0, 0, 50, 50); redRect = new Rectangle(0, 0, 50, 50); \/\/ Set fill colors redRect.setFillColor(255, 0, 0); grnRect.setFillColor(0, 255, 0); \/\/ Scale the green Rectangle only grnRect.scale(2); } public static void main(String[] args) { Transform2 myTransform2 = new Transform2(); } }   "
},
{
  "id": "figure-27",
  "level": "2",
  "url": "section-dp-transformations.html#figure-27",
  "type": "Figure",
  "number": "4.11.7",
  "title": "",
  "body": " Rectangle Rotation   "
},
{
  "id": "figure-28",
  "level": "2",
  "url": "section-dp-transformations.html#figure-28",
  "type": "Figure",
  "number": "4.11.8",
  "title": "",
  "body": " Rectangle Rotation   "
},
{
  "id": "listing-26",
  "level": "2",
  "url": "section-dp-transformations.html#listing-26",
  "type": "Listing",
  "number": "4.11.9",
  "title": "",
  "body": " Transform3.java   \/\/ Transform3.java import doodlepad.*; public class Transform3 { private Rectangle redRect; private Rectangle grnRect; public Transform3() { \/\/ Two Rectangles with identical location and dimensions grnRect = new Rectangle(100, 0, 50, 50); redRect = new Rectangle(100, 0, 50, 50); \/\/ Set fill colors redRect.setFillColor(255, 0, 0); grnRect.setFillColor(0, 255, 0); \/\/ Rotate the green Rectangle only grnRect.rotate(45); } public static void main(String[] args) { Transform3 myTransform3 = new Transform3(); } }   "
},
{
  "id": "section-dp-concepts",
  "level": "1",
  "url": "section-dp-concepts.html",
  "type": "Section",
  "number": "4.12",
  "title": "Key Concepts",
  "body": " Key Concepts     "
},
{
  "id": "section-dp-exercises",
  "level": "1",
  "url": "section-dp-exercises.html",
  "type": "Section",
  "number": "4.13",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-rt-stringbuilder",
  "level": "1",
  "url": "section-rt-stringbuilder.html",
  "type": "Section",
  "number": "5.1",
  "title": "StringBuilder Class",
  "body": "StringBuilder Class  Recall that String objects are immutable. This implies that every time we concatenate two String objects, we must create a new String . This is true whether we use the .concat(...) method of String or the + operator.  String immutability is not a problem when concatenating a few small Strings, but when large Strings are concatenated over and over to build even larger String objects, your program can slow down because larger and larger chuncks of memory are repeatedly allocated and deallocated. A more efficient approach to concatenating large and numerous String objects would be a dedicated class with the job of collecting all Strings and then managing the underlying memory more efficiently. This is what Java's built-in StringBuilder class does for us.  Like other Java classes, instantiating a StringBuilder object involves invoking its constructor using the new keyword, as in the following example.   StringBuilder example   \/\/ StringBuilders.java public class StringBuilders { public static void main(String[] args) { StringBuilder sb1; \/\/ Declare variable sb1 = new StringBuilder(); \/\/ Initialize sb1.append(\"Hello\"); \/\/ Add String and print System.out.println( \"sb1: \" + sb1.toString() ); StringBuilder sb2; \/\/ Declare another sb2 = new StringBuilder(); \/\/ Initialize sb2.append(\"Goodbye\"); \/\/ Add String and print System.out.println( \"sb2: \" + sb2.toString() ); sb2 = sb1; sb1.append(\" there\"); \/\/ Add to sb1 System.out.println( \"sb2: \" + sb2.toString() ); } }    Unlike String objects, a StringBuilder is mutable. If you are interest in working with a modifiable data structure holding a sequence of characters, StringBuilder is a good option. You might need this type of capability when programmatically building or modifying the contents of a text file or HTML document, which is made up of plain text characters. StringBuilder objects have several useful methods that enable this kind of work. See .   Useful StringBuilder Methods    Method  Returns  Description    append(...)  StringBuilder   Converts several types to a String  format and then appends it to the end  of the StringBuilder .  Returns a reference to itself,  allowing method chaining.      delete(int start, int end)   StringBuilder   Removes chars beginning at index start  and extending through index end - 1.  Returns a reference to itself,  allowing method chaining.      replace(int start, int end, String str)   StringBuilder   Replace chars beginning at index start  through index end - 1  with str .  Returns a reference to itself,  allowing method chaining.      insert(int offset, String substr)   StringBuilder   Inserts substr beginning at  offset.  Returns a reference to itself,  allowing method chaining.     indexOf(String substr)  int   Return index where substr  is found.  Returns -1 if not found.     charAt(int index)  char   Returns char at index index .      substring(int start, int end)   String   Returns a String of characters  from start through end - 1 .     length()  int   Returns the length of the current  character sequence.     setLength(int newLength)  void   Sets the total size of the  StringBuilder to newLength .  setLength(0) removed all  characters from the StringBuilder .     toString()  String   Returns the length of the current  character sequence.      Compiling and running the program in produces the following.   javac StringBuilders.java java StringBuilders  sb1: Hello sb2: Goodbye sb2: Hello there   Does it surprise you that the first time sb2 was printed the output was Goodbye and the second time the output was Hello there ? The String \" there\" was appended to sb1 , not sb2 . No StringBuilder methods were invoked on sb2 . What happened?  The next section will help you understand why the printed value of sb2 changed so abruptly.  "
},
{
  "id": "p-439",
  "level": "2",
  "url": "section-rt-stringbuilder.html#p-439",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "new "
},
{
  "id": "listing-rt-sbexample",
  "level": "2",
  "url": "section-rt-stringbuilder.html#listing-rt-sbexample",
  "type": "Listing",
  "number": "5.1.1",
  "title": "",
  "body": " StringBuilder example   \/\/ StringBuilders.java public class StringBuilders { public static void main(String[] args) { StringBuilder sb1; \/\/ Declare variable sb1 = new StringBuilder(); \/\/ Initialize sb1.append(\"Hello\"); \/\/ Add String and print System.out.println( \"sb1: \" + sb1.toString() ); StringBuilder sb2; \/\/ Declare another sb2 = new StringBuilder(); \/\/ Initialize sb2.append(\"Goodbye\"); \/\/ Add String and print System.out.println( \"sb2: \" + sb2.toString() ); sb2 = sb1; sb1.append(\" there\"); \/\/ Add to sb1 System.out.println( \"sb2: \" + sb2.toString() ); } }   "
},
{
  "id": "table-rt-sbmethods",
  "level": "2",
  "url": "section-rt-stringbuilder.html#table-rt-sbmethods",
  "type": "Table",
  "number": "5.1.2",
  "title": "Useful <code class=\"code-inline tex2jax_ignore\">StringBuilder<\/code> Methods",
  "body": " Useful StringBuilder Methods    Method  Returns  Description    append(...)  StringBuilder   Converts several types to a String  format and then appends it to the end  of the StringBuilder .  Returns a reference to itself,  allowing method chaining.      delete(int start, int end)   StringBuilder   Removes chars beginning at index start  and extending through index end - 1.  Returns a reference to itself,  allowing method chaining.      replace(int start, int end, String str)   StringBuilder   Replace chars beginning at index start  through index end - 1  with str .  Returns a reference to itself,  allowing method chaining.      insert(int offset, String substr)   StringBuilder   Inserts substr beginning at  offset.  Returns a reference to itself,  allowing method chaining.     indexOf(String substr)  int   Return index where substr  is found.  Returns -1 if not found.     charAt(int index)  char   Returns char at index index .      substring(int start, int end)   String   Returns a String of characters  from start through end - 1 .     length()  int   Returns the length of the current  character sequence.     setLength(int newLength)  void   Sets the total size of the  StringBuilder to newLength .  setLength(0) removed all  characters from the StringBuilder .     toString()  String   Returns the length of the current  character sequence.     "
},
{
  "id": "section-rt-refvars",
  "level": "1",
  "url": "section-rt-refvars.html",
  "type": "Section",
  "number": "5.2",
  "title": "Reference Variables",
  "body": " Reference Variables  Consider the following JShell session. The variable k1 is initialized to 12 and k2 to 13 . After the assignment k1 = k2 , k1 gets the new value 13 .  Following this, the two StringBuilder variables sb1 and sb2 are declared and initialized to two StringBuilder objects. The String \"Hello\" is appended to sb1 and \"Goodbye\" is appended to sb2 . Afterwards, we perform the assignment sb1 = sb2 and the value of sb1 is now \"Goodbye\". That is what we expect. But then, we append the string \" friend\" to sb1 and print sb2 . Somehow, the StringBuilder sb2 also got the additional String \" friend\". Why?   jshell> int k1 = 12; \/\/ Declare and init k1 and k2 ...> int k2 = 13; k1 ==> 12 k2 ==> 13 jshell> k1 = k2; \/\/ Assign k1 to k2 ...> System.out.println(k1); \/\/ k1 has copy of k2 value k1 ==> 13 13 \/\/ Declare and init sb1 and sb2 jshell> StringBuilder sb1 = new StringBuilder(); ...> StringBuilder sb2 = new StringBuilder(); ...> sb1.append(\"Hello\"); \/\/ Append Strings to sb1 and sb2 ...> sb2.append(\"Goodbye\"); sb1 ==> sb2 ==> $7 ==> Hello $8 ==> Goodbye jshell> sb1 = sb2; \/\/ Assign sb1 to sb2 ...> System.out.println(sb1.toString()); sb1 ==> Goodbye \/\/ sb1 seems to have sb2 value Goodbye jshell> sb1.append(\" friend\"); \/\/ Append to sb1 $9 ==> Goodbye friend jshell> sb2; \/\/ Somehow, sb2 got the sb2 ==> Goodbye friend \/\/ appended value jshell>   The assignment operator copies values from one memory location to another. If we could look at memory we'd see the value 12 at the k1 location and 13 at the k2 location. What would we see at the sb1 and sb2 locations? It would not be the StringBuilder objects. Instead, we'd see an address indicating where Java chose to store each StringBuilder object. Said differently, the data stored at the sb1 and sb2 memory locations is the address of the StringBuilder objects, not the objects themselves. To see the StringBuilder objects stored in memory, we would have to read the address and move to that memory location first.   Copy primitive and reference variables.  TODO: Illustrate the difference between copying primitive and ref variables.   When we performed the assignment sb1 = sb2 the object itself was not copied. Rather, the value of the address was copied. Nothing happened to the two StringBuilder objects (yet). Both sb1 and sb2 now hold the address for where to find the second StringBuilder object. After the assignment, we have no variables remaining that store the address of the first StringBuilder and two variables that store the address of the second StringBuilder. In a very real sense, we've lost track of the first StringBuilder object.  The dot-operator can be thought of as the mechanism that performs the dereference operation for us. Think of the dot-operator as the way we read an address from a variable and move to the memory location indicated by the address, where the object is stored. Because both sb1 and sb2 now hold the address of the second StringBuilder object, using the dot-operator on either variable would dereference to the same object in memory. In the above example, this is why printing the String value of sb2 results in the output Goodbye friend , and not only Goodbye . Both sb1 and sb2 now reference the same object. Anything done using sb1 is visible using sb2 , and vice versa.  To disconnect a variable from a memory address without assigning it to another object, assign to the reference variable the special keyword null . The null keyword in Java represents the absense of an object . Indeed, when an object variable is declared but not initialized, it has the value of null . See the following JShell session. The variable sb3 has the value null .  jshell> StringBuilder sb3; sb3 ==> null jshell>  TODO: Example of references using shapes  Java provides no way to explicitly delete an object from a memory. So what happens to an object when there are no variables holding a reference to it? Does it just consume memory with no way to access it? In other words, does it leak memory ?  "
},
{
  "id": "figure-rt-copy",
  "level": "2",
  "url": "section-rt-refvars.html#figure-rt-copy",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " Copy primitive and reference variables.  TODO: Illustrate the difference between copying primitive and ref variables.  "
},
{
  "id": "p-449",
  "level": "2",
  "url": "section-rt-refvars.html#p-449",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dereference "
},
{
  "id": "p-450",
  "level": "2",
  "url": "section-rt-refvars.html#p-450",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "null null null "
},
{
  "id": "section-rt-gc",
  "level": "1",
  "url": "section-rt-gc.html",
  "type": "Section",
  "number": "5.3",
  "title": "Garbage Collection",
  "body": " Garbage Collection  Garbage Collection Garbage collection is a fundamental concept in computer programming, particularly in languages like Java. It is the process of automatically reclaiming memory that is no longer in use by the program, freeing it up for future allocations. Garbage collection plays a vital role in memory management, ensuring efficient resource utilization and preventing memory leaks.  When a program executes, it dynamically allocates memory to hold objects, variables, and other data structures. As the program runs, the garbage collector periodically examines the objects to determine which ones are still in use. It does this through a process called \"mark and sweep.\" It starts by traversing the reachable objects (e.g., through global variables, static variables, and local variables, etc.), marking all objects in use. Any objects not marked during this traversal are considered unreachable and eligible for garbage collection. When we lose all references to an object it becomes unreachable and eligible for garbage collection.  After marking all reachable objects, the garbage collector performs the sweep phase. It frees the memory occupied by objects that were not marked as reachable. This memory is then returned to the available memory pool for future allocations.  In some garbage collection algorithms, an additional step called compaction may be performed. Compaction involves moving the live objects closer together, effectively defragmenting memory. This can improve memory access performance.  Garbage collection alleviates the burden of manual memory management, where programmers would have to explicitly allocate and deallocate memory for objects. By automating memory reclamation, garbage collection reduces the risk of memory leaks and simplifies the development process. However, it's essential to be mindful of object lifetimes and design memory-efficient programs to optimize garbage collection performance.  "
},
{
  "id": "section-rt-scope",
  "level": "1",
  "url": "section-rt-scope.html",
  "type": "Section",
  "number": "5.4",
  "title": "Variable Scope and Lifetime",
  "body": " Variable Scope and Lifetime  The scope of a Java variable refers to the region of the program where the variable can be accessed and used. Think of how a telescope or microscope both enhances but also limits what we can see. The lifetime of a variable, on the other hand, refers to the period during which the variable exists in memory.  Java has several levels of variable scope, the most important of which are as follows. We've encountered class scope and method scope already.   package scope (limited to a Java package).  class scope (accessible throughout a class), and  object (instance) scope (limited to a specific object),  method scope (limited to a specific method),  block scope (limited to a specific block of code),   Class variables, also known as static variables, are declared within a class and are associated with the class itself rather than with specific instances of the class. We refer to this as class scope . Variables and methods declared using the static keyword exist within the class scope. Static variables live for as long as a program is running.  Explicitly accessing a static variable or method defined within a given class is accomplished using the class name followed by the dot-operator. Occasionally the scope is not necessary, but it never hurst to be explicit. Let's consider an example.  Imagine that you've been asked to write a class called Counter to track of the number of people currently in a room. Each time a person enters the room an enter() method is invoked and a total counter variable is incremented. When a person leaves an exit() method is invoked which decrements the total counter variable. The total variable must be accessible to all methods within the class and it must have a lifetime that lasts for as long as the class exists. Declaring total as static would ensure that these requirements are satisfied.  Consider the following short program implementing the Counter class in . Note that a main() method is added to test the Counter class. The total variable is a long that is declared using the static keyword within the class but outside any of the class methods. This ensures that the variable has class scope, is accessible from all locations within the program, and will exist for the lifetime of the program.  The Counter class implements enter() , exit() , and reset() methods, which are used to manage the value of the total variable. When we access the total variable we precede it the with the name of the class, for example Counter.total . This ensures that we are accessing the class scope and the variables defined within it. We also invoke the class methods with a similar explicit setting of class scope, namely, Counter.enter() and Counter.exit() . While you will find that this explicit scoping is not necessary, it helps to communicate that we intend to access the class scope.  Following we demonstrate what happens when the program is tested. A total of five people enter the room and three exit, leaving two people remaining in the room.    \/\/ Counter.java \/\/ Counter counts people entering and exiting a room class Counter { \/\/ Total count public static long total = 0L; \/\/ Increment total count public static void enter() { Counter.total += 1L; } \/\/ Decrement total count public static void exit() { Counter.total -= 1L; } \/\/ Reset counter public static void reset() { Counter.total = 0L; } \/\/ Test the Counter class public static void main(String[] args) { Counter.enter(); \/\/ Person enters Counter.enter(); \/\/ Person enters Counter.enter(); \/\/ Person enters Counter.enter(); \/\/ Person enters Counter.exit(); \/\/ Person exits Counter.enter(); \/\/ Person enters Counter.exit(); \/\/ Person exits Counter.exit(); \/\/ Person exits \/\/ How many people are left in the room? System.out.println(\"There are \" + Counter.total + \" people remaining in the room\"); } }    javac Counter.java java Counter  There are 2 people remaining in the room   By contrast to class scope, a variable is scoped to a method when it is declared within the method. It comes into existence when the method is entered and the declaration is executed, and it goes out of existance when the method completes. A method-scoped variable has a lifetime equal to the lifetime of the method instance, and naturally, it cannot be accessed from any statement that is outside the method, because it no longer exists.  For an example of method-scoped variables, we can refer back to nearly any of the past program we have studied. For example, refer back to the updated ComputeDistance class in . The distanceBetween(...) method declares several variables that are used within that method only, including term1 , term2 , and distance . These variables have method scope because they are declared within the distanceBetween(...) method and they are destroyed when the method returns. They cannot be accessed from outside the method after its exits because they do not exist at that point.  We will introduce the remaining important Java scoping at a suitable time. Understanding variable scope and lifetime is crucial for managing memory efficiently, preventing naming conflicts, and ensuring proper data encapsulation in Java programs.  "
},
{
  "id": "p-459",
  "level": "2",
  "url": "section-rt-scope.html#p-459",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "class scope method scope "
},
{
  "id": "p-460",
  "level": "2",
  "url": "section-rt-scope.html#p-460",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "class scope "
},
{
  "id": "listing-rt-staticvars",
  "level": "2",
  "url": "section-rt-scope.html#listing-rt-staticvars",
  "type": "Listing",
  "number": "5.4.1",
  "title": "",
  "body": "  \/\/ Counter.java \/\/ Counter counts people entering and exiting a room class Counter { \/\/ Total count public static long total = 0L; \/\/ Increment total count public static void enter() { Counter.total += 1L; } \/\/ Decrement total count public static void exit() { Counter.total -= 1L; } \/\/ Reset counter public static void reset() { Counter.total = 0L; } \/\/ Test the Counter class public static void main(String[] args) { Counter.enter(); \/\/ Person enters Counter.enter(); \/\/ Person enters Counter.enter(); \/\/ Person enters Counter.enter(); \/\/ Person enters Counter.exit(); \/\/ Person exits Counter.enter(); \/\/ Person enters Counter.exit(); \/\/ Person exits Counter.exit(); \/\/ Person exits \/\/ How many people are left in the room? System.out.println(\"There are \" + Counter.total + \" people remaining in the room\"); } }   "
},
{
  "id": "p-467",
  "level": "2",
  "url": "section-rt-scope.html#p-467",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method scope "
},
{
  "id": "section-rt-concepts",
  "level": "1",
  "url": "section-rt-concepts.html",
  "type": "Section",
  "number": "5.5",
  "title": "Key Concepts",
  "body": "Key Concepts   Variables that refer to objects are called 'reference variables.' They are different from primitive variables in important ways.  It is useful to think of the value held by a reference variable to be the address in memory where an object is stored, not the object itself.  Any variable declared as type object is a kind of reference variable.  When an reference variable is copied to another reference variable using assignment (=) the address of the object is copied, not the object itself.  The implication is that two or more reference variables may refer to one object in memory  To break the connection between a reference variable and an object, assign the variable to the special value null . After such an assignment the variable no longer refers to the object as it no longer holds the object's address in memory.  Java is able to track references to an object. When no more references are found, Java deletes the object from memory. This process is called Garbage Collection .  To trigger garbage collection, assign null to all variables that reference an object.  The StringBuilder class defines a special kind of object that builds large Strings in a memory-efficient manner.  The StringBuilder class implements append() and toString() methods  When variables are declared within the scope of a method, they come in to existence during execution of the method, and go out of existence when the method returns.  To ensure a variable persists for more than the time during which a method executes, declare that variable within a class but but outside all methods.  Variables declared outside a method must be at the top of a class.  Variables declared outside a method are accessible from within all methods of a class.  A useful problem solving strategy is to use such variables as a kind of bulletin board to post values to be used by other methods. One method can write a value, while another method can read and report that value.  Never declare a variable outside the scope of a method unless it is absolutely necessary. Variables declared in this manner unnecessarily often lead to bugs that are difficult to find.   "
},
{
  "id": "section-rt-exercises",
  "level": "1",
  "url": "section-rt-exercises.html",
  "type": "Section",
  "number": "5.6",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-c1-if-statements",
  "level": "1",
  "url": "section-c1-if-statements.html",
  "type": "Section",
  "number": "6.1",
  "title": "if-Statements",
  "body": " if-Statements    In we wrote a logical expression that evaluated to true if a dart lands in the centermost circle of a dart game, a circle centered at (300, 300) with radius of 20, and a second expression that evaluates to true when a dart lands within the next circular band (green) between circles with radii 20 and 50.  Let's continue to develop our game by tracking a player's total score. When the first expression is true , we add 4 to the total score. When the second expression is true , we add 3 to the total score. This pattern continues for the third (blue) and fourth (yellow) circular bands.    Dart Game Board     To accomplish this, we need to execute a block of code depending upon the value computed by each of the test expressions given the ( x , y ) dart landing coordinates. If an expression evaluates to true , the total score is incremented. If false , the code block is skipped. We need the ability to execute a block of code conditionally based on whether or not an expression evaluates to true (execute the block) or false (skip the block).  This behavior is called branching , and is achieved using an if-statement . Branching is our first program flow control teqchnique. illustrates the parts of an if-statement. Pay close attention to the way the if-statement is constructed. Most of the statements we will encounter follow the same pattern.   Parts of an if-Statement    An if-statement starts with the keyword if followed by a pair or parentheses, and a pair of curly braces or brackets ( {...} ). Within the parentheses is the boolean expression that must evaluate to true or false . The code between the brackets is executed if the expression evaluates to true and skipped if the expression evaluates to false .  Let's pull these concepts together and write a Java method that tests the landing location of a dart and awards the appropriate number of points.   awardPoints() Method   \/\/ Award points to the player's total depending upon where the dart lands public static void awardPoints(double x1, double y1) { \/\/ Circle parameters double xc = 300.0, yc = 300.0; \/\/ Compute distance double dist = Math.sqrt(Math.pow(x1 - xc, 2) + Math.pow(y1 - yc, 2)); \/\/ Branch depending on distance from center if (dist < 20) { \/\/ In center red circle. Add 4 points. total = total + 4; } if (dist >= 20 && dist < 50) { \/\/ In green circle. Add 3 points. total = total + 3; } \/\/ More to do... }    Note that the two if-statements above are mutually exclusive . There are no values of x1, y1 that will cause both if-statement blocks to execute. This is important. Both if-statements are indepependent of one another and so both conditions are tested when the method runs. We never want the code blocks of both if-statements to execute. That would award too many points to the player and our game would have a bug. Writing several if-statements in succession where only one block of code in the group should execute, is a strategy that we'll call mutually exclusive conditionals . The conditions in each if-statement must be written carefully so that only one will evaluate to true at any time.   Multi-branch Strategy 1: Mutually Exclusive Conditionals  When writing multiple sequential if-statements with the intention executing only one block, the conditionals for each must be mutually exclusive -- no two conditionals should ever evaluate to true at the same time.   Our game has two more circles that must be tested and points awared. Finish the above method by adding two more if-statements that award points when the dart lands in the blue and yellow circular bands. Make sure that each condition is written in a way that ensures it is exclusive of all other conditions.  "
},
{
  "id": "figure-c1-if1",
  "level": "2",
  "url": "section-c1-if-statements.html#figure-c1-if1",
  "type": "Figure",
  "number": "6.1.1",
  "title": "",
  "body": " Dart Game Board   "
},
{
  "id": "p-474",
  "level": "2",
  "url": "section-c1-if-statements.html#p-474",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "branching if-statement Branching "
},
{
  "id": "figure-c1-if-statement-schematic",
  "level": "2",
  "url": "section-c1-if-statements.html#figure-c1-if-statement-schematic",
  "type": "Figure",
  "number": "6.1.2",
  "title": "",
  "body": " Parts of an if-Statement   "
},
{
  "id": "listing-c1-awardpoints",
  "level": "2",
  "url": "section-c1-if-statements.html#listing-c1-awardpoints",
  "type": "Listing",
  "number": "6.1.3",
  "title": "",
  "body": " awardPoints() Method   \/\/ Award points to the player's total depending upon where the dart lands public static void awardPoints(double x1, double y1) { \/\/ Circle parameters double xc = 300.0, yc = 300.0; \/\/ Compute distance double dist = Math.sqrt(Math.pow(x1 - xc, 2) + Math.pow(y1 - yc, 2)); \/\/ Branch depending on distance from center if (dist < 20) { \/\/ In center red circle. Add 4 points. total = total + 4; } if (dist >= 20 && dist < 50) { \/\/ In green circle. Add 3 points. total = total + 3; } \/\/ More to do... }   "
},
{
  "id": "p-477",
  "level": "2",
  "url": "section-c1-if-statements.html#p-477",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mutually exclusive conditionals "
},
{
  "id": "section-c1-multibranch-ifs",
  "level": "1",
  "url": "section-c1-multibranch-ifs.html",
  "type": "Section",
  "number": "6.2",
  "title": "Multi-branch if-Statements",
  "body": " Multi-branch if-Statements  We can expand an if-statement to have multiple branches, with a condition that must be satisfied before an associated code block is executed, and even a final else-block which executes only when all other conditions fail.  This multi-branch if-statement is an extension of the single-branch if-statement. We may add zero or more else-if parts to the single-branch if-statement, as well as an optional else-part. All else-if and else-parts are optional. See the diagram below.   Parts of a multi-branch if-Statement    The first test must use the if keyword followed by a conditional expression in parentheses and a code block in curly brackets. The conditional parts that follow must use the else if keywords to indicate an alternative branch. Only the last branch may have no condition to test. This part must use the else keyword followed by a code block in curly brackets. This part executes when all other preceding conditions fail. Only the code block associated with the first successful condition executes. All other code blocks are skipped.   Rule: First True Condition Executes  When evaluating a multi-branch if-statement, evaluate conditions starting at the top and moving down. The code block associated with the first condition that evaluates to true is the one that executes. In this case, none of the following code blocks execute, even if their conditions evaluate to true as well.   We can use the multi-branch if-statement to solve our the points assignment problem of our Dart Game. In fact, if we are careful about the order of conditions tested, we can simplify the conditions considerably.  With a milti-branch if-statement, because only the first true condition executes, if the second condition is tested, then we know that the first condition must have evaluated to false . There would be no need to repeat that test; we can assume it is false. Returning to > , our two if-statements tested the conditions dist < 20 and dist >= 20 && dist < 50 . In a multi-branch if-statement, the first part of the conjunction making up the second condition would be redundant if we tested them in that order. In other words, if we know that dist < 20 is false , then dist >= 20 must be true, and so it can be eliminated from the second conditional test. In fact, this type of reasoning can be applied to all conditions in the multi-branch if-statement. A simplified version of our awardPoints() method follows.   awardPoints() Method with Multi-branch if-Statements   \/\/ Award points to the player's total depending upon where the dart lands public static void awardPoints(double x1, double y1) { \/\/ Circle parameters double xc = 300.0, yc = 300.0; \/\/ Compute distance double dist = Math.sqrt(Math.pow(x1 - xc, 2) + Math.pow(y1 - yc, 2)); \/\/ Branch depending on distance from center if (dist < 20) { \/\/ In center red circle. Add 4 points. total = total + 4; } else if (dist < 50) { \/\/ In green circle. Add 3 points. total = total + 3; } else if (dist < 100) { \/\/ In blue circle. Add 2 points. total = total + 2; } else if (dist < 150) { \/\/ In yellow circle. Add 1 points. total = total + 1; } }    Each conditional expression is simplified because we can make use of the fact that all previous conditionals must have evaluated to false , so there is no need to check it again. We call this strategy Most Common First because we check the subconditions that are most commonly shared by all if-statement conditions before checking others. This prevents us from having to recheck subconditions for each branch.   Multi-branch Strategy 2: Most Common First  Order the conditions in a multi-branch if-statement such that most commonly shared subconditions are checked before others. This lets us simplify following conditions because we can assume all previous conditions have evaluated to false .   A final multi-branch strategy to consider is Assume and Exclude . This applies when we want to test a number of conditions and store the result by in a variable.  For example, let's say that we want to test if a point is within the unit square, that is, a point has an x value in [0.0, 1.0] and a y-value in [0.0, 1.0]. We could write a couple more complex conditional expressions that test for the coordinates being in each range, or we could assume the point is in the unit square and test for conditions that demonstrates it is not in the square. Consider the following method named inUnitSquare().    inUnitSquare(...) Method   \/\/ Check if a point (x, y) is in the unit square public static boolean inUnitSquare(double x, double y) { \/\/ Assume it is boolean hit = true; \/\/ Exclude half-planes that are out of bounds if (x > 1.0) { hit = false; } else if (x < 0.0) { hit = false; } else if (y > 1.0) { hit = false; } else if (y < 0.0) { hit = false; } \/\/ Return the final value of hit return hit; }    Sometimes it is easier to test that one excluding condition is satified than it is to test that all including conditions are satisfied simultaneously.   Multi-branch Strategy 3: Assume and Exclude  Assume that some complex condition is true and init a flag variable to true . Then check that any one of several excluding condition is statisfied, and set the flag to false if this is the case. Return the flag variable.   The strategy you choose to employ will depend upon the nature of the problem you are solving. The simpler the strategy you choose, the less likley a mistake will be made.  "
},
{
  "id": "figure-c1-multi-branch-if-statement-schematic",
  "level": "2",
  "url": "section-c1-multibranch-ifs.html#figure-c1-multi-branch-if-statement-schematic",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": " Parts of a multi-branch if-Statement   "
},
{
  "id": "listing-c1-awardpoints2",
  "level": "2",
  "url": "section-c1-multibranch-ifs.html#listing-c1-awardpoints2",
  "type": "Listing",
  "number": "6.2.2",
  "title": "",
  "body": " awardPoints() Method with Multi-branch if-Statements   \/\/ Award points to the player's total depending upon where the dart lands public static void awardPoints(double x1, double y1) { \/\/ Circle parameters double xc = 300.0, yc = 300.0; \/\/ Compute distance double dist = Math.sqrt(Math.pow(x1 - xc, 2) + Math.pow(y1 - yc, 2)); \/\/ Branch depending on distance from center if (dist < 20) { \/\/ In center red circle. Add 4 points. total = total + 4; } else if (dist < 50) { \/\/ In green circle. Add 3 points. total = total + 3; } else if (dist < 100) { \/\/ In blue circle. Add 2 points. total = total + 2; } else if (dist < 150) { \/\/ In yellow circle. Add 1 points. total = total + 1; } }   "
},
{
  "id": "listing-c1-inunit",
  "level": "2",
  "url": "section-c1-multibranch-ifs.html#listing-c1-inunit",
  "type": "Listing",
  "number": "6.2.3",
  "title": "",
  "body": " inUnitSquare(...) Method   \/\/ Check if a point (x, y) is in the unit square public static boolean inUnitSquare(double x, double y) { \/\/ Assume it is boolean hit = true; \/\/ Exclude half-planes that are out of bounds if (x > 1.0) { hit = false; } else if (x < 0.0) { hit = false; } else if (y > 1.0) { hit = false; } else if (y < 0.0) { hit = false; } \/\/ Return the final value of hit return hit; }   "
},
{
  "id": "section-c1-while-statements",
  "level": "1",
  "url": "section-c1-while-statements.html",
  "type": "Section",
  "number": "6.3",
  "title": "while-Statements",
  "body": " while-Statements   Our second Java control statement is the while-statement . This statement gives us a way to perform iteration , the second major program flow control technique. Recall that the if-statement gives us branching , the first flow control technique. With the while-statement we now have a second program flow control technique.  The while-statement executes a block of code -- while -- a conditional expression continues to evaluate to true . More specifically, when a while-statement is encountered at runtime, the condition is evaluated. If true , the code block is executed, and the condition is evaluated again. If it remains true , the code block is executed a second time. This repeats until the condition evaluates to false . Compare this to the if-statement, which executes its block of code, once at most, if a conditional expression evaluates to true . Otherise the code block is skipped. Either way, program control continues after the if-statement.  The structure of a while-statement is nearly identical to an if-statement, the only difference being that the if keyword is replace by the while keyword. Otherwise, the structure is the same.   Parts of a while-Statement      While with a Counter  One of the most common ways to use the while-statement is to execute its block of code a fixed number of times. We can accomplish this by adding a counter variable to the while-statement. The counter variable is declared and initialized before the loop, usually to 0, and it is incremented by 1 each time the code block is executed. The while-statement conditional expression tests the value of the counter. When it meets or exceeds some maximum value, the condition evaluates to false and the while-statement stops iteration.  The following listing is an example program that makes use of this strategy.   While-statement with a counter   \/\/ WhileCounter.java public class WhileCounter { public static void main(String[] args) { int i = 0; \/\/ Init i to 0 while (i < 5) { \/\/ Test if i has exceeded max counts System.out.println(i); \/\/ Print the current value of i i++; \/\/ Increment i by 1 } System.out.println(\"Done\"); \/\/ First line after the while } }    When we compile and run this program, we see the following output.   javac WhileCounter.java java WhileCounter  0 1 2 3 4 Done   The variable i is declared and initialized to 0 . The while-statement condition continues to run while the value of i remains less than 5. Each time the while-statement code block executes, it prints the value of i and then increments the value of i by 1.  As expected, 0 is printed first, followed by 1, 2, etc. as i is incremented. The last value printed is 4. After 4 the value of i increments to 5, and then the condition is tested. Because 5 < 5 evaluates to false , iteration stops and control continues with the first line after the while-statement, which is to print \"Done\".  Constructing a while-statement for counting involves the addition of three important elements:   A counter is declared and initialized before the while-statement.  The counter is increment within the block of code associated with the while-statement.  The while-statement's conditional test check if the counter exceeds some value and stops.   We will see these same three important elements resurface when we continue our exploration of iteration.    Counter Variations  Nothing prevents us from modifying the way a while-statement counts. There is no requirement that we count up by 1 for each iteration. We might count up by 2, or count down by 1. Also, there is nothing to say what we use as the test for when a while-statement should stop iterating. We might want to change the way a while-statement operates when we have a secondary use for the counter variable.  In the following sample we wanted to write a program that prints a countdown sequence to the launch of a rocket.   Listoff.java   \/\/ Liftoff.java public class Liftoff { public static void main(String[] args) { int count = 10; \/\/ Init counter while ( count >= 0 ) { \/\/ Continue while i >= 0 System.out.println(count); \/\/ Print countdown count--; \/\/ Decrement i } System.out.println(\"Lift off!\"); \/\/ Once we hit 0, lift off } }    Compiling and running the previous program, we see the following.   javac Liftoff.java java Liftoff  10 9 8 7 6 5 4 3 2 1 0 Lift off!   In another application, we might want to print the number of feet and remaining inches from the edge of a wall where studs should be placed. Typically, wall studs are placed at 16 inch spacing from center to center. Let's write a program that prints the location for all studs on a 12 foot wall measured in feet plus remaining inches. To solve this problem we count position up by 16 inches, but use integer division and modulus to convert to feet and remaining inches before printing.   Studs.java   \/\/ Studs.java public class Studs { public static void main(String[] args) { int feet, inches; \/\/ Temp variables int width = 12*12; \/\/ Width of wall in inches int position = 0; \/\/ First stud position while ( position <= width ) { \/\/ Keep going while less that width feet = position \/ 12; \/\/ Compute feet and remaining inches inches = position % 12; \/\/ Print results System.out.println(feet + \" ft \" + inches + \" in\"); position += 16; \/\/ Increment position } } }    Compiling and running this program, we get the following stud positions.   javac Studs.java java Studs  0 ft 0 in 1 ft 4 in 2 ft 8 in 4 ft 0 in 5 ft 4 in 6 ft 8 in 8 ft 0 in 9 ft 4 in 10 ft 8 in 12 ft 0 in   Iteraton is just one technique that can be used alone or combined with branching and other program flow control to craft sophisticated computational problem solutions.   "
},
{
  "id": "figure-c1-while-statement-schematic",
  "level": "2",
  "url": "section-c1-while-statements.html#figure-c1-while-statement-schematic",
  "type": "Figure",
  "number": "6.3.1",
  "title": "",
  "body": " Parts of a while-Statement   "
},
{
  "id": "listing-c1-while-counter",
  "level": "2",
  "url": "section-c1-while-statements.html#listing-c1-while-counter",
  "type": "Listing",
  "number": "6.3.2",
  "title": "",
  "body": " While-statement with a counter   \/\/ WhileCounter.java public class WhileCounter { public static void main(String[] args) { int i = 0; \/\/ Init i to 0 while (i < 5) { \/\/ Test if i has exceeded max counts System.out.println(i); \/\/ Print the current value of i i++; \/\/ Increment i by 1 } System.out.println(\"Done\"); \/\/ First line after the while } }   "
},
{
  "id": "listing-c1-liftoff",
  "level": "2",
  "url": "section-c1-while-statements.html#listing-c1-liftoff",
  "type": "Listing",
  "number": "6.3.3",
  "title": "",
  "body": " Listoff.java   \/\/ Liftoff.java public class Liftoff { public static void main(String[] args) { int count = 10; \/\/ Init counter while ( count >= 0 ) { \/\/ Continue while i >= 0 System.out.println(count); \/\/ Print countdown count--; \/\/ Decrement i } System.out.println(\"Lift off!\"); \/\/ Once we hit 0, lift off } }   "
},
{
  "id": "listing-c1-studs",
  "level": "2",
  "url": "section-c1-while-statements.html#listing-c1-studs",
  "type": "Listing",
  "number": "6.3.4",
  "title": "",
  "body": " Studs.java   \/\/ Studs.java public class Studs { public static void main(String[] args) { int feet, inches; \/\/ Temp variables int width = 12*12; \/\/ Width of wall in inches int position = 0; \/\/ First stud position while ( position <= width ) { \/\/ Keep going while less that width feet = position \/ 12; \/\/ Compute feet and remaining inches inches = position % 12; \/\/ Print results System.out.println(feet + \" ft \" + inches + \" in\"); position += 16; \/\/ Increment position } } }   "
},
{
  "id": "section-c1-break-continue",
  "level": "1",
  "url": "section-c1-break-continue.html",
  "type": "Section",
  "number": "6.4",
  "title": "<code class=\"code-inline tex2jax_ignore\">break<\/code> and <code class=\"code-inline tex2jax_ignore\">continue<\/code>",
  "body": " break and continue   Two additional statements are available to modify the flow of a while-statement and other iteration statements in Java. These two statements are break and continue .  The break statement immediately breaks out of a while-statement, regardless of the value of the conditional expression, and continues execution immediately after the while-statement. The continue statement immediately stops execution of a while-statement code block but it returns to the conditional expression and evaluates it to see if another iteration should be performed.    break Statement  A break statement is useful when you are iterating using a while-statement or other iteration statement and you determine that the iteration is over so you can immediately jump out of the while-statement. There is no need to complete the statment code block and no need to test the conditional expression.  (Example if break)    continue Statement  A continue statement also jumps out of a while-statement code block, similar to break . It differs from break in the sense that it does not cause program flow to leave a while-statement altogether. Instead, it returns immediately to the conditional expression to test if another iteration should be performed.  (Example of continue)    The break and continue statements provide an enhanced ability to customize the standard behavior of the while-statement for special-purpose computing.   "
},
{
  "id": "section-c1-collection-classes",
  "level": "1",
  "url": "section-c1-collection-classes.html",
  "type": "Section",
  "number": "6.5",
  "title": "Collection Classes",
  "body": " Collection Classes  In and we introduced several classes that come with the Java core library. These included String , Random , Scanner , and StringBuilder . The Java core library includes thousands of classes that are available for you to use to solve your computational problems. One category of classes in the core library are called Collections . A Collection object is a kind of object that can hold and manage many other kind of objects. In this section we will explore a couple of the most used Collection classes in Java.   ArrayList  The first Collection class we'll explore is the ArrayList . An ArrayList is an object that holds references to zero or more other objects in an ordered sequence. An ArrayList grows or shrinks as needed. There is no reason to decide how large the an ArrayList must be before instantiation.  When an ArrayList is instantiated, it must name the class of objects that it will hold. Because Java is a strongly typed language, we cannot freely assign just any object to a variable that is declared to hold another type of object. Despite this feature, an ArrayList can be instantiated to hold a particular class. The reason this is possible is because the ArrayList class is defined as a generic . In short, the ArrayList is more of a class template that substitutes a class named as part of its constructor just before instantiating the new object. A class is specified as a part of its constructor using the diamond operator ( < > ).  If we want to instantiate an ArrayList that holds Oval objects, in the variable type declaration we must follow the ArrayList class name in the constructor with the diamond operator containing Oval. Following is an example of declaring and initializing an ArrayList to hold Oval objects.   ArrayList<Oval> ovals = new ArrayList<>();   Note that the type used to declare the variable ovals is ArrayList<Oval> , but the constructor used to create a new object to initialize the variable, is ArrayList<> , having no class name in the diamond operator. Java knows that the variable is of type ArrayList<Oval> and so it is not necessary to repeat the Oval class in the constructor's diamond operator because Java already knows the class that it should contain.    ArrayList Methods  As is the case with all classes, ArrayList implements methods that allow us to work with the object. Because the ArrayList class is designed to manage a series of objects, its methods relate to these management tasks as well. The following table lists many common ArrayList methods. The class of objects held by the ArrayList is not known until the ArrayList is instantiated. This class is indicated in the following table by a T for type . Once an ArrayList is instantiated, substitute T with the class specified within the diamond operator.   Common ArrayList methods    Method  Returns  Description    add(T element)  boolean  Add element to the end of the ArrayList.    add(int idx, T element)  void  Inserts element at position idx, shifting objects.    get(int idx)  T  Returns a reference to the element at index idx .    remove(int idx)  T  Removes and returns the item at index idx .    size()  int  Returns the number of elements in the ArrayList.    clear()  void  Removes all elements of the ArrayList, leaving it empty.    contains(T element)  boolean  Returns true if the ArrayList contains the element.    indexOf(T element)  int  Returns the index of the first object matching element       Filling ArrayLists and Accessing Elements  We can use what we know about iteration and our new ArrayList methods to fill an ArrayList with Ovals. The following code snippet creates 20 Oval objects using the default constructor and stores them in an ArrayList. Note that we are using the add(…) method of the ArrayList to add each new Oval object once it is created.   Oval o; \/\/ Helper variable and new ArrayList ArrayList<Oval> ovals = new ArrayList<>(); \/\/ While loop iterating 20 times int i = 0; while ( i < 20 ) { o = new Oval(); \/\/ Instantiate Oval ovals.add( o ); \/\/ Store Oval in ArrayList i++; }   Without a data structure like ArrayList, we would have had to declare 20 variables to hold each Oval object reference, and then instantiate and assign each in order. We would have not been able to use the while-statement. That would have been tedious at best. Instantiating 1000 Ovals would have been impractical.  Using a similar approach, we can access each Oval object. For example, if we wanted to change the fill color for each Oval, we could execute a code snippet like the following.   \/\/ While loop iterating over all elements int i = 0; while ( i < ovals.size() ) { o = ovals.get(i); \/\/ Get reference to Oval at index i o.setFillColor(255, 0, 0); \/\/ Set its fill color i++; }   In the above, we use the ArrayList's get(…) method to get a reference to the object at index i and assign the reference to the temporary helper variable. Then we use the helper variable to invoke the objects setFillColor(…) method.  When we set up the while-statement condition we did not enter 20 explicitly. Instead, we asked the ArrayList its size by invoking the size() method. In general, it is a better idea to avoid using fixed parameters in favor of looking up parameter values. Later, if we decide that we do want 1000 Ovals, we will not have to hunt down and fix all the places in our code where we entered 20 expilicitly.    Working with an ArrayList  Let's bring a number of skills together and have a closer look at a larger program. In the following RandomOvals.java example, we are applying several skils, including:  Importing classes, both from the Java core library and custom  Naming our top-level class and matching to file name  Declaring static variables in the outer class scope so the entire program has access  Starting execution at main(…)  Defining a helper method for abstraction and reuse  Instantiating new objects like Random and Oval  Generating random numbers in a defined range  Constructing a while-statement with an index that is used both to count iterations as well as to access ArrayList elements  Invoking ArrayList methods like add(…) , get(…) and size()  Invoking Oval methods like setFillColor(…) and setMousePressedHandler(…)  Handing mouse events     RandomOvals.java   \/\/ RandomOvals.java import java.util.ArrayList; \/\/ Import classes import java.util.Random; import doodlepad.*; \/\/ Import DoodlePad classes public class RandomOvals { \/\/ public class \/\/ Declare ArrayList of Ovals public static ArrayList<Oval> ovals = new ArrayList<>(); \/\/ Start of execution public static void main(String[] args) { Oval o; \/\/ Helper variable \/\/ Fill ArrayList with 20 randomly placed Oval objects \/\/ Use a while to iterate 20 times int i = 0; \/\/ Init counter while (i < 20) { \/\/ While-statement o = new Oval(); \/\/ Create an Oval object o.setMousePressedHandler( RandomOvals::recolor ); ovals.add( o ); \/\/ Add Oval to ArrayList i++; \/\/ Increment counter } } \/\/ Event handler method that executes when an Oval is clicked public static void recolor(Shape shp, double x, double y, int button) { int r, g, b; \/\/ Helper variables Oval o; Random rnd = new Random(); \/\/ Declare a Random object \/\/ Loop over all Oval objects and reset to a random fill color int i = 0; \/\/ Init counter while ( i < ovals.size() ) { \/\/ While loop o = ovals.get(i); \/\/ Get the Oval at index i r = rnd.nextInt(256); \/\/ Generate random color components g = rnd.nextInt(256); b = rnd.nextInt(256); o.setFillColor(r, g, b); \/\/ Change fill color i++; \/\/ Increment counter } } }    At the top of the program starts by importing all classes required that are not available by default. In this program we use the ArrayList and Random classes from the java.util package of Java core library as well as DoodlePad classes.  The main RandomOvals class contains two methods, the main(…) method where execution starts, as well as a helper method named recolor to be used as an event handler when Oval objects are clicked.  In the main(…) method we declare a helper variable and then set up a while-statement to help us create new Oval objects and fill the ArrayList. The loop counter i is initialized to 0 and incremented at the end of the statement code block. The conditional ensure that the loop repeats 20 times.  Within the while-statement code block, we create a new Oval object and assign a reference to the helper variable. Then we use this variable to both assign a method to be invoked when the object is clicked, as as as add the object to the end of the ArrayList.  The structure of the recolor(…) method is similar to main(…) . We start with helper variables and instantiate a Random object. Once again, we set up a while-statement to loop over all elements of the ArrayList. This time the condition does not specify the size of the ArrayList explicitly, but instead asks the ArrayList for the number of elements using its size() method.  Within the body of the while code block, we use the ArrayList get(…) method to get a reference to the object at index i . Note the i is used both as the loop counter as well as the index of each object in the ArrayList -- a dual purpose. Following this we generate three integers in the proper range for color elements, and then use them to set the Oval object's fill color to a random value. This repeats for all Ovals in the ArrayList.    The figure on the right show the program in action, after clicking one of the Oval objects. The console session for compiling and running is below (for Windows Command Prompt). Make sure you have a copy of the doodlepad.jar file in your project and that you are using the correct syntax for your shell.   javac -cp .;doodlepad.jar RandomOvals.java java -cp .;doodlepad.jar RandomOvals      RandomOvals.java       Autoboxing and Unboxing  A limitation of ArrayList is that it can hold objects only. But, as we know, primitive types are not objects, and we certainly want the option to store collections of primitives like int and double . How might we do that?  To address this clear limitation, Java provides wrapper classes that allow us to wrap each primitive in an object. With wrapper classes we are able to wrap primitives values in an object before storing in an ArrayList or other Collection. Java defines one wrapper class for each of the eight primitives. See . As you can see, in general, the name of the wrapper class is the primitive name starting with a capital letter (exceptions are int and char ).   Java Wrapper Classes    Primitive type  Wrapper class    byte  Byte    short  Short    int  Integer    long  Long    float  Float    double  Double    boolean  Boolean    char  Character     This makes it possible to wrap and and store primitives in an ArrayList, but it is not convenient. Constantly wrapping and unwrapping primitives can become tedious, and quickly.  Fortnately, there is a solution to this problem as well, called autoboxing and unboxing . Java automatically wraps, or \"boxes\" primitive types whenever necessary to place them in a collection like an ArrayList. It also automatically unboxes primitve types when removing from an ArrayList. We only need to remember the wrapper class name when naming the class type to be held by an ArrayList, and Java handles the rest.  In the following code snippet, we declare and fill and ArrayList<Integer> with 100 randomly generated integers. Once filled, we loop over the ArrayList<Integer> again, get each int at each successive index and print it. In both cases (adding and getting) we do not box or unbox the primitive type int . Java automatically boxes each int in an Integer before adding to the ArrayList, and unboxes the Integer to an int when getting and assigning to the primtiive variable.   Boxing and Unboxing   Random rnd = new Random(); \/\/ New Random and ArrayList objects ArrayList<Integer> ints = new ArrayList<>(); \/\/ Fill ArrayList with 1000 random ints \/\/ The int is not boxed in an Integer class before being added \/\/ Java takes care of this for us int i = 0; \/\/ Counter while (i < 1000) { \/\/ Loop ints.add( rnd.nextInt(100) ); \/\/ Add int to ArrayList i++; \/\/ Increment counter } \/\/ Get all ints and print \/\/ Notice how val is assigned without unboxing Integer object int val; \/\/ Helper variable i = 0; \/\/ Reset counter while (i < ints.size()) { \/\/ Loop val = ints.get( i ); \/\/ Get int System.out.println( val ); \/\/ Print int i++; \/\/ Increment counter }    Place the above in a complete Java program, compile and run to prove to yourself that this program works without error.    HashMap  (TODO)  Iterating over HashMaps    HashSet  (TODO)  Iterating over HashSet   "
},
{
  "id": "p-517",
  "level": "2",
  "url": "section-c1-collection-classes.html#p-517",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strongly typed generic diamond operator "
},
{
  "id": "table-c1-arraylist-methods",
  "level": "2",
  "url": "section-c1-collection-classes.html#table-c1-arraylist-methods",
  "type": "Table",
  "number": "6.5.1",
  "title": "Common ArrayList methods",
  "body": " Common ArrayList methods    Method  Returns  Description    add(T element)  boolean  Add element to the end of the ArrayList.    add(int idx, T element)  void  Inserts element at position idx, shifting objects.    get(int idx)  T  Returns a reference to the element at index idx .    remove(int idx)  T  Removes and returns the item at index idx .    size()  int  Returns the number of elements in the ArrayList.    clear()  void  Removes all elements of the ArrayList, leaving it empty.    contains(T element)  boolean  Returns true if the ArrayList contains the element.    indexOf(T element)  int  Returns the index of the first object matching element    "
},
{
  "id": "listing-c1-randomovals",
  "level": "2",
  "url": "section-c1-collection-classes.html#listing-c1-randomovals",
  "type": "Listing",
  "number": "6.5.2",
  "title": "",
  "body": " RandomOvals.java   \/\/ RandomOvals.java import java.util.ArrayList; \/\/ Import classes import java.util.Random; import doodlepad.*; \/\/ Import DoodlePad classes public class RandomOvals { \/\/ public class \/\/ Declare ArrayList of Ovals public static ArrayList<Oval> ovals = new ArrayList<>(); \/\/ Start of execution public static void main(String[] args) { Oval o; \/\/ Helper variable \/\/ Fill ArrayList with 20 randomly placed Oval objects \/\/ Use a while to iterate 20 times int i = 0; \/\/ Init counter while (i < 20) { \/\/ While-statement o = new Oval(); \/\/ Create an Oval object o.setMousePressedHandler( RandomOvals::recolor ); ovals.add( o ); \/\/ Add Oval to ArrayList i++; \/\/ Increment counter } } \/\/ Event handler method that executes when an Oval is clicked public static void recolor(Shape shp, double x, double y, int button) { int r, g, b; \/\/ Helper variables Oval o; Random rnd = new Random(); \/\/ Declare a Random object \/\/ Loop over all Oval objects and reset to a random fill color int i = 0; \/\/ Init counter while ( i < ovals.size() ) { \/\/ While loop o = ovals.get(i); \/\/ Get the Oval at index i r = rnd.nextInt(256); \/\/ Generate random color components g = rnd.nextInt(256); b = rnd.nextInt(256); o.setFillColor(r, g, b); \/\/ Change fill color i++; \/\/ Increment counter } } }   "
},
{
  "id": "figure-34",
  "level": "2",
  "url": "section-c1-collection-classes.html#figure-34",
  "type": "Figure",
  "number": "6.5.3",
  "title": "",
  "body": " RandomOvals.java   "
},
{
  "id": "p-536",
  "level": "2",
  "url": "section-c1-collection-classes.html#p-536",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "wrapper classes "
},
{
  "id": "table-c1-wrapper-classes",
  "level": "2",
  "url": "section-c1-collection-classes.html#table-c1-wrapper-classes",
  "type": "Table",
  "number": "6.5.4",
  "title": "Java Wrapper Classes",
  "body": " Java Wrapper Classes    Primitive type  Wrapper class    byte  Byte    short  Short    int  Integer    long  Long    float  Float    double  Double    boolean  Boolean    char  Character    "
},
{
  "id": "p-538",
  "level": "2",
  "url": "section-c1-collection-classes.html#p-538",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "autoboxing unboxing "
},
{
  "id": "listing-c1-boxing-example",
  "level": "2",
  "url": "section-c1-collection-classes.html#listing-c1-boxing-example",
  "type": "Listing",
  "number": "6.5.5",
  "title": "",
  "body": " Boxing and Unboxing   Random rnd = new Random(); \/\/ New Random and ArrayList objects ArrayList<Integer> ints = new ArrayList<>(); \/\/ Fill ArrayList with 1000 random ints \/\/ The int is not boxed in an Integer class before being added \/\/ Java takes care of this for us int i = 0; \/\/ Counter while (i < 1000) { \/\/ Loop ints.add( rnd.nextInt(100) ); \/\/ Add int to ArrayList i++; \/\/ Increment counter } \/\/ Get all ints and print \/\/ Notice how val is assigned without unboxing Integer object int val; \/\/ Helper variable i = 0; \/\/ Reset counter while (i < ints.size()) { \/\/ Loop val = ints.get( i ); \/\/ Get int System.out.println( val ); \/\/ Print int i++; \/\/ Increment counter }   "
},
{
  "id": "section-c1-nested-control",
  "level": "1",
  "url": "section-c1-nested-control.html",
  "type": "Section",
  "number": "6.6",
  "title": "Nested Control",
  "body": " Nested Control  Once you have mastered the core concepts of branching and iteration it is time to start thinking about how they may be combined to form even more sophisticated control structures in your programs. All such approaches involve nesting statements. For example, we might want to put an if-statement within a while-statement to decide which block of code to execute each time you iterate, or a while-statement in another while-statement which is necessary when iterating over multi-dimensional objects, or anything necessary that you can imagine to solve the problem at hand. In this section we will explore a few of the common ways to nest control structures.   Accessing Two Dimensions  It is not uncommon to find the two-dimensional layout of objects. Think of the cells of a spreadsheet, keys on a keyboard, pixels on a display, or bricks in a wall. Obviously, the position of elements in a two-dimensional layout are characterized by two coordinate values, one for the first dimension and another for the second dimension. These might be the rows and columns of a spreadsheet or the x,y location of pixels making up a graphics display. Accessing each of these elements requires us to iterate both over one dimension as well as the other dimension to generate all possible index or coordinate pairs. This is accomplished with nested iteration, for example, a while-statement within a while-statement. The outer while-statement generates the index or coordinate for one dimension, and for each of these values, the inner while-statement generates the index or coordinate for the other dimension. The complete inner iteration is repreated for every value of the outer iteration. The result is that on each pass of the inner iteration, we have a new pair of coordinate values.  For example, let's write a program that generates a two-dimensional layout of fixed-size Rectangle objects. Creating the objects is straightforward. What we need is a way to generate all Rectangle locations, and nested iteration does that for us. Study .   Grid1.java   \/\/ Grid1.java import doodlepad.*; \/\/ Import graphics public class Grid1 { public static void main(String[] args) { \/\/ Start execution int x, y; \/\/ Helpers; x = 5; \/\/ Init x while (x <= 550) { \/\/ x-coordinate loop y = 5; \/\/ Init y while (y <= 550) { \/\/ y-coordinate loop new Rectangle(x, y, 110, 50); \/\/ New Rectangle y = y + 60; \/\/ Increment y } x = x + 120; \/\/ Increment x } } }     In this case we count loop iterations with x and y , which are also used as the coordinates of each Rectangle object created. The result is the figure on the right. Note that it is not necessary to save references to the new Rectangle object instantiated unless we have a need to access them later. In this case we are generating the layou only, So we instantiate by do not save references to each Rectangle.    Grid1.java       Nested Branching to Simplify Condition Testing  In this section we want to write a program that responds to the use clicking on the Pad object (the window). Whereever the mouse is cicked, we want to create a new Rectangle object and set its fill color depending upon the coordinate values. If the mouse is clicked in the upper-left of the window, the Rectangle should be filled with red. If the mouse is clicked in the upper-right of the window, the Rectangle should be filled with green. If in lower-left, fill with blue, and in lower-right, fill with yellow. We can test the mouse coordinates after a click and branch to one of four blocks of code that set different fill colors. Deciding on a branch requires that both the mouse x and y coordinates are tested. If a window has dimensions 600 × 600, we could use the following four-branch if-statement to make the correct decision.   if (x < 300 && y < 300) { r.setFillColor(255, 0, 0); else if (x >= 300 && y < 300) { r.setFillColor(0, 255, 0); else if (x < 300 && y >= 300) { r.setFillColor(0, 0, 255); else if (x >= 300 && y >= 300) { r.setFillColor(255, 255, 0); }   the first two branches and the second two branches have common tests on the value of y. Recognizing this, we can simplify by only testing each y value once in a outer branch, and then further testing the x value within the inner code blocks of each branch.  To demonstrate this idea, study the onPadClicked(…) method in . Compile and run the program to try it yourself. As the window is clicked, a new Rectangle object is instantiated and filled with a color that depends on both mouse coordinate values. Notice how we use the else in each if-statement to simplify the conditional tests. With nested branches we only actually evaluate two relational statements, x < 300 and y < 300 . This is much simpler than the four-branch if-statement in the snippet above. Fewer details to get right means fewer ways to get it wrong.   Grid1.java   \/\/ Grid2.java import doodlepad.*; public class Grid2 { public static void main(String[] args) { \/\/ Get reference Pad (window) Pad pad = Pad.getPad(); \/\/ Set event handler method pad.setMousePressedHandler( Grid2::onPadPressed ); } \/\/ Event handler method public static void onPadPressed(Pad pad, double x, double y, int but) { \/\/ Instantiate new Rectangle Rectangle r = new Rectangle(x-60, y-25, 110, 50); if (y < 300) { \/\/ Set fill with nested branches. if (x < 300) { r.setFillColor(255, 0, 0); \/\/ Red } else { r.setFillColor(0, 255, 0); \/\/ Green } } else { if (x < 300) { r.setFillColor(0, 0, 255); \/\/ Blue } else { r.setFillColor(255, 255, 0);\/\/ Yellow } } } }      javac -cp doodlepad.jar Grid2.java java -cp .;doodlepad.jar Grid2     Grid2.java     How can you modify these tests to change the size of the rectangular region that assigns each color? Can you add a third branch level that uses the button number parameter but passed to onPadPressed(…) to change the color palette used depending upon whether the left of right button is clicked?    Modify Iteration with Branching  In our final example, lets repeat the first example Grid1.java , but avoid drawing the Rectangle object whenever the x- and y-coordinate values are equal. We can accomplish this by adding an if-statement to the inner while-statement that only instantiates a new Ractangle when x and y are not equal. See   Grid3.java   \/\/ Grid3.java import doodlepad.*; \/\/ Import graphics public class Grid3 { public static void main(String[] args) { \/\/ Start execution int x, y; \/\/ Helpers; x = 5; \/\/ Init x while (x <= 550) { \/\/ x-coordinate loop y = 5; \/\/ Init y while (y <= 550) { \/\/ y-coordinate loop if (x != y) { \/\/ Only when x != y new Rectangle(x, y, 110, 50); \/\/ New Rectangle } y = y + 60; \/\/ Increment y } x = x + 120; \/\/ Increment x } } }     There is no practical limitation on the way we nest our control statements. We can place while-statements in if-statements, if-statements in while-statements, if-statements in while-statements that are in other while-statements, multiple if-statements in a single while-statement. It only depends on what you need for the problem you are trying to solve.    Grid3.java with missing Rectangles      "
},
{
  "id": "listing-c1-grid1",
  "level": "2",
  "url": "section-c1-nested-control.html#listing-c1-grid1",
  "type": "Listing",
  "number": "6.6.1",
  "title": "",
  "body": " Grid1.java   \/\/ Grid1.java import doodlepad.*; \/\/ Import graphics public class Grid1 { public static void main(String[] args) { \/\/ Start execution int x, y; \/\/ Helpers; x = 5; \/\/ Init x while (x <= 550) { \/\/ x-coordinate loop y = 5; \/\/ Init y while (y <= 550) { \/\/ y-coordinate loop new Rectangle(x, y, 110, 50); \/\/ New Rectangle y = y + 60; \/\/ Increment y } x = x + 120; \/\/ Increment x } } }   "
},
{
  "id": "figure-c1-grid1",
  "level": "2",
  "url": "section-c1-nested-control.html#figure-c1-grid1",
  "type": "Figure",
  "number": "6.6.2",
  "title": "",
  "body": " Grid1.java   "
},
{
  "id": "listing-c1-nested-ifs",
  "level": "2",
  "url": "section-c1-nested-control.html#listing-c1-nested-ifs",
  "type": "Listing",
  "number": "6.6.3",
  "title": "",
  "body": " Grid1.java   \/\/ Grid2.java import doodlepad.*; public class Grid2 { public static void main(String[] args) { \/\/ Get reference Pad (window) Pad pad = Pad.getPad(); \/\/ Set event handler method pad.setMousePressedHandler( Grid2::onPadPressed ); } \/\/ Event handler method public static void onPadPressed(Pad pad, double x, double y, int but) { \/\/ Instantiate new Rectangle Rectangle r = new Rectangle(x-60, y-25, 110, 50); if (y < 300) { \/\/ Set fill with nested branches. if (x < 300) { r.setFillColor(255, 0, 0); \/\/ Red } else { r.setFillColor(0, 255, 0); \/\/ Green } } else { if (x < 300) { r.setFillColor(0, 0, 255); \/\/ Blue } else { r.setFillColor(255, 255, 0);\/\/ Yellow } } } }   "
},
{
  "id": "figure-c1-grid2",
  "level": "2",
  "url": "section-c1-nested-control.html#figure-c1-grid2",
  "type": "Figure",
  "number": "6.6.4",
  "title": "",
  "body": " Grid2.java   "
},
{
  "id": "listing-c1-grid3",
  "level": "2",
  "url": "section-c1-nested-control.html#listing-c1-grid3",
  "type": "Listing",
  "number": "6.6.5",
  "title": "",
  "body": " Grid3.java   \/\/ Grid3.java import doodlepad.*; \/\/ Import graphics public class Grid3 { public static void main(String[] args) { \/\/ Start execution int x, y; \/\/ Helpers; x = 5; \/\/ Init x while (x <= 550) { \/\/ x-coordinate loop y = 5; \/\/ Init y while (y <= 550) { \/\/ y-coordinate loop if (x != y) { \/\/ Only when x != y new Rectangle(x, y, 110, 50); \/\/ New Rectangle } y = y + 60; \/\/ Increment y } x = x + 120; \/\/ Increment x } } }   "
},
{
  "id": "figure-c1-grid3",
  "level": "2",
  "url": "section-c1-nested-control.html#figure-c1-grid3",
  "type": "Figure",
  "number": "6.6.6",
  "title": "",
  "body": " Grid3.java with missing Rectangles   "
},
{
  "id": "section-c1-block-scope",
  "level": "1",
  "url": "section-c1-block-scope.html",
  "type": "Section",
  "number": "6.7",
  "title": "Block Scope",
  "body": " Block Scope   Recall that the scope of a variable is defined by the location where it is declared. It is important to understand that the location in your program where a variable is declared dictates from where it may be accesses. In we introduced the main kinds of program scope in Java. These were as follows, listed in order from least restrictive to most restrictive.   package scope (limited to a Java package).  class scope (accessible throughout a class), and  object (instance) scope (limited to a specific object),  method scope (limited to a specific method),  block scope (limited to a specific block of code),   Before closing this section, it is a good time to introduce block scope, the most restrictive scope in Java.  Variables may be declared almost anywhere in a Java program, including within a statement such as an if-statement or while-statement. The block of code associated with one of these statements forms its own scope, appropriately called block scope .  As with other scopes, if a variable is declared within a code block it may not be accessed outside that scope. The compiler can detect this mistake and will let us know when we try to violate this rule. Consider the following small example and the attempt to compile this program in the console session following. The compiler tells us that it cannot access the variable o because it was declared within the scope of the while-statement, a block scope, and so it cannot be accessed outside that scope. This is true even though we access the varaible within the block scope to initialize the fill color of all Oval objects to green.    \/\/ BlockScope.java import doodlepad.*; public class BlockScope { public static void main(String[] args) { int i = 0; \/\/ Init counter while (i < 10 ) { \/\/ Loop 10 times Oval o = new Oval(); \/\/ Create 10 Ovals o.setFillColor(0, 255, 0); \/\/ Set fill to green i++; \/\/ Increment counter } o.setFillColor(255, 0, 0); \/\/ Set fill of last Oval to red } }     javac -cp doodlepad.jar BlockScope.java  BlockScope.java:12: error: cannot find symbol o.setFillColor(255, 0, 0); ^ symbol: variable o location: class BlockScope 1 error   In general, it is a very good idea to declare your variables in a scope that is as narrow as feasible and still bea ble to solve your problem. You may be tempted to just declare all variables in the outer class scope so that you don't have to worry about declaring them again. Resist the temptation. This is often the cause for subtle bugs that can be very hard to find.  In the , we declare i once at the top of our program so we never have to worry about it again. In the main(…) method, we loop 5 times and each time invoke the helper method repeatChars(…) , which takes char and count parameters identifying the character to repeat and the number of times to repeat it in the returned String. The main(…) prints the constructed String and continues to the next iteration.   CharRepeats.java   public class CharRepeats { \/\/ Declare once for entire program public static int i = 0; public static void main(String[] args) { \/\/ Print strings with progressively longer char lengths i = 0; \/\/ Init counter while (i < 5) { \/\/ Repeat 5 times String repeated = repeatChars('A', i+1);\/\/ Build String System.out.println(repeated); \/\/ Print String i++; \/\/ Increment counter } } \/\/ Method to build a repeated-character String public static String repeatChars(char ch, int count) { StringBuilder sb = new StringBuilder(); \/\/ StringBuilder i = 0; \/\/ Init counter while (i < count) { \/\/ Loop for all chars sb.append(ch); \/\/ Append ch to StringBuilder i++; \/\/ Increment counter } return sb.toString(); \/\/ Return String } }    Next we compile and run the program. The program compiles and runs just fine, and it looks correct. In fact, when I tested the repeatChars(…) method individually, outside the iteration in the main(…) method, it worked correctly. The loop counter i is properly initialized and incremented by 1 every time. I expected the output \"A\", \"AA\", \"AAA\", \"AAAA\", \"AAAAA\". But as you can see below the output is \"A\", \"AAA\", \"AAAAA\". It is clear that the counter in main(…) increases by 1 each time. I can see with my own eyes the statement i++; . So what is the problem? Could it have something to do with the variable i that we declared in the outer class scope?   javac CharRepeats.java java CharRepeats  A AAA AAAAA   If you look closely you will see that i is used as the counter for the iteration in the main(…) method as well as in the repeatChars(…) method. In both cases i reset to 0, but repeatChars(…) leaves the value of i at count + 1 . When repeatChars(…) exits it returns to the while-statement in main(…) already in progress. This statement continues, but does with a value of i that has been changed by repeatChars(…) . In this case, the result is that the counter is advanced too quickly, resulting in some of the expected output being skipped.   Principle: Most Narrow Scope Feasible  Always declare your variables in the most narrow scope feasible, while still allowing your program to solve your problem. This practice minimizes the chances that a single variable declared in an outer scope but used in multiple inner scopes for different purposes are inadvertently modified unexpectedly. This avoid bugs that are hard to fine.    "
},
{
  "id": "p-557",
  "level": "2",
  "url": "section-c1-block-scope.html#p-557",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scope "
},
{
  "id": "p-558",
  "level": "2",
  "url": "section-c1-block-scope.html#p-558",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "block "
},
{
  "id": "p-559",
  "level": "2",
  "url": "section-c1-block-scope.html#p-559",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "block scope "
},
{
  "id": "listing-c1-block-scope",
  "level": "2",
  "url": "section-c1-block-scope.html#listing-c1-block-scope",
  "type": "Listing",
  "number": "6.7.1",
  "title": "",
  "body": "  \/\/ BlockScope.java import doodlepad.*; public class BlockScope { public static void main(String[] args) { int i = 0; \/\/ Init counter while (i < 10 ) { \/\/ Loop 10 times Oval o = new Oval(); \/\/ Create 10 Ovals o.setFillColor(0, 255, 0); \/\/ Set fill to green i++; \/\/ Increment counter } o.setFillColor(255, 0, 0); \/\/ Set fill of last Oval to red } }   "
},
{
  "id": "listing-c1-charrepeats",
  "level": "2",
  "url": "section-c1-block-scope.html#listing-c1-charrepeats",
  "type": "Listing",
  "number": "6.7.2",
  "title": "",
  "body": " CharRepeats.java   public class CharRepeats { \/\/ Declare once for entire program public static int i = 0; public static void main(String[] args) { \/\/ Print strings with progressively longer char lengths i = 0; \/\/ Init counter while (i < 5) { \/\/ Repeat 5 times String repeated = repeatChars('A', i+1);\/\/ Build String System.out.println(repeated); \/\/ Print String i++; \/\/ Increment counter } } \/\/ Method to build a repeated-character String public static String repeatChars(char ch, int count) { StringBuilder sb = new StringBuilder(); \/\/ StringBuilder i = 0; \/\/ Init counter while (i < count) { \/\/ Loop for all chars sb.append(ch); \/\/ Append ch to StringBuilder i++; \/\/ Increment counter } return sb.toString(); \/\/ Return String } }   "
},
{
  "id": "section-c1-concepts",
  "level": "1",
  "url": "section-c1-concepts.html",
  "type": "Section",
  "number": "6.8",
  "title": "Key Concepts",
  "body": " Key Concepts   The flow of a program may be configured to change based on the state of its data values.  An if-statement controls program flow by conditionally executing a block of code when a certain expression evaluates to true , and skips the block of code when the expression evaluates to false .  A while-statement will repeatedly execute a block of code while an expression continues to evaluate to true  The code block for a while statement may never execute if the conditional statement never evaluates to true  A while-statement is also referred to as a \"while loop\" and a counter variable may be used to construct a program flow scenario in which a block of code is executed a precise number of times  Execution of a while-statement code block may be terminated immediately when a break statement is encountered  Execution of a while-statement code block may be terminated immediately when a continue statement is encountered. In this case program flow returns to the while-statement conditional expression to test if the code block should be repeated.  When a while-statement is exited due to a break statement or its conditional expression evaluating to false , execution continues immediately after the while-statement code block  An if-statement nested within a while-statement is a common idiom for determining if a break or continue should be executed.  A while-statement nested within another while-statement is a common idiom for generating all pairs of two counters, such as when working with a rectangular structure  If-statements may be extended with an else-clause which specifies an alternative block of code to be executed when the conditional expression evaluates to false  If-statements may also be extended with an else-if clause which specifies a new conditional expression and alternative block of code and to be executed when all previous conditional expression evaluates to false  An if-statement must include an if-clause, zero more else-if clauses and zero or one else-clause  Consecutive if-statements are independent from one another - if both conditional expressions evaluate to true, then both code blocks will execute.  The first conditional expression encountered in a single multi-clause if-statement that evaluates to true will result in its code block being executed. All other code blocks are skipped.  The top-down first-true procedure for evaluating if-statements has implications on which code block is executed.  The order of conditional expressions listed in a complex if-statement as well as the way conditional expressions are constructed may have a large impact on the flow of a program.  There are multiple strategies for designing a program that branches execution. We named three.  Multi-branch Strategy 1: Mutually Exclusive Conditionals. When writing multiple sequential if-statements with the intention executing only one block, the conditionals for each must be mutually exclusive -- no two conditionals should ever evaluate to true at the same time.  Multi-branch Strategy 2: Most Common First. Order the conditions in a multi-branch if-statement such that most commonly shared subconditions are checked before others. This lets us simplify following conditions because we can assume all previous conditions have evaluated to false.  Multi-branch Strategy 3: Assume and Exclude. Assume that some complex condition is true and initialize a flag variable to true. Then check that any one of several excluding condition is statisfied, and set the flag to false if this is the case. Return the flag variable.  If-statements may be nested as a way to simplify conditional expressions  Java Collections are specialized objects designed to store and manage small or large numbers of other objects  An ArrayList is an ordered, resizable collection of objects that may be manipulated using its methods  ArrayList may hold any type of object using generics , also known as diamond notation .  A while-statement with a counter is a standard idiom for accessing all objects stored in an ArrayList.  Variables declared as one of Java's primitive data types may be stored in an ArrayList by first wrapping the primitive value in an equivalent class provided by Java  In many cases Java will automatically wrap a primitive in a class and remove a primitive from a class - processes called AutoBoxing and Unboxing  The classes that Java provides for boxing include Boolean, Byte, Character, Float, Double, Short, Integer, Long  A HashMap is a Java Collection composed of a list of (key, value) pairs. Unlike ArrayList that uses a sequential int as the key to access an element, a HashMap may use any hashable object as a key.  A HashSet is another Java Collection that mimics a mathematical set. It holds a sequence of any object type, but unlike ArrayList, the same object may not be stored twice in a HashSet and the order of elements in not guaranteed.  Block scope is another scope defined by the code blocks associated with a statement like a while-statement or an if-statement. Variables declared in a block scope may not be accessed from outside the code block.  To avoid subtle bugs, always practice the Most Narrow Scope Feasible principle. Always declare your variables in the most narrow scope feasible but still allows your program to solve your problem.   "
},
{
  "id": "section-c1-exercises",
  "level": "1",
  "url": "section-c1-exercises.html",
  "type": "Section",
  "number": "6.9",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-c2-for-statements",
  "level": "1",
  "url": "section-c2-for-statements.html",
  "type": "Section",
  "number": "7.1",
  "title": "<code class=\"code-inline tex2jax_ignore\">for<\/code> Statements",
  "body": " for Statements   In we learned that the three important elements of a while-statement configured for counting were:   A counter is declared and initialized before the while-statement.  The counter is increment within the block of code associated with the while-statement.  The while-statement's conditional test check if the counter exceeds some value and stops.   A while-statement configured for counting turns out to be such an important control structure that a special statement was invented whose job is dedicated primarily to the execution of a block of code for a fixed number of iterations. This is the for-statement . The following diagram shows the parts of a for-statement.   Parts of a for-Statement     Similar to the while- and if-statements, the for-statement starts with a special keyword ( for ), and is followed by a pair of parentheses as well as a code block delimited by curly braces. An important difference between the for-statement and the while-statement is that the for-statement contains three expressions between its parentheses, not one. The three expressions are the initializer , test for continuation , and update , all separated with semicolons ( ; ). describes each in more detail.   if-Statement Expressions    Expression  Position  Description  Executes  Example    Initializer  left  Declares and\/or initializes a counter  Once at the start of an if-statement  int i = 0    Test for continuation  center  Checks if the next iteration should proceed.  Once before each iteration begins.  i < 10    Update  right  Increments a counter or other expression.  Once after each iteration ends.  i++     A for-statement is useful when iterating a fixed number of times, and is preferred over a while-statement whenever possible due to its compactness and clarity. Also, the break and continue statements work with a for-statement in manner identical to the while-statement. (See ).  is a rewrite of the example in with while-statements replaced by for-statements. Notice how the elements of the program responsible for iteration are more compact, and easier to read now that the three expressions are grouped together within the parentheses following the for keyword.  With the extra space available, we modified the logic a bit. Rather than instantiate new Rectangle when x != y , we are now performing the complementary action. When x == y we invoke continue which halts the iteration and returns back to the for-statement to check for another iteration. Note that it would have been tricky to use the same approach with while-statements. In the while-statement our loop counter was incremented at the end of the code block. If we executed a continue before the end of the code block the loop counter would have never been updated. This would cause the program to enter an infinite loop, and never terminate. With a for-statement, the increment is always executed, whether or not the code block completes. This make the continue statement much more convenient to use.  Another update we made in Grid4.java is the addition of fill colors for the Rectangles. We wanted to fill every other Rectangle with blue or gold. To achieve this we declared a boolean variable named flip . Each time through the inner code block, we negated flip with the statement flip = !flip . In other words, if flip == true then it became false . If flip == false then it because true . We used this flip-flop variable and an if-statement to decide which color to use to fill teh current Rectangle.    \/\/ Grid4.java import doodlepad.*; \/\/ Import graphics public class Grid4 { public static void main(String[] args) { \/\/ Start execution Rectangle r; \/\/ Helper variables boolean flip = false; for (int x = 5; x <= 550; x += 120) { \/\/ x-coordinate loop for (int y = 5; y <= 550; y += 60) {\/\/ y-coordinate loop if (x == y) { continue; } \/\/ Skip when x == y r = new Rectangle(x, y, 110, 50); \/\/ New Rectangle flip = !flip; \/\/ flip-flop if (flip) { \/\/ If flip r.setFillColor(0, 0, 255); \/\/ Fill blue } else { \/\/ If flop r.setFillColor(255, 215, 0); \/\/ Fill gold } } } } }      javac -cp doodlepad.jar Grid4.java java -cp .;doodlepad.jar Grid4     Grid4.java     There is one more item to note about for-statements associated with its block scope. In we introduced the concept of block scope and mentioned how all statements with a code block defines a new block scope. This is the case with for-statements. If we define a variable within the code block of a for-statement, that variable may not be accessed from outside the block scope.  With a for-statement, not only are declarations within the curly braces considered to exist within the scope of the code block, but any declarations within the parentheses also are considered to exist within the scope of the code block. To demonstrate, let's revisit and update it with a for-statement having a loop counter i that is declared when initialized.   BlockScope2.java   \/\/ BlockScope2.java import doodlepad.*; public class BlockScope2 { public static void main(String[] args) { for (int i = 0; i < 10; i++) { \/\/ Create 10 Ovals Oval o = new Oval(); } System.out.println( i ); \/\/ Print final value of i } }    When we attempt to compile this program, the compiler is unable to find the our loop counter variable i because it is declared within the parentheses of the for-statement, and therefore is considered to exist in that statement's block scope. If you do have a need to access i after the for-statement, you can circumvent this problem by declaring i before the for-statement, and use the first expression in the parentheses for initializing i only, without the declaration.   javac -cp doodlepad.jar BlockScope2.java  BlockScope2.java:9: error: cannot find symbol System.out.println( i ); \/\/ Print final value of i ^ symbol: variable i location: class BlockScope2 1 error   "
},
{
  "id": "p-568",
  "level": "2",
  "url": "section-c2-for-statements.html#p-568",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "for-statement "
},
{
  "id": "figure-c2-for-statement-schematic",
  "level": "2",
  "url": "section-c2-for-statements.html#figure-c2-for-statement-schematic",
  "type": "Figure",
  "number": "7.1.1",
  "title": "",
  "body": " Parts of a for-Statement   "
},
{
  "id": "table-c2-if-statement",
  "level": "2",
  "url": "section-c2-for-statements.html#table-c2-if-statement",
  "type": "Table",
  "number": "7.1.2",
  "title": "if-Statement Expressions",
  "body": " if-Statement Expressions    Expression  Position  Description  Executes  Example    Initializer  left  Declares and\/or initializes a counter  Once at the start of an if-statement  int i = 0    Test for continuation  center  Checks if the next iteration should proceed.  Once before each iteration begins.  i < 10    Update  right  Increments a counter or other expression.  Once after each iteration ends.  i++    "
},
{
  "id": "listing-c2-grid4",
  "level": "2",
  "url": "section-c2-for-statements.html#listing-c2-grid4",
  "type": "Listing",
  "number": "7.1.3",
  "title": "",
  "body": "  \/\/ Grid4.java import doodlepad.*; \/\/ Import graphics public class Grid4 { public static void main(String[] args) { \/\/ Start execution Rectangle r; \/\/ Helper variables boolean flip = false; for (int x = 5; x <= 550; x += 120) { \/\/ x-coordinate loop for (int y = 5; y <= 550; y += 60) {\/\/ y-coordinate loop if (x == y) { continue; } \/\/ Skip when x == y r = new Rectangle(x, y, 110, 50); \/\/ New Rectangle flip = !flip; \/\/ flip-flop if (flip) { \/\/ If flip r.setFillColor(0, 0, 255); \/\/ Fill blue } else { \/\/ If flop r.setFillColor(255, 215, 0); \/\/ Fill gold } } } } }   "
},
{
  "id": "figure-c2-grid4",
  "level": "2",
  "url": "section-c2-for-statements.html#figure-c2-grid4",
  "type": "Figure",
  "number": "7.1.4",
  "title": "",
  "body": " Grid4.java   "
},
{
  "id": "listing-c2-block-scope2",
  "level": "2",
  "url": "section-c2-for-statements.html#listing-c2-block-scope2",
  "type": "Listing",
  "number": "7.1.5",
  "title": "",
  "body": " BlockScope2.java   \/\/ BlockScope2.java import doodlepad.*; public class BlockScope2 { public static void main(String[] args) { for (int i = 0; i < 10; i++) { \/\/ Create 10 Ovals Oval o = new Oval(); } System.out.println( i ); \/\/ Print final value of i } }   "
},
{
  "id": "section-c2-do-while-statements",
  "level": "1",
  "url": "section-c2-do-while-statements.html",
  "type": "Section",
  "number": "7.2",
  "title": "<code class=\"code-inline tex2jax_ignore\">do-while<\/code> Statements",
  "body": " do-while Statements   A third option for iteration in Java is the do-while statement. The do-while statement is very similar to the while-statement, with one very important difference: the test for continuation is at the end of the code block, not the beginning, as it is with the while-statement. Have a look at the following figure which illustrates the parts of a do-while statement.   Parts of a do-while statement    One implication of the do-while continuation condition occuring at the end of the code block is that the block statements execute at least once before the condition is tested. Compare this to both the while-statement and the for-statement where the condition is tested before the code block in both cases. Consequently, with while- and for-statements, the code block may never execute.  This feature of the do-while statement makes it ideal for certain situations, such as when building a text menu for the terminal. With a text menu, we always want to print the menu options at least once before prompting the user for a response. Otherwise how will the user know how to answer?  Lastly, note that the break and continue statements may be used with a do-while, in a manner similar to the for- and while-statements.  is a small program that demonstrates how to set up and run a text menu using a do-while statement. The loop continues while the response is not 0, which signals that the program should end. When the user enters a response of 0, the do-while statement breaks and the System.exit(0) command executes, which terminates the program.   DoWhileMenu.java   \/\/ DoWhileMenu.java import java.util.Random; import java.util.Scanner; import doodlepad.*; public class DoWhileMenu { public static void main(String[] args) { Scanner scn = new Scanner(System.in); \/\/ Helpers Random rnd = new Random(); int r, g, b, ans = 0; do { \/\/ Print menu System.out.println(\"Choose a Shape to Create\"); System.out.println(\"1. Oval\"); System.out.println(\"2. Rectangle\"); System.out.println(\"3. RoundRect\"); System.out.println(\"0. Exit\"); System.out.print(\"Enter a number: \"); ans = scn.nextInt(); \/\/ Prompt user r = rnd.nextInt(256); \/\/ Random color g = rnd.nextInt(256); b = rnd.nextInt(256); if (ans == 1) { \/\/ Take action Oval o = new Oval(); o.setFillColor(r, g, b); } else if (ans == 2) { Rectangle r1 = new Rectangle(); r1.setFillColor(r, g, b); } else if (ans == 3) { RoundRect r2 = new RoundRect(); r2.setFillColor(r, g, b); } } while (ans != 0); \/\/ Keep going until exit System.out.println(\"Goodbye\"); System.exit(0); \/\/ Quit program } }    Following is a sample session showing the menu in action. The output window generated is shown on the right.    javac -cp doodlepad.jar DoWhileMenu.java java -cp .;doodlepad.jar DoWhileMenu    Choose a Shape to Create 1. Oval 2. Rectangle 3. RoundRect 0. Exit Enter a number: 1 Choose a Shape to Create 1. Oval 2. Rectangle 3. RoundRect 0. Exit Enter a number: 2 Choose a Shape to Create 1. Oval 2. Rectangle 3. RoundRect 0. Exit Enter a number: 3 Choose a Shape to Create 1. Oval 2. Rectangle 3. RoundRect 0. Exit Enter a number: 0 Goodbye     DoWhileMenu.java      "
},
{
  "id": "figure-c2-do-while-schematic",
  "level": "2",
  "url": "section-c2-do-while-statements.html#figure-c2-do-while-schematic",
  "type": "Figure",
  "number": "7.2.1",
  "title": "",
  "body": " Parts of a do-while statement   "
},
{
  "id": "listing-c2-do-while-menu",
  "level": "2",
  "url": "section-c2-do-while-statements.html#listing-c2-do-while-menu",
  "type": "Listing",
  "number": "7.2.2",
  "title": "",
  "body": " DoWhileMenu.java   \/\/ DoWhileMenu.java import java.util.Random; import java.util.Scanner; import doodlepad.*; public class DoWhileMenu { public static void main(String[] args) { Scanner scn = new Scanner(System.in); \/\/ Helpers Random rnd = new Random(); int r, g, b, ans = 0; do { \/\/ Print menu System.out.println(\"Choose a Shape to Create\"); System.out.println(\"1. Oval\"); System.out.println(\"2. Rectangle\"); System.out.println(\"3. RoundRect\"); System.out.println(\"0. Exit\"); System.out.print(\"Enter a number: \"); ans = scn.nextInt(); \/\/ Prompt user r = rnd.nextInt(256); \/\/ Random color g = rnd.nextInt(256); b = rnd.nextInt(256); if (ans == 1) { \/\/ Take action Oval o = new Oval(); o.setFillColor(r, g, b); } else if (ans == 2) { Rectangle r1 = new Rectangle(); r1.setFillColor(r, g, b); } else if (ans == 3) { RoundRect r2 = new RoundRect(); r2.setFillColor(r, g, b); } } while (ans != 0); \/\/ Keep going until exit System.out.println(\"Goodbye\"); System.exit(0); \/\/ Quit program } }   "
},
{
  "id": "figure-c2-do-while-menu",
  "level": "2",
  "url": "section-c2-do-while-statements.html#figure-c2-do-while-menu",
  "type": "Figure",
  "number": "7.2.3",
  "title": "",
  "body": " DoWhileMenu.java   "
},
{
  "id": "section-c2-enhanced-for-statements",
  "level": "1",
  "url": "section-c2-enhanced-for-statements.html",
  "type": "Section",
  "number": "7.3",
  "title": "for-each Statements",
  "body": " for-each Statements   In we used a while-statement to iterate over the elements of an ArrayList to access each Oval object and change its fill color. We now know that we could done the job using a for-statement as well. In both cases we would declare, initialize, and update a loop counter. We also need to correctly write the condition that tests for continuation of the iteration. The need to access all elements of a Collection is common, and so a special statement was introduced to make this easier and less open to error by eliminating the counter variable altogether. The for-each statement, also known as the enahanced-for , will iterate over any Collection that supports it, without the need for a loop counter variable.    Part of a for-each  The for-each statement is simpler to construct than other statements used for iteration. See . Note that there is no need for a loop counter at all. The variable elm will refer to each element in the collection in order, first to last, and the code block of the executed for each.   Parts of a for-each statement    Let's rewrite only the parts of the recolor(…) method from that form the loop and element access to use the for-each statement instead of a while-statement. In the following, the original while- version is on the left and the updated for-each version in the right. It is pretty clear that the for-each version is more compact, with fewer moving parts.    public static void recolor(…) { Oval o; int i = 0; while ( i < ovals.size() ) { o = ovals.get(i); o.setFillColor(…); i++; } }     public static void recolor(…) { for (Oval o : ovals) { o.setFillColor(…); } }    When reading a for-each, it is convenient to read the : as \"in.\" We usually read the above example as \"for each Oval o in ovals.\"  Also note that the break and continue statements work as expected in a for-each. If a break is encountered, the iteration terminates and execution picks up immediately after the for-each bock. If a continue is encountered the code block execution terminates and control is returned to the for-each to see if there is another element in the Collection to be processed.    Limitations of the for-each Statement  The for-each does have a few limitations to be aware of. The temporary variable assigned to Collection elements must be declared within the scope of the for-each. In other words, it must have block scope. Unlike the other iteration statements, you cannot declare the variable assigned to Collection elements up front and then use it in the for-each statement.  Another limitation of the for-each statement is that you cannot modify the Collection while the iteration is underway. For example, you cannit us a for-each to search for certain elements in a Collection and then delete them when found. If you want to do this, you must use a form of iteration that makes use of an element index, and keep track of how element indexes change as the Collection is modified.   "
},
{
  "id": "p-585",
  "level": "2",
  "url": "section-c2-enhanced-for-statements.html#p-585",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "for-each "
},
{
  "id": "figure-c2-for-each-schematic",
  "level": "2",
  "url": "section-c2-enhanced-for-statements.html#figure-c2-for-each-schematic",
  "type": "Figure",
  "number": "7.3.1",
  "title": "",
  "body": " Parts of a for-each statement   "
},
{
  "id": "section-c2-switch-statements",
  "level": "1",
  "url": "section-c2-switch-statements.html",
  "type": "Section",
  "number": "7.4",
  "title": "<code class=\"code-inline tex2jax_ignore\">switch<\/code> Statements",
  "body": " switch Statements   Just like Java gives us multiple ways to iterate, it also gives us multiple ways to branch. The switch-statement is a more powerful form of branching in Java, especially when branching based on the value of a variable. The switch-statement takes a little effort to master, and is expanding functionality more recently in the Java language. Here we'll describe the original way switch- is used, at least for the time being. Watch this space.    Parts of a switch-statement   The parts of a switch-statement can be a little confusing at first. Take a moment to study and pay special attention to the break keyword, because leaving it out is valid, but it is often not what you intend to do. Leaving out a break when you meant to include it is a common mistake made by novice Java programmers.    Parts of a switch-statement     There are four keywords to identify: switch , case , break , and default . The switch keyword is followed by parentheses containing a selector expression , and a code block delimited by brackets. The selector expression must evaluate to a number, String, or other constant. Each label following a case identifies the number or String to be matched against the value obtained from the evaluated selector expression. If a match is found with a case  label , the statements following the case are executed. If\/when a break is encountered, the switch statement is exited. If the default branch is encountered, it executes automatically. No match is required.    Exiting a switch-statement  It is important to understand that a switch-statement is exited only in one of two situations: program control runs off the end of the code block, or a break is encountered.   Caution  If the statements after a case do not include a break , then program control proceed into the statements of the next case (if there is one), even if the next case  label does not match the selector expression value.   Make sure you understand this behavior of a switch-statement. The switch- does not exit a case branch automatically when finished executing its statements like an if-statement does. It keeps flowing into the statements of next case branch. It is a good idea to always include a break when you intend to exit a switch-statement.    When to use a switch-statement  A switch-statement is very convenient when comparing an expression to a list of number or String constant values. For example, referring back to our DoWhuleMenu.java example in , we prompted the user for an integer, and then tested the user's response against a list of integer options. We could have used a switch-statement instead of a multi-branch if-statement, which would have avoided the need to write test expressions for each branch of the if-statement. Below, we include the original multi-branch if-statement from on the left, and an updated version using a switch-statement on the right.    if (ans == 1) { Oval o = new Oval(); o.setFillColor(r, g, b); } else if (ans == 2) { Rectangle r1 = new Rectangle(); r1.setFillColor(r, g, b); } else if (ans == 3) { RoundRect r2 = new RoundRect(); r2.setFillColor(r, g, b); }     switch (ans) { case 1: Oval o = new Oval(); o.setFillColor(r, g, b); break; case 2: Rectangle r1 = new Rectangle(); r1.setFillColor(r, g, b); break; case 3: RoundRect r2 = new RoundRect(); r2.setFillColor(r, g, b); break; }    Adding a default: to the end of our switch-statement would be equivalent to adding an else to the end of our if-statement. Forgetting one of the break statements would cause the statements of multiple case branches to be executed.    When to leave out a break  Leaving out a break can be useful when you want to execute the same set of actions after matching multiple label values. A good example is when you are writing code that should handle the differences in behavior between different operating systems.  In we described the keyboard events that the DoodlePad library can handle. In  BoxDriver.java we gave an example. Methods capable of handling keyboard events must have the following signature.  void onKeyPressed(Pad p, String keyText, String keyMods)  Unfortunately, the value of the keyText parameter has different values for certain special keys when your program is running on different operating systems. lists differences for the arrow keys on macOS and Windows.   keyText value differences by operating system    Key  macOS  Windows    Left arrow  \"←\"  \"Left\"    Right arrow  \"→\"  \"Right\"    Up arrow  \"↑\"  \"Up\"    Down arrow  \"↓\"  \"Down\"     In our BoxDriver.java example of we handled this difference by writing complex conditional tests for each if-statement branch in the key-press event handler. The following two code snippets show the original multi-brach if-statement on the left and an updated version rewritten as a switch-statement on the right. Note how the switch-statement has two case labels for each branch with no break between them. Statements under each pair of case labels will be executed when either label matches the value of keyText . The switch-statement on the right has much less clutter as compared to the if-statement on the left. More importantly, eliminating the complex conditionals required for each if- branch reduces the number of opportunities for a mistake.    if (keyText.equals(\"Left\") || keyText.equals(\"←\")) { box.move(-10, 0); } else if (keyText.equals(\"Right\") || keyText.equals(\"→\")) { box.move(10, 0); } else if (keyText.equals(\"Up\") || keyText.equals(\"↑\")) { box.move(0, -10); } else if (keyText.equals(\"Down\") || keyText.equals(\"↓\")) { box.move(0, 10); }     switch (keyText) { case \"Left\": case \"←\": box.move(-10, 0); break; case \"Right\": case \"→\": box.move(10, 0); break; case \"Up\": case \"↑\": box.move(0, -10); break; case \"Down\": case \"↓\": box.move(0, 10); break; }      What's next for switch?  In a future version of the JDK, the switch-statement will get a major upgrade. Selector expressions will no longer be limited to Strings, numbers or constants. They will be permitted to evaluate to any valid type. Furthermore, case labels will be permitted to be patterns that are matched against the selector expression value. See JEP 433 if you are interested in learning how switch-statements will be enhanced in Java.   "
},
{
  "id": "p-593",
  "level": "2",
  "url": "section-c2-switch-statements.html#p-593",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "switch-statement "
},
{
  "id": "figure-c2-switch-schematic",
  "level": "2",
  "url": "section-c2-switch-statements.html#figure-c2-switch-schematic",
  "type": "Figure",
  "number": "7.4.1",
  "title": "",
  "body": " Parts of a switch-statement   "
},
{
  "id": "p-598",
  "level": "2",
  "url": "section-c2-switch-statements.html#p-598",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "not "
},
{
  "id": "table-c2-keytext-differences",
  "level": "2",
  "url": "section-c2-switch-statements.html#table-c2-keytext-differences",
  "type": "Table",
  "number": "7.4.2",
  "title": "<code class=\"code-inline tex2jax_ignore\">keyText<\/code> value differences by operating system",
  "body": " keyText value differences by operating system    Key  macOS  Windows    Left arrow  \"←\"  \"Left\"    Right arrow  \"→\"  \"Right\"    Up arrow  \"↑\"  \"Up\"    Down arrow  \"↓\"  \"Down\"    "
},
{
  "id": "section-c2-ternary-operator",
  "level": "1",
  "url": "section-c2-ternary-operator.html",
  "type": "Section",
  "number": "7.5",
  "title": "Ternary Operator",
  "body": " Ternary Operator  The last way to \"branch\" on a condition that we'll discuss is not a statement at all, but in fact, it is an expression that makes use of a special ternary operator . Rather than modify the flow of control in a program, this ternary operator evalutes to one of two a values, depending upon whether its conditional subexpression evaluates to true of false .   Parts of a Ternary Operator  The Java ternary operator is composed of the symbols ? and : . Like any other expression, one that makes use of the ternary operator evalutes to a value. What makes this kind of expression unique is that it evaluates to a different value depending upon an internal subexprssion. This operator is ternary , meaning it has three operands. The first operand is the conditional expression to be evaluated. If the subexpression evaluates to true , the second operand is evaluated and its value returned. If the first operand subexpression evaluates to false the third operand of the ternary operator is evaluated and returned. The first two operands of the ternary operator are separated by ? and the second two by : .  The parts of an expression making use of a ternary operator are illustrated in It is useful to think of the first operand of the ternary operator as the question being asked. The first part of the ternary operator ( ? ) is a good reminder of that. If the answer to the question (the conditional subexpression result) evaluates to true , then the second operand is evaluated and returned, otherwise the third operands is evaluated and returned.   Expression using a Ternary Operator      When to use a Ternary Operator  Ternary operators are particularly useful when you want to substitute different values based on the value of a subexpression. Consider the following code snippet.   Is the number even or odd?  int num = 12; System.out.println( num + \" is \" + (num % 2 == 0? \"even\" : \"odd\" ) );   Let's test this in JShell. What you'll see below is that the exact same expression produces a different output, depending upon the result of the subexpression num % 2 == 0 .   jshell> int num = 12;  num ==> 12  jshell> System.out.println( num + \" is \" + (num % 2 == 0? \"even\" : \"odd\" ) );  12 is even  jshell> num = 13;  num ==> 13  jshell> System.out.println( num + \" is \" + (num % 2 == 0? \"even\" : \"odd\" ) );  13 is odd  jshell>   Think for a moment about the amount of code we'd need to produce the same output using an if-statement or a switch-statement. Either alternative would require several lines of code to accomplish. The ternary operator is a very compact way to do the same thing, only within the context of a single expression.   "
},
{
  "id": "p-608",
  "level": "2",
  "url": "section-c2-ternary-operator.html#p-608",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ternary operator "
},
{
  "id": "figure-c2-ternary-operator-schematic",
  "level": "2",
  "url": "section-c2-ternary-operator.html#figure-c2-ternary-operator-schematic",
  "type": "Figure",
  "number": "7.5.1",
  "title": "",
  "body": " Expression using a Ternary Operator   "
},
{
  "id": "listing-c2-ternop-ex1",
  "level": "2",
  "url": "section-c2-ternary-operator.html#listing-c2-ternop-ex1",
  "type": "Listing",
  "number": "7.5.2",
  "title": "",
  "body": " Is the number even or odd?  int num = 12; System.out.println( num + \" is \" + (num % 2 == 0? \"even\" : \"odd\" ) );  "
},
{
  "id": "section-c2-comparisons",
  "level": "1",
  "url": "section-c2-comparisons.html",
  "type": "Section",
  "number": "7.6",
  "title": "Comparing Correctly",
  "body": " Comparing Correctly  In all methods of flow control, some form of conditional expression if evaluated, and used to direct the flow to different parts of a program. Desired behavior depends entirely on the correctness of the comparisons made. In this section we examine the right way to make certain comparisons in Java, so you know that your program will always compare correctly.   .equals() vs. ==  Recall that in we learned that a String object is immutable. All String methods that seemingly modify internal character data, actually return a new String object. This behavior is an opportunity for the Java runtime to optimize memory usage. The String class makes use of the immutable feature of String objects by storing only a single copy of any String literal. For example, whenever I create a String using literal notation, say String feeling1 = \"Joy\"; , the String class will create the String \"Joy\" and store it in memory reseved for a special pool of Strings. The next time I create a String variable that refers to \"Joy\" , say String feeling2 = \"Joy\"; , rather than creating a new String, the String class finds the \"Joy\" String in the pool and returns a reference to the one that exists already. This is a process called String interning . By avoiding the creation and storage of multiple String objects, we conserve memory. String interning is possible only because String objects are immutable.  We can demonstrate that feeling1 and feeling2 refer to the exact same String object by comparing the variables using the == operator. Remember, the == operator uses object identity for the equivalence test.  If we create a third String object with the same character data, only this time using the String constructor instead of a literal, String feeling3 = new String(\"Joy\"); and then compare this new String variable to either the String variables feeling1 or feeling2 using the == operator, we will find that they are not the exact same String object, even though the character data in the objects refered to by feeling3 and feeling2 are identical. These two objects are not identical because String literals are interned in the String pool, but Strings objects created with the String constructor are stored elsewhere in memory, and so they are not identical. See the following JShell session for a demonstration.   jshell> String feeling1 = \"Joy\"; \/\/ First String literal feeling1 ==> \"Joy\" jshell> String feeling2 = \"Joy\"; \/\/ Second String literal feeling2 ==> \"Joy\" jshell> feeling1 == feeling2; \/\/ Are they the same object? $3 ==> true jshell> String feeling3 = new String(\"Joy\"); feeling3 ==> \"Joy\" \/\/ Third String using a constructor jshell> feeling3 == feeling2; \/\/ Are they the same object? $5 ==> false jshell> feeling3.equals(feeling2); \/\/ Are the character the same? $6 ==> true jshell>    Use .equals(…) to Compare Strings  If you are not absolutely certain how two Strings were created, always use the .equals(…) String method to compare Strings.     Comparing Floating-point Numbers  Have a look at the following program and the output below it.    public class CompareFloats { public static void main(String[] args) { double n1 = 0.1; \/\/ Init three doubles double n2 = 0.2; double n3 = 0.3; if (n1 + n2 == n3) { \/\/ 0.1 + 0.2 == 0.3? System.out.println( n1 + \" + \" + n2 + \" == \" + n3); } else { \/\/ 0.1 + 0.2 != 0.3? System.out.println( n1 + \" + \" + n2 + \" != \" + n3); } } }     javac CompareFloats.java java CompareFloats  0.1 + 0.2 != 0.3   That is a surprising result, wouldn't you agree? We all know that 0.1 + 0.2 == 0.3 . Why did Java tell us that they are not equal? Understanding the answer to this question requires a deeper understanding about how floating point numbers are represented in memory, especially when it comes to precision.  Without getting into to much detail, you know that data is store in memory in binary, in other words base-2 numbers (1s and 0s). But humans work (mostly) in decimal, base-10 numbers. It is not possible to store many base-10 numbers exactly using base-2 notation, especially when we have limited memory. For this reason, floating point number operations produce base-2 results that are as close as possible to the real base-10 numbers, given the precision possible in the available memory.  If we maintain the precision available for double s, but extend the number of decimal places further, we can derive the actual base-10 numbers that are stored in memory for one that is not representable exactly. Specifically,  0.1 → 0.1000000000000000055511151231257827021181583404541015625  0.2 → 0.2000000000000000111022302462515654042363166809082031250  0.3 → 0.2999999999999999888977697537484345957636833190917968750  The base-2 numbers written above in base-10 do achieve the necessary base-10 precision for a double type. But, also note that the representations for 0.1 and 0.2 both have a tiny positive error in the decimal places after the required precision.  If we add the first two numbers exactly, the result is,  0.1 + 0.2 = 0.3000000000000000166533453693773481063544750213623046875  which cannot be represented exactly in base-2. Instead the closest floating point number is chosen. In base-10 this number is,  0.1 + 0.2 → 0.3000000000000000444089209850062616169452667236328125000  Because this number is not the same as the base-2 number chosen by the floating-point system to represent the literal 0.3, the result of 0.1 + 0.2 == 0.3 is false . This is the best we can do with limited memory and therefore limited precision. In general, these tiny errors seldom cause problems. Nevertheless, it is best to compare floating-point numbers using a close enough approach. That is, compute the absolute value of the different between two floating-point numbers. If that difference is less than some small number considered close enough , then the two floating-point numbers are essentially equal, at least to the available precision. See the updated example below. Note that the outcome is now what we expect.    public class CompareFloats { public static void main(String[] args) { double n1 = 0.1; \/\/ Init three doubles double n2 = 0.2; double n3 = 0.3; \/\/ 0.1 + 0.2 == 0.3? if ( Math.abs( (n1 + n2) - n3 ) < 0.00000000000001 ) { System.out.println( n1 + \" + \" + n2 + \" == \" + n3); } else { \/\/ 0.1 + 0.2 != 0.3? System.out.println( n1 + \" + \" + n2 + \" != \" + n3); } } }     javac CompareFloats.java java CompareFloats  0.1 + 0.2 == 0.3    Check that floating-point numbers are close enough  Do not use == to compare floating-point numbers. Test for close enough by computing the absolute value of the difference and check that it is less than the desired precision.     Short-circuit Evaluation  We know that for a logical conjunction to be true, both the left and right subexpressions must evaluate to true . Proceeding left-to-right, if we find that the left subexpression of a conjunction evaluates to false there is no need to evaluate the right subexpression because we know already that the entire conjunction is false . Java skips the right subexpression and return false as soon as it finds the that left subexpression evaluates to false . This is called short-circuit evaluation .  demonstrates short-circuit evaluation with a helper method named eval(…) . This method takes two parameters: the first is a String label to be printed and the second is a boolean value to be returned. The purpose of this method is to see when the method is invoked by looking for the String label to be printed before the overall result is output. The program given in evaluates a conjunction where the left subexpression with label \"A\" is false but the right subexpression with label \"B\" is true. If both subexpressions in the conjunction are evaluated, then we'll see both the \"A\" and \"B\" label printed before the conjunction evaluates to false . If short-circuit evaluation is in play, only the \"A\" label will print.   ShortCircuit.java  \/\/ ShortCircuit.java public class ShortCircuit { public static void main(String[] args) { \/\/ Left subexpression is false, so the right is never evaluated if ( eval(\"A\", false) && eval(\"B\", true) ) { System.out.println(\"Conjunction is true\"); } else { System.out.println(\"Conjunction is false\"); } } \/\/ Print label and return boolean parameter value public static boolean eval(String label, boolean value) { System.out.println(label); return value; } }   In the following session we compile and run our test program. The only label printed by the test program is \"A\". Only the first subexpression of the conjunction was evaluated so Java must be practicing short-circuit evaluation.   javac ShortCircuit.java java ShortCircuit  A Conjunction is false   We can use this knowledge to make our programs more efficient by testing the more limiting or less costly condition first, on the left side of a conjunction, and putting the less limiting or more costly condition as the right-side subexpression.   Check the most limiting conditions first  When writing conjunctions, order more limiting or less costly subexpression on the left and the less limiting or more costly subexpression on the right. This will take advantage of short-circuit evaluation property of Java.    "
},
{
  "id": "p-613",
  "level": "2",
  "url": "section-c2-comparisons.html#p-613",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "String interning "
},
{
  "id": "listing-c2-compare-floats1",
  "level": "2",
  "url": "section-c2-comparisons.html#listing-c2-compare-floats1",
  "type": "Listing",
  "number": "7.6.1",
  "title": "",
  "body": "  public class CompareFloats { public static void main(String[] args) { double n1 = 0.1; \/\/ Init three doubles double n2 = 0.2; double n3 = 0.3; if (n1 + n2 == n3) { \/\/ 0.1 + 0.2 == 0.3? System.out.println( n1 + \" + \" + n2 + \" == \" + n3); } else { \/\/ 0.1 + 0.2 != 0.3? System.out.println( n1 + \" + \" + n2 + \" != \" + n3); } } }   "
},
{
  "id": "listing-c2-compare-floats2",
  "level": "2",
  "url": "section-c2-comparisons.html#listing-c2-compare-floats2",
  "type": "Listing",
  "number": "7.6.2",
  "title": "",
  "body": "  public class CompareFloats { public static void main(String[] args) { double n1 = 0.1; \/\/ Init three doubles double n2 = 0.2; double n3 = 0.3; \/\/ 0.1 + 0.2 == 0.3? if ( Math.abs( (n1 + n2) - n3 ) < 0.00000000000001 ) { System.out.println( n1 + \" + \" + n2 + \" == \" + n3); } else { \/\/ 0.1 + 0.2 != 0.3? System.out.println( n1 + \" + \" + n2 + \" != \" + n3); } } }   "
},
{
  "id": "p-631",
  "level": "2",
  "url": "section-c2-comparisons.html#p-631",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "short-circuit evaluation "
},
{
  "id": "listing-c2-short-circuit",
  "level": "2",
  "url": "section-c2-comparisons.html#listing-c2-short-circuit",
  "type": "Listing",
  "number": "7.6.3",
  "title": "",
  "body": " ShortCircuit.java  \/\/ ShortCircuit.java public class ShortCircuit { public static void main(String[] args) { \/\/ Left subexpression is false, so the right is never evaluated if ( eval(\"A\", false) && eval(\"B\", true) ) { System.out.println(\"Conjunction is true\"); } else { System.out.println(\"Conjunction is false\"); } } \/\/ Print label and return boolean parameter value public static boolean eval(String label, boolean value) { System.out.println(label); return value; } }  "
},
{
  "id": "section-67",
  "level": "1",
  "url": "section-67.html",
  "type": "Section",
  "number": "7.7",
  "title": "Key Concepts",
  "body": " Key Concepts   The for-statement may be used for iteration  Parts of a for-statement include the initialization statement, test for continuation, and increment  The do-while statement may be used for iteration  Key difference between a while-statement and do-while-statement is when the test for continuation is evaluated  The for-each statement may be used for iterating over ArrayLists  The for-each statement may be used for iterating over a HashSet  Iterate over a HashMap using its HashSet of keys  There are limitations when using a for-each statement to iterate over a Collection including the inability to modify the collection while iterating  The switch-statement is an alternative way to branch program control flow  The case label is part of a switch-statement that starts a new branch when the switch expression evaluates to a value equal to the case label value  The default branch handles the case when no case label values match  Each code block in a switch-statement must end with a break statement, otherwise execution continues to the statements in the next case, ignoring the case label value.  Stacking case labels without a break statement is a way to execute one block of code for multiple label matches  The conditional ternary operator is a way to produce different values based on the boolean value resulting from a conditional expression  The ternary operator syntax ( ? : ) has three operands  The ternary operator is like an if-else-statement written and evaluated as a single expression.   "
},
{
  "id": "section-c2-exercises",
  "level": "1",
  "url": "section-c2-exercises.html",
  "type": "Section",
  "number": "7.8",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-ar-creating",
  "level": "1",
  "url": "section-ar-creating.html",
  "type": "Section",
  "number": "8.1",
  "title": "Creating, Initializing Arrays",
  "body": " Creating, Initializing Arrays  A Java array stores in memory a sequence of data items with common data type. The entire sequence can be assigned to a single variable with each element accessed using the variable followed by a sequential integer index (offest) in square brackets, starting with 0. Arrays are incredibly useful when you must store a very large number of related values. Using an index for element access works well with iteration counters, very much like the way we access elements in an ArrayList using the .get(…) method.   Declaring Arrays  An array variable is declared just like any Java variable with a data type, only followed with a pair of square brackets ( [] ).   jshell> double[] data; data ==> null jshell>   In the JShell session above, we declare a double  array variable just like we would declare a single double variable, only we follow the type with [] . It's useful to read this declaration as double array data . In general, working with array variables is very similar to working single data variable, only with the additional of square brackets.  In the above JShell session, we see that the data array variable starts with the value null . This is very important to note. In Java, array variables are reference variables, just like variables having a class type are reference variable. As a reference type, all the same rules and behaviors that we investigated in apply to array variables as well.  Also like a class variable, declaring an array variable does not create the array. An array variable is only a variable that may reference an array, should we choose to create one and assign it to the variable. The variable itself is not the array, which is illustrated by its initial default value being null .  We can declare an array of any valid type in Java. In fact, we can declare arrays of arrays , which investigate more in . The following code snippet illustrates this idea. None of these variables are arrays. They are only variables that may reference an array, not the array itself.   double[] data; \/\/ An array variable of doubles int[] lengths; \/\/ An array variable of integers String[] names; \/\/ An array variable of Strings Random[] rands; \/\/ An array variable of Random objects     Creating Arrays  Similar to instantiating new objects using a constructor, the syntax for creating a new array makes use of the new keyword. This reinforces the fact that arrays are reference types. Unlike invoking an object constructor, the syntax for creating a new array follows the new keyword with the data type to be stored in elements of the array and then square backets containing the number of elements to be stored in the array. In the following code snippet, we create and assign arrays of size 100 for each of the array variables declared above.   data = new double[100]; lengths = new int[100]; names = new String[100]; rands = new Random[100];   Note that we can also use the combination declaration\/initialization statement just like we did with single-value variables.   double[] data = new double[100]; int[] lengths = new int[100]; String[] names = new String[100]; Random[] rands = new Random[100];     Accessing Array Elements  Once created, you may access and use the elements of an array just like you would a single-valued variable. The only difference is that you must follow your array variable with square brackets and an item index so that Java knows which element of the array that you want to access. In the example below, the data array variable is declared and initialized to a new array of doubles with length 100. These items are then accessed by following the array variable name data with square brackets and an index value, like data[0] .   jshell> double[] data = new double[100]; data ==> double[100] { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, ... 0.0, 0.0, 0.0, 0.0, 0.0 } jshell> System.out.println( data[0] ); \/\/ Access an array for printing 0.0 jshell> data[0] = 3.14; \/\/ Assign a value to an array element $3 ==> 3.14 jshell> System.out.println( data[0] ); 3.14 jshell>    Indexes Start at 0  In Java, when accessing a sequence of items, the index of the first item always starts at 0. Think of an index as an offset from the start of a sequence, not as an item's sequence position.     The idea that array is a sequence of data values is more than just a useful visual queue. Array elements are stored in contiguous memory, one after the other.  In the data example of , note that Java initializes double array items with the value 0.0 , just like it would initialize a single-valued double variable. This is the case with any array holding any numerical type.  If numeric array elements are initialized with 0, how about boolean array elements? What is the default value assigned to a single boolean variable? JShell is a useful tool to investigate Java's behavior.     An array stored in memory      jshell> boolean response; response ==> false jshell> System.out.println( response ); false jshell> boolean[] responses = new boolean[5]; responses ==> boolean[5] { false, false, false, false, false } jshell> System.out.println( responses[4] ); false jshell>   In both cases the default value of a boolean is false . Java sets the initial value of array elements to the same value that it would a single-values variable.    Initializing Arrays  Just like we can initialize a variable at the time of declaration, we also can initialize the elements of an array. We need to specify multiple element values for the array to be initialized. Syntactically, we following the creation of the array with a sequence of values delimited with braces ( {…} ) and separated by commas. In the following example we declare the double array variable data , assign it to a newly created double array, and initialize the double array to the values 10.0, 20.0, 30.0, 40.0 and 50.0.   double[] data = new double[] {10.0, 20.0, 30.0, 40.0 50.0};   Did you see that we left out the size of the array between the square brackets when we created the array? Including this value would open us up to an inconsistency. What should Java do if we said the size of the array was 5, but we provided on 4 values? To avoid the issue, when initializing the elements of an array using this syntax, Java requires us to create the array without a size; it can infer the correct size from the number of items between the braces.  We can shorten the above example even further. The new double[] part of the expression is redundant. Clearly, we want to create a new double array because we provided initial element values. There are legitimate reasons to declare an array variable without creating an array, but no legitimate reason if initial element values are provided. For this reason Java let's us accomplish the same task of creating and initializing the array without the need to include the new double[] part. In the example below, we create and initialize the array by going right to the initial values in braces, leaving out the new double[] .   double[] data = {10.0, 20.0, 30.0, 40.0 50.0};   This initialization syntax may be used with any type, provided you are able to write down the sequence of value in braces. In the examples below, pay careful attention to the rands array holding two Random objects. The only means of creating Random objects is to use the Random constructor.. Within the braces of the initializer, we invoked the Random constructor twice in create two objects which are stored in the rands array.   double[] data = {10.0, 20.0, 30.0, 40.0 50.0}; int[] lengths = {32, 34, 40}; String[] names = {\"Athos\", \"Porthos\", \"Aramis\"}; Random[] rands = {new Random(), new Random()}; boolean[] responses = {true, false, false, false, true};     The Java Array Three-Step Process  Take a moment to notice something important about arrays. In order to fully realize an array containing non-default element values, you must complete three steps .  There must be a variable that references the array. Without maintaining a reachable reference, the array is subject to garbage collection.  Declaring an array variable does NOT create an array. You must use the new keyword and follow the array declaration syntax with size (or initializing values) to create the actual array. The variable has the ability only to reference an existing array, not create the array. You must explicitly create the array in order for it to exist.  A newly created array contains element with default values for its type. A third step of initializing the array is required for it to contain something other than default values.     "
},
{
  "id": "p-640",
  "level": "2",
  "url": "section-ar-creating.html#p-640",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "does not "
},
{
  "id": "p-642",
  "level": "2",
  "url": "section-ar-creating.html#p-642",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "new "
},
{
  "id": "figure-ar-array-memory",
  "level": "2",
  "url": "section-ar-creating.html#figure-ar-array-memory",
  "type": "Figure",
  "number": "8.1.1",
  "title": "",
  "body": " An array stored in memory   "
},
{
  "id": "p-655",
  "level": "2",
  "url": "section-ar-creating.html#p-655",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "new "
},
{
  "id": "section-ar-iterating",
  "level": "1",
  "url": "section-ar-iterating.html",
  "type": "Section",
  "number": "8.2",
  "title": "Iterating Over Array Elements",
  "body": " Iterating Over Array Elements   Because arrays use integer indexes within square brackets, we can access the elements of an array sequentially using iteration and a counter variable, in a manner similar to the way we did with ArrayLists. Like an ArrayList, we can ask an array about its length. Unlike an ArrayList, the length of an array is determined using the .length property of the array instead of the .size() method of an ArrayList. Recall that when iterating over the elements of an ArrayList, our loop counter had to stop at a value of 1 less that the size of the ArrayList. If the first index is 0, the last index is size()-1 . The same argument applies to arrays. The first index is 0, so the last index is .length - 1 . The test for continuation when iterating over the elements of an array must check that the counter is less-than the length of an array, not less-than or equal-to . Notice the form of the continuation tests in the following for-statement examples.    Arrays with For-statements   is an updated version of , with a few changes made. First, we use an array instead of an ArrayList to hold all Oval object references. Second, we change the while-statement to a for-statement. As you study the example, note that the number of Oval objects to create is set when declaring the array near the top of the program. For the iteration continuation test, we interrogate the array for its length instead of entering a value explicitly, and check that the loop counter is less-than the length. It is better to interrogate the array instead of entering the value into the for-statement because it is less error-prone if later we decide to modify the number of Oval objects. Only one change is made instead of searching the program for all instances of 20.   RandomOvals2.java   \/\/ RandomOvals2.java import java.util.Random; \/\/ Import classes import doodlepad.*; \/\/ Import DoodlePad classes public class RandomOvals2 { \/\/ public class public static Oval[] ovals = new Oval[20]; \/\/ Array of 20 Ovals public static void main(String[] args) { \/\/ Start of execution \/\/ Fill array with randomly placed Oval objects \/\/ Use a for-statement to iterate the size of the array for (int i=0; i<ovals.length; i++) { \/\/ For-statement ovals[i] = new Oval(); \/\/ Create an Oval object ovals[i].setMousePressedHandler(RandomOvals2::recolor); } } \/\/ Event handler method that executes when an Oval is clicked public static void recolor(Shape shp, double x, double y, int button) { int r, g, b; \/\/ Helper variables Random rnd = new Random(); \/\/ Declare Random object \/\/ Loop over all Oval objects and reset to a random fill color for (int i=0; i<ovals.length; i++) { \/\/ For-statement r = rnd.nextInt(256); \/\/ Random color components g = rnd.nextInt(256); b = rnd.nextInt(256); ovals[i].setFillColor(r, g, b); \/\/ Change fill color } } }     RandomOvals2.java      Arrays with For-each Statements  Like with ArrayLists and other Java Collection objects, we can use the for-each statement to iterate over the existing elements of an array. In this case we do not use a loop counter because the for-each statement syntax avoids the need for a counter. If the only purpose of a loop counter is to access existing array elements, the for-each statement might be a better option because fewer moving parts mean less opportunities to make a mistake. Without the loop counter we avoid the opportunity to incorrectly check the condition for continuation and we avoid the opportunity to write the loop counter update incorrectly. We have plenty of opportunities to make mistakes. It is best to limit these opprotunities as much as possible.  In the code snippet below we rewrote the for-statement in the recolor(…) method of as a for-each statement. No loop counter is necessary because the for-each accesses array elements and it iterates the correct number of times. We cannot replace the for-statement in the main(…) method with a for-each. Do you see why?   \/\/ Loop over all Oval objects and reset to a random fill color for (Oval o: ovals) { r = rnd.nextInt(256); \/\/ Random color components g = rnd.nextInt(256); b = rnd.nextInt(256); o.setFillColor(r, g, b); \/\/ Change fill color }   The for-statement in cannot be replaced with a for-each because the loop counter is used for more that just accessing existing objects. We use it to set references to new objects in the array as well. It is not possible to initialize array elements with for-each statement.    array vs. ArrayList  Let's compare two of our most used data structures.   array vs ArrayList    Feature  ArrayList  array    Creating   Uses new with  the constructor    Uses new with  [] and size      Reading the  number of items    Use the .size()  method    Use the .length  property      Accessing element  value    Use the .get(index)  method    Use the [index]  notation      Updating element  value    Use .set(index, val)  or .add(val) methods    Use the [index]  notation       "
},
{
  "id": "listing-ar-randomovals2",
  "level": "2",
  "url": "section-ar-iterating.html#listing-ar-randomovals2",
  "type": "Listing",
  "number": "8.2.1",
  "title": "",
  "body": " RandomOvals2.java   \/\/ RandomOvals2.java import java.util.Random; \/\/ Import classes import doodlepad.*; \/\/ Import DoodlePad classes public class RandomOvals2 { \/\/ public class public static Oval[] ovals = new Oval[20]; \/\/ Array of 20 Ovals public static void main(String[] args) { \/\/ Start of execution \/\/ Fill array with randomly placed Oval objects \/\/ Use a for-statement to iterate the size of the array for (int i=0; i<ovals.length; i++) { \/\/ For-statement ovals[i] = new Oval(); \/\/ Create an Oval object ovals[i].setMousePressedHandler(RandomOvals2::recolor); } } \/\/ Event handler method that executes when an Oval is clicked public static void recolor(Shape shp, double x, double y, int button) { int r, g, b; \/\/ Helper variables Random rnd = new Random(); \/\/ Declare Random object \/\/ Loop over all Oval objects and reset to a random fill color for (int i=0; i<ovals.length; i++) { \/\/ For-statement r = rnd.nextInt(256); \/\/ Random color components g = rnd.nextInt(256); b = rnd.nextInt(256); ovals[i].setFillColor(r, g, b); \/\/ Change fill color } } }   "
},
{
  "id": "figure-ar-randomovals2",
  "level": "2",
  "url": "section-ar-iterating.html#figure-ar-randomovals2",
  "type": "Figure",
  "number": "8.2.2",
  "title": "",
  "body": " RandomOvals2.java   "
},
{
  "id": "table-47",
  "level": "2",
  "url": "section-ar-iterating.html#table-47",
  "type": "Table",
  "number": "8.2.3",
  "title": "array vs ArrayList",
  "body": " array vs ArrayList    Feature  ArrayList  array    Creating   Uses new with  the constructor    Uses new with  [] and size      Reading the  number of items    Use the .size()  method    Use the .length  property      Accessing element  value    Use the .get(index)  method    Use the [index]  notation      Updating element  value    Use .set(index, val)  or .add(val) methods    Use the [index]  notation     "
},
{
  "id": "section-ar-reftypes",
  "level": "1",
  "url": "section-ar-reftypes.html",
  "type": "Section",
  "number": "8.3",
  "title": "Arrays and References",
  "body": " Arrays and References   There are two items to consider when working with arrays and reference types. The first is that array variable types are reference types and following all the same rules. The second is that array elements that store objects are reference types as well, and so store only a reference to the object, not the object itself.    Array Variables as Reference Types  As a reference type, an array variable is only a name that references an array. There is nothing to stop us from declaring a second array variable and assigning it to the same array, giving us two names for the array. As we know, assigning one reference variable to another does not copy the object being referenced. Rather, the value of the second reference variable gets the address of the object referenced by the first variable. This is why both variables reference the same object. Using either variable, when we access and modify an array element, the single underlying array is being modified. Specifically, we can modify an array referenced using one variable, and see the modification when accessing it using the other array variable. Let's run some tests.   jshell> String[] names = {\"Athos\", \"Porthos\", \"Aramis\"}; names ==> String[3] { \"Athos\", \"Porthos\", \"Aramis\" } jshell> String[] musketeers = names; musketeers ==> String[3] { \"Athos\", \"Porthos\", \"Aramis\" } jshell> musketeers[2] = \"d'Artagnan\" \/\/ Modify the third element of second var $3 ==> \"d'Artagnan\" jshell> System.out.println( names[2] ) \/\/ Print third element of first var d'Artagnan jshell>   As we can see in the previous JShell session, we declared and initialized our names array with three Strings. We also declared a second String array named musketeers and assigned it to the name of the first array. At this point both array variables names and musketeers reference the same underlying array. We demonstrate this by by changing the content of the last item in the names array and the print the last item in the mustketeers array. The change made using the names array variable is seen using the musketeers array variable, because both reference the same underlying array.    Array Elements as Reference Types  If we declare an array of a primitive type, the elements of the array hold actual primitive values. For example, if we declare a double array, even without initializing the elements, the values held in the array element are set to the default double value of 0.0.   jshell> double[] data = new double[5]; data ==> double[5] { 0.0, 0.0, 0.0, 0.0, 0.0 } jshell> for (int i=0; i<data.length; i++) { ...> System.out.println( data[i] ); ...> } 0.0 0.0 0.0 0.0 0.0 jshell>   The data double array above holds 5 double values. But what about a String array? How many String objects exist after we declare a String array with length 3? Are there three empty String objects \"\" , or maybe something else? See the following JShell session.   jshell> String[] names = new String[3]; names ==> String[3] { null, null, null } jshell>   After declaration of the String array variable and creation of the String array, JShell prints the array for us. We see that the three element of the String array are null, null, null . Recall that the null keywords signals the absense of an object. The names array contains no objects, whatsoever. True, it has the space to reference three String objects should we create and assign them, but unless the array elements are initialized, we have completed only two of the three steps required for fully building out an array: the arrays is created, but its elements have not been initialized.  An array of some reference type has elements that themselves reference external objects. Array elements do not hold objects, they reference them. In this regard, the elements of the array themselves follow the reference type rules.  In the following JShell session we create an array of two StringBuilder objects named sbs1 . Then we create a second StringBuilder array named sbs2 and assign it to the first. We append Strings to both StringBuilders by accessing them using the elements of sbs1 , and then print the entire array sbs2 . We see that both StringBuilder objects as viewed through sbs2 hold the Strings appended to the StringBuilders accessed using sbs1 . The same reference variable rules apply to array elements if they too are reference types.   jshell> StringBuilder[] sbs1 = {new StringBuilder(), new StringBuilder()}; sbs1 ==> StringBuilder[2] { , } jshell> StringBuilder[] sbs2 = sbs1; sbs2 ==> StringBuilder[2] { , } jshell> sbs1[0].append( \"I am the first one\" ); $3 ==> I am the first one jshell> sbs1[1].append( \"I am the second one\" ); $4 ==> I am the second one jshell> sbs2 sbs2 ==> StringBuilder[2] { I am the first one, I am the second one } jshell>     Arrays as Method Parameters  If a reference type is passed to a method as an argument, the method parameter gets a copy of the reference, not a copy of the entire object. Passing reference types to methods as arguments is equivalent to assigning the method parameters to the arguments passed. Consequently, a reference is passed to the method, not a copy of the argument. As a reference type, an array passed to a method actually passes only the array reference, not the entire array. This behavior allows us to write methods that receive and operate on arrays without the need to copy the entire array. For large arrays, this is far more efficient than copying all the array element and then possibly copying all the modified elements back to the original array.  The program in defines three static methods. In addition to the main(…) method you will find the printArr( double[] arr ) method and the doubleArr( double[] arr ) . Both methods take a double array parameter. The printArr(…) method iterates over all elements of the array and prints each. The doubleArr(…) method multiplies all elements by 2 and reassigns each updated value back to the array element.   ArrayArgs.java   \/\/ ArrayArgs.java public class ArrayArgs { public static void main(String[] args) { \/\/ Create array double[] nums = {1.2, 2.3, 3.4, 4.5 }; printArr( nums ); \/\/ Print array doubleArr( nums ); \/\/ Double array elements printArr( nums ); \/\/ Print array } \/\/ Print all elements of the array arr public static void printArr( double[] arr ) { for (double x : arr) { System.out.print(x + \" \"); } System.out.println(); } \/\/ Double all array elements public static void doubleArr( double[] arr ) { for (int i=0; i<arr.length; i++) { arr[i] *= 2; } } }    Compiling and running the program in produces the following output. Note that both methods have void return types; nothing is returned from either method. In spite of this, the doubleArr(…) method modifies the elements of the original array , which is demonstrated when the array is printed a second time and we see that all element values have been doubled. As we know, the reason that the original array elements are modified by doubleArr(…) is because a reference to the orignal array is passed to the method, not a copy. Consequently, the original array elements are modified as well.   javac ArrayArgs.java java ArrayArgs  1.2 2.3 3.4 4.5 2.4 4.6 6.8 9.0     Passing Arguments on the Command-line  We now know what the signature of the main(…) method actually means. The String[] args is an array of String objects, which is passed to the method when your program starts. Java reads all the items on the command-line that occur after the class name, and passes them to main(…) in the args String array. Study and the console session that follows.   CommandLine.java   \/\/ CommandLine.java public class CommandLine { \/\/ The main() method received a String array argument public static void main(String[] args) { \/\/ What's in the args array? System.out.println(\"Received \" + args.length + \" command-line arguments\"); for (String arg : args) { System.out.println(arg); } } }     javac CommandLine.java java CommandLine Hello World  Received 2 command-line arguments Hello World   Try running the CommandLine.java program yourself with your own arguments. In addition to using the Scanner object to prompt the user for input, passing arguments on the command-line is a way to pass data into your program on startup.   "
},
{
  "id": "listing-ar-arrayargs",
  "level": "2",
  "url": "section-ar-reftypes.html#listing-ar-arrayargs",
  "type": "Listing",
  "number": "8.3.1",
  "title": "",
  "body": " ArrayArgs.java   \/\/ ArrayArgs.java public class ArrayArgs { public static void main(String[] args) { \/\/ Create array double[] nums = {1.2, 2.3, 3.4, 4.5 }; printArr( nums ); \/\/ Print array doubleArr( nums ); \/\/ Double array elements printArr( nums ); \/\/ Print array } \/\/ Print all elements of the array arr public static void printArr( double[] arr ) { for (double x : arr) { System.out.print(x + \" \"); } System.out.println(); } \/\/ Double all array elements public static void doubleArr( double[] arr ) { for (int i=0; i<arr.length; i++) { arr[i] *= 2; } } }   "
},
{
  "id": "listing-ar-commandline-args",
  "level": "2",
  "url": "section-ar-reftypes.html#listing-ar-commandline-args",
  "type": "Listing",
  "number": "8.3.2",
  "title": "",
  "body": " CommandLine.java   \/\/ CommandLine.java public class CommandLine { \/\/ The main() method received a String array argument public static void main(String[] args) { \/\/ What's in the args array? System.out.println(\"Received \" + args.length + \" command-line arguments\"); for (String arg : args) { System.out.println(arg); } } }   "
},
{
  "id": "section-ar-multi",
  "level": "1",
  "url": "section-ar-multi.html",
  "type": "Section",
  "number": "8.4",
  "title": "Multidimensional Arrays",
  "body": " Multidimensional Arrays  If an array can truly hold any Java type, then an array element should itself be able to hold an array. To be specific, because an array is a reference type, we can declare an array to hold references to other arrays. In this section we'll explore how to create and initialize arrays of arrays and how to work with them.   Declaring Arrays of Arrays  In we learned that we could declare an array variable of any Java type by following the type with a pair of square brackets. Furthermore, an array with elements of a data type is created using the the new keyword followed by the type and a pair of square brackets with a number of elements.  In the following code snippet the list variable is declared with type double array, and initialized with a new double array of size 5. We follow the rules outlined above to create and initialize a new array that itself holds arrays. If double[] is the type of a double array formed by adding a pair of square brackets to the right of the type double , then an array of double arrays is obtained by adding another pair of square brackets after the double array, like so double[][] . Continuing with line of reasoning, if the expression new double[5] creates a new double array with 5 items, then the expression new double[5][3] creates a new array capable of holding 5 double arrays, each of which can hold 3 doubles. This is demonstrated in the second half of the following code snippet and illustrated in . This same pattern of adding square brackets may be continued to form arrays of arrays of arrays, etc.   \/\/ An array of doubles double[] list = new double[5]; \/\/ An array of arrays of doubles double[][] matrix = new double[5][3];    A schematic of matrix , an array of arrays      Accessing Multidimensional Array Elements  Using the same reasoning as in we can access all elements in a multidimensional array using nested iteration . We use an outer loop with a loop counter to generate the indexes of the elements in the top-level array, and we use an inner loop with a counter to generate the indexes of the elements in the inner arrays. It is wise to use the array's .length property in the continuation test.  demonstrates these ideas. This program has two method defined, main(…) and print2D(…) . Both methods use the nested iteration approach to access array elements. In main(…) we access each element and initialize values to random doubles. In print2D(…) we access each element for printing. Pay special attention to the inner loop continuation test, j<arr2D[i].length . We are querying each inner array for its length, each array at arr2D[i] . In the next section we'll learn why we want to ask each inner array for its length, and not just the first, or use a constant.   NestedArrays1.java   \/\/ NestedArrays1.java import java.util.Random; public class NestedArrays1 { public static void main(String[] args) { Random rnd = new Random(); \/\/ Random object double[][] arr2D = new double[5][3]; \/\/ 2D array \/\/ Fill array with random numbers for (int i=0; i<arr2D.length; i++) { \/\/ Outer loop for (int j=0; j<arr2D[i].length; j++) { \/\/ Inner loop arr2D[i][j] = rnd.nextDouble(); } } print2D( arr2D ); \/\/ Print array } \/\/ Print an arbitrary 2D double array public static void print2D( double[][] arr ) { for (int i=0; i<arr.length; i++) { \/\/ Outer loop for (int j=0; j<arr[i].length; j++) { \/\/ Inner loop System.out.print( arr[i][j] + \" \"); \/\/ Print adjacent } System.out.println(); \/\/ Next line } } }     javac NestedArrays1.java java NestedArrays1  0.503106975940591 0.9917565242540053 0.17632812964595546 0.7495600013315958 0.01605752178519637 0.9485705200206167 0.33889267773442544 0.47985018921768474 0.042949682032970005 0.6807634494160301 0.5147152407456702 0.312225944100627 0.7609294164182726 0.21161251517956636 0.890812892598448   Initialization of multidimensional arrays is permitted at the time of declaration using curly braces in a manner similar to array with one dimension. For multi-dimensional arrays the initialization structure must match the structure of the array, using nested curly braces {{…}, {…}, …} .  In we rewrite the example from , only this time we initialize the array at declaration time, and we iterate over all nested array elements using a for-each statement instead.  Note how we use nested curly bracket to initialize the array, and how we don't specify the dimensions of the nested arrays. Java determines the array dimensions by the structure of the initialization. Also note the type of the variable in the outer for-each loop inside printArr(…) , which is for (double[] inarr : arr) { . The loop variable is a one-dimensional double array! By now, this should make sense. In Java, a multidimensional array is an array of arrays; the outer array is a one-dimensional array with elements that each hold one-dimensional arrays.   NestedArrays2.java   \/\/ NestedArrays2.java public class NestedArrays2 { public static void main(String[] args) { double[][] arr2D = {{0.0, 0.1, 0.2}, \/\/ 2D array {1.0, 1.1, 1.2}, \/\/ Initialization {2.0, 2.1, 2.2}, {3.0, 3.1, 3.2}, {4.0, 4.1, 4.2}}; print2D( arr2D ); \/\/ Print array } \/\/ Print an arbitrary 2D double array public static void print2D( double[][] arr ) { for (double[] inarr : arr) { \/\/ Outer loop for (double val : inarr) { \/\/ Inner loop System.out.print( val + \" \"); \/\/ Print adjacent } System.out.println(); \/\/ Next line } } }     javac NestedArrays2.java java NestedArrays2  0.0 0.1 0.2 1.0 1.1 1.2 2.0 2.1 2.2 3.0 3.1 3.2 4.0 4.1 4.2     Ragged Arrays  In we initialized our multidimensional array explicitily using nested curly braces {{…}, {…}, …} . Array dimensions were determined using the structure of the initializer. This begs the question, what if we initialized the array using something like the following, an initializer without uniform inner dimensions?   double[][] arr2D = {{0.0, 0.1, 0.2}, \/\/ Right side is \"ragged\" {1.0, 1.1, 1.2, 1.3}, {2.0, 2.1}, {3.0, 3.1, 3.2}, {4.0}};   If it is true that Java's multidimensional arrays are really just arrays of arrays, then this syntax should be valid. There should be no constraint on the lengths of the inner arrays because outer array elements hold array references, which don't care about the length of the arrays that they reference.   is the prgoram in only with a ragged initializer. Compiling and running this program produces no errors, and the expected output. It is possible to have internal arrays with unequal lengths.   NestedArrays3.java   \/\/ NestedArrays2.java public class NestedArrays3 { public static void main(String[] args) { double[][] arr2D = {{0.0, 0.1, 0.2}, \/\/ Right side is \"ragged\" {1.0, 1.1, 1.2, 1.3}, {2.0, 2.1}, {3.0, 3.1, 3.2}, {4.0}}; print2D( arr2D ); \/\/ Print array } \/\/ Print an arbitrary 2D double array public static void print2D( double[][] arr ) { for (double[] inarr : arr) { \/\/ Outer loop for (double val : inarr) { \/\/ Inner loop System.out.print( val + \" \"); \/\/ Print adjacent } System.out.println(); \/\/ Next line } } }     javac NestedArrays3.java java NestedArrays3  0.0 0.1 0.2 1.0 1.1 1.2 1.3 2.0 2.1 3.0 3.1 3.2 4.0   Multidimensional arrays with unequal lengths are called ragged arrays because they appear to have ragged right edge when printed.  Multidimensional arrays in Java can even be assembled incrementally. Have a close look at our final example in . There are several important features to note.  When we created the arr2D array in we left out the size of the inner dimension ( new double[5][] ). This is an important step. It signals to Java that no inner arrays should be created. Immediately after the arr2D array is created, all element values will be null .  We initialize each element of arr2D one at a time, using different techniques. For the first, second, and last elements, we create and initialize one-dimensional arrays and assign them to arr2D array elements. For the third element, we create but do not initialize a one-dimensional array and assign it. As we know, the values of an uninitialized array with a numeric type will be 0. We leave the fourth array element unassigned. This leaves the value of arr2D[3] as null . All these options are permitted, because we have the flexibility of arr2D being an array of array references.  One final item to note is the update we made to the print2D(…) method. Because our internal array references can be null , we need to test for this case. After all, the outer array is just an array of references, which can have the value null . To avoid a runtime error that would occur if we tried to print arr2D with an unassigned element reference, we added an if-statement to the print2D(…) that checks that each inner array reference is not null before attempting to print its elements. If it is null , the method just goes ahead and prints the element. Looking at the output from compiling and running , you will see that this all checks out.   RaggedAssembly.java   \/\/ RaggedAssembly.java \/\/ Assemble a ragged array one inner array at a time. public class RaggedAssembly { public static void main(String[] args) { double[][] arr2D = new double[5][]; \/\/ Inner lengths unspecified \/\/ Create and assign all inner arrays using various approaches arr2D[0] = new double[] {0.0, 0.1, 0.2}; arr2D[1] = new double[] {1.0, 1.1, 1.2, 1.3}; arr2D[2] = new double[3]; \/\/arr2D[3] = \/\/ Leave unassigned arr2D[4] = new double[] {4.0}; print2D( arr2D ); \/\/ \/\/ Print array } \/\/ Print an arbitrary 2D double array public static void print2D( double[][] arr ) { for (double[] inarr : arr) { \/\/ Outer loop if (inarr != null) { \/\/ Check array exists for (double val : inarr) { \/\/ Inner loop System.out.print( val + \" \"); \/\/ Print adjacent } System.out.println(); \/\/ Next line } else { System.out.println(inarr); \/\/ Null reference } } } }     javac RaggedAssembly.java java RaggedAssembly  0.0 0.1 0.2 1.0 1.1 1.2 1.3 0.0 0.0 0.0 null 4.0    "
},
{
  "id": "figure-ar-multidimensional",
  "level": "2",
  "url": "section-ar-multi.html#figure-ar-multidimensional",
  "type": "Figure",
  "number": "8.4.1",
  "title": "",
  "body": " A schematic of matrix , an array of arrays   "
},
{
  "id": "listing-arr-nestedarrays1",
  "level": "2",
  "url": "section-ar-multi.html#listing-arr-nestedarrays1",
  "type": "Listing",
  "number": "8.4.2",
  "title": "",
  "body": " NestedArrays1.java   \/\/ NestedArrays1.java import java.util.Random; public class NestedArrays1 { public static void main(String[] args) { Random rnd = new Random(); \/\/ Random object double[][] arr2D = new double[5][3]; \/\/ 2D array \/\/ Fill array with random numbers for (int i=0; i<arr2D.length; i++) { \/\/ Outer loop for (int j=0; j<arr2D[i].length; j++) { \/\/ Inner loop arr2D[i][j] = rnd.nextDouble(); } } print2D( arr2D ); \/\/ Print array } \/\/ Print an arbitrary 2D double array public static void print2D( double[][] arr ) { for (int i=0; i<arr.length; i++) { \/\/ Outer loop for (int j=0; j<arr[i].length; j++) { \/\/ Inner loop System.out.print( arr[i][j] + \" \"); \/\/ Print adjacent } System.out.println(); \/\/ Next line } } }   "
},
{
  "id": "listing-arr-nestedarrays2",
  "level": "2",
  "url": "section-ar-multi.html#listing-arr-nestedarrays2",
  "type": "Listing",
  "number": "8.4.3",
  "title": "",
  "body": " NestedArrays2.java   \/\/ NestedArrays2.java public class NestedArrays2 { public static void main(String[] args) { double[][] arr2D = {{0.0, 0.1, 0.2}, \/\/ 2D array {1.0, 1.1, 1.2}, \/\/ Initialization {2.0, 2.1, 2.2}, {3.0, 3.1, 3.2}, {4.0, 4.1, 4.2}}; print2D( arr2D ); \/\/ Print array } \/\/ Print an arbitrary 2D double array public static void print2D( double[][] arr ) { for (double[] inarr : arr) { \/\/ Outer loop for (double val : inarr) { \/\/ Inner loop System.out.print( val + \" \"); \/\/ Print adjacent } System.out.println(); \/\/ Next line } } }   "
},
{
  "id": "listing-arr-nestedarrays3",
  "level": "2",
  "url": "section-ar-multi.html#listing-arr-nestedarrays3",
  "type": "Listing",
  "number": "8.4.4",
  "title": "",
  "body": " NestedArrays3.java   \/\/ NestedArrays2.java public class NestedArrays3 { public static void main(String[] args) { double[][] arr2D = {{0.0, 0.1, 0.2}, \/\/ Right side is \"ragged\" {1.0, 1.1, 1.2, 1.3}, {2.0, 2.1}, {3.0, 3.1, 3.2}, {4.0}}; print2D( arr2D ); \/\/ Print array } \/\/ Print an arbitrary 2D double array public static void print2D( double[][] arr ) { for (double[] inarr : arr) { \/\/ Outer loop for (double val : inarr) { \/\/ Inner loop System.out.print( val + \" \"); \/\/ Print adjacent } System.out.println(); \/\/ Next line } } }   "
},
{
  "id": "p-685",
  "level": "2",
  "url": "section-ar-multi.html#p-685",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ragged arrays "
},
{
  "id": "listing-arr-raggeassembly",
  "level": "2",
  "url": "section-ar-multi.html#listing-arr-raggeassembly",
  "type": "Listing",
  "number": "8.4.5",
  "title": "",
  "body": " RaggedAssembly.java   \/\/ RaggedAssembly.java \/\/ Assemble a ragged array one inner array at a time. public class RaggedAssembly { public static void main(String[] args) { double[][] arr2D = new double[5][]; \/\/ Inner lengths unspecified \/\/ Create and assign all inner arrays using various approaches arr2D[0] = new double[] {0.0, 0.1, 0.2}; arr2D[1] = new double[] {1.0, 1.1, 1.2, 1.3}; arr2D[2] = new double[3]; \/\/arr2D[3] = \/\/ Leave unassigned arr2D[4] = new double[] {4.0}; print2D( arr2D ); \/\/ \/\/ Print array } \/\/ Print an arbitrary 2D double array public static void print2D( double[][] arr ) { for (double[] inarr : arr) { \/\/ Outer loop if (inarr != null) { \/\/ Check array exists for (double val : inarr) { \/\/ Inner loop System.out.print( val + \" \"); \/\/ Print adjacent } System.out.println(); \/\/ Next line } else { System.out.println(inarr); \/\/ Null reference } } } }   "
},
{
  "id": "section-ar-library",
  "level": "1",
  "url": "section-ar-library.html",
  "type": "Section",
  "number": "8.5",
  "title": "<code class=\"code-inline tex2jax_ignore\">Arrays<\/code> Library",
  "body": " Arrays Library   Working with Java arrays can be tedious. Typically, we have to size new arrays and handle each element individually. Fortunately, the Java core library includes a class named Arrays that provides a long list of static methods that we can use to make it easy to work with arrays. The Arrays class static methods provide a wide range of utilities to work on arrays of many types, including the following. See examples of several of these methods in . Note that the Arrays class is in the java.util.Arrays module and must be imported before its methods can be used.   Common static utility methods of the Arrays class    Arrays method  Description    Arrays.copyOf(…)  copying an entire array    Arrays.copyOfRange(…)  copying a slice of an array    Arrays.equals(…)  element-by-element equality test    Arrays.fill(…)  filling with values    Arrays.toString(…)  converting to a String    Arrays.sort(…)  sort array elements    Arrays.binarySearch(…)  search array elements      ArraysMethods.java   \/\/ ArraysMethods.java import java.util.Arrays; import java.util.Random; public class ArraysMethods { public static void main(String[] args) { Random rnd = new Random(); \/\/ Random object \/\/ Create an array of 1000 random integers in [100, 500) \/\/ and print ends int[] nums = new int[1000]; for (int i = 0; i < nums.length; i++) { nums[i] = 100 + rnd.nextInt(400); } printEnds( \"nums\", nums ); \/\/ Create a copy of the array and print copy int[] copy = Arrays.copyOf(nums, nums.length); printEnds( \"copy\", copy ); \/\/ Check if they are the identical array System.out.println(\"nums and copy\" + (nums == copy ? \" ARE\" : \" ARE NOT\") + \" identical\"); \/\/ Check equivalence element-by-element System.out.println(\"nums and copy\" + (Arrays.equals(nums, copy) ? \" ARE\" : \" ARE NOT\") + \" equivalent\"); \/\/ Sort array and print Arrays.sort(nums); printEnds( \"nums (sorted)\", nums ); \/\/ Copy array ranges into two arrays and print int[] firstHalf = Arrays.copyOfRange(nums, 0, 500); int[] secondHalf = Arrays.copyOfRange(nums, 500, 1000); printEnds( \"firstHalf \", firstHalf ); printEnds( \"secondHalf\", secondHalf ); } \/\/ Print array name and elements from both ends of array public static void printEnds( String name, int[] arr ) { System.out.print(name + \": \"); for (int i=0; i<5; i++) { \/\/ Print first 5 System.out.print( arr[i] + \" \"); } System.out.print( \"... \"); \/\/ Print last 5 for (int i=arr.length-5; i<arr.length; i++) { System.out.print( arr[i] + \" \"); } System.out.println(); } }     javac ArraysMethods.java java ArraysMethods  nums: 277 217 458 299 117 ... 482 447 433 136 199 copy: 277 217 458 299 117 ... 482 447 433 136 199 nums and copy ARE NOT identical nums and copy ARE equivalent nums (sorted): 100 100 100 101 102 ... 498 498 498 499 499 firstHalf : 100 100 100 101 102 ... 301 302 302 303 303 secondHalf: 303 304 305 305 305 ... 498 498 498 499 499    "
},
{
  "id": "table-ar-arrays-methods",
  "level": "2",
  "url": "section-ar-library.html#table-ar-arrays-methods",
  "type": "Table",
  "number": "8.5.1",
  "title": "Common static utility methods of the <code class=\"code-inline tex2jax_ignore\">Arrays<\/code> class",
  "body": " Common static utility methods of the Arrays class    Arrays method  Description    Arrays.copyOf(…)  copying an entire array    Arrays.copyOfRange(…)  copying a slice of an array    Arrays.equals(…)  element-by-element equality test    Arrays.fill(…)  filling with values    Arrays.toString(…)  converting to a String    Arrays.sort(…)  sort array elements    Arrays.binarySearch(…)  search array elements    "
},
{
  "id": "listing-arr-arrays-methods",
  "level": "2",
  "url": "section-ar-library.html#listing-arr-arrays-methods",
  "type": "Listing",
  "number": "8.5.2",
  "title": "",
  "body": " ArraysMethods.java   \/\/ ArraysMethods.java import java.util.Arrays; import java.util.Random; public class ArraysMethods { public static void main(String[] args) { Random rnd = new Random(); \/\/ Random object \/\/ Create an array of 1000 random integers in [100, 500) \/\/ and print ends int[] nums = new int[1000]; for (int i = 0; i < nums.length; i++) { nums[i] = 100 + rnd.nextInt(400); } printEnds( \"nums\", nums ); \/\/ Create a copy of the array and print copy int[] copy = Arrays.copyOf(nums, nums.length); printEnds( \"copy\", copy ); \/\/ Check if they are the identical array System.out.println(\"nums and copy\" + (nums == copy ? \" ARE\" : \" ARE NOT\") + \" identical\"); \/\/ Check equivalence element-by-element System.out.println(\"nums and copy\" + (Arrays.equals(nums, copy) ? \" ARE\" : \" ARE NOT\") + \" equivalent\"); \/\/ Sort array and print Arrays.sort(nums); printEnds( \"nums (sorted)\", nums ); \/\/ Copy array ranges into two arrays and print int[] firstHalf = Arrays.copyOfRange(nums, 0, 500); int[] secondHalf = Arrays.copyOfRange(nums, 500, 1000); printEnds( \"firstHalf \", firstHalf ); printEnds( \"secondHalf\", secondHalf ); } \/\/ Print array name and elements from both ends of array public static void printEnds( String name, int[] arr ) { System.out.print(name + \": \"); for (int i=0; i<5; i++) { \/\/ Print first 5 System.out.print( arr[i] + \" \"); } System.out.print( \"... \"); \/\/ Print last 5 for (int i=arr.length-5; i<arr.length; i++) { System.out.print( arr[i] + \" \"); } System.out.println(); } }   "
},
{
  "id": "section-ar-polygons",
  "level": "1",
  "url": "section-ar-polygons.html",
  "type": "Section",
  "number": "8.6",
  "title": "Polygons",
  "body": " Polygons   A Polygon is a closed multi-sided shape made up of three or more straight lines connected end-to-end with the end of the last line attached to the beginning of the first. Polygons are created by specifying the ordered sequence of vertices that define the endpoints of all polygon edges. Think of a triangle, square, pentagon, hexagon, etc. In DoodlePad the Polygon class is used to create any polygon that you can imagine. A polygon may be convex or even concave at certain points. It is entirely up to you to choose the coordinates of the vertices.    Polygon Object     The Polygon class defines several constructors for you to use to create new polygon shapes. One category takes two arrays: one holding all x-coordinates and a second holding corresponding y-coordinates. These arrays maybe double[] or int[] arrays.  The following example program creates a Polygon object in the shape of a triangle (three vertices). is the output generated by this program.   PolygonDemo1.java   \/\/ PolygonDemo1.java import doodlepad.*; public class PolygonDemo1 { public static void main(String[] args) { \/\/ Create and initialize two double[] arrays double[] Xs = new double[] { 50.0, 100.0, 150.0}; double[] Ys = new double[] {150.0, 50.0, 150.0}; \/\/ Pass arrays to Polygon constructor Polygon p1 = new Polygon(Xs, Ys); } }    Let's write a method that creates regular star-shaped polygons with an arbitrary number of points greater than or equals to 2. Note that the number of vertices in a star polygon is twice the number of its points. Half are used for the inner concave vertices and the other half for the outer convex vertices (points of the star).  One way to think about how to make a star-shaped polygon is to image two concentric circles. The star's concave vertices fall on the inner circle and its convex vertices on the outer circle. To collect vertex coordinates, we rotate around the complete radius of the circle with an incremental angle of , where is the number of the star's points. As we rotate, we alternate the selection of vertices from the inner circle and the outer circle, at the current total angle. After one complete rotation, the collected vertex coodinates form the star-shaped polygon.  The makeStar(…) method in builds and returns a star-shaped polygon, progammatically, using the technique described above. The method takes five parameters: (1) npoints , the number of points in the star; (2) inrad , the radius of the inner circle; (3) outrad , the radius of the outer circle; (4) xoffset , the offset of the star location in the x-direction; and (5) yoffset , the offset of the star location in the y-direction.   MakeStar.java   \/\/ MakeStar.java import doodlepad.*; \/\/ Demonstrate the makeStar(...) method public class MakeStar { public static void main(String[] args) { Polygon star1 = makeStar(5, 100, 40, 150, 150); \/\/ 5-point star Polygon star2 = makeStar(50, 100, 40, 150, 350);\/\/ 50-point star star1.setFillColor(255, 255, 0); \/\/ Fill star2.setFillColor(255, 0, 0); } \/\/ Create an return a Polygon object in shape of a star with npoints \/\/ Parameters: num points, inner radius, outer radius, x- and y- offset public static Polygon makeStar( int npoints, double outrad, double inrad, double xoffset, double yoffset) { double[] Xs = new double[2*npoints]; \/\/ Vertex coordinates double[] Ys = new double[2*npoints]; double dangle = (Math.PI \/ npoints); \/\/ Angle between vertices double angle = -0.5*Math.PI; \/\/ One point on top \/\/ Compute vertex coordinates. Two per iteration. for (int i = 0; i<2*npoints; i += 2) { \/\/ Outer vertex (convex\/star point) Xs[i] = xoffset + outrad * Math.cos(angle); Ys[i] = yoffset + outrad * Math.sin(angle); angle += dangle; \/\/ Inner vertex (concave point) Xs[i+1] = xoffset + inrad * Math.cos(angle); Ys[i+1] = yoffset + inrad * Math.sin(angle); angle += dangle; } \/\/ Instantiate and return a new Star-shaped Polygon return new Polygon(Xs, Ys); } }     javac -cp doodlepad.jar MakeStar.java java -cp .;doodlepad.jar MakeStar      shows the output of running the program in . The red 50-point star is composed of 100 vertices. Building this polygon from scratch would be far too tedious to do by hand. Fortunately, with a bit of reasoning, a cople arrays, and iteration, we can accomplish this relatively easily.    MakeStar.java     "
},
{
  "id": "figure-ar-polygon1",
  "level": "2",
  "url": "section-ar-polygons.html#figure-ar-polygon1",
  "type": "Figure",
  "number": "8.6.1",
  "title": "",
  "body": " Polygon Object   "
},
{
  "id": "listing-57",
  "level": "2",
  "url": "section-ar-polygons.html#listing-57",
  "type": "Listing",
  "number": "8.6.2",
  "title": "<code class=\"code-inline tex2jax_ignore\">PolygonDemo1.java<\/code>",
  "body": " PolygonDemo1.java   \/\/ PolygonDemo1.java import doodlepad.*; public class PolygonDemo1 { public static void main(String[] args) { \/\/ Create and initialize two double[] arrays double[] Xs = new double[] { 50.0, 100.0, 150.0}; double[] Ys = new double[] {150.0, 50.0, 150.0}; \/\/ Pass arrays to Polygon constructor Polygon p1 = new Polygon(Xs, Ys); } }   "
},
{
  "id": "listing-ar-makestar",
  "level": "2",
  "url": "section-ar-polygons.html#listing-ar-makestar",
  "type": "Listing",
  "number": "8.6.3",
  "title": "<code class=\"code-inline tex2jax_ignore\">MakeStar.java<\/code>",
  "body": " MakeStar.java   \/\/ MakeStar.java import doodlepad.*; \/\/ Demonstrate the makeStar(...) method public class MakeStar { public static void main(String[] args) { Polygon star1 = makeStar(5, 100, 40, 150, 150); \/\/ 5-point star Polygon star2 = makeStar(50, 100, 40, 150, 350);\/\/ 50-point star star1.setFillColor(255, 255, 0); \/\/ Fill star2.setFillColor(255, 0, 0); } \/\/ Create an return a Polygon object in shape of a star with npoints \/\/ Parameters: num points, inner radius, outer radius, x- and y- offset public static Polygon makeStar( int npoints, double outrad, double inrad, double xoffset, double yoffset) { double[] Xs = new double[2*npoints]; \/\/ Vertex coordinates double[] Ys = new double[2*npoints]; double dangle = (Math.PI \/ npoints); \/\/ Angle between vertices double angle = -0.5*Math.PI; \/\/ One point on top \/\/ Compute vertex coordinates. Two per iteration. for (int i = 0; i<2*npoints; i += 2) { \/\/ Outer vertex (convex\/star point) Xs[i] = xoffset + outrad * Math.cos(angle); Ys[i] = yoffset + outrad * Math.sin(angle); angle += dangle; \/\/ Inner vertex (concave point) Xs[i+1] = xoffset + inrad * Math.cos(angle); Ys[i+1] = yoffset + inrad * Math.sin(angle); angle += dangle; } \/\/ Instantiate and return a new Star-shaped Polygon return new Polygon(Xs, Ys); } }   "
},
{
  "id": "figure-ar-star-polygon",
  "level": "2",
  "url": "section-ar-polygons.html#figure-ar-star-polygon",
  "type": "Figure",
  "number": "8.6.4",
  "title": "",
  "body": " MakeStar.java   "
},
{
  "id": "section-ar-concepts",
  "level": "1",
  "url": "section-ar-concepts.html",
  "type": "Section",
  "number": "8.7",
  "title": "Key Concepts",
  "body": " Key Concepts   An array is a linear data structure built in the Java.  Arrays may hold primitive data types as well as objects.  Array elements must have a uniform type.  When created, an array has a size that is predetermined and may not be extended.  An array variable is declared by specifying the type of array elements followed by square brackets.  An array is created using the new keyword followed by the type and a size in square brackets.  An array element is accessed using the array variable name followed by square brackets and the element number.  Array elements begin at index 0 and end at an index of one less than the length of the array.  The length of an array may be determined using the .length property of an array.  An array may be initialized at the time it is created by leaving out the size of the array but following with curly braces containing a comma-delimited list of values.  A shorthand for initializing an array is to declare an array variable and assign it directly to a curly brace-delimited list of values.  To access an element of an array, follow the array variable with a pair of square brackets containing the number of the array element. This form of element access may be used for reading and assigning values to an array element.  Accessing all elements of an array may be performed with a while- or for-loop which generates all indexes, typically as a loop counter.  An array element may itself be an array.  An array of arrays is referred to as a multidimensional array .  2D array variables may be declared with a type followed by two pairs of square brackets.  2D arrays may be created using the new keyword following by two pairs of square brackets containing the number of elements in each dimension. In this case the array is rectangular in shape.  To access an element in a 2D array use the array variable followed by two pairs of square brackets, each containing indexes.  A 2D array may be initialized by leaving out dimensions when creating the array and followed by nested curly braces containing comma-separated values.  A shorthand for initializing a 2D array is to declare an array variable and assign it directly to nested curly brace-delimited lists of values.  The second dimension of a 2D array is not required to have uniform lengths. This is referred to as a ragged array .  2D ragged arrays may be created by leaving out the length of the second dimension. In this case each array element starts with the default value null .  When using a ragged array, each element of the first dimension may be assigned to a 1D array of non-uniform length, provided the types are compatible.  A shorthand for initializing a ragged 2D array is to declare an array variable and assign it directly to nested curly brace-delimited lists of values, where the length of each subordinate list may vary.  To print the elements of a ragged array with iteration, the inner loop extent must use each subordinate array length to check the loop counter value.  Arrays of dimension higher than two are possible by following the pattern for extending from 1D to 2D arrays.  Use the java.util.Arrays package to access static utility functions for manipulating arrays.  Arrays are passed to methods by reference, just like any other object.  The public static void main()String[] args) method takes an array of Strings parameter, where the array Strings are read from the user input following the java command and class name. This array is referred to as the programs command line arguments .   "
},
{
  "id": "section-ar-exercises",
  "level": "1",
  "url": "section-ar-exercises.html",
  "type": "Section",
  "number": "8.8",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-cl-class-v-instance",
  "level": "1",
  "url": "section-cl-class-v-instance.html",
  "type": "Section",
  "number": "9.1",
  "title": "Class vs. Instance",
  "body": " Class vs. Instance   In a running Java program, there may exist only one of any given class. There might be as few as zero or many thousands of instances of the class (objects), but each class is unique. It is important to understand the distinction between a class and an object.  We see this difference when invoking static and object (non-static) methods. lists several examples.   Examples of static and object method invocations    Static methods  Object methods    Math.sqrt(…)  rnd.nextDouble()    String.valueOf(…)  myString.toLowerCase()    Arrays.sort(…)  myArrayList.add(…)     The left column of lists several static method examples and the right column several object method examples. In previous chapters we have used all of these examples. Note that all examples in the left column require a class name to specify the scope in which the method resides. That is, only class names appear to the left of the dot-operator. By contrast, methods in the right column are scoped by object names. In other words, an object must be instantiated before any of these methods can be invoked. Stated differently, static methods are scoped by class; non-static methods are scoped by object.   Static vs. Non-static Method Scoping > Static methods are scoped by class ; non-static methods are scoped by object .   The scoping distinction has ramifications on access. Statements within method defined as static may access only the statically-scoped members of the class. By contrast, statements in methods defined without the static keyword have access both to non-static member data declared within the object and more generally the static data scoped by class.  This object scope , also know as instance scope defines the fourth kind of Java scope that we have encountered. Anything defined within a class but without the static keyword exists in the scope of a particular the instance of the class, an object. See our list of Java scopes below.   package scope (limited to a Java package).  class scope (accessible throughout the class), and  object (instance) scope (limited to a specific object),  method scope (limited to a specific method),  block scope (limited to a specific block of code),   All of the methods that we've written in previous chapters were static (i.e. class scope). This was determined when adding the static keyword to the method declaration. By contrast, the object-scoped methods we used, were defined in either core Java libraries or other provided libraries, like those in DoodlePad. To take advantage of the object-oriented nature of Java we need to declare object-scoped fields that hold data specific to the instance and methods that have access to these fields. This enables us to define our own objects that encapsulate and manage data in accordance with the principles of object-oriented programming. Let's learn how to define our own instantiatable classes that encapsulate object-specific data.   "
},
{
  "id": "table-cl-static-v-non",
  "level": "2",
  "url": "section-cl-class-v-instance.html#table-cl-static-v-non",
  "type": "Table",
  "number": "9.1.1",
  "title": "Examples of static and object method invocations",
  "body": " Examples of static and object method invocations    Static methods  Object methods    Math.sqrt(…)  rnd.nextDouble()    String.valueOf(…)  myString.toLowerCase()    Arrays.sort(…)  myArrayList.add(…)    "
},
{
  "id": "p-708",
  "level": "2",
  "url": "section-cl-class-v-instance.html#p-708",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "object scope "
},
{
  "id": "p-709",
  "level": "2",
  "url": "section-cl-class-v-instance.html#p-709",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "encapsulate "
},
{
  "id": "section-cl-constructors",
  "level": "1",
  "url": "section-cl-constructors.html",
  "type": "Section",
  "number": "9.2",
  "title": "Constructors",
  "body": " Constructors   Most classes can be instantiated. But to be useful, these instantiated objects must be able to declare and manage their own data. This starts with the declaration of a special, method-like construct added to a class definition called a constructor .    Anatomy of a Constructor  A constructor is a block of code that is invoked when an object is instantiated using the new keyword. The statements in the constructor perfrom important initialization tasks required by an object is instantiated. outlines the unique makeup of a constructor and its five critical features.   Anatomy of a Constructor    The name of a constructor must match the name of its class.  Constructor parameter declarations are no different than method parameters.  A constructor has no return type, not even void .  There can be no return statement in a constructor.  To access the current object being initialized, use the scope defined by the this keyword.      The this Keyword  As a demonstration, let's create a graphic class named LED. This class will be a circular graphic object with width and height of 30 pixels. The graphic is filled with gray when it is off and red when it is on. When deciding what to include in any class, we need to stop and think about what is necessary to adequatley track the state of each instance. For an LED, we need to track whether it is on or off. We also need to manage its graphic representation, in this case an Oval object.  In we start the definition of our LED by declaring a class named LED and two instance variables named on and light . We call them instance variables because every instance of the class will get its own copy of these variables. We did not use the keyword static when declaring them; which makes them instance variables . Using static would have made them class variables , defined within the scope of the class. Because there is only one of any class, there would be only one of each static variable.  We also used the keyword private instead of our usual public visibility specifyer when declaring our LED instance variables. Using private ensures that the instance variables are not accessible from outside each instance. Instance variables declared with private visibility may be accessed only from within the scope of an object. No access from outside the object is permitted. We now have two visibility specifiers for the declaration of methods and instance variables, public and private .   LED.java (version 1)   \/\/ LED.java (version 1) \/\/ A simple LED display class import doodlepad.*; public class LED { private boolean on; \/\/ Tracks state of LED object private Oval light; \/\/ Visual display of object }    When we instantiate a new LED object we want to initialize these variables. That's where the constructor comes in. adds an LED constructor to our LED class declaration.   LED.java (version 2)   \/\/ LED.java (version 2) \/\/ A simple LED display class import doodlepad.*; public class LED { private boolean on; \/\/ Tracks state of LED object private Oval light; \/\/ Visual display of object \/\/ Constructor (**NEW**) public LED(double x, double y) { this.on = false; \/\/ Init instance variables this.light = new Oval(x, y, 30, 30); this.light.setFillColor(100, 100, 100); } }    Let compare our added LED constructor to the critical features given in .   The name of the constructor matches the name of the class, LED .  Two parameters are declared just like any method.  There is no return type, not even void .  There is no return statement in the body of the constructor.  And finally, instance variables are accessed from within the constructor using the this keyword.   The expressions this.on and this.light access and initialize the instance variables declared outside the scope of the constructor but within the scope of the object. All constructors must follow these same rules listed in .  Let's add a main(…) method to test our initial Java LED class. It is very convenient to use the main(…) method to test a class. As we'll see later, as our programs grow we rarely invoke an individual class's main(…) method in favor of using a special driver class with a main(…) method designed specifically to start up a program. To test our class we create two LED instances at different locations. See and . As expected, in two LED objects are shown at the given starting locations with a dark gray fill color.   LED.java (version 3)   \/\/ LED.java (version 3) \/\/ A simple LED display class import doodlepad.*; public class LED { private boolean on; \/\/ Tracks state of LED object private Oval light; \/\/ Visual display of object \/\/ Constructor public LED(double x, double y) { this.on = false; \/\/ Init instance variables this.light = new Oval(x, y, 30, 30); this.light.setFillColor(100, 100, 100); } } \/\/ --- Test LED (**NEW**) public static void main(String[] args) { \/\/ Create LED objects LED led1 = new LED(100, 100); LED led2 = new LED(200, 100); }     javac -cp doodlepad.jar LED.java java -cp .;doodlepad.jar LED    LED.java (version 3)     "
},
{
  "id": "p-710",
  "level": "2",
  "url": "section-cl-constructors.html#p-710",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constructor "
},
{
  "id": "p-711",
  "level": "2",
  "url": "section-cl-constructors.html#p-711",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constructor "
},
{
  "id": "figure-cl-constructor-anatomy",
  "level": "2",
  "url": "section-cl-constructors.html#figure-cl-constructor-anatomy",
  "type": "Figure",
  "number": "9.2.1",
  "title": "",
  "body": " Anatomy of a Constructor    The name of a constructor must match the name of its class.  Constructor parameter declarations are no different than method parameters.  A constructor has no return type, not even void .  There can be no return statement in a constructor.  To access the current object being initialized, use the scope defined by the this keyword.   "
},
{
  "id": "p-713",
  "level": "2",
  "url": "section-cl-constructors.html#p-713",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "instance variables class variables "
},
{
  "id": "p-714",
  "level": "2",
  "url": "section-cl-constructors.html#p-714",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "private visibility "
},
{
  "id": "listing-cl-led1",
  "level": "2",
  "url": "section-cl-constructors.html#listing-cl-led1",
  "type": "Listing",
  "number": "9.2.2",
  "title": "",
  "body": " LED.java (version 1)   \/\/ LED.java (version 1) \/\/ A simple LED display class import doodlepad.*; public class LED { private boolean on; \/\/ Tracks state of LED object private Oval light; \/\/ Visual display of object }   "
},
{
  "id": "listing-cl-led2",
  "level": "2",
  "url": "section-cl-constructors.html#listing-cl-led2",
  "type": "Listing",
  "number": "9.2.3",
  "title": "",
  "body": " LED.java (version 2)   \/\/ LED.java (version 2) \/\/ A simple LED display class import doodlepad.*; public class LED { private boolean on; \/\/ Tracks state of LED object private Oval light; \/\/ Visual display of object \/\/ Constructor (**NEW**) public LED(double x, double y) { this.on = false; \/\/ Init instance variables this.light = new Oval(x, y, 30, 30); this.light.setFillColor(100, 100, 100); } }   "
},
{
  "id": "p-718",
  "level": "2",
  "url": "section-cl-constructors.html#p-718",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "driver "
},
{
  "id": "listing-cl-led3",
  "level": "2",
  "url": "section-cl-constructors.html#listing-cl-led3",
  "type": "Listing",
  "number": "9.2.4",
  "title": "",
  "body": " LED.java (version 3)   \/\/ LED.java (version 3) \/\/ A simple LED display class import doodlepad.*; public class LED { private boolean on; \/\/ Tracks state of LED object private Oval light; \/\/ Visual display of object \/\/ Constructor public LED(double x, double y) { this.on = false; \/\/ Init instance variables this.light = new Oval(x, y, 30, 30); this.light.setFillColor(100, 100, 100); } } \/\/ --- Test LED (**NEW**) public static void main(String[] args) { \/\/ Create LED objects LED led1 = new LED(100, 100); LED led2 = new LED(200, 100); }   "
},
{
  "id": "figure-cl-led3",
  "level": "2",
  "url": "section-cl-constructors.html#figure-cl-led3",
  "type": "Figure",
  "number": "9.2.5",
  "title": "",
  "body": " LED.java (version 3)   "
},
{
  "id": "section-cl-methods",
  "level": "1",
  "url": "section-cl-methods.html",
  "type": "Section",
  "number": "9.3",
  "title": "Methods",
  "body": " Methods  Objects may have their own methods. Once again, we declare methods without using the static keyword because we want them to be created within the scope of the object, not the class. This gives the method access to the object instance itself through the this keyword and other items declared in the object, including those with private visibility. We need access to the object in order to effectively manage its internal state of the object.   Object Methods  We introduced methods in . The difference between what was described there and the figure below is that here we leave out the static keyword so as to define the method within the scope of the object. Otherwise, the same rules apply.   Anatomy of a method    As an example, let's add three methods to our LED class that turn the LED on and off, and return the state of the LED. Turning an the LED object on sets the internal on variable to true and changes the managed Oval fill color to red. Turning it off resets the on variable to false and the Oval fill color back to dark gray. Obtaining the state of the LED simply returns the value of the private on instance variable. We'll call these methods turnOn() , turnOff() , and isOn() . None of these new methods have parameters.   shows the code changes to our class definition. The added turnOn() and turnOff() methods do what we expect, setting and configuring the state of the object by modifying its private instance variables. The isOn() returns the boolean value of the on instance variable. Because we have abstracted the concept of the LED being off and on and exposed that as these new methods, it is wise to remove the initial explicit instance variable configuration statements from the constructor that starts the LED in the off state and replace them by invoking the turnOff() method directly.  Consider what might happen if we decided to leave the initialization of the LED object's instance variables by setting the object state explicitly in the constructor. Doing this requires us to make sure that the constructor and the turnOff() method remained in sync. If we decided to change the fill color of the LED when off, and we modified the code in turnOff() but forgot to make the comparable change to the constructor, we would end up with an inconsistency in our program. The ramifications of making this mistake in this example are minor. But one can imagine how such an oversight can lead to more serious problems. This important software development principle has been dubbed Don't repeat yourself or DRY .   Principle: Don't Repeat Yourself (DRY)  Every concept must have a single, authoritative representation within a system. Reduce repetition of concepts likely to change by replacing them with reusable abstractions.   To test our new methods, in addition to replacing configuration statements in the constructor with turnOff() , we invoke turnOn() in main(…) on both LED objects after instantiation. We also test the state of the first LED object by invoking its isOn() method and printing the result. See the result in .   LED.java (version 4)   \/\/ LED.java (version 4) \/\/ A simple LED display class import doodlepad.*; public class LED { private boolean on; \/\/ Tracks state of LED object private Oval light; \/\/ Visual display of object \/\/ Constructor public LED(double x, double y) { this.light = new Oval(x, y, 30, 30); this.turnOff(); \/\/ Init state by invoking method (**NEW**) } \/\/ Turn on LED (**NEW**) public void turnOn() { this.on = true; this.light.setFillColor(255, 0, 0); } \/\/ Turn off LED (**NEW**) public void turnOff() { this.on = false; this.light.setFillColor(100, 100, 100); } \/\/ Return state of LED (**NEW**) public boolean isOn() { return this.on; } \/\/ --- Test LED public static void main(String[] args) { \/\/ Create LED objects LED led1 = new LED(100, 100); LED led2 = new LED(200, 100); \/\/ Turn on both LED objects (**NEW**) led1.turnOn(); led2.turnOn(); System.out.println( \"LED1 is\" + (led1.isOn() ? \"\" : \" not\") + \" on\"); } }     javac -cp doodlepad.jar LED.java java -cp .;doodlepad.jar LED  LED1 is on    LED.java (version 4)      Accessor and Mutator Methods  Encapsulation requires that we manage access to instance variables. We can make an instance variable accessible simply by declaring it with public visibility. This leaves the variable's value wide open to change. We lose the ability to manage it, such as by restricting its value to a valid range.  The standard way is to manage instance variables is to declare them with private visibility, and add methods that are used to set the value of the instance variable and to get the value of an instance variable. A method designed to set the value of an instance variable is called a mutator method, also known as a setter . A method designed to get the value of an instance variable is called an accessor method, also known as a getter . By convention, we typically name these methods by prepending the instance variable named with set in the case of a mutator method (setters), and get in the case of an accessor method (getters).  By defining mutator methods and accessor methods for an instance variable, we open up a wide range of options for managing instance variable values. For example, if we want to restict the value of an age instance variable to a number greater-than or equal-to 0.0, we could test the value before assigning it. The following setAge(…) method is a simple example.  \/\/ Age setter restricted to values >= 0.0 public void setAge(double age) { if (age >= 0.0) { \/\/ Assign this.age only if this.age = age; \/\/ condition is satisfied } }  As another example, consider that we can configure an instance variable to be read-only simply by defining a getter method and but not a corresponding setter method. Without a setter, we can never change the instance variable value, only read it.  Let's expand our LED class example once more. Let's assume that we can choose the color that the LED emits when it is on to one of four values: RED, GREEN, BLUE, and YELLOW. It is easy enough to add an instance variable that holds an LED color, but we also need to manage that variable, limiting it to one of the four possible values. To manage this instance variable, we must add to the LED class a setColor(…) method, a setter, and a getColor() method, a getter. To help with this addition, let's define an enum with constants for the four LED colors, similar to what we did in .   enum LEDColor { RED, GREEN, BLUE, YELLOW };   To work this option into our LED class, we made the following changes. Refer to .    Added the enum to the bottom of our LED.java file.  Added a private scoped LEDColor color instance variable to hold an enum constant.  Added setColor(…) method to the class that take the LEDColor enum constant as a parameter. This limits values to one of the four color constants.  Added a getColor() method to the class that returns an LEDColor enum constant.  Initialized the color instance variable in the LED constructor  Added a switch to the turnOn() method that sets color based on the value of color instance variable.    LED.java (version 5)   \/\/ LED.java (version 5) \/\/ A simple LED display class import doodlepad.*; public class LED { private boolean on; \/\/ Tracks state of LED object private Oval light; \/\/ Visual display of object private LEDColor color; \/\/ LED Color (**NEW**) \/\/ Constructor public LED(double x, double y) { this.light = new Oval(x, y, 30, 30); this.turnOff(); \/\/ Init state this.color = LEDColor.RED; \/\/ Default to RED (**NEW**) } \/\/ Turn on LED public void turnOn() { this.on = true; switch (this.color) { \/\/ Set selected color (**NEW**) case RED: this.light.setFillColor(255, 0, 0); break; case GREEN: this.light.setFillColor(0, 255, 0); break; case BLUE: this.light.setFillColor(0, 0, 255); break; case YELLOW: this.light.setFillColor(255, 255, 0); break; } } \/\/ Turn off LED public void turnOff() { this.on = false; this.light.setFillColor(100, 100, 100); } \/\/ Return state of LED public boolean isOn() { return this.on; } \/\/ MUTATOR method for LED Color (**NEW**) public void setColor(LEDColor color) { this.color = color; } \/\/ ACCESSOR method for LED Color (**NEW**) public LEDColor getColor() { return this.color; } \/\/ --- Test LED public static void main(String[] args) { \/\/ Create LED objects LED led1 = new LED(100, 100); LED led2 = new LED(200, 100); \/\/ Change LED colors (**NEW**) led1.setColor(LEDColor.BLUE); led2.setColor(LEDColor.YELLOW); \/\/ Turn on both LED objects led1.turnOn(); led2.turnOn(); System.out.println( \"LED1 is\" + (led1.isOn() ? \"\" : \" not\") + \" on\"); } } \/\/ Enum for LED Color constants (**NEW**) enum LEDColor { RED, GREEN, BLUE, YELLOW };     javac -cp doodlepad.jar LED.java java -cp .;doodlepad.jar LED  LED1 is on    LED.java (version 5)      Method Overloading  When your source code specifies that a method is to be invoked, the Java compiler will match up that invocation with an method implementation. This way, when your program runs, the proper method is executed. This matching task considers more than just the name of the method. The match is performed on the entire method signature . A method signature is composed of the method name and its parameter list, including parameter type and order.  Matching on the entire signature, and not just the method name, lets us define multiple methods having the same name, provided the signatures are distinct. This is called method overloading . The thought is that the method name is given multiple meanings, and so it is overloaded .  A constructor may be overloaded as well. Multiple constructors exist in a class provided the signatures are distinct. Overloading a method or constructor gives us the ability to abstract the same concept using a single name, but permitting the user to pass different parameter values.  A good application of method overloading is to set default parameter values for a method or constructor. Consider the setFillColor(…) method of all DoodlePad shape objects. As we know, this method can take the three color components: red, green, and blue, and that is the way we've used it. But, in fact, there are several other options (overloads) for invoking setFillColor(…) .  Colors in DoodlePad may be partially or fully transparent. This is set using fourth value in [0, 255] known as alpha . An alpha of 0 means fully transparent and an alpha of 255 means fully opaque. All color-related DoodlePad methods can take four color component parameters, the fourth being transparency specified as alpha. If that fourth parameter is omitted, DoodlePad substitutes an alpha of 255, fully opaque. This is implemented by overloading the definition of setFillColor(…) , which you can observe in the DoodlePad source code .   \/** * Set the fill color with which to draw the shape * @param red the red component of the color [0, 255] * @param green the green component of the color [0, 255] * @param blue the blue component of the color [0, 255] *\/ public void setFillColor(double red, double green, double blue) { setFillColor( red, green, blue, 255 ); \/\/ Default alpha to 255 }   In the previous example of DoodlePad source code, the three-parameter overload of setFillColor(…) just invokes the four-parameter version with 255 passed as the alpha value.  All shades of gray in the RGB color model are formed by setting the red, green, and blue color components to the same value within [0, 255]. To save typing, DoodlePad provides an overload that repeats the first value three times when only one parameter is provided. See the following additional overload. The DoodlePad source code is an interesting repository to explore see applications of many of the principles that we study in this book.   \/** * Set the gray scale fill color with which to draw the shape. * @param gray the gray scale value in the range [0, 255] *\/ public void setFillColor(double gray) { this.setFillColor(gray, gray, gray, 255); }   Constructors may be overloaded as well. The Java compile matches the invoked constructor signature to available definitions to ensure the proper constructor implementation is invoked.  As an example, rather than defaulting the LED on color to RED and then being required to change it using the setColor(…) method, let's overload the constructor as two implementations. The the more general implementation takes the LED on color as a third parameter, and a two-parameter overload invokes the three parameter implementation with the value LEDColor.RED as the third parameter, making it the default. Note that a constructor overload is invoked using this instead of the class name, and no new keyword.   \/\/ Overloaded constructor defaults color to RED public LED(double x, double y) { \/\/ Invoke alternative constructor with RED as default this(x, y, LEDColor.RED); } \/\/ Main constructor expects color constant as a parameter public LED(double x, double y, LEDColor color) { this.light = new Oval(x, y, 30, 30); this.setColor(color); \/\/ Set LED on color this.turnOff(); \/\/ Init state }   It is common practice in Java to define one method or constructor that does all the real work, and then one or more overloads that provide default parameter values. This practice is also a good example of DRY .   "
},
{
  "id": "figure-cl-method-anatomy",
  "level": "2",
  "url": "section-cl-methods.html#figure-cl-method-anatomy",
  "type": "Figure",
  "number": "9.3.1",
  "title": "",
  "body": " Anatomy of a method   "
},
{
  "id": "p-722",
  "level": "2",
  "url": "section-cl-methods.html#p-722",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Don't repeat yourself DRY "
},
{
  "id": "listing-cl-led4",
  "level": "2",
  "url": "section-cl-methods.html#listing-cl-led4",
  "type": "Listing",
  "number": "9.3.2",
  "title": "",
  "body": " LED.java (version 4)   \/\/ LED.java (version 4) \/\/ A simple LED display class import doodlepad.*; public class LED { private boolean on; \/\/ Tracks state of LED object private Oval light; \/\/ Visual display of object \/\/ Constructor public LED(double x, double y) { this.light = new Oval(x, y, 30, 30); this.turnOff(); \/\/ Init state by invoking method (**NEW**) } \/\/ Turn on LED (**NEW**) public void turnOn() { this.on = true; this.light.setFillColor(255, 0, 0); } \/\/ Turn off LED (**NEW**) public void turnOff() { this.on = false; this.light.setFillColor(100, 100, 100); } \/\/ Return state of LED (**NEW**) public boolean isOn() { return this.on; } \/\/ --- Test LED public static void main(String[] args) { \/\/ Create LED objects LED led1 = new LED(100, 100); LED led2 = new LED(200, 100); \/\/ Turn on both LED objects (**NEW**) led1.turnOn(); led2.turnOn(); System.out.println( \"LED1 is\" + (led1.isOn() ? \"\" : \" not\") + \" on\"); } }   "
},
{
  "id": "figure-cl-led4",
  "level": "2",
  "url": "section-cl-methods.html#figure-cl-led4",
  "type": "Figure",
  "number": "9.3.3",
  "title": "",
  "body": " LED.java (version 4)   "
},
{
  "id": "p-726",
  "level": "2",
  "url": "section-cl-methods.html#p-726",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mutator setter accessor getter "
},
{
  "id": "listing-cl-led5",
  "level": "2",
  "url": "section-cl-methods.html#listing-cl-led5",
  "type": "Listing",
  "number": "9.3.4",
  "title": "",
  "body": " LED.java (version 5)   \/\/ LED.java (version 5) \/\/ A simple LED display class import doodlepad.*; public class LED { private boolean on; \/\/ Tracks state of LED object private Oval light; \/\/ Visual display of object private LEDColor color; \/\/ LED Color (**NEW**) \/\/ Constructor public LED(double x, double y) { this.light = new Oval(x, y, 30, 30); this.turnOff(); \/\/ Init state this.color = LEDColor.RED; \/\/ Default to RED (**NEW**) } \/\/ Turn on LED public void turnOn() { this.on = true; switch (this.color) { \/\/ Set selected color (**NEW**) case RED: this.light.setFillColor(255, 0, 0); break; case GREEN: this.light.setFillColor(0, 255, 0); break; case BLUE: this.light.setFillColor(0, 0, 255); break; case YELLOW: this.light.setFillColor(255, 255, 0); break; } } \/\/ Turn off LED public void turnOff() { this.on = false; this.light.setFillColor(100, 100, 100); } \/\/ Return state of LED public boolean isOn() { return this.on; } \/\/ MUTATOR method for LED Color (**NEW**) public void setColor(LEDColor color) { this.color = color; } \/\/ ACCESSOR method for LED Color (**NEW**) public LEDColor getColor() { return this.color; } \/\/ --- Test LED public static void main(String[] args) { \/\/ Create LED objects LED led1 = new LED(100, 100); LED led2 = new LED(200, 100); \/\/ Change LED colors (**NEW**) led1.setColor(LEDColor.BLUE); led2.setColor(LEDColor.YELLOW); \/\/ Turn on both LED objects led1.turnOn(); led2.turnOn(); System.out.println( \"LED1 is\" + (led1.isOn() ? \"\" : \" not\") + \" on\"); } } \/\/ Enum for LED Color constants (**NEW**) enum LEDColor { RED, GREEN, BLUE, YELLOW };   "
},
{
  "id": "figure-cl-led5",
  "level": "2",
  "url": "section-cl-methods.html#figure-cl-led5",
  "type": "Figure",
  "number": "9.3.5",
  "title": "",
  "body": " LED.java (version 5)   "
},
{
  "id": "p-731",
  "level": "2",
  "url": "section-cl-methods.html#p-731",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method signature "
},
{
  "id": "p-732",
  "level": "2",
  "url": "section-cl-methods.html#p-732",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method overloading "
},
{
  "id": "p-735",
  "level": "2",
  "url": "section-cl-methods.html#p-735",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "alpha "
},
{
  "id": "section-cl-shadowing",
  "level": "1",
  "url": "section-cl-shadowing.html",
  "type": "Section",
  "number": "9.4",
  "title": "Shadowing",
  "body": " Shadowing   With nested scopes we can define a variable in the scope of a method or constructor and then another having the same name in an outer object or class scope. This doesn't cause a problem until we want to access one of the two variables by name from the inner scope. An ambiguity arises. Java cannot tell if you intended to reference the variable declared within the inner method scope or the outer object or class scope. To solve this problem, Java always chooses a variable by searching for the variable declaration in the current scope, and if not found, it proceeds to outer scopes progressively until the first match is found.    Shadowing Troubles  Consider the ClickThick.java program source code in . This program creates an initial Line shape object assigned to the variable line and is set up to invoke the object-scoped onPressed(…) method when the mouse clicks the line. If the left mouse button is used, the thickness of the line is doubled. If the right mouse button is used, the thickness of the line is halved.   ClickThick.java   \/\/ ClickThick.java import doodlepad.*; \/\/ Import Doodlepad \/\/ Classes \/\/ Class that illustrates Line thickness public class ClickThick { private Line line; \/\/ Object-scoped variable public ClickThick() { \/\/ Constructor \/\/ Create Line object and assign to variable Line line; \/\/ This variable SHADOWS line = new Line(100, 100, 500, 100); \/\/ the line variable above line.setStrokeWidth(10); line.setMousePressedHandler( this::onPressed ); \/\/ Assign event handler } \/\/ Event handler method public void onPressed(Shape shp, double x, double y, int button) { double w = line.getStrokeWidth(); \/\/ Current line thickness if (button == 1) { \/\/ Left mouse pressed line.setStrokeWidth( 2*w ); \/\/ Double thickness } else if (button == 3) { \/\/ Right mouse pressed line.setStrokeWidth( w\/2 ); \/\/ Halve thickness } } \/\/ Create object public static void main(String[] args) { new ClickThick(); } }    When we compile and run the program, the expected window appears ( ). But when we click the line, the console prints an error trace, the top several lines of which is in the shell session below. The main error reported is java.lang.NullPointerException  because \"this.line\" is null (line 18). This error is telling us that the line variable is null so our attempt to get the line thickness using line.getStrokeWidth() failed.   javac -cp doodlepad.jar ClickThick.java java -cp .;doodlepad.jar ClickThick  Exception in thread \"AWT-EventQueue-0\" java.lang.NullPointerException: Cannot invoke \"doodlepad.Line.getStrokeWidth()\" because \"this.line\" is null at ClickThick.onPressed(ClickThick.java:18) at doodlepad.Shape.onMousePressed(Shape.java:1402) at doodlepad.Shape$1.mousePressed(Shape.java:231) at doodlepad.Pad$7.mousePressed(Pad.java:454) ...    ClickThick.java    This might seem odd because it is clear that the line variable is initialized in the constructor, in the statement Line line = new Line(100, 100, 500, 100); Can you spot the error?  If you look closely, you will see that there are two line variables. One is declared in the constructor and the other in the outer scope of the object. In the constructor, only the locally scoped line variable is initialized. The other line variable declared in the scope of the object is never initialized. When the constructor exits, its scope is gone and so is its locally scoped line variable. When the Line object is clicked the onPressed(…) method is invoked. There is no line variable declared in this method and so the variable referenced is the one declared in the object scope, which has the value of null because it was never initialized. This is the source of the error.  The problem is in the constructor. The intention was to assign the object-scoped line variable. Unfortunately, the locally-scoped line variable shadows the object-scoped variable because it has the same name. The constructor initialized the wrote line variable. See for an illustration of the situation. To solve the problem we can eliminate the declaration of the locally-scoped line variable by removing the class name Line , leaving only the initialization. Specifically, line = new Line(100, 100, 500, 100) . With this modification, the program works correctly.   Shadowing line    This example illustrates how variable shadowing works, and how it can lead to trouble if you are not careful about where variables are declared and how they are initialized.    Peering Around a Shadow  Even when an outer-scoped variable is shadowed by a local variable declaration, the shadowed variable can be accessed directly by setting its scope explicitly. Recall that class scoped variables and methods may be accessed using the class name with the dot-operator, think about Math.sqrt(…) . Also, the current object scope is set using the this keyword with the dot-operator. These techniques may be from from inner scopes just as well as from outer scopes. For example, from within the ClickThick constructor in , to ensure that I was accessing the object-scope line variable and not the locallt-scoped line , I could have used this to set the scope explicitly, this.line = new Line(100, 100, 500, 100); . While Java will search progressively breader scopes for an identifier that matches one that you reference, explicit scoping using this or a class name and the dot-operator removes any ambiguity.  One common situation in which explicit object scoping is required is when defining a constructor that initializes a instance variables having the same name as constructor parameters. It is convenient to assign names to constructor parameters that match instance variable names they are intended to initialize. Of course, these parameters shadow the instance variables, so explicit scoping using this is required.  As a simple example, let's assume my program includes a Cat class that tracks the cat's name and age. The constructor is used to initialize these two instance variables. In you will see that the Cat class defines the instance variables name and age , and the constructor takes the two parameters also declared as name and age . For the constructor to perform the assignment correctly, it must explicitly set the scope of the instance variables to the object using this .   Cat.java   \/\/ Cat.java \/\/ Cat class public class Cat { private String name; \/\/ Instance variables private int age; \/\/ Constructor that initializes this instance public Cat(String name, int age) { this.name = name; \/\/ Avoids shadowing this.age = age; } \/\/ ... }    This pattern of using constructor parameters to initialize instance variables is a common one. The intentions are clear and the explicit scoping avoids any ambiguity.   "
},
{
  "id": "listing-cl-click-thick",
  "level": "2",
  "url": "section-cl-shadowing.html#listing-cl-click-thick",
  "type": "Listing",
  "number": "9.4.1",
  "title": "",
  "body": " ClickThick.java   \/\/ ClickThick.java import doodlepad.*; \/\/ Import Doodlepad \/\/ Classes \/\/ Class that illustrates Line thickness public class ClickThick { private Line line; \/\/ Object-scoped variable public ClickThick() { \/\/ Constructor \/\/ Create Line object and assign to variable Line line; \/\/ This variable SHADOWS line = new Line(100, 100, 500, 100); \/\/ the line variable above line.setStrokeWidth(10); line.setMousePressedHandler( this::onPressed ); \/\/ Assign event handler } \/\/ Event handler method public void onPressed(Shape shp, double x, double y, int button) { double w = line.getStrokeWidth(); \/\/ Current line thickness if (button == 1) { \/\/ Left mouse pressed line.setStrokeWidth( 2*w ); \/\/ Double thickness } else if (button == 3) { \/\/ Right mouse pressed line.setStrokeWidth( w\/2 ); \/\/ Halve thickness } } \/\/ Create object public static void main(String[] args) { new ClickThick(); } }   "
},
{
  "id": "figure-cl-click-thick",
  "level": "2",
  "url": "section-cl-shadowing.html#figure-cl-click-thick",
  "type": "Figure",
  "number": "9.4.2",
  "title": "",
  "body": " ClickThick.java   "
},
{
  "id": "figure-cl-shadowing",
  "level": "2",
  "url": "section-cl-shadowing.html#figure-cl-shadowing",
  "type": "Figure",
  "number": "9.4.3",
  "title": "",
  "body": " Shadowing line   "
},
{
  "id": "listing-cl-cat",
  "level": "2",
  "url": "section-cl-shadowing.html#listing-cl-cat",
  "type": "Listing",
  "number": "9.4.4",
  "title": "",
  "body": " Cat.java   \/\/ Cat.java \/\/ Cat class public class Cat { private String name; \/\/ Instance variables private int age; \/\/ Constructor that initializes this instance public Cat(String name, int age) { this.name = name; \/\/ Avoids shadowing this.age = age; } \/\/ ... }   "
},
{
  "id": "section-cl-anonymous-objects",
  "level": "1",
  "url": "section-cl-anonymous-objects.html",
  "type": "Section",
  "number": "9.5",
  "title": "Anonymous Objects",
  "body": " Anonymous Objects   It is not always necessary to assign an object to a variable before using it. This occurs in several situation, including when chaining methods. Consider the following code snippet.   String saying1 = \"Be the change. \"; \/\/ Create String object String saying2 = saying1.trim(); \/\/ Trim whitespace String saying3 = saying2.toUpperCase(); \/\/ Convert to upper case System.out.println( saying3 ); \/\/ Print result   We know that String objects are immutable. Therefore, each time an operation is performed on a String, a new String object is created. The String object count for the above example is 3. Three String objects are created in total.  We could simplify this just a bit by reusing the saying String variable, as we did in the updated code snippet below. But it is important to realize that reusing the String variable does not change the fact that three String objects are created in the process. Our String object count remains 3.   String saying = \"Be the change. \"; \/\/ Create String object saying = saying.trim(); \/\/ Trim whitespace saying = saying.toUpperCase(); \/\/ Convert to upper case System.out.println( saying ); \/\/ Print result   Because each statement returns a new String object, there is no reason to assign results to the saying String variable at all, other than for clarity. If our ultimate goal is to produce the printed output then why use the saying String variable? In fact, we could chain these statement into one complex statement and pass as a parameter directly to the println(…) method. The JShell session that follows demonstrates this fact.   \/\/ Create String object, process, and print System.out.println( \"Be the change. \".trim().toUpperCase() );    jshell> System.out.println( \"Be the change. \".trim().toUpperCase() );  BE THE CHANGE.  jshell>   What is our String count in the above single line print statement? Of course, the answer remains 3. Even though we did not use intermediate variables, the process is the same. A String object was created, trimmed, converted to upper-case, and printed.  In situations like the above, when Java creates objects but does not assign them to a reference variable, we refer to the objects as anonymous because they are never given a variable name. This does not mean that the objects were not created. In fact, they were created, but they had a fleeting existence as they were passed down the chain of methods.   "
},
{
  "id": "p-757",
  "level": "2",
  "url": "section-cl-anonymous-objects.html#p-757",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "anonymous "
},
{
  "id": "section-cl-multi-file-programs",
  "level": "1",
  "url": "section-cl-multi-file-programs.html",
  "type": "Section",
  "number": "9.6",
  "title": "Multi-File Programs",
  "body": " Multi-File Programs   Because Java limits a single Java file to one public class definition, it follows that the source code of a program involving two or more custom classes must be made up of multiple Java source code files. Recall that there is no limit to the number of classes defined within a single source code file. But only one of those classes may be public and its name must match the file name. Any number of helper classes may be defined, which are used internally by the public class in the file.    Compiling Multi-file Programs  A program involving multiple source code files may be compiled by simply listing all source files after the javac command. The Java compiler identifies where to find each class by the name of the file. For example, if we have defined two custom classes in our program, Class1.java and Class2.java , then all must be compiled together using a shell command like the following.   javac Class1.java Class2.java   Simple list all source code file names after the javac command. If additional classes are defined in a JAR file, like doodlepad.jar , then add the standard classpath option to the command.   javac -cp doodlepad.jar Class1.java Class2.java   The compiler searches and finds all classes that it needs to produce compiled class files. The compiler will complain if it cannot find a class. Note that you will see a compiled .class file produced by the compiler for every class that you define, even if those classes are not public.    The Driver Class  In which class should the overall main(…) method be placed — the one that initializes all classes and starts running your program? It may not always be obvious. After all, for our individual class definitions to be reusable, it does not make a lot of sense to use a class's main(…) method to start a larger application. Furthermore, in we used the main(…) method to run tests on our custom class.  One approach is to author a separate class that defines only this top-level main(…) method that starts the larger program. In a sense, this main(…) method drives the rest of your program, hence the term Driver Class . In fact, you may define several Driver Classes in a program, each with a different purpose, and invoke each separately by sepcifying the name of the Driver Class of interest when running your program using the java command.  Let's say that we want to build a grid of multiple LED objects for a virtual panel of indicator lights. The panel consists of two rows of four lights, one of each color in each row. We can use our previous LED class and the following Driver class to build our virtual panel.  The LEDPanel class in implements only the main(…) method which sets up and runs the program. First in the main(…) method a Pad object is created directly with a title and custom dimensions. Rather than declare eight LED variables, and array of LED objects named leds is declared. Each element of the leds array is assigned to a new LED object with a set color. Note that we are using an LED class with the updated constructor overload that takes an additional color parameter used to initialize the LED on color.   LEDPanel.java   \/\/ LEDPanel.java import doodlepad.*; \/\/ Driver class public class LEDPanel { public static void main(String[] args) { \/\/ Create a Pad object with title and custom dimensions Pad panel = new Pad(\"LED Panel\", 550, 350); \/\/ Store LED objects in a 2D array matching layout LED[][] leds = new LED[2][4]; \/\/ Create and position all LED objects on panel leds[0][0] = new LED(100, 100, LEDColor.RED); leds[0][1] = new LED(200, 100, LEDColor.GREEN); leds[0][2] = new LED(300, 100, LEDColor.BLUE); leds[0][3] = new LED(400, 100, LEDColor.YELLOW); leds[1][0] = new LED(100, 200, LEDColor.RED); leds[1][1] = new LED(200, 200, LEDColor.GREEN); leds[1][2] = new LED(300, 200, LEDColor.BLUE); leds[1][3] = new LED(400, 200, LEDColor.YELLOW); \/\/ Turn on all LED objects for (int r=0; r<leds.length; r++) { for (int c=0; c<leds[r].length; c++) { leds[r][c].turnOn(); } } } }    When compiling, all classes are specified in a sequence following the javac command. Only the Driver Class is named when running the program with java because the driver class contains the main(…) method to be used to start the program.   \/\/ All Java files are compiled together javac -cp .;doodlepad.jar LEDPanel.java LED.java \/\/ Only the Driver Class name is used when run java -cp .;doodlepad.jar LEDPanel    LEDPanel.java     "
},
{
  "id": "p-763",
  "level": "2",
  "url": "section-cl-multi-file-programs.html#p-763",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Driver Class "
},
{
  "id": "listing-cl-led-panel",
  "level": "2",
  "url": "section-cl-multi-file-programs.html#listing-cl-led-panel",
  "type": "Listing",
  "number": "9.6.1",
  "title": "",
  "body": " LEDPanel.java   \/\/ LEDPanel.java import doodlepad.*; \/\/ Driver class public class LEDPanel { public static void main(String[] args) { \/\/ Create a Pad object with title and custom dimensions Pad panel = new Pad(\"LED Panel\", 550, 350); \/\/ Store LED objects in a 2D array matching layout LED[][] leds = new LED[2][4]; \/\/ Create and position all LED objects on panel leds[0][0] = new LED(100, 100, LEDColor.RED); leds[0][1] = new LED(200, 100, LEDColor.GREEN); leds[0][2] = new LED(300, 100, LEDColor.BLUE); leds[0][3] = new LED(400, 100, LEDColor.YELLOW); leds[1][0] = new LED(100, 200, LEDColor.RED); leds[1][1] = new LED(200, 200, LEDColor.GREEN); leds[1][2] = new LED(300, 200, LEDColor.BLUE); leds[1][3] = new LED(400, 200, LEDColor.YELLOW); \/\/ Turn on all LED objects for (int r=0; r<leds.length; r++) { for (int c=0; c<leds[r].length; c++) { leds[r][c].turnOn(); } } } }   "
},
{
  "id": "figure-cl-led-panel",
  "level": "2",
  "url": "section-cl-multi-file-programs.html#figure-cl-led-panel",
  "type": "Figure",
  "number": "9.6.2",
  "title": "",
  "body": " LEDPanel.java   "
},
{
  "id": "section-cl-packages",
  "level": "1",
  "url": "section-cl-packages.html",
  "type": "Section",
  "number": "9.7",
  "title": "Packages",
  "body": " Packages  As our Java programs grow in size, many more classes are defined. At some point we end up with a sea of classes that need some organizational structure to manage. This is where packages can help us.   Packages  A Java package is a bundle of related classes and other types that are grouped under a single name. The package name works like a scope in the sense that types in a package may be accessed using the package name and dot-notation. In large programs there are several good reasons to organize types into packages. These include:   Types in a single package suggest they are related. Packaging types avoids name conflicts with types having the same name in other packages because a type name can be disambiguated using the package name as its scope. Package have scoping rules that allow members of a single package unrestricted access to other members of the package, while restricting access to package members from outside the package. This is called package scoping with private visibility, often shortened to package-private .   To both define a package and place a class into the package, simply add a package statement as the first line in any file naming the package. For example,   package doodlepad;   If you refer to the DoodlePad source code repository, you will find this line at the top of every source code file. This puts all classes into the doodlepad package, and is the reason why we add a line like import doodlepad.*; to the top of our graphics programs. This import statement imports all types from the doodlepad package into your program. The package name is doodlepad and the * is a wildcard matching all types in the package. You are free to create your own packages using a similar syntax.  Using the doodlepad package name helps to disambiguate classes defined in that package from classes having the same name in other packages. For example, the DoodlePad Rectangle class has the same name as Java's Rectangle defined in its AWT package. These classes don't conflict because their fully-qualified names are different. Namely, the DoodlePad class has a fully-qualified name of doodlepad.Rectangle and the Java AWT class has the fully-qualified name java.awt.Rectangle .    The Default Package  Even if you don't specify a package name for your program, Java puts your classes into a package. The default package is the one named \"\" , in other words, the default package has no name. All the classes that we have created thus far have no package statement, therefore have been placed into the default package automatically.    Subpackages and Package Organization  It is a best practice to organize your source code files into a subfolder structure that matches the names and structure of your package organization scheme. Package names are usually chosen to be lowercase, in order to distinguish them from class names, which usually start with a capital letter.  We often see these best practices at play when working with commercial software. Companies that produce Java packages tend to use the reversed components of their Internet domain name as their package structure. This helps to make their packages globally unique because only they own their domain name. If you started a consulting company named \"Java Maniac\" and purchased the domain name javamaniac.com , you might organize your Java classes in a com.javamaniac package scheme, and arrange your source code in a \"com\/javamaniac\" subfolder structure. Note how this specifies both the folder named \"com\" and a further subfolder named \"javamaniac\" to contain your types. This avoids the name conflict that would occur with types from the Java Charmer company with the domain name \"javacharmer.com.\" They organize their classes in the \"com\/javacharmer\" subfolder structure. When you add the statement import com.javamaniac.*; to your program, the Java compiler will look in \"com\/javamaniac\" to find these compiled files and check that the way you use them match their definitions.  Let's consider another example. Let's assume you have defined two classes named \"Hammer\" and \"Drill\" and declared them to be grouped in a package named \"toolbox.\" You could define the two classes as in and , and place them in a subfolder of your project named \"toolbox.\" Let's assume that your main driver class is named \"Construction\" which is added to the folder above your \"toolbox\" subfolder (See ).   toolbox\/Hammer.java   \/\/ Hammer.java package toolbox; public class Hammer { \/\/ Hammer fields private String sound; \/\/ Hammer Constructor public Hammer() { this.sound = \"Bang!\"; } \/\/ String representation of a Hammer public String toString() { return this.sound; } }     toolbox\/Drill.java   \/\/ Drill.java package toolbox; public class Drill { \/\/ Drill fields private String sound; \/\/ Drill Constructor public Drill() { this.sound = \"Bzzz!\"; } \/\/ String representation of a Drill public String toString() { return this.sound; } }     Construction.java   \/\/ Construction.java public class Construction { public static void main(String[] args) { \/\/ Get tools from the toolbox toolbox.Hammer tool1 = new toolbox.Hammer(); toolbox.Drill tool2 = new toolbox.Drill(); \/\/ Sounds of the construction project. System.out.println( tool1 + \" \" + tool2 );; } }    To compile this multi-file program we can use commands like those in the following shell session. Note how we are not required to specify all files in the \"toolbox\" subfolder by name. We can make use of the wildcard character ( * ) as in toolbox\/*.java , which will compile all files in the \"toolbox\" subfolder with any name that has a .java extension. As expected, the output from running the Construction driver class is the sounds of all tools used on the construction project.   javac Construction.java toolbox\/*.java java Construction  Bang! Bzzz!   Because all of our toolbox classes are in the \"toolbox\" package, we accessed them using the package name. For example, see the toolbox. prefix in the following two lines from .   toolbox.Hammer tool1 = new toolbox.Hammer(); toolbox.Drill tool2 = new toolbox.Drill();   A more convenient option, especially when we intend to use most or all classes from a package, is to use the import statement and a the wildcard character ( * ) to bring all the type names into the current package, which we have seen many times when importing DoodlePad classes with import doodlepad.* . is an alternative implementation if the Construction driver class that imports all tool classes from the \"toolbox\" package at the top of the program file. This allows us to avoid the repeated explicit scoping of classes to the toolbox package. After an import , the classes are now available locally.   Construction.java   \/\/ Construction.java import toolbox.*; \/\/ Import all tools public class Construction { public static void main(String[] args) { \/\/ Get tools from the toolbox Hammer tool1 = new Hammer(); \/\/ No package needed Drill tool2 = new Drill(); \/\/ Sounds of the construction project. System.out.println( tool1 + \" \" + tool2 );; } }    Packages are extremely convenient for organizing the classes and other types in your larger projects and for avoiding name conflicts. Some developers use packages as a matter of course, and some programming editors will create them for you. We use packages only for larger examples. Otherwise, we rely on the default package in order to make our examples more readable and less cluttered.    Core Library Packages  It is no surprise that the Java core library organizes its types into packages. Most core library types are located in the java. top level package, but the core library organization changes on occasion and depends on your version of Java. It is best to refer to the Java API documentation for your to double-check.  Under the java. package in the core library, types are further divided into subpackages. For example, we've used many classes that are found in the java.util. subpackage, such as java.util.Random and java.util.Scanner . When we start working with files we'll use several classes in the java.io. subpackage. Its worth noting that all types in the java.lang. subpackage are imported automatically. That is were we find classes like String, and why we do not need to import java.lang.String in order to use the class.    Package Scope  It should be obvious by now that packages (and subpackages) form a space of names that are grouped together ( namespace ). A Java scope provides this namespace for us. We now have the complete set of Java scope definitions within which names can exist. These also let us know when we may have to use explicit scoping to reach a name defined in a different scope, or how to address a type in a different package when importing.   package scope (limited to a Java package).  class scope (accessible throughout a class), and  object (instance) scope (limited to a specific object),  method scope (limited to a specific method),  block scope (limited to a specific block of code),   Recall the Most Narrow Scope Feasible principle. We have learned how packages help us avoid name conflicts by grouping types in more narrow namespaces provided by a package scope.   "
},
{
  "id": "p-767",
  "level": "2",
  "url": "section-cl-packages.html#p-767",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "package "
},
{
  "id": "listing-cl-hammer",
  "level": "2",
  "url": "section-cl-packages.html#listing-cl-hammer",
  "type": "Listing",
  "number": "9.7.1",
  "title": "",
  "body": " toolbox\/Hammer.java   \/\/ Hammer.java package toolbox; public class Hammer { \/\/ Hammer fields private String sound; \/\/ Hammer Constructor public Hammer() { this.sound = \"Bang!\"; } \/\/ String representation of a Hammer public String toString() { return this.sound; } }   "
},
{
  "id": "listing-cl-drill",
  "level": "2",
  "url": "section-cl-packages.html#listing-cl-drill",
  "type": "Listing",
  "number": "9.7.2",
  "title": "",
  "body": " toolbox\/Drill.java   \/\/ Drill.java package toolbox; public class Drill { \/\/ Drill fields private String sound; \/\/ Drill Constructor public Drill() { this.sound = \"Bzzz!\"; } \/\/ String representation of a Drill public String toString() { return this.sound; } }   "
},
{
  "id": "listing-cl-construction1",
  "level": "2",
  "url": "section-cl-packages.html#listing-cl-construction1",
  "type": "Listing",
  "number": "9.7.3",
  "title": "",
  "body": " Construction.java   \/\/ Construction.java public class Construction { public static void main(String[] args) { \/\/ Get tools from the toolbox toolbox.Hammer tool1 = new toolbox.Hammer(); toolbox.Drill tool2 = new toolbox.Drill(); \/\/ Sounds of the construction project. System.out.println( tool1 + \" \" + tool2 );; } }   "
},
{
  "id": "listing-cl-construction2",
  "level": "2",
  "url": "section-cl-packages.html#listing-cl-construction2",
  "type": "Listing",
  "number": "9.7.4",
  "title": "",
  "body": " Construction.java   \/\/ Construction.java import toolbox.*; \/\/ Import all tools public class Construction { public static void main(String[] args) { \/\/ Get tools from the toolbox Hammer tool1 = new Hammer(); \/\/ No package needed Drill tool2 = new Drill(); \/\/ Sounds of the construction project. System.out.println( tool1 + \" \" + tool2 );; } }   "
},
{
  "id": "p-781",
  "level": "2",
  "url": "section-cl-packages.html#p-781",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "namespace "
},
{
  "id": "section-cl-concepts",
  "level": "1",
  "url": "section-cl-concepts.html",
  "type": "Section",
  "number": "9.8",
  "title": "Key Concepts",
  "body": " Key Concepts   The driver class (aka driver program) is the class in a larger program containing the public static void main(String[] args) method designed to start the program.  A scope is an enclosing context in a program where variables and expressions are associated.  A member is a term used for all variables and methods defined within the scope of a class or object.  When using the static keyword to declare a variable or method, that member is defined in the class scope . Absense of static in a variable or method declaration means that member belongs to the object scope .  The scope of a method or instance variable name may be specified by preceding it with the name of the class or object and connected by a dot. This is called dot-notation .  It may be necessary to specify the scope of a static member with the class name in which it was defined in order to access the proper member.  Regardless of the number of object instances created, there is only one class and therefore one set of static class members.  Every object instantiated using a constructor will get its own members declared without using the static keyword.  A custom class constructor defines the code executed when the new keyword is used with a constructor to create a new instance of the class.  A constructor must have the same name as the class, have no return type, not even void, and no return statement.  The this keyword always resolves to a reference to the current object.  You may invoke one constructor from another constructor in the same class using the this keyword followed by the constructor argument list.  The visibility of methods and instance variables encapsulated by and object are controlled using certain keywords, including public and private .  The combination of a method name, parameters and parameter types are referred to as a method's signature .  Multiple methods having the same name may be defined within a class, provided their signatures are distinct. This is called overloading a method.  Instance variables and methods declared with private visibility are accessible only from code that is within the scope of an object.  A common Java best practice is to declare private all object instance variables, and to control access to these variables using methods.  Methods that control access to private instance variables are called accessor methods or \"getters\".  Accessor methods often are named using camel case, and formed by adding get to the front of the instance variable name being accessed. For example getAge() .  Methods that modify private instance variables are called mutator methods or \"setters\".  Mutator methods often are named using camel case, and formed by adding set to the front of the instance variable name beginning changed. For example setAge(double age) .  Objects should be designed to be self-governing . That is, an object should contain all the code and internal variables necessary to manage its instance variables. This is a core concept of object-oriented programming called encapsulation .  In addition to class scope and object scope, block scope is an enclosing context for a code block, such as when defining a code block that makes up an if-statement or for-statement.  Scopes are nested. Block scopes are nested within method scopes, and method scopes are nested within an object or class scope.  Shadowing occurs when variables defined in an inner scope have names identical to variables defined in an outer scope.  To access a shadowed variable, it is necessary to set the scope of the variable explicitly using dot-notation and the this keyword or the class name.  When choosing a scope to declare a variable, always use the most narrow scope feasible. This avoids program bugs that emerge when a variable value set by one method has an unexpected impact on the execution of another method.  The scope within which a variable is declared governs its lifetime. For example, when declaring a variable within a method, it comes into existence upon declaration and goes out of existence when the method scope exits. When declaring an instance variable in an object, it comes into existence when the object is instantiated and goes out of existence when the object is garbage collected.  Anonymous objects are objects created temporarily but never assigned to a variable. They occur when chaining methods, or when invoking a constructor to set a parameter value as part of calling a method.  The toString() method of an object is a special method used to return a String representation of an object. toString() is invoked by Java's print methods such as print(…) and println(…) , and it is the String representation that is printed to the terminal.   "
},
{
  "id": "section-cl-exercises",
  "level": "1",
  "url": "section-cl-exercises.html",
  "type": "Section",
  "number": "9.9",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-in-dp-design",
  "level": "1",
  "url": "section-in-dp-design.html",
  "type": "Section",
  "number": "10.1",
  "title": "DoodlePad Design",
  "body": " DoodlePad Design   The DoodlePad object graphics library includes a collection of classes that encapsulate graphic objects, including a series of shape classes. Rectangle, Oval, RoundRect, Text, Polygon, etc. are among the shape classes in the DoodlePad package.  Think about how you might design these shape classes. The obvious difference is the unique visual representation of each. Class implementations must include a method capable of drawing its unique and recognizable graphic, with adjustments and customizations defined by other object instance variables and their values.  What are the other features of shape classes that must be encapsulated? Every shape needs an (x, y) location and the dimensions (width, height). In DoodlePad we decided that these parameters would describe a shape's bounding box and that the shape would be drawn within that bounding box. Shape location is the location of the upper left corner of the bounding box and shape dimensions match the dimensions of the bounding box. These four instance variables (x, y, width, height) are common to all shape classes. Does that mean we must repeat these instance variable declarations in all shape classes?  Other shape features include fill color, stroke color, stroke width, whether the shape may be interactively selected or dragged, the text drawn at its center as well as font family, font size, font style, text colors, transformation, etc. If you consider this list, each one of these features is shared by all shape classes. Does that mean we must declare every one of these instance variables in every class definition? That is quite a lot of code repetition, which, by now, should tell you that something is not quite right. All this code repetition multiplies the effort to maintain your code and increases the chances of making a mistake.  Of course, there is a good solution to this code repetition problem. Inheritance gives us a way to share a single instance variable declaration or method implementation with multiple classes.  DoodlePad graphic classes are organized in a hierarchy with a Shape class at its root. For your reference, illustrates this hierarchy. In addition to the Shape class and all its derived classes, DoodlePad implements several additional classes, including Pad, Timer and Sound. You can find details for all classes in the library's JavaDocs .   DoodlePad Class Hierarchy     "
},
{
  "id": "p-788",
  "level": "2",
  "url": "section-in-dp-design.html#p-788",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Inheritance "
},
{
  "id": "figure-in-doodlepad-hierarchy",
  "level": "2",
  "url": "section-in-dp-design.html#figure-in-doodlepad-hierarchy",
  "type": "Figure",
  "number": "10.1.1",
  "title": "",
  "body": " DoodlePad Class Hierarchy   "
},
{
  "id": "section-in-basics",
  "level": "1",
  "url": "section-in-basics.html",
  "type": "Section",
  "number": "10.2",
  "title": "Basics of Inheritance",
  "body": " Basics of Inheritance    Inheritance is a relationship that we can established between classes. When one class inherits another, the inherited class can be thought of as providing a kind of default implementation for the class that inherits it. Inherited classes are often referred to a base classes or superclasses and inheriting classes are called derived classes or subclasses . We'll use the former term. In Java's implementation of inheritance, a base class may be related to one or more derived class , but a derived class may inherit at most one base class .  When one class inherits another, if a method is invoked or an instance variable accessed on the derived class, but the derived class does not implement it, Java will search for the missing member in the inherited class. This will continue if the base class inherits another class, and so on up the inheritance hierarchy. Inheritance is a way to share a single implementation of certain methods and instance variables in one class with many other classes.    Benefits of Inheritance  First and foremost, inheritance solves the code duplication problem. If a method in a base class needs updating, any changes made are inherited automatically by all derived classes, no extra effort required. This reduces the chance for errors caused by neglecting to make necessary changes to all implementations of a shared method. Of course, if an error is made in the base class method, all derived classes inherit the same broken method. But fixing that error once also means that the corrected method is fixed everywhere.  Another way to think about a base class is as a default implementation of some group of classes; it is a head start when implementing another form of a class within a related group. When a new class inherits a base class, it starts with all the shared members of that base class, automatically. The only requirement for implementing that new derived class is to implement the members that make the derived class different than the base class. Typically, this requires much less work than starting over with an empty class.  In terms of the DoodlePad shape classes, we recognise that there was quite a lot of shared behavior, including position, size, colors, text, etc. The one behavior that was different in each shape class was its graphical representation. It won't surprize you that DoodlePad shape classes benefit from inheritance.    Using Inheritance  To establish an inheritance relationship between a derived class and a base class, add the extends keyword and the base class name to the right of the first line in a derived class declaration. For example, in DoodlePad, all shape classes inherit a base class named Shape , so each shape class starts with a declaration like the following. Have a look at any one of the shape classes in the DoodlePad source code .   public class Rectangle extends Shape { …   This one addition to a derived class declaration has the potential to add quite a number of default behaviors, giving you as the developer a significant head start to completing your new class implementation.    A Better LED Class  Let's revisit our LED class from . Rather than encapsulate an Oval object, let's set up our LED class to extend Oval so that it starts with all Oval behavior by default. This means that we no longer need to instantiate and manage an Oval class in LED. The LED class now has access to all the behavior of an Oval class through inheritance, and so LED behaves like an Oval. One ramification of this is that, instead of relaying method invocations to an encapsulated Oval object (e.g. setFillColor(…)) the LED class itself has access to these methods and can invoke them directly. Even though LED does not implement Oval methods, inheritance takes care of finding suitable implementations automatically in the Oval base class.   LED.java (version 6)   \/\/ LED.java (version 6) \/\/ A simple LED display class that extends Oval import doodlepad.*; public class LED extends Oval { \/\/ Extend Oval private boolean on; \/\/ Tracks state of LED object private LEDColor color; \/\/ LED Color \/\/ Overloaded constructor defaults color to RED public LED(double x, double y) { this(x, y, LEDColor.RED); \/\/ Default to RED } public LED(double x, double y, LEDColor color) { super(x, y, 30, 30); \/\/ Invoke base class constructor this.setColor(color); \/\/ Set LED on color this.turnOff(); \/\/ Init state } \/\/ Turn on LED public void turnOn() { this.on = true; switch (this.color) { case RED: this.setFillColor(255, 0, 0); break; case GREEN: this.setFillColor(0, 255, 0); break; case BLUE: this.setFillColor(0, 0, 255); break; case YELLOW: this.setFillColor(255, 255, 0); break; } } \/\/ Turn off LED public void turnOff() { this.on = false; this.setFillColor(100, 100, 100); } \/\/ Return state of LED public boolean isOn() { return this.on; } \/\/ Set LED Color when illuminated public void setColor(LEDColor color) { this.color = color; } \/\/ Get LED Color when illuminated public LEDColor getColor() { return this.color; } \/\/ --- Test LED public static void main(String[] args) { \/\/ Create LED objects LED led1 = new LED(100, 100); LED led2 = new LED(200, 100); \/\/ Change LED colors led1.setColor(LEDColor.BLUE); led2.setColor(LEDColor.YELLOW); \/\/ Turn on both LED objects led1.turnOn(); led2.turnOn(); System.out.println( \"LED1 is\" + (led1.isOn() ? \"\" : \" not\") + \" on\"); } } \/\/ Enum for LED Color constants enum LEDColor { RED, GREEN, BLUE, YELLOW };    Let's compare with The first thing to notice is that the LED class no longer declares a private light instance variable. This is not necessary because the LED itself is a kind of Oval, so no additional Oval object is required. Nevertheless, initialization is required. Because the LED is a kind of Oval, it must perform whatever initialization that an Oval requires, which is implemented by the Oval constructor. To invoke the constructor, we can use the super keyword. In the second LED constructor, in place of the line that initialized the light instance variable, we invoke the base class constructor using the line super(x, y, 30, 30) . This relays the (x, y) LED constructor parameter values to the base class constructor, and fixes the LED size to 30×30.  Note how the super keyword can invoke an alternative constructor in a base class in a manner directly analogous to the way we used the this keyword to invoke an overloaded alternative constructor in the current class. Similarly, we are able to use the super keyword to access the scope of the base class directly, in a manner directly analogous to the way we used the this keyword to access the current object scope. The this and super keywords should occupy adjacent places in your Java memory bank.  With the removal of the light instance variable, we must replacement of all references to this.light . For example, in the .turnOn() and .turnOff() methods, statements like this.light.setFillColor(…) are now shortened to this.setFillColor(…) . The LED class does not implement the setFillColor(…) method directly, but LED extends Oval, and Oval provides access to the method through inheritance.  Other than these changes, the remainder of the LED class remains unchanged. The outpur from this version of LED is identical to . Using inheritance we were able to remove several references from the derived class because we can now depend upon inheriting these from the base class. In fact, we gained a huge amount of behavior from the base class, which can be applied to expanding LED by invoking directly, without the need to relay to an encpasulated Oval object.    Blocking Inheritance  As a final note, you may decide that you do not want a class that you define to be derived. You can accomplish this by adding the final keyword to your class declaration.   public final class MyFinalClass( …   There may be something quirky about your class implementation that prevents a derived class from working correctly. Adding the final keyword will tell the Java compiler to prevent new classes from extending the final base class.   "
},
{
  "id": "p-790",
  "level": "2",
  "url": "section-in-basics.html#p-790",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Inheritance base classes superclasses derived classes subclasses "
},
{
  "id": "p-795",
  "level": "2",
  "url": "section-in-basics.html#p-795",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extends Shape "
},
{
  "id": "listing-in-led6",
  "level": "2",
  "url": "section-in-basics.html#listing-in-led6",
  "type": "Listing",
  "number": "10.2.1",
  "title": "",
  "body": " LED.java (version 6)   \/\/ LED.java (version 6) \/\/ A simple LED display class that extends Oval import doodlepad.*; public class LED extends Oval { \/\/ Extend Oval private boolean on; \/\/ Tracks state of LED object private LEDColor color; \/\/ LED Color \/\/ Overloaded constructor defaults color to RED public LED(double x, double y) { this(x, y, LEDColor.RED); \/\/ Default to RED } public LED(double x, double y, LEDColor color) { super(x, y, 30, 30); \/\/ Invoke base class constructor this.setColor(color); \/\/ Set LED on color this.turnOff(); \/\/ Init state } \/\/ Turn on LED public void turnOn() { this.on = true; switch (this.color) { case RED: this.setFillColor(255, 0, 0); break; case GREEN: this.setFillColor(0, 255, 0); break; case BLUE: this.setFillColor(0, 0, 255); break; case YELLOW: this.setFillColor(255, 255, 0); break; } } \/\/ Turn off LED public void turnOff() { this.on = false; this.setFillColor(100, 100, 100); } \/\/ Return state of LED public boolean isOn() { return this.on; } \/\/ Set LED Color when illuminated public void setColor(LEDColor color) { this.color = color; } \/\/ Get LED Color when illuminated public LEDColor getColor() { return this.color; } \/\/ --- Test LED public static void main(String[] args) { \/\/ Create LED objects LED led1 = new LED(100, 100); LED led2 = new LED(200, 100); \/\/ Change LED colors led1.setColor(LEDColor.BLUE); led2.setColor(LEDColor.YELLOW); \/\/ Turn on both LED objects led1.turnOn(); led2.turnOn(); System.out.println( \"LED1 is\" + (led1.isOn() ? \"\" : \" not\") + \" on\"); } } \/\/ Enum for LED Color constants enum LEDColor { RED, GREEN, BLUE, YELLOW };   "
},
{
  "id": "section-in-overriding",
  "level": "1",
  "url": "section-in-overriding.html",
  "type": "Section",
  "number": "10.3",
  "title": "Method Overriding",
  "body": " Method Overriding   A method invoked on a derived class that does not implement the exact method signature, will cause Java to search for the method signature in the base class, and up the inheritance hierarchy. But, if a method with the signature is implemented in the dervied class, then that implementation will be invoked, even if the same method signature has been implemented in a base class. If a method in a dervied class has the same signature as one in its base class, we say that the derived class method overrides the one in the base class.    Applications of Method Overriding  It may be the case that a derived class shares many of the behaviors of a base class, but not all. The methods that differ may be reimplemented correctly in the derived class. Because the search for a particular method signature moves up an inheritance hierarchy, overriding a method in a derived class effectively replaces it.  In another scenario, a base class method may constitute part of what a derived class needs to be performed, but not all. In this case the derived class can override the base class method, and augment its behavior by invoking the base class method and adding to it. This could be as simple as logging the fact that the method was invoking overriding it with a derviced class method that invokes the base class method and adds a print statement.  In a third application, a derived class might override base class method as a way of stopping its execution, and simply returning. This might be used when using a derived class to mock the behavior of a base class during testing. If certain base class methods are expensive to execute, we can use a derived class to catch and surpress the execution of certain base class methods during testing, and then remove the derived class before final release.  Whether replacing , augmenting , or surpressing base class methods, method overriding is a powerful way to modify base class behavior.    Overriding Event Handler Methods  You are familiar with how DoodlePad's graphic objects can handle events such as a mouse click or key press. In we learned how to associate a method with an event by passing a method reference to a special method such as .setMousePressedHandler(…) . DoodlePad provides a second way to handle events. When extending a shape or the Pad class, you may override certain inherited methods as a way to handle associated events rather than assigning a method reference. This approach can be more convenient and intuitive to implement.  Let's do a better job at implementing our ToggleButton class, which we first created in . Now that we're familiar with what we can do using inheritance, let's reconsider ToggleButton's implementation. Refer to for all the details of the updated class.   ToggleButton.java (version 2)   \/\/ ToggleButton.java import doodlepad.*; \/\/ ToggleButton class extends RoundRect public class ToggleButton extends RoundRect { private boolean on; \/\/ Button state \/\/ Constructor public ToggleButton(double x, double y, double w, double h) { super(x, y, w, h, 20, 20); this.on = false; \/\/ Starts off this.setFillColor(200); this.setText(\"Off\"); } \/\/ Handle button click event using inheritance @Override public void onMousePressed(double x, double y, int btn) { super.onMousePressed(x, y, btn); \/\/ invoke default behavior this.toggle(); \/\/ Toggle button } \/\/ Toggle button public void toggle() { this.on = !this.on; \/\/ Flip state if (this.on) { \/\/ Update graphic this.setFillColor(0, 255, 0); this.setText(\"On\"); } else { this.setFillColor(200); this.setText(\"Off\"); } } \/\/ Test the class public static void main(String[] args) { \/\/ Create a new ToggleButton ToggleButton myButton = new ToggleButton(100, 100, 75, 50); } }    This new implementation of ToggleButton takes advantage of inheritance by extending the RoundRect class instead of managing an internal RoundRect object. With this update we can now delete the internal RoundRect object instance variable used in . The new constructor was modified by first removing the statement to init the shpButton instance variable and replace it with a statement that invokes the base class constructor using super(…) . The new constructor was expanded to take the button's location and size. These parameter values are relayed to the base class constructor as parameters passed to super(…) . The former constructor was modified additionally by removing the setMousePressedHandler(…) method entirely. We will use method overriding to handle the mouse-pressed event.  The former onPressed(…) event handler method is renamed and its parameters were changed to match the signature onMousePressed(double x, double y, int btn) exactly. This is the signature of the base class method, and must be matched in order to replace it with the derived class method. We add the Java compiler directive @Override before the method as a precaution. This directive tells the compiler that we intend to override a base class method with the onMousePressed(…) method declaration and to please check it. If the method does not override a base class method, then please throw a compiler error. Using the @Override directive is highly recommended. Without it, a method that does not match a base class method would compile just fine and we'd never know that we made a mistake. Nothing else is required to override the base class method except to define a derived class method with the exact same signature (method name, parameter types, and order).  Note that we added a line to the new onMousePressed(…) method. We invoked the base class method with the same signature. This means we are augmenting the base class method with this override rather than replacing it. Overridable shape event handler methods perform core behaviors that make the event system work properly. Because we are augmenting the base class method and not simply replacing it, we want to ensure that all the default behavior is executed. We only want to add a toggle() method invocation. Invoking the base class method using super and relaying parameter values, ensures that all default behavior will be executed as well. See for examples if the new program.   ToggleButton.java (version 2). Off and On.        That's pretty good. It is a small upgrade to the previous version, but was it worth the effort? Looking at , it seems that the button text is a bit small. We'd like to increase the font size. No problem! Because the button is really just an extension of a RoundRect, it inherics all of the RoundRect behavior, including the ability to adjust font size. We can simply add the appropriate methods to our main(…) method, as follows.    public static void main(String[] args) { \/\/ Create a new ToggleButton ToggleButton myButton = new ToggleButton(100, 100, 75, 50); myButton.setFontSize(24); \/\/ Change font size and style myButton.setFontStyle(1); }    The ToggleButton does not implement setFontSize(…) and setFontStyle(…) , but it does inherit these methods from its base class. Modifying main(…) and rerunning our program, we see the update output in . This would have taken some work ahd we stuck with our old implementation. We would have had to implement all new methods that modified the encapsulated RoundRect. With inheritance, we get the behavior automatically. No modifications required.   ToggleButton.java (version 3). Off and On.        In addition to overriding the onMousePressed() method, classes that extend Shape implement several additional methods that may be overridden to handle mouse-related events. See for a list and more detail.   "
},
{
  "id": "p-804",
  "level": "2",
  "url": "section-in-overriding.html#p-804",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "overrides "
},
{
  "id": "listing-in-togglebutton2",
  "level": "2",
  "url": "section-in-overriding.html#listing-in-togglebutton2",
  "type": "Listing",
  "number": "10.3.1",
  "title": "",
  "body": " ToggleButton.java (version 2)   \/\/ ToggleButton.java import doodlepad.*; \/\/ ToggleButton class extends RoundRect public class ToggleButton extends RoundRect { private boolean on; \/\/ Button state \/\/ Constructor public ToggleButton(double x, double y, double w, double h) { super(x, y, w, h, 20, 20); this.on = false; \/\/ Starts off this.setFillColor(200); this.setText(\"Off\"); } \/\/ Handle button click event using inheritance @Override public void onMousePressed(double x, double y, int btn) { super.onMousePressed(x, y, btn); \/\/ invoke default behavior this.toggle(); \/\/ Toggle button } \/\/ Toggle button public void toggle() { this.on = !this.on; \/\/ Flip state if (this.on) { \/\/ Update graphic this.setFillColor(0, 255, 0); this.setText(\"On\"); } else { this.setFillColor(200); this.setText(\"Off\"); } } \/\/ Test the class public static void main(String[] args) { \/\/ Create a new ToggleButton ToggleButton myButton = new ToggleButton(100, 100, 75, 50); } }   "
},
{
  "id": "figure-in-togglebutton2",
  "level": "2",
  "url": "section-in-overriding.html#figure-in-togglebutton2",
  "type": "Figure",
  "number": "10.3.2",
  "title": "",
  "body": " ToggleButton.java (version 2). Off and On.       "
},
{
  "id": "listing-in-togglebutton3",
  "level": "2",
  "url": "section-in-overriding.html#listing-in-togglebutton3",
  "type": "Listing",
  "number": "10.3.3",
  "title": "",
  "body": "  public static void main(String[] args) { \/\/ Create a new ToggleButton ToggleButton myButton = new ToggleButton(100, 100, 75, 50); myButton.setFontSize(24); \/\/ Change font size and style myButton.setFontStyle(1); }   "
},
{
  "id": "figure-in-togglebutton3",
  "level": "2",
  "url": "section-in-overriding.html#figure-in-togglebutton3",
  "type": "Figure",
  "number": "10.3.4",
  "title": "",
  "body": " ToggleButton.java (version 3). Off and On.       "
},
{
  "id": "section-in-polymorph",
  "level": "1",
  "url": "section-in-polymorph.html",
  "type": "Section",
  "number": "10.4",
  "title": "Subtype Polymorphism",
  "body": " Subtype Polymorphism   Inheritance is much more than a way to set up default behavior of a new class. In a very real sense, an object with the type of a derived class is also a kind of base class. One indication of this is that we can assign an object of type derived class to a variable of type base class . This is an outcome of subtype polymorphism , another feature of inheritance. Let's explore the ramifications of this benefit of inheritance.    The Many Forms of Derived Classes  One important ramification of subtype polymorphism is that a variable with a type of a base class, may reference objects with the type of one of its derived classes . After all, ifaa derived class is also a kind of base class, then such an assignment should be legal.  Consider our last ToggleButton class example in . Because this class extends RoundRect, due to subtype polymorphism , ToggleButton is also a kind of RoundRect as well as a kind of Shape. As a result, a ToggleButton object may be assigned to a variable of type RoundRect or Shape.  How is this useful?  Imagine having a large set of Shape objects of various types. Let's say we have a program that uses Rectangles, Ovals, RoundRects, Polygons, Texts, etc. We need to track and manage all of these Shapes. It would be terribly inconvenient to be forced to declare an ArrayList or other Collection for each type of Shape. Fortunately, this is not necessary. Because every one of these classes extends the Shape base class, we can store all objects in an ArrayList<Shape>. Our ability to do this is a direct result of polymorhism, which simplifies our job significantly.  One of the limitiations to note is that the Java compiler checks that every method invocation on a class is implemented by the declared class type. This means that while we can assign a ToggleButton to a Shape variable, we cannot invoke its toggle() method. The compiler will stop with an error telling us that the Shape does not implement toggle() . The compiler does run a program and so it cannot know that our shp variable actually references a ToggleButton object, so the program will run without an error. See the test program in and the attempt to compile it that follows.   TestToggle.java (version 1)   \/\/ TestToggle.java (version 1) import doodlepad.*; public class TestToggle { public static void main(String[] args) { \/\/ Allowed by dubtype polymorphism Shape shp = new ToggleButton(100, 100, 100, 50); \/\/ Forbidden by the compiler shp.toggle(); } }     javac -cp doodlepad.jar ToggleButton.java TestToggle.java  TestToggle.java:7: error: cannot find symbol shp.toggle(); ^ symbol: method toggle() location: variable shp of type Shape 1 error   Fortunately, we can avoid this problem by forcing the type of shp back to ToggleButton before attempting to invoke its toggle() method. This change of type is accomplished using the cast operator (…) , in a manner identical to the way we performed widening conversions with primitive types. Naturally, casting a type from a base class to one of its derived classes is legal. See for the corrected example that compiles and runs without error.   TestToggle.java (version 2)   \/\/ TestToggle.java import doodlepad.*; public class TestToggle { public static void main(String[] args) { \/\/ Allowed by subtype polymorphism Shape shp = new ToggleButton(100, 100, 100, 50); \/\/ Cast before invoking to make the compiler happy ToggleButton btn = (ToggleButton) shp; btn.toggle(); \/\/ Forbidden by the compiler \/\/shp.toggle(); } }     Let's return to our method-reference style of handling events for a moment and take another look at the method signature of event handler methods assigned using method references.  The original implementation of ToggleButton used this style of event handling. It defined the onPressed(…) method and then configured it to handle mouse-pressed events using the setMousePressedHandler(…) method. This onPressed(…) method from is repeated below for convenience.   \/\/ Handle mouse-pressed event private void onPressed(Shape shp, double x, double y, int button) { toggle(); }   The signature of methods capable of handling events is required to be (Shape, double, double, int). We can now explain why that first parameter can be of type Shape and is not required to be of type ToggleButton, even though we know that a reference to the pressed ToggleButton is passed to this method. The short answer is, once again, subtype polymorphism . Because ToggleButton extends RoundRect which extends Shape, we can receive the ToggleButton object reference as a Shape variable. If we really needed it to be of type ToggleButton in order to invoke one of its custom methods, we could simply cast it to a ToggleButton first. Without the flexibility that we get from subtype polymorphism, this type of event handling would be more difficult to implement.    Dynamic binding  When a derived class overrides a base class method signature, and an instance of the derived class is assigned to a base class typed variable, there is no reason to cast the base class variable to the derived class type before invoking the method. The method signature is implemented in the base class and so the compiler finds it and compiles without error. But this begs the question, which method implementation is invoked? Is it the base class method implementation because the variable has type base class, or is it the derived class implementation because the variable references a derived class object? Let's create a small test program and find out.   defines two classes, Base and Derived. Derived extends Base. (Recall that we can define multiple classes in one Java file provided only one is declared public.) Both have a private instance variable named name . The Base class constructor initializes name to \"Base Class\" and the Derived class constructor initialize name to \"Derived Class. Both implement a whodunnit() method. The Derived class version of whodunnit() overrides the Base class version. Both implementations return the name , which will be the name of the \"guilty party.\" Base implements a main(…) method that declares a variable named guilty which has type Base and initializes it to an object of type Derived. It then invokes invokes the whodunnit() method on guilty to find out, whodunnit .   Base.java with Derived   \/\/ Base.java \/\/ Demonstration of dynamic binding \/\/ Base class public class Base { \/\/ Instance variable private String name; \/\/ Constructor public Base() { this.name = \"Base Class\"; } \/\/ Method public String whodunnit() { return this.name; } \/\/ Run a test public static void main(String[] args) { \/\/ Declare a Base type variable and \/\/ assign to a Derived type object Base guilty = new Derived(); \/\/ Print the guilty party's name System.out.println( guilty.whodunnit() ); } } \/\/ Derived class class Derived extends Base { \/\/ Instance variable private String name; \/\/ Constructor public Derived() { this.name = \"Derived Class\"; } \/\/ Overridden Method public String whodunnit() { return this.name; } }     javac Base.java java Base  Derived Class   J'Accuse! The guilty party is ... Derived . What does this mean? Even though the variable guilty has type Base, it references an object of type Derived, and so it invokes the Derived class implementation of whodunnit() . This demonstrates dynamic binding in action.   Definition: Dynamic Binding  It is not the variable type that determines the method invoked; it is the type of the referenced object. The method to invoke is selected dynamically as the program runs. It is not selected by the compiler.   Does this present a problem for us? If we have a variable of type Base, but it actually references an object of type Derived, how can we know this? In one sense, we shouldn't need this information. The beauty of subtype polymorphism is that it doesn't matter. From the perspective of code with a Base-typed variable, the object is a Base class and should be treated as such. Nevertheless, if we really need to know, Java gives us instanceof .  The instanceof operator is a binary infix operator that evaluates to true if the left operand, and object, is a type of the right operand, a class. If we really wanted to know that guilty was an instance of Derived , rather than invoking a method that reveals the secret, we could asked the object directly using an expression like the first in the following code snippet, which prints true . More than only the instantiated type, instanceof will also test if an object has a class in its inheritance hierarchy. The second expression in the following code snippet also prints true because guilty inherits Base.   instanceof demonstration   System.out.println( guilty instanceof Derived ); System.out.println( guilty instanceof Base );      Protected Visibility  Inheritance has its privileges. We saw several examples in which a derived class has access to all base class behavior merely because it extends the base class. Recall how we were able to invoke setFontSize(…) and setFontStyle(…) on the ToggleButton class even when these methods were not implemented (See ). You may not have realized that this is possible only because the base class methods were declared public. Well, this doesn't seem like much of an advantage, does it? After all, public methods are accessible anywhere within a program. By comparison, private methods are accessible only from within the implementing class, and not from a derived class. illustrates this situation.   Public and Private Visibility     Derived class objects should have special access to base class members. It should be possible for a derived object to access certain base class members that unrelated objects cannot. Java calls this new level of visibility protected , which is illustrated in . When a base class member is declared as protected instead of public or private , objects of type base class as well as objects of type derived class may access the base class member.    Protected Visibility     Protected visibility helps us to eliminate the need to duplicate members in a derived class that are defined already in a base class. In both Base and Derived declared the private instance variable name . This is unnecessary duplication. In we change the visibility of the derived class name instance variable to protected , which makes the variable visible to the derived class as well. With this enhanced level of visibility, we can not remove the Derived instance variable name altogether, because Derived can use the one declared in Base. This change in design is more succinct and reflective of the implications of inheritance. If we compile and run this updated program, the outcome is unchanged.   Base.java with Derived and protected   \/\/ Base.java \/\/ Demonstration of dynamic binding \/\/ Base class public class Base { \/\/ Instance variable \/\/ private String name; protected String name; \/\/ Updated visibility \/\/ Constructor public Base() { this.name = \"Base Class\"; } \/\/ Method public String whodunnit() { return this.name; } \/\/ Run a test public static void main(String[] args) { \/\/ Declare a Base type variable and \/\/ assign to a Derived type object Base guilty = new Derived(); \/\/ Print the guilty party's name System.out.println( guilty.whodunnit() ); } } \/\/ Derived class class Derived extends Base { \/\/ Instance variable \/\/ private String name; \/\/ Removed \/\/ Constructor public Derived() { this.name = \"Derived Class\"; } \/\/ Overridden Method public String whodunnit() { return this.name; } }     javac Base.java java Base  Derived Class     Summary of Scope and Visibility   Let's investigate how our three visibility levels (private, public, and protected) impact our ability to access members from different scopes (Class\/Object, Package, Subclass, World). summarizes the impact.   Access Levels    Visibility Modifier  Class\/Object  Package  Subclass  World    public  Yes  Yes  Yes  Yes    protected  Yes  Yes  Yes  No    no modifier  Yes  Yes  No  No    private  Yes  No  No  No     Public members are accessible from anywhere in a program. Explicit scoping may be required, but access is granted. Protected members prohibit access from outside the implementing class other than derived classes, which can access protected members. Private member access is limited strictly to the implementing class and its objects. A fourth type of visibility occurs when no visibility modifier is specified. This type of visibility is called package-private because members with no visibility modifier are accessible from within the implementing class as well as from within its package, but not from no other scope.   "
},
{
  "id": "p-819",
  "level": "2",
  "url": "section-in-polymorph.html#p-819",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subtype polymorphism "
},
{
  "id": "p-820",
  "level": "2",
  "url": "section-in-polymorph.html#p-820",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subtype polymorphism "
},
{
  "id": "listing-in-test-togglebutton1",
  "level": "2",
  "url": "section-in-polymorph.html#listing-in-test-togglebutton1",
  "type": "Listing",
  "number": "10.4.1",
  "title": "",
  "body": " TestToggle.java (version 1)   \/\/ TestToggle.java (version 1) import doodlepad.*; public class TestToggle { public static void main(String[] args) { \/\/ Allowed by dubtype polymorphism Shape shp = new ToggleButton(100, 100, 100, 50); \/\/ Forbidden by the compiler shp.toggle(); } }   "
},
{
  "id": "listing-in-test-togglebutton2",
  "level": "2",
  "url": "section-in-polymorph.html#listing-in-test-togglebutton2",
  "type": "Listing",
  "number": "10.4.2",
  "title": "",
  "body": " TestToggle.java (version 2)   \/\/ TestToggle.java import doodlepad.*; public class TestToggle { public static void main(String[] args) { \/\/ Allowed by subtype polymorphism Shape shp = new ToggleButton(100, 100, 100, 50); \/\/ Cast before invoking to make the compiler happy ToggleButton btn = (ToggleButton) shp; btn.toggle(); \/\/ Forbidden by the compiler \/\/shp.toggle(); } }   "
},
{
  "id": "listing-in-base-dynamic-binding",
  "level": "2",
  "url": "section-in-polymorph.html#listing-in-base-dynamic-binding",
  "type": "Listing",
  "number": "10.4.3",
  "title": "",
  "body": " Base.java with Derived   \/\/ Base.java \/\/ Demonstration of dynamic binding \/\/ Base class public class Base { \/\/ Instance variable private String name; \/\/ Constructor public Base() { this.name = \"Base Class\"; } \/\/ Method public String whodunnit() { return this.name; } \/\/ Run a test public static void main(String[] args) { \/\/ Declare a Base type variable and \/\/ assign to a Derived type object Base guilty = new Derived(); \/\/ Print the guilty party's name System.out.println( guilty.whodunnit() ); } } \/\/ Derived class class Derived extends Base { \/\/ Instance variable private String name; \/\/ Constructor public Derived() { this.name = \"Derived Class\"; } \/\/ Overridden Method public String whodunnit() { return this.name; } }   "
},
{
  "id": "p-831",
  "level": "2",
  "url": "section-in-polymorph.html#p-831",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Derived "
},
{
  "id": "listing-in-instanceof1",
  "level": "2",
  "url": "section-in-polymorph.html#listing-in-instanceof1",
  "type": "Listing",
  "number": "10.4.4",
  "title": "",
  "body": " instanceof demonstration   System.out.println( guilty instanceof Derived ); System.out.println( guilty instanceof Base );   "
},
{
  "id": "figure-in-public-private",
  "level": "2",
  "url": "section-in-polymorph.html#figure-in-public-private",
  "type": "Figure",
  "number": "10.4.5",
  "title": "",
  "body": " Public and Private Visibility   "
},
{
  "id": "p-836",
  "level": "2",
  "url": "section-in-polymorph.html#p-836",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "protected protected public private "
},
{
  "id": "figure-in-protected",
  "level": "2",
  "url": "section-in-polymorph.html#figure-in-protected",
  "type": "Figure",
  "number": "10.4.6",
  "title": "",
  "body": " Protected Visibility   "
},
{
  "id": "listing-in-base-dynamic-binding2",
  "level": "2",
  "url": "section-in-polymorph.html#listing-in-base-dynamic-binding2",
  "type": "Listing",
  "number": "10.4.7",
  "title": "",
  "body": " Base.java with Derived and protected   \/\/ Base.java \/\/ Demonstration of dynamic binding \/\/ Base class public class Base { \/\/ Instance variable \/\/ private String name; protected String name; \/\/ Updated visibility \/\/ Constructor public Base() { this.name = \"Base Class\"; } \/\/ Method public String whodunnit() { return this.name; } \/\/ Run a test public static void main(String[] args) { \/\/ Declare a Base type variable and \/\/ assign to a Derived type object Base guilty = new Derived(); \/\/ Print the guilty party's name System.out.println( guilty.whodunnit() ); } } \/\/ Derived class class Derived extends Base { \/\/ Instance variable \/\/ private String name; \/\/ Removed \/\/ Constructor public Derived() { this.name = \"Derived Class\"; } \/\/ Overridden Method public String whodunnit() { return this.name; } }   "
},
{
  "id": "table-cl-access-levels",
  "level": "2",
  "url": "section-in-polymorph.html#table-cl-access-levels",
  "type": "Table",
  "number": "10.4.8",
  "title": "Access Levels",
  "body": " Access Levels    Visibility Modifier  Class\/Object  Package  Subclass  World    public  Yes  Yes  Yes  Yes    protected  Yes  Yes  Yes  No    no modifier  Yes  Yes  No  No    private  Yes  No  No  No    "
},
{
  "id": "p-840",
  "level": "2",
  "url": "section-in-polymorph.html#p-840",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "package-private "
},
{
  "id": "section-in-object-class",
  "level": "1",
  "url": "section-in-object-class.html",
  "type": "Section",
  "number": "10.5",
  "title": "The Object Class",
  "body": " The Object Class  The designers of the Java language went all in on object oriented programming, especially with respect to inheritance. It turns out that all Java classes take part in an inheritance relationship, except for one. Even if we do not declare a class as extending another class, Java automatically sets of an inheritance relationship between our class and the special predefined class named Object .  We can demonstrate this quickly by adding one more line to , that is, to test if guilty is also an instanceof Object. Modifying with the new main() method in and running, produces the output that follows the listing. An output of three true's tells us that guilty does derive Object, event though Base did not name Object in an extends. In fact all Java classes extend Object. Java handles this automatically.   instanceof demonstration   \/\/ Run a test public static void main(String[] args) { \/\/ Declare a Base type variable and \/\/ assign to a Derived type object Base guilty = new Derived(); \/\/ Check inheritance relationships System.out.println( guilty instanceof Derived ); System.out.println( guilty instanceof Base ); System.out.println( guilty instanceof Object ); }     javac Base.java java Base  true true true   As we know, inheritance provides derived classes with access to all base class members. So, what do we get from Object? After all, if all classes inherit Object, then any non-private members that we find will be available to all of our classes. A little sleuthing uncovers the OpenJDK source code for the Object class . The source code for two inherited Object class methods are of particular interest. These are toString() and equals(…) . Source code for both is given below in and .    Object class source code for toString()   public String toString() { return getClass().getName() + \"@\" + Integer.toHexString(hashCode()); }     Object class source code for equals(…)   public boolean equals(Object obj) { return (this == obj); }    Now we understand why printing an object that does not override toString() generates that curious output. The default implementation of toString() returns a String constructed by concatenating the class name of an object with \"@\" and the hexidecimal representation of its unique hash code.  Also important to appreciate is that the default equals() method inherited by all classes simply defers to testing for object identity using the == operator. This explains why the String class overrides equals() to test equality character-by-character (See ). In general we want Strings to be equal when their character sequence is equal, even when they are not identical.  "
},
{
  "id": "p-841",
  "level": "2",
  "url": "section-in-object-class.html#p-841",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Object "
},
{
  "id": "listing-in-instanceof2",
  "level": "2",
  "url": "section-in-object-class.html#listing-in-instanceof2",
  "type": "Listing",
  "number": "10.5.1",
  "title": "",
  "body": " instanceof demonstration   \/\/ Run a test public static void main(String[] args) { \/\/ Declare a Base type variable and \/\/ assign to a Derived type object Base guilty = new Derived(); \/\/ Check inheritance relationships System.out.println( guilty instanceof Derived ); System.out.println( guilty instanceof Base ); System.out.println( guilty instanceof Object ); }   "
},
{
  "id": "listing-in-object-tostring",
  "level": "2",
  "url": "section-in-object-class.html#listing-in-object-tostring",
  "type": "Listing",
  "number": "10.5.2",
  "title": "",
  "body": " Object class source code for toString()   public String toString() { return getClass().getName() + \"@\" + Integer.toHexString(hashCode()); }   "
},
{
  "id": "listing-in-object-equals",
  "level": "2",
  "url": "section-in-object-class.html#listing-in-object-equals",
  "type": "Listing",
  "number": "10.5.3",
  "title": "",
  "body": " Object class source code for equals(…)   public boolean equals(Object obj) { return (this == obj); }   "
},
{
  "id": "section-in-abstract-class",
  "level": "1",
  "url": "section-in-abstract-class.html",
  "type": "Section",
  "number": "10.6",
  "title": "Abstract Classes and Methods",
  "body": " Abstract Classes and Methods  The DoodlePad Shape base class shares quite a bit of functionality with all its derived classes, including a wide array of pixel-perfect mouse events that each shape object may individually. But, what about the Shape class itself. What would happen if we attempted to instantiate Shape directly? How would it look?  An attempt to instantiate Shape will end with a compiler error, and that's a good thing. After all, Shape is an abstract concept, not an actual graphic. It has no visual representation. The Shape class exists primarily as as way to generalize the concept of a shape and to encapsulate the shared functionality of all concrete shape derived classes in one place, to avoid the problems assocaited with code duplication. In fact, the Shape class was designed to be abstract. Never was there an intention that concrete Shape objects would be instantiated. This was part of the original design, and we'd like Java to help us enforce that restriction.  Fortunately, Java does give us the ability to prevent classes from being instantiated directly. This is accomplished by adding the appropriately-named abstract modifier to a class declaration. Refering to the Shape class source code and you will see that Shape is declared with the abstract modifier.   \/** * Abstract base class for all graphical shape objects * * @author Mark F. Russo, Ph.D. * @version 1.1 *\/ public abstract class Shape { ...   But modifying a class with abstract is not enough. If a class is abstract then it must also contain at least one method that is modified with abstract as well. A method with the additional abstract modifier is required to have no implementation. Instead, an abstract method is composed of a method signature only, and this signals that all derived classes must provide a concrete implementation of the method. Once again, the Java compiler enforces this design constraint. Classes that extend an abstract base class must (eventually) provide a concrete implementation of all abstract methods.  If Shape is abstract, then it must have at least one abstract method declared. Of course it does. The one abstract method of Shape is draw(…) , which should make some sense. The one unique feature of all Shape's derived classes it their graphical representation. The draw(…) method is different for each derived class of Shape, and must be implemented. Modifying draw(…) with abstract enlists the compile to enforce the requirement that all derived classes must implement draw(…) .  The complete definition of draw(…) is given in . There is no method body! The definitin is a signature only, no curly braces, just a semicolon ( ; ). Shape can provide no implementation. But Shape methods depend upon there being a concrete implementation. This is guaranteed by the compiler by the addition of the abstract modifier.   Shape's abstract draw(…) method   \/** * Draw the shape. Abstract method to be overridden in derived classes. * @param g The Graphics2D object on which to draw. *\/ public abstract void draw(Graphics2D g); \/\/ Override in derived class    Abstract classes and abstrat methods give us a way to express intended design constraints into our class definitions, which are checked by the compiler. If a base class depends on its subclasses implementing certain methods that have no reasonable default implementation, then the base class is abstract. Modify the base class with abstract and include the abstract method signatures that are required in the base class. The Java comiler will ensure these abstract methods will be implemented in a derived class so that all base class behavior functions properly.  "
},
{
  "id": "p-849",
  "level": "2",
  "url": "section-in-abstract-class.html#p-849",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "abstract "
},
{
  "id": "p-850",
  "level": "2",
  "url": "section-in-abstract-class.html#p-850",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "abstract "
},
{
  "id": "listing-in-shape-draw",
  "level": "2",
  "url": "section-in-abstract-class.html#listing-in-shape-draw",
  "type": "Listing",
  "number": "10.6.1",
  "title": "",
  "body": " Shape's abstract draw(…) method   \/** * Draw the shape. Abstract method to be overridden in derived classes. * @param g The Graphics2D object on which to draw. *\/ public abstract void draw(Graphics2D g); \/\/ Override in derived class   "
},
{
  "id": "section-in-concepts",
  "level": "1",
  "url": "section-in-concepts.html",
  "type": "Section",
  "number": "10.7",
  "title": "Key Concepts",
  "body": " Key Concepts   Inheritance is a hierarchical relationship set up between two classes called a subclass and a superclass.  Inheritance is set up in the subclass declaration using the extends keyword.  One of the benefits of inheritance is that the subclass automatically inherits -- gets access to -- members of a superclass, subject to visibility constraints.  If an attempt is made to access a method or instance variable of a subclass that is in an inheritance relationship, and the subclass does not have a suitable implementation of that variable or method, Java will search up the hierarchy in an attempt to find a suitable method or instance variable implemented by one of its superclasses.  The first suitable member found while searching up a hierarchy will be invoked.  When a subclass defines a member that matches one defined in a superclass, it is said that the subclass member overrides the superclass member.  The scope of a superclass may be specified explicitly using the super keyword.  Subclass constructors must invoke superclass constructors as part of the subclass constructor implementation. This may be accomplished using the super keyword.  Superclass methods may be invoked explicitly from within an object, skipping an overridden implementation in the subclass, by using super as the method's scope.  A method defined in a subclass may overload a superclass method if the method names are the same but the signatures differ.  Inheritance is often referred to an is-a relationship because the subclass is a kind of superclass.  An object of type subclass may be assigned to a variable of type superclass. This is a form of polymorphism found in Java and it is a ramification of the inheritance relationship.  Ramifications of polymorphism in Java include the ability to pass a parameter of type subclass to a method whose parameter declaration is of type superclass, and of storing multiple types of subclasses in an ArrayList declared to store objects of a common superclass type.  When a program invokes a method on an object of type subclass using a variable of type superclass, the method implementation in the subclass is invoked. This is called dynamic binding .  The particular methods invoked are governed by the type of the object referenced by a variable, not the type of object variable.  The Java compiler will not permit the invocation of methods declared by a subclass and not in a superclass if the invocation is attempted on a variable of type superclass even if it references an object of type subclass.  If a superclass member is intended to be access only by itself and its subclasses, and not to be made generally accessible by any external class, the member may be declared using the protected visibility modifier keyword. Compare to public and private visibility modifiers  Another benefit of inheritance is that it allows the program designer to group common members in a superclass, making them accessible to all subclasses, reducing code duplication.  Grouping fields and methods in a base class is a kind of specialization  Defining derived classes with unique state and behavior is a kind of specialization  Overriding methods to replace functionality is one way to specialize a derived class  Overriding methods to augment functionality is another way to specialize a derived class  Inheritance may be prevented by modifying the declaration of a class with the final keyword  All classes ultimately inherit the Object class, even if the extends keyword is not used.  Several useful methods are inherited by all classes from Object, including equals() and toString()  The == operator tests two objects for equal identity, which is not always the desired behavior. Sometimes the notion of equality is different than object identity. For example, String objects should be considered equal when their character sequences are identical, even when the String objects themselves are distinct.  The default behavior of Object's equals() method is to test for object identity. The String class overrides equal() to replace the Object implementation with an implementation that tests characters sequence for equality.  When printing an object, the println() method of PrintStream invokes an object's toString() method to obtain a String representation of an object which is printed to the terminal. This is possible because the Object class provides a default implementation of toString().  It is often useful to override toString() in a custom class to provide a more informative String representation that is printed to the terminal by println().  The instanceof operator is a useful way to test if one object is an instance of a class. The instanceof operator takes inheritance into account; it will return true when testing if a subclass in an instance of a superclass due to the is a nature of the inheritance relationship.  An object of type subclass referenced by a variable of type superclass may be cast to a subclass type using parentheses. Often this is necessary when the object must be accessed as its original subclass type, such as when invoking a method implemented in the subclass only and when passing as a parameter to a method requiring the subclass type.  When a class should not be instantiated, declare it as abstract.  Abstract classes serve to collect common behavior to be inherited by subclasses.  Abstract classes are also useful as types that may reference objects of any subclass type.   "
},
{
  "id": "section-in-exercises",
  "level": "1",
  "url": "section-in-exercises.html",
  "type": "Section",
  "number": "10.8",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-if-comparable",
  "level": "1",
  "url": "section-if-comparable.html",
  "type": "Section",
  "number": "11.1",
  "title": "Core Library Interfaces",
  "body": " Core Library Interfaces  The Java Core Library provides several interface implementations which are tightly integrated into the library. In this section we look at one in detail, and then briefly introduce a few others.   The Comparable<T> Interface  One of the more important interfaces provided by the Java core library is Comparable<T> , the source code of which is in . The Comparable<T> interface is widely used in Java. A class must implement the Comparable<T> interface before it may be processed by certain predefined algorithms in the Core Library, including sorting and searching. The compareTo(T o) method returns a negative int if this is ordered to the left of o , a positive int if this is ordered to the right of o , and 0 if this and o can appear in either order. What constitutes less-than, greater-than and equal-to is something that you are free to decide for yourself to suit your own needs.   Comparable<T> Interface   \/\/ Comparable.java package java.lang; import java.util.*; public interface Comparable<T> { public int compareTo(T o); }    The first thing to note is that the syntax of an interface declaration is the same as an abstract class having only abstract methods, except that the keyword abstract is removed everywhere and class is replaced with interface . Otherwise, the syntax should look familiar. Like classes, public interfaces must be defined in a file with a name that matches the interface.  It is interesting to note that the Comparable<> interface is generic like ArrayList<T> . When used, the T must be replaced with a type that is substituted into the interface definition before it is compiled. keyword.  The interface itself defines exactly one signature to be implemented, public int compareTo(T o) . A class that implements Comparable<T> must define a concrete method implemention that matches that signature.  Another huge benefit of interfaces is that a class is not limited to the implementation of only one interface. A class may implement many interfaces. By contrast, in Java a class extends at most one base class. If a base class is not specified, Java extends Object by default. An ability to implement many interfaces is a powerful concept that allows us to create multi-functional and highly flexible classes.  The syntax for implementing an interface is similar to extending a class, only the keyword extends followed by a base class name is replaced with the keyword implements followed by one or more comma-separated interface names. Let's consider an example.  The Java String class implements Comparable<T>. Strings order themselves lexographically , which is the same ordering of words when listed in a dictionary. First the underlying integer code of each successive character is compared until a difference is found. The String with the lesser character code value is ordered first. Also, shorter Strings are ordered first. We can explore this by invoking the compareTo(…) method on several String pairs in JShell.   jshell> \"cat\".compareTo(\"dog\"); \/\/ Negative result means cat < dog $1 ==> -1 jshell> \"dog\".compareTo(\"cat\"); \/\/ Positive means dog > cat $2 ==> 1 jshell> \"cat\".compareTo(\"cat\"); \/\/ Zero means cat == cat $3 ==> 0 jshell> \/\/ Lowercase encoding is greater than uppercase jshell> \"cat\".compareTo(\"Cat\"); \/\/ cat > Cat $4 ==> 32 jshell> \/\/ Shorter words are less than longer jshell> \"kit\".compareTo(\"kitten\"); \/\/ kit < kitten $5 ==> -3 jshell> \/\/ But char encoding tested before length jshell> \"kit\".compareTo(\"Kitten\"); \/\/ kit > Kitten $6 ==> 32 jshell>   Let's assume we have written a program that tracks Sentence objects in an ArrayList<Sentence>, and we need to order Sentences based on the number of words that each contains. To simplify a bit, let's assume each word in a Sentence is separated by a single space. Consider the Sentence class definition in which implements Comparable<Sentence> and tests the implementation.   Sentence.java   \/\/ Sentence.java \/\/ Demonstrate Comparable<> interface and sorting import java.util.ArrayList; \/\/ Helpers import java.util.Collections; public class Sentence implements Comparable<Sentence> { private String sent; \/\/ Store sentence String private int wordCount; \/\/ Store word count \/\/ Constructor stores sentence string and precomputes word count public Sentence(String sent) { this.sent = sent; \/\/ Precompute word count this.wordCount = sent.split(\" \").length; } \/\/ toString override returns sentence String public String toString() { return this.sent; } \/\/ WordCount getter int getWordCount() { return this.wordCount; } \/\/ Implement compareTo method to satisfy Comparable public int compareTo(Sentence other) { \/\/ Compare wordCounts if (this.wordCount > other.getWordCount()) { return 1; } else if (this.wordCount < other.getWordCount()) { return -1; } else { return 0; } } \/\/ Test public static void main(String[] args) { ArrayList<Sentence> juliet = new ArrayList<>(); \/\/ From Romeo and Juliet, spoken by Juliet. By William Shakespeare. juliet.add(new Sentence(\"O Romeo, Romeo, wherefore art thou Romeo?\")); juliet.add(new Sentence(\"Deny thy father and refuse thy name.\")); juliet.add(new Sentence(\"Or if thou wilt not, be but sworn my love \" + \"And I'll no longer be a Capulet.\")); juliet.add(new Sentence(\"'Tis but thy name that is my enemy: \" + \"Thou art thyself, though not a Montague.\")); juliet.add(new Sentence(\"What's Montague?\")); juliet.add(new Sentence(\"It is nor hand nor foot \" + \"Nor arm nor face nor any other part \" + \"Belonging to a man.\")); juliet.add(new Sentence(\"O be some other name.\")); juliet.add(new Sentence(\"What's in a name?.\")); juliet.add(new Sentence(\"That which we call a rose \" + \"By any other name would smell as sweet; \" + \"So Romeo would, were he not Romeo call'd, \" + \"Retain that dear perfection which he owes \" + \"Without that title.\")); juliet.add(new Sentence(\"Romeo, doff thy name, \" + \"And for that name, which is no part of thee, \" + \"Take all myself.\")); \/\/ Sort ArrayList on Sentence word counts Collections.sort(juliet); \/\/ Print sorted ArrayList for (Sentence line: juliet) { System.out.println(line + \"(\" + line.getWordCount() + \")\"); } } }     We import both ArrayList and Collections because we plan to use both.  Our Sentence class implements Comparable<Sentence> .  Sentence encapsulates the sentence String itself and word count.  Word count is precomputed in the constructor.  A toString() override returns Sentence String.  The getWordCount() accessor method returns word count.  The compareTo(Sentence other) interface method returns an int value that indicates Sentence order based on word count.  The main(…) method fills an ArrayList<Sentence> with Sentence objects from Juliet's famous speach.  The Collections.sort(…) static method is invoked to sort the ArrayList<Sentence> , which uses our overridden compareTo(Sentence other) .  Sorted Sentences are printed in order, with word count.    javac Sentence.java java Sentence  What's Montague?(2) What's in a name?.(4) O be some other name.(5) O Romeo, Romeo, wherefore art thou Romeo?(7) Deny thy father and refuse thy name.(7) 'Tis but thy name that is my enemy: Thou art thyself, though not a Montague.(15) Or if thou wilt not, be but sworn my love And I'll no longer be a Capulet.(17) Romeo, doff thy name, And for that name, which is no part of thee, Take all myself.(17) It is nor hand nor foot Nor arm nor face nor any other part Belonging to a man.(18) That which we call a rose By any other name would smell as sweet; So Romeo would, were he not Romeo call'd, Retain that dear perfection which he owes Without that title.(32)   There is a much shorter and more clever implementation of compareTo(…) that merely returns the difference between word counts. Convince yourself that the following revision works just as well as the long-winded version in .   \/\/ Implement compareTo method to satisfy Comparable public int compareTo(Sentence other) { return this.wordCount - other.getWordCount(); }    Collections.sort(…) does its job because the only external dependency that the algorithm has is on an implementation of the compareTo(…) method to order two instances of objects stored in an ArrayList. We provide a way to solve that small task, and benefit from highly optimized sorting and searching algorithms that are built-in to the Core Library. This is a powerful opportunity to leverage the work of many others.    The Iterable<T> and Iterator<T> Interfaces  Another pair of interesting intefaces in Java's Core Library are the Iterator<T> and Iterable<T> interfaces. These interfaces are useful to make it possible to iterate over objects stored in a class that acts as a container. Specifically, fulfilling the Iterator<T> interface provides implementations of methods required to access the elements of a collection one at a time, and the Iterable<T> makes the custom container class compatible with a for-each statement.  Following are the the Java Core Library definitions of only the required signatures that must be implemented by both interfaces. Other signatures in each interface have default implementations.   public interface Iterator<T> { boolean hasNext(); \/\/ true if iteration has more elements. T next() \/\/ Returns next element in the iteration. }    public interface Iterable<T> { Iterator<T> iterator(); \/\/ Returns an iterator over elements of type T. }   These signatures are straightforward. Iterator<T> has two signatures, T next() returns the next element and a boolean hasNext() tests if there is another element to be returned. The only required signature in Iterable<T> is Iterator<T> iterator() which generates and return the Iterator<T> object.  In the DoodlePad library, the Pad class acts as a container of all Shape objects that are rendered on its window. It also implements the Iterable<T> interface which means that Shape object that are rendered on a Pad object may be iterated directly.   is the source code of a program named RandomOvals.java that instantiated, iterated over, and randomly recolored several Oval objects. Ovals were stored in an ArrayList<Oval>. In we updated that program to RandomOvals2.java which used an array to hold Oval objects. Let's update that program one more time. This time we will avoid the ArrayList and the array entirely by iterating over Shape objects using the Pad as a container instead. Note that the Pad.getPad() static method gets a reference to the current Pad object. Also note that we are not limited to Oval objects. Through the magic of subtype polymorphism that we get because all shapes inherit the Shape base class, we can generate any mixture of shape objects and still be able to iterate over all of them with one loop. Lets create a mixture of Oval and Rectangle objects to demonstrate this. Find the douce code of our updated program in named RandomShapes.java.   RandomShapes.java   \/\/ RandomShapes.java import java.util.Random; \/\/ Import classes import doodlepad.*; \/\/ Import DoodlePad classes public class RandomShapes { \/\/ public class public static void main(String[] args) { \/\/ Start of execution \/\/ Instantiate randomly placed Oval and Rectangle objects for (int i = 0; i < 10; i++) { \/\/ For-statement Oval o = new Oval(); \/\/ Create an Oval object o.setMousePressedHandler(RandomShapes::recolor); Rectangle r = new Rectangle(); \/\/ Create a Rectangle object r.setMousePressedHandler(RandomShapes::recolor); } } \/\/ Event handler method that executes when an Oval is clicked public static void recolor(Shape shp, double x, double y, int button) { int r, g, b; \/\/ Helper variables Random rnd = new Random(); \/\/ Declare Random object Pad pad = Pad.getPad(); \/\/ Get reference to Pad object \/\/ Loop over all Shape objects and reset to a random fill color for (Shape s: pad) { r = rnd.nextInt(256); \/\/ Random color components g = rnd.nextInt(256); b = rnd.nextInt(256); s.setFillColor(r, g, b); \/\/ Change fill color } } }    Notice that we no longer need a collection or array to hold the Shape objects. The Pad object holds them automatically. We create a mixture of Oval and Rectangle objects just to demonstrate that we can iterate over both using a single loop. The recolor(…) method performs the iteration using a single for-each statement which iterates using the Pad object as a iterator, specifically for (Shape s: pad) {… . See for the result.   RandomShapes.java     "
},
{
  "id": "listing-if-comparable",
  "level": "2",
  "url": "section-if-comparable.html#listing-if-comparable",
  "type": "Listing",
  "number": "11.1.1",
  "title": "",
  "body": " Comparable<T> Interface   \/\/ Comparable.java package java.lang; import java.util.*; public interface Comparable<T> { public int compareTo(T o); }   "
},
{
  "id": "p-861",
  "level": "2",
  "url": "section-if-comparable.html#p-861",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extends implements "
},
{
  "id": "listing-if-sentence",
  "level": "2",
  "url": "section-if-comparable.html#listing-if-sentence",
  "type": "Listing",
  "number": "11.1.2",
  "title": "",
  "body": " Sentence.java   \/\/ Sentence.java \/\/ Demonstrate Comparable<> interface and sorting import java.util.ArrayList; \/\/ Helpers import java.util.Collections; public class Sentence implements Comparable<Sentence> { private String sent; \/\/ Store sentence String private int wordCount; \/\/ Store word count \/\/ Constructor stores sentence string and precomputes word count public Sentence(String sent) { this.sent = sent; \/\/ Precompute word count this.wordCount = sent.split(\" \").length; } \/\/ toString override returns sentence String public String toString() { return this.sent; } \/\/ WordCount getter int getWordCount() { return this.wordCount; } \/\/ Implement compareTo method to satisfy Comparable public int compareTo(Sentence other) { \/\/ Compare wordCounts if (this.wordCount > other.getWordCount()) { return 1; } else if (this.wordCount < other.getWordCount()) { return -1; } else { return 0; } } \/\/ Test public static void main(String[] args) { ArrayList<Sentence> juliet = new ArrayList<>(); \/\/ From Romeo and Juliet, spoken by Juliet. By William Shakespeare. juliet.add(new Sentence(\"O Romeo, Romeo, wherefore art thou Romeo?\")); juliet.add(new Sentence(\"Deny thy father and refuse thy name.\")); juliet.add(new Sentence(\"Or if thou wilt not, be but sworn my love \" + \"And I'll no longer be a Capulet.\")); juliet.add(new Sentence(\"'Tis but thy name that is my enemy: \" + \"Thou art thyself, though not a Montague.\")); juliet.add(new Sentence(\"What's Montague?\")); juliet.add(new Sentence(\"It is nor hand nor foot \" + \"Nor arm nor face nor any other part \" + \"Belonging to a man.\")); juliet.add(new Sentence(\"O be some other name.\")); juliet.add(new Sentence(\"What's in a name?.\")); juliet.add(new Sentence(\"That which we call a rose \" + \"By any other name would smell as sweet; \" + \"So Romeo would, were he not Romeo call'd, \" + \"Retain that dear perfection which he owes \" + \"Without that title.\")); juliet.add(new Sentence(\"Romeo, doff thy name, \" + \"And for that name, which is no part of thee, \" + \"Take all myself.\")); \/\/ Sort ArrayList on Sentence word counts Collections.sort(juliet); \/\/ Print sorted ArrayList for (Sentence line: juliet) { System.out.println(line + \"(\" + line.getWordCount() + \")\"); } } }   "
},
{
  "id": "listing-if-randomshapes",
  "level": "2",
  "url": "section-if-comparable.html#listing-if-randomshapes",
  "type": "Listing",
  "number": "11.1.3",
  "title": "",
  "body": " RandomShapes.java   \/\/ RandomShapes.java import java.util.Random; \/\/ Import classes import doodlepad.*; \/\/ Import DoodlePad classes public class RandomShapes { \/\/ public class public static void main(String[] args) { \/\/ Start of execution \/\/ Instantiate randomly placed Oval and Rectangle objects for (int i = 0; i < 10; i++) { \/\/ For-statement Oval o = new Oval(); \/\/ Create an Oval object o.setMousePressedHandler(RandomShapes::recolor); Rectangle r = new Rectangle(); \/\/ Create a Rectangle object r.setMousePressedHandler(RandomShapes::recolor); } } \/\/ Event handler method that executes when an Oval is clicked public static void recolor(Shape shp, double x, double y, int button) { int r, g, b; \/\/ Helper variables Random rnd = new Random(); \/\/ Declare Random object Pad pad = Pad.getPad(); \/\/ Get reference to Pad object \/\/ Loop over all Shape objects and reset to a random fill color for (Shape s: pad) { r = rnd.nextInt(256); \/\/ Random color components g = rnd.nextInt(256); b = rnd.nextInt(256); s.setFillColor(r, g, b); \/\/ Change fill color } } }   "
},
{
  "id": "figure-if-randomshapes",
  "level": "2",
  "url": "section-if-comparable.html#figure-if-randomshapes",
  "type": "Figure",
  "number": "11.1.4",
  "title": "",
  "body": " RandomShapes.java   "
},
{
  "id": "section-if-custom",
  "level": "1",
  "url": "section-if-custom.html",
  "type": "Section",
  "number": "11.2",
  "title": "Custom Interfaces",
  "body": " Custom Interfaces   A custom interface is defined using the interface keyword and a list if method signatures. We saw the source code for three Java Core Library examples, the Comparable<T> interface in and the Iterable<T> and Iterator<T> interfaces in . Let's create a custom interface and implement it along with other interfaces.    Define a Custom Interface  In this section we want to build a graphical panel demonstration three kinds of tri-option selector widgets. The way these widgets look may be customized, but all must give the user the ability to select from the three options and provide a way to report the current option selected. To ensure that all tri-option widgets provide common capabilities, we define a TriOption interface that all selector widgets must implement. In we specify that the TriOption interface includes four signatures. This public interface must be saved to a file having the same name as the interface, and compiled with the other files in the projest, in a manner exactly analogous to any multi-file Java project.   TriOption.java   \/\/ TriOption.java \/\/ Required for selector widgets with three options public interface TriOption { public void setOption1(); \/\/ Set to option 1 public void setOption2(); \/\/ Set to option 2 public void setOption3(); \/\/ Set to option 3 public int getOption(); \/\/ Get current selected option }    To implement this interface we follow the same procedure as we did with Core Library interfaces. For example, if we were defining a class called TogglingSelector that implemented the TriOption interface, we would start the class with something like the following, and then implement in the the TogglingSelector class at least the four methods that match the four signatures in the interface.   public class TogglingSelector implements TriOption { \/\/ … public void setOption1() { … } public void setOption2() { … } public void setOption3() { … } public void getOption() { … } }     Implement Multiple Interfaces  We may implement multiple interfaces in the same class at the same time. The only requirement is that all mandated signatures from all interfaces must be implemented as concrete methods in the class. For our example, let's say that we want to sort all selectors on a panel according to the selected option number: 1, 2 or 3. We can make use of what we get in the Java Core Library and implement the Comparable<TriOption> interface and use the static sort() method built in to the provided Arrays or the Collections class. To implement multiple intrfaces, follow the implements keyword with a comma-separated list of interfaces, as in .   Implementing Multiple Interfaces   public class TogglingSelector implements TriOption, Comparable<TriOption> { \/\/ … public void setOption1() { … } public void setOption2() { … } public void setOption3() { … } public void getOption() { … } @Override public int compareTo(TriOption other) { return (this.getOption() - other.getOption()); } }      Add Inheritance  Selector widgets in our example will be based on DoodlePad shape classes. To get the maximum benefit we want to extend the existing shape classes so that we can inherit all behavior of the base shape class. Nothing prevents us from simultaneously extending an existing class and implementing multiple interfaces.  The TogglingSelector will be round and respond to mouse presses. Each time the mouse is pressed on a TogglingSelector object, it toggles through the three options available, and changes its color and text display to match. expands further so that it also inherits the Oval class. Note how the top line of the class definition both extends Oval and implements TriOption and Comparable<TriOption>. The constructor invokes a base class constructor on its first line by invoking super(…) and we override onMousePressed(…) to add custom mouse-pressed behavior to the class, but invoke super.onMousePressed(x, y, button) to ensure any default behavior is complete.   TogglingSelection.java (version 1)   \/\/ TogglingSelector.java import doodlepad.*; public class TogglingSelector extends Oval implements TriOption, Comparable<TriOption> { \/\/ Constructor sets up all encapsulated properties public TogglingSelector(double x, double y) { super(x, y, 75, 75); \/\/ Base class constructor \/\/ … } \/\/ Cycle through options on each click @Override public void onMousePressed(double x, double y, int button) { super.onMousePressed(x, y, button); \/\/ … } \/\/ Method required by interface public void setOption1() { … } public void setOption2() { … } public void setOption3() { … } public void getOption() { … } @Override public int compareTo(TriOption other) { return (this.getOption() - other.getOption()); } }    The remaining class implementation is detail. The following three sections provide the three TriOption selector widgets that we implement for this example.    TogglingSelector Widget  The TogglingSelector starts set at option 1 and filled with red. When clicked, it advanced to option 2 and changes to a yellow fill. Then third click changes to option 3 with a green fill. Another click cycles the widget back to option 1. The option number itself is displayed in the center of the Oval.   follows the outline in with code added to manage the visual details. Note that we are tracking the selected option using a private option integer. An example of the ToggleSelector widget is in the middle of .   TogglingSelector.java   \/\/ TogglingSelector.java import doodlepad.*; public class TogglingSelector extends Oval implements TriOption, Comparable<TriOption> { private int option; \/\/ Selected option \/\/ Constructor sets up all encapsulated properties public TogglingSelector(double x, double y) { super(x, y, 75, 75); \/\/ Base class constructor this.setFontSize(32); this.setOption1(); \/\/ Start at option 1 } \/\/ Cycle through options on each click @Override public void onMousePressed(double x, double y, int button) { super.onMousePressed(x, y, button); if (option == 1) { setOption2(); } else if (option == 2) { setOption3(); } else { setOption1(); } } \/\/ Current option getter public int getOption() { return this.option; } \/\/ Set to option 1 and reconfigure display public void setOption1() { this.option = 1; this.setFillColor(255, 0, 0); this.setText(\"1\"); } \/\/ Set to option 2 and reconfigure display public void setOption2() { this.option = 2; this.setFillColor(255, 255, 0); this.setText(\"2\"); } \/\/ Set to option 3 and reconfigure display public void setOption3() { this.option = 3; this.setFillColor(0, 255, 0); this.setText(\"3\"); } @Override public int compareTo(TriOption other) { return (this.getOption() - other.getOption()); } public String toString() { return \"TogglingSelector (option=\" + this.getOption() + \")\"; } }      SlidingSelector Widget  The SlidingSelector widget is made up of two Rectangles and a Text object. One Rectangle is used for the outer widget body and a second is used for the sliding button, which moves up and down into one of three positions corresponding to the three options. The SlidingSelector starts at option 1 with its button at the bottom of the widget and filled with red. When the widget background is clicked, the button moves up or down, depending upon the location of the mouse click. The button fill color changes with the option selected: red, yellow, green. The option number is displayed below the widget.   follows the same outline in with code added to manage the visual details. An example of the SlidingSelector widget is on the left of .   SlidingSelector.java   \/\/ SlidingSelector.java import doodlepad.*; public class SlidingSelector extends Rectangle implements TriOption, Comparable<TriOption> { private int option; \/\/ Selected option private Rectangle button; \/\/ button private Text display; \/\/ Text display \/\/ Constructor sets up all encapsulated properties public SlidingSelector(double x, double y) { super(x, y, 75, 90); \/\/ Base class constructor this.setFillColor(200); this.button = new Rectangle(x, y+60, 75, 30); this.button.setEventsEnabled(false); this.display = new Text(\"\", x+28, y+100, 30, 30); this.setOption1(); \/\/ Start at option 1 } \/\/ Choose option based on mouse y-position @Override public void onMousePressed(double x, double y, int button) { super.onMousePressed(x, y, button); if (y >= this.getY() + 60) { this.setOption1(); } else if (y >= this.getY() + 30) { this.setOption2(); } else { this.setOption3(); } } \/\/ Current option getter public int getOption() { return this.option; } \/\/ Set to option 1 and reconfigure display public void setOption1() { this.option = 1; this.button.setY(this.getY() + 60); this.button.setFillColor(255, 0, 0); this.display.setText(\"1\"); } \/\/ Set to option 2 and reconfigure display public void setOption2() { this.option = 2; this.button.setY(this.getY() + 30); this.button.setFillColor(255, 255, 0); this.display.setText(\"2\"); } \/\/ Set to option 3 and reconfigure display public void setOption3() { this.option = 3; this.button.setY(this.getY()); this.button.setFillColor(0, 255, 0); this.display.setText(\"3\"); } @Override public int compareTo(TriOption other) { return (this.getOption() - other.getOption()); } public String toString() { return \"SlidingSelector (option=\" + this.getOption() + \")\"; } }      RotatingSelector Widget  The RotatingSelector widget is made up an Oval, a thick line, and a Text object. The line is rotated left for option 1, right for option 3, and in between in a vertical position for option 2. The RotatingSelector starts at option 1 with its line rotated left. When the widget background is clicked, the line rotates left or right, depending upon the location of the mouse click. The button fill color changes with the option selected: red, yellow, green. The option number is displayed below the widget.  Once again, follows the same outline in with code added to manage the visual details. An example of the RotatingSelector widget is on the right of .   RotatingSelector.java   \/\/ RotatingSelector.java import doodlepad.*; public class RotatingSelector extends Oval implements TriOption, Comparable<TriOption> { private int option; \/\/ Selected option private Text display; \/\/ Text display private Line handle; \/\/ Rotating handle \/\/ Constructor sets up all encapsulated properties public RotatingSelector(double x, double y) { super(x, y, 75, 75); \/\/ Base class constructor this.handle = new Line(x+15, y+15, x+90, y+90); this.handle.setEventsEnabled(false); this.handle.setStrokeWidth(15); this.display = new Text(\"\", x+28, y+85, 30, 30); this.setOption1(); \/\/ Start at option 1 } \/\/ Choose option based on mouse x-position @Override public void onMousePressed(double x, double y, int button) { super.onMousePressed(x, y, button); if (x > this.getX()+50) { setOption3(); } else if (x > this.getX()+25) { setOption2(); } else { setOption1(); } } \/\/ Current option getter public int getOption() { return this.option; } \/\/ Set to option 1 and reconfigure display public void setOption1() { this.option = 1; this.setFillColor(255, 0, 0); this.handle.setPoints(x+15, y+15, x+60, y+60); this.display.setText(\"1\"); } \/\/ Set to option 2 and reconfigure display public void setOption2() { this.option = 2; this.setFillColor(255, 255, 0); this.handle.setPoints(x+37, y+6, x+37, y+69); this.display.setText(\"2\"); } \/\/ Set to option 3 and reconfigure display public void setOption3() { this.option = 3; this.setFillColor(0, 255, 0); this.handle.setPoints(x+60, y+15, x+15, y+60); this.display.setText(\"3\"); } @Override public int compareTo(TriOption other) { return (this.getOption() - other.getOption()); } public String toString() { return \"RotatingSelector (option=\" + this.getOption() + \")\"; } }      Panel Driver Class  To test our selector widget operation and sorting, we defined a Panel class, which is given in . The Panel class derives from the Pad class, and invokes the Pad constructor from within the Panel constructor with parameters to initialize the size and window title. Panel encapsulates a TriOption array of size 3 to hold references to each kind of selector widget. The array is declared and initialized in the Panel constructor. Note that because each selector widget implements the TriOption interface, so each can be assigned to TriOption array.   RotatingSelector.java   \/\/ Panel.java import java.util.Arrays; import doodlepad.*; public class Panel extends Pad { private TriOption[] selectors; public Panel() { super(\"Selector Panel\", 480, 300); \/\/ Base class constructor selectors = new TriOption[3]; \/\/ Create and fill array selectors[0] = new SlidingSelector( 100, 100); selectors[1] = new TogglingSelector(200, 110); selectors[2] = new RotatingSelector(300, 110); } \/\/ Handle mouse-pressed on Pad public void onMousePressed(double x, double y, int button) { \/\/ Sort based on selected state Arrays.sort(selectors); \/\/ Print order for (TriOption sel: selectors) { System.out.println(sel); } } \/\/ Start here public static void main(String[] args) { new Panel(); } }    The Panel class overrides the Pad's onMousePressed(…) method to handle mouse clicks on the window background. When the user clicks the Panel window, the TriOption array is sorted and the array order is printed to visualize the current order.  Our project now includes five files: TriOption.java, TogglingSelector.java, SlidingSelector.java, RotatingSelector.java, and Panel.java. To simplify the compilation command, all files are placed in a single directory with no other Java files so the wildcard character * can be used: javac -cp doodlepad.jar *.java . Because Panel has our main(…) method, we start the program with that class: java -cp .;doodlepad.jar Panel . shows the Panel program when it first starts.   javac -cp doodlepad.jar *.java java -cp .;doodlepad.jar Panel    Panel.java    If we click the Panel background. we see the following printed output in the shell. All selected option start at 1, so the sort operation names no changes.   SlidingSelector (option=1) TogglingSelector (option=1) RotatingSelector (option=1)   Next, we modify the options selected on each widget to look like , with option 1 selected by the RotatingSelector, option 2 by the TogglingSelector, and option 3 by the SlidingSelector. After clicking the Panel background, we see the output printed in the shell session that follows . Changing the optiosn again ( ) and clicking the Panel, the order changes again, matching the options selected. These examples confirm that sorting the TriOption array by the options selected reorders the items in the array by increasing option number.   Panel.java with options selected     RotatingSelector (option=1) TogglingSelector (option=2) SlidingSelector (option=3)    Panel.java with options changed     TogglingSelector (option=1) SlidingSelector (option=2) RotatingSelector (option=3)     The example presented in this section combines many different features of the Java programming language. Each of the classes defined encapsulate, initialize, and coordinate the many parts of object to produce self-managed cohesive widgets, each with a custom design and behavior. Inheritance was used to start our new classes with a large amount of baseline functionality, with only object-specific customizations added. An interface was defined and implemented as a way to require that certain methods are created in all implementing classes and to enable sorting of an array using prewritten algorithms provided by the Java Core Library. Overall, the many aspects of object oriented programming each have their distinct benefits and they fit together well to produce sophisticated results.   "
},
{
  "id": "listing-if-trioption",
  "level": "2",
  "url": "section-if-custom.html#listing-if-trioption",
  "type": "Listing",
  "number": "11.2.1",
  "title": "",
  "body": " TriOption.java   \/\/ TriOption.java \/\/ Required for selector widgets with three options public interface TriOption { public void setOption1(); \/\/ Set to option 1 public void setOption2(); \/\/ Set to option 2 public void setOption3(); \/\/ Set to option 3 public int getOption(); \/\/ Get current selected option }   "
},
{
  "id": "listing-if-multiple-interfaces",
  "level": "2",
  "url": "section-if-custom.html#listing-if-multiple-interfaces",
  "type": "Listing",
  "number": "11.2.2",
  "title": "",
  "body": " Implementing Multiple Interfaces   public class TogglingSelector implements TriOption, Comparable<TriOption> { \/\/ … public void setOption1() { … } public void setOption2() { … } public void setOption3() { … } public void getOption() { … } @Override public int compareTo(TriOption other) { return (this.getOption() - other.getOption()); } }   "
},
{
  "id": "listing-if-widget-outline",
  "level": "2",
  "url": "section-if-custom.html#listing-if-widget-outline",
  "type": "Listing",
  "number": "11.2.3",
  "title": "",
  "body": " TogglingSelection.java (version 1)   \/\/ TogglingSelector.java import doodlepad.*; public class TogglingSelector extends Oval implements TriOption, Comparable<TriOption> { \/\/ Constructor sets up all encapsulated properties public TogglingSelector(double x, double y) { super(x, y, 75, 75); \/\/ Base class constructor \/\/ … } \/\/ Cycle through options on each click @Override public void onMousePressed(double x, double y, int button) { super.onMousePressed(x, y, button); \/\/ … } \/\/ Method required by interface public void setOption1() { … } public void setOption2() { … } public void setOption3() { … } public void getOption() { … } @Override public int compareTo(TriOption other) { return (this.getOption() - other.getOption()); } }   "
},
{
  "id": "listing-if-togglingselector",
  "level": "2",
  "url": "section-if-custom.html#listing-if-togglingselector",
  "type": "Listing",
  "number": "11.2.4",
  "title": "",
  "body": " TogglingSelector.java   \/\/ TogglingSelector.java import doodlepad.*; public class TogglingSelector extends Oval implements TriOption, Comparable<TriOption> { private int option; \/\/ Selected option \/\/ Constructor sets up all encapsulated properties public TogglingSelector(double x, double y) { super(x, y, 75, 75); \/\/ Base class constructor this.setFontSize(32); this.setOption1(); \/\/ Start at option 1 } \/\/ Cycle through options on each click @Override public void onMousePressed(double x, double y, int button) { super.onMousePressed(x, y, button); if (option == 1) { setOption2(); } else if (option == 2) { setOption3(); } else { setOption1(); } } \/\/ Current option getter public int getOption() { return this.option; } \/\/ Set to option 1 and reconfigure display public void setOption1() { this.option = 1; this.setFillColor(255, 0, 0); this.setText(\"1\"); } \/\/ Set to option 2 and reconfigure display public void setOption2() { this.option = 2; this.setFillColor(255, 255, 0); this.setText(\"2\"); } \/\/ Set to option 3 and reconfigure display public void setOption3() { this.option = 3; this.setFillColor(0, 255, 0); this.setText(\"3\"); } @Override public int compareTo(TriOption other) { return (this.getOption() - other.getOption()); } public String toString() { return \"TogglingSelector (option=\" + this.getOption() + \")\"; } }   "
},
{
  "id": "listing-if-slidingselector",
  "level": "2",
  "url": "section-if-custom.html#listing-if-slidingselector",
  "type": "Listing",
  "number": "11.2.5",
  "title": "",
  "body": " SlidingSelector.java   \/\/ SlidingSelector.java import doodlepad.*; public class SlidingSelector extends Rectangle implements TriOption, Comparable<TriOption> { private int option; \/\/ Selected option private Rectangle button; \/\/ button private Text display; \/\/ Text display \/\/ Constructor sets up all encapsulated properties public SlidingSelector(double x, double y) { super(x, y, 75, 90); \/\/ Base class constructor this.setFillColor(200); this.button = new Rectangle(x, y+60, 75, 30); this.button.setEventsEnabled(false); this.display = new Text(\"\", x+28, y+100, 30, 30); this.setOption1(); \/\/ Start at option 1 } \/\/ Choose option based on mouse y-position @Override public void onMousePressed(double x, double y, int button) { super.onMousePressed(x, y, button); if (y >= this.getY() + 60) { this.setOption1(); } else if (y >= this.getY() + 30) { this.setOption2(); } else { this.setOption3(); } } \/\/ Current option getter public int getOption() { return this.option; } \/\/ Set to option 1 and reconfigure display public void setOption1() { this.option = 1; this.button.setY(this.getY() + 60); this.button.setFillColor(255, 0, 0); this.display.setText(\"1\"); } \/\/ Set to option 2 and reconfigure display public void setOption2() { this.option = 2; this.button.setY(this.getY() + 30); this.button.setFillColor(255, 255, 0); this.display.setText(\"2\"); } \/\/ Set to option 3 and reconfigure display public void setOption3() { this.option = 3; this.button.setY(this.getY()); this.button.setFillColor(0, 255, 0); this.display.setText(\"3\"); } @Override public int compareTo(TriOption other) { return (this.getOption() - other.getOption()); } public String toString() { return \"SlidingSelector (option=\" + this.getOption() + \")\"; } }   "
},
{
  "id": "listing-if-rotatingselector",
  "level": "2",
  "url": "section-if-custom.html#listing-if-rotatingselector",
  "type": "Listing",
  "number": "11.2.6",
  "title": "",
  "body": " RotatingSelector.java   \/\/ RotatingSelector.java import doodlepad.*; public class RotatingSelector extends Oval implements TriOption, Comparable<TriOption> { private int option; \/\/ Selected option private Text display; \/\/ Text display private Line handle; \/\/ Rotating handle \/\/ Constructor sets up all encapsulated properties public RotatingSelector(double x, double y) { super(x, y, 75, 75); \/\/ Base class constructor this.handle = new Line(x+15, y+15, x+90, y+90); this.handle.setEventsEnabled(false); this.handle.setStrokeWidth(15); this.display = new Text(\"\", x+28, y+85, 30, 30); this.setOption1(); \/\/ Start at option 1 } \/\/ Choose option based on mouse x-position @Override public void onMousePressed(double x, double y, int button) { super.onMousePressed(x, y, button); if (x > this.getX()+50) { setOption3(); } else if (x > this.getX()+25) { setOption2(); } else { setOption1(); } } \/\/ Current option getter public int getOption() { return this.option; } \/\/ Set to option 1 and reconfigure display public void setOption1() { this.option = 1; this.setFillColor(255, 0, 0); this.handle.setPoints(x+15, y+15, x+60, y+60); this.display.setText(\"1\"); } \/\/ Set to option 2 and reconfigure display public void setOption2() { this.option = 2; this.setFillColor(255, 255, 0); this.handle.setPoints(x+37, y+6, x+37, y+69); this.display.setText(\"2\"); } \/\/ Set to option 3 and reconfigure display public void setOption3() { this.option = 3; this.setFillColor(0, 255, 0); this.handle.setPoints(x+60, y+15, x+15, y+60); this.display.setText(\"3\"); } @Override public int compareTo(TriOption other) { return (this.getOption() - other.getOption()); } public String toString() { return \"RotatingSelector (option=\" + this.getOption() + \")\"; } }   "
},
{
  "id": "listing-if-panel",
  "level": "2",
  "url": "section-if-custom.html#listing-if-panel",
  "type": "Listing",
  "number": "11.2.7",
  "title": "",
  "body": " RotatingSelector.java   \/\/ Panel.java import java.util.Arrays; import doodlepad.*; public class Panel extends Pad { private TriOption[] selectors; public Panel() { super(\"Selector Panel\", 480, 300); \/\/ Base class constructor selectors = new TriOption[3]; \/\/ Create and fill array selectors[0] = new SlidingSelector( 100, 100); selectors[1] = new TogglingSelector(200, 110); selectors[2] = new RotatingSelector(300, 110); } \/\/ Handle mouse-pressed on Pad public void onMousePressed(double x, double y, int button) { \/\/ Sort based on selected state Arrays.sort(selectors); \/\/ Print order for (TriOption sel: selectors) { System.out.println(sel); } } \/\/ Start here public static void main(String[] args) { new Panel(); } }   "
},
{
  "id": "figure-if-panel-start",
  "level": "2",
  "url": "section-if-custom.html#figure-if-panel-start",
  "type": "Figure",
  "number": "11.2.8",
  "title": "",
  "body": " Panel.java   "
},
{
  "id": "figure-if-panel-step1",
  "level": "2",
  "url": "section-if-custom.html#figure-if-panel-step1",
  "type": "Figure",
  "number": "11.2.9",
  "title": "",
  "body": " Panel.java with options selected   "
},
{
  "id": "figure-if-panel-step2",
  "level": "2",
  "url": "section-if-custom.html#figure-if-panel-step2",
  "type": "Figure",
  "number": "11.2.10",
  "title": "",
  "body": " Panel.java with options changed   "
},
{
  "id": "section-if-polymorph",
  "level": "1",
  "url": "section-if-polymorph.html",
  "type": "Section",
  "number": "11.3",
  "title": "Interfaces and Polymorphism",
  "body": " Interfaces and Polymorphism   Like a class, an interface can be used as a type. Variables may be defined as type interface. Furthermore, any instance of a class that implements an interface may be assigned to a variable of type interface. When a derived class object is assigned to a variable of type base class, only methods implemented in the base class may be accessed using the base class typed variable. Similarly, when an object that implements an interface is assigned to a variable of type interface, only methods included in the interface definition may be access through the variable.  You will recognize this ability to assign any object that implements an interface to a variable of type interface as a form of subtype polymorphism , also known as polymorphic reference variables . In addition to inheritance, interfaces represent the second form of subtype polymorphism available in Java.  Subtype polymorphism joins method polymorphism as the two broader forms of polymorphism implemented by Java. Recall that method polymorphism itself has two forms, that is, overloading of a method by defining two method having the same name but different signatures, and overriding a method in a base class by redefining the exact same signature in a dervied class.  With the option for a Java class to implement multiple interfaces, the ability of a single class to \"morph\" into multiple other types provides a kind of enhancement over what is possible with inheritance alone. An object can take on as many forms as the interfaces it implements. In this way, it can become the subject of a wide variety of algorithms, each expecting the methods in a given interface are implemented fully.  To summarize, refer to . The two broad types of polymorphism in Java are subtype polymorphism and method polymorhism . Subtype polymorphism is divided into inheritance (also known as implementation inheritance ), and interfaces (also known as interface inheritance ). Method polymorphism is divided into overloading ( two methods in the same class having the same name but different signatures), and overriding (a method in a dervied class with the same signature as a method in a base class).   Polymorphism in Java    One minor shortcoming of multiple interface inheritance (implementing multiple interfaces) is that an object cannot be considered multiple interface types simultaneously . This means that an object must be cast from one interface type to another before it is considered to be of that type and usable as such. This minor limitation is vastly outweighed by the flexibility we get from implementing multiple interfaces coupled with the help of the compiler to verify that all interface contract terms are fulfilled.   "
},
{
  "id": "p-892",
  "level": "2",
  "url": "section-if-polymorph.html#p-892",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polymorphic reference variables "
},
{
  "id": "p-893",
  "level": "2",
  "url": "section-if-polymorph.html#p-893",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Subtype polymorphism method polymorphism "
},
{
  "id": "p-895",
  "level": "2",
  "url": "section-if-polymorph.html#p-895",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subtype polymorphism method polymorhism Subtype polymorphism inheritance implementation inheritance interfaces interface inheritance Method polymorphism overloading overriding "
},
{
  "id": "figure-if-java-polymorphism",
  "level": "2",
  "url": "section-if-polymorph.html#figure-if-java-polymorphism",
  "type": "Figure",
  "number": "11.3.1",
  "title": "",
  "body": " Polymorphism in Java   "
},
{
  "id": "section-if-concepts",
  "level": "1",
  "url": "section-if-concepts.html",
  "type": "Section",
  "number": "11.4",
  "title": "Key Concepts",
  "body": " Key Concepts   An interface is a kind of contract to be fulfilled by a class definition.  An interface is made up of one or more method signatures .  A class implements an interface when it adds the implements keyword and an interface name to the start line of the class.  When a class implements an interface it is obligated to implement all methods signatures defined in that interface.  The compiler enforces the interface implementation contract. If the contract is not fulfilled completely, the compiler will fail with an error.  Interfaces may be defined using the angle brackets of generic notation which allows methods signatures to be parameterized by type.  By implementing the java.lang.Comparable<T> Interface, objects may be sorted by Arrays.sort(…) or Collections.sort(…) .  By implementing the java.util.Iterator<T> and java.util.Iterable<T> interfaces, objects may be iterated using the enhanced-for statement.  Polymorphism occurs when a single idea has many forms. There are multiple ways that Java supports polymorphism.  Polymorphic methods are implemented when multiple methods of the same name have distinct signatures  Polymorphic methods also occur when derived classes override base class methods  Polymorphic reference variables occur when a variable of type base class reference a value of type derived class.  Polymorphic reference variables occur when a variable of type interface is capable of referencing any object that implements the interface.  As the number of objects in a program grows, so does its complexity. It is essential to design your program before starting to code.  Implementation inheritance in Java occurs when the extends keyword is used (is-a)  Interface inheritance in Java occurs when the implements keyword is used (another kind of is-a)   "
},
{
  "id": "section-if-exercises",
  "level": "1",
  "url": "section-if-exercises.html",
  "type": "Section",
  "number": "11.5",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-ex-errors",
  "level": "1",
  "url": "section-ex-errors.html",
  "type": "Section",
  "number": "12.1",
  "title": "Types of Errors",
  "body": " Types of Errors   Let's consider the three broad groups of problems that can occur while writing and running a computer program.    Syntax Errors  Syntax errors occur when initially writing a program. In Java, you might forget a closing curly brace or a semicolon at the end of a statement. Maybe you separate the elements of an array initializer with semicolons instead of commas, or your method reference is define with a single colon instead of the :: operator. There are many opportunities for writing syntactially invalid Java.  The Java compiler is the authoritative source on syntax errors. By now you've no doubt seen plenty after a compilation step. The compiler output can be cryptic on first glance. But take the time to read the output carefully. It can tell you everything you need to know. At a minimum, find the file and line number in the output. This gives you a place to start.  Fortunately, modern editors will help you find your syntax errors long before you compile your program. Good editors for programming may even suggest what might be wrong and offer a solution that can be performed automatically, such as adding a forgotten import. Language-specific editor plug-ins are especially useful. AI-driven plug-ins are now available. These will suggest the next thing that you may want to add to your progam based on what you typed in the past. Be very careful with AI plug-ins. Make sure you understand what is suggested; there is no guarantee suggestions are correct.  When debugging a program, always fix the first reported syntax error first, and try to recompile. Frequently, the first error triggers a long list of what looks like additional errors. Fixing the first error often fixes them all, or a large number.   Best Practice: Fix First Compiler Error First  Always fix the first compiler error and recompile. Fixing one error can often fix many more.     Logic Errors  At the other end of the process are logic errors. These occur when your program apparently works perfectly. It compiles and runs just fine. Unfortunately, its behavior or output is wrong. Logic errors occur when you stop a loop too soon, reuse variables and forget to initialize them, define the conditions of a branch incorrectly, invoke the wrong method signature overload, etc.  Logic errors are caught during testing. You might be performing informal testing after implementing a feature, or you might have handed off your program to a formal testing team, who's job it is to compare your program's behavior against written specifications. In any case, logic errors can be hard to find. It is difficult to anticipate how a program will be used once it is in the hands of someone else. Try to test for all possible input and interaction, however improbable.    Runtime Errors  The last broad category of errors occurs after a program compiles, but something goes wrong while it is running. Java responds to such problem by throwing an exception . Like nearly everything else in Java, a thrown exception is a type of object created by instantiating a suitable Exception class. A thrown exception object may come from code in the Core Library, or you may instantiate and throw exceptions on your own. The particular Exception class instantiated identifies the detected problem.  If there is no intervention on the aprt of your program, Java will eventually print a trace of the current state of the call stack when the exception object is thrown. The call stack tells us absolutely everything that was underway at the time the error was detected. Use the call stack to find the exact file and location when the exception was thrown. Then move down the call stack to see from where in your program the method was invoked. Depending upon the structure of your program, the call stack can be many levels deep. You should be able to trace the error all the way back to the initial trigger. The mistake could have occured at any level. We'll take a closer look at what the call stack does and how it functions in .  The important thing to know about runtime errors is that they may be caught at runtime, and handled gracefully, without causing your program to dump a trace of the call stack to the shell. Typical runtime errors include inadvertently dividing by zero, or attempting to open a file that does not exist. A trace of he call stack might be useful to you, but it is generally useless to the average user. The message \"File not found. Please try again.\" is far more useful to the average user than a call stack trace.  In this chapter we will explore exceptions, what causes them to be thrown, how to catch and handle them, and even how to define and throw our own exception objects.   "
},
{
  "id": "p-906",
  "level": "2",
  "url": "section-ex-errors.html#p-906",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "throwing an exception "
},
{
  "id": "p-907",
  "level": "2",
  "url": "section-ex-errors.html#p-907",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "call stack "
},
{
  "id": "p-908",
  "level": "2",
  "url": "section-ex-errors.html#p-908",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "caught "
},
{
  "id": "section-ex-classes",
  "level": "1",
  "url": "section-ex-classes.html",
  "type": "Section",
  "number": "12.2",
  "title": "Common Exception Classes",
  "body": " Common Exception Classes   The Jave Core Library provides many prewritten exception classes that it uses to indicate when runtime errors occur. illustrates many common exception classes making up part of this hierarchy.   Part of the Java Exception Class Hierarchy    In under the Throwable class, things that can go wrong in Java at runtime are grouped under two broad base classes, Error and Exception . Classes that derive from Error are very serious problems from which there is no recovery possible. These tend to occur when system resources are exhausted, such as when an instance of the OutOfMemoryError class, the StackOverflowError class, or the ominous ThreadDeath class, is thrown. Because we cannot catch and handle these exceptions, the best we can do is note that they exist and hope we never encounter them. The Exception class and its derived classes are of more interest because we can catch these exceptions and hopefully handle them in a productive way.  The Core Library includes a long list of classes that derive from the Exception class. You are able to identify Exception derived classes by their name; all classes that derive from Exception end with \"Exception.\" The following lists several examples.   ArithmeticException - Occurs when dividing by 0  NullPointerException - A reference variable with a value of null was accessed  IndexOutOfBoundsException - an out-of-bounds index was passed to an ArrayList  ArrayIndexOutOfBoundsException - an out-of-bounds index was passed to an array  IllegalArgumentException - An illegal or inappropriate argument was passed to a method   Fortunately, when thrown, each of these and many additional exceptions may be caught and handled.  printStackTrace() method   "
},
{
  "id": "figure-ex-exception-class-hierarchy",
  "level": "2",
  "url": "section-ex-classes.html#figure-ex-exception-class-hierarchy",
  "type": "Figure",
  "number": "12.2.1",
  "title": "",
  "body": " Part of the Java Exception Class Hierarchy   "
},
{
  "id": "p-911",
  "level": "2",
  "url": "section-ex-classes.html#p-911",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Error Exception "
},
{
  "id": "section-ex-catching",
  "level": "1",
  "url": "section-ex-catching.html",
  "type": "Section",
  "number": "12.3",
  "title": "Catching Exceptions",
  "body": " Catching Exceptions  Exceptions that occur at runtime can be caught and handled, regardless if they are thrown by a Core Library or if you throw them yourself. The key to catching a thrown exception object is to use a try-catch block that encloses the section of your code that may throw an exception in the try-block, with additional statements added to a catch-block to handle an exception, if thrown.   Consider the following sample program that has an obvious divide-by-zero error. When we compile and run, Java throws a java.lang.ArithmeticException object.   DivideByZero.java with no try-catch   \/\/ DivideByZero.java public class DivideByZero { public static void main(String[] args) { int numer = 2; int denom = 0; int result; result = numer \/ denom; }     javac DivideByZero.java java DivideByZero  Exception in thread \"main\" java.lang.ArithmeticException: \/ by zero at DivideByZero.main(DivideByZero.java:9)   To detect a thrown exception, embed all statements in try-block . To catch exceptions thrown from code in a try-block, follow the try with one or more catch-blocks . Consider the following updated sample program in , with a try-catch statement added.   DivideByZero.java with try-catch   \/\/ DivideByZero.java public class DivideByZero { public static void main(String[] args) { int numer = 2; int denom = 0; int result; try { \/\/ Try division result = numer \/ denom; } catch (ArithmeticException e) { \/\/ Catch ArithmeticException objects System.out.println(\"You attempted to divide by zero.\"); } } }     javac DivideByZero.java java DivideByZero  You attempted to divide by zero.   The statement that performs the division was moved into a try-block, so any problems with this statement will be caught. Following the try-block is a catch-block, which is followed by a pair of parentheses containing the declaration of an ArithmeticException variable. This format indicates that any exception object that can be bound to the e variable will cause program flow to enter the catch-block. Remember, due to subtype polymorphism, we can assign any object a type class or any one of its derived classes to a variable of type class. In , the catch-block with handle any thrown ArithmeticException objects, or objects with a type that matches any classes that derive from ArithmeticException. In this example an ArithmeticException was thrown, which matches the declaration in the catch-block, and so the message is printed.    Multiple Catch-blocks  You may provide multiple catch-blocks, each with different exception class variable declarations. The first declaration that matches the thrown exception is the block that gets executed, if any. If a different exception object is thrown by the example above, the catch-block would not match and Java would resort to dumping the stack. To avoid this kind of problem, it can be useful to add a final catch-block that catches an Exception base class. This way we know that all exceptions will be caught, no matter which one is thrown, because all exception objects can be assigned to a variable with base class type Exception.  Consider the example in . In main(…) a nums array is initialized and then the quotient of two elements are computed in the try-block of a try-catch that catches an ArithmeticException. The denominator is nums[0] which has a value of 0, so an ArithmeticException is certainly possible. The shell session following shows the result of running this program.   ExceptionTest.java (version 1)   \/\/ ExceptionTest.java public class ExceptionTest { public static void main(String[] args) { int[] nums = {0, 6, 2}; int result; try { result = nums[3]\/nums[0]; System.out.println(\"result: \" + result); } catch (ArithmeticException e) { System.out.println(\"You divided by 0\"); } } }     javac ExceptionTest.java java ExceptionTest  Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3 at ExceptionTest.main(ExceptionTest.java:8)   The output tells us that has another problem besides dividing by 0. It is telling us that in the expression nums[3] the index 3 is out of bounds. Referring back to nums[] we see that indeed the array has 3 elements, and therefore the last item is at index 2. Index 3 is out of bounds.  But why did we recieve an ArrayIndexOutOfBoundsException exception and not an ArithmeticException? The answer relates to how a quotient is evaluated, left-to-right. The numerator is evaluted before the denominator, and so the out-of-bounds index in the array is detected first. Had the index be in-bounds, the ArithmeticException would have been thrown instead.  We can catch this new exception by adding another catch-statement to the try-catch. We can add as many catch-statements as we like, with the understanding that the first catch-block with a declaration that matches the thrown exception is the one that will execute. But what if another type of exception is thrown, one that we have not anticipated? Rather than testing specifically for ArrayIndexOutOfBoundsException, let's move up the Exception class hierarchy and take advantage of subtype polymorphism to catch multiple exceptions with a single catch-statement. From we know that all exceptions inherit Exception. Let's update to catch Exception objects as well, and test our program again. See modifications in . Note that in the catch-block we are simply printing the exception object directly. Because Exception classes override toString() by returning a String description of the exception, the result is a reasonably informative indication of the problem that occurred.   ExceptionTest.java (version 2)   \/\/ ExceptionTest.java public class ExceptionTest { public static void main(String[] args) { int[] nums = {0, 6, 2}; int result; try { result = nums[3]\/nums[0]; System.out.println(\"result: \" + result); } catch (ArithmeticException e) { System.out.println(\"You divided by 0\"); } catch (Exception e) { \/\/ Catch Exception objects System.out.println(e); \/\/ Something else happened } } }     javac ExceptionTest.java java ExceptionTest  java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3   Output from running tells us the class of the exception that was caught and a description of the problem.    The Finally Block  The optional last part of a try-catch statement is the finally block . You may add one finally block to end of a try-catch, or leave it out entirely. Unlike an \"else\" in a multi-branch if-statement or a \"default\" in a switch-statement, the \"finally\" of a try-catch statement always executes, regardless of whether or not an exception was thrown in the try-block, or even if a thrown exception was caught. The finally-block always executes.  Typically, a finally-block is used for cleanup tasks that must occur regardless of whether or not your code executed successfully. Cleanup tasks take the form of closing open files or open network and database connections. Depending n the resource being accessed, failing to clean up can lead to what's know as a resource leak because leaving a resource open without properly closing it can make it unusable by others. Anything that must be done at the end of a try-catch statement may be placed in a finally-block, and Java will guarantee that it is executed.  Let's add a finally-block to and test our new program, both with a statement that throws an exception and with a statement that succeeds.   ExceptionTest.java (version 3)   \/\/ ExceptionTest.java public class ExceptionTest { public static void main(String[] args) { int[] nums = {0, 6, 2}; int result; try { result = nums[3]\/nums[0]; \/\/ Throws exception \/\/result = nums[1]\/nums[2]; \/\/ Does not throw exception System.out.println(\"result: \" + result); } catch (ArithmeticException e) { System.out.println(\"You divided by 0\"); } catch (Exception e) { \/\/ Catch Exception objects System.out.println(e); \/\/ Something else happened } finally { \/\/ Time to clean up System.out.println(\"Cleaning up...\"); } } }     javac ExceptionTest.java java ExceptionTest  java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3 Cleaning up...   The output from above demonstrates that in spite of the exception being thrown, the finally-block is executed.  Let's comment the line that throws the exception, uncomment the line that succeeds, and repeat the test.   \/\/result = nums[3]\/nums[0]; \/\/ Throws exception result = nums[1]\/nums[2]; \/\/ Does not throw exception    javac ExceptionTest.java java ExceptionTest  result: 3 Cleaning up...   The expression evaluates successfully, prints a result of 3, and still the finally-block is executed.    Checked vs. Unchecked Exceptions  At the bottom of the two main branches of the Exception class hierarchy in you will find the two labels (checked exceptions) and (unchecked exceptions) . The right branch, including RuntimeException and all its derived classes are considered unchecked exception classes. This means that if a block of code has the potential to throw one of these exception classes, it is not necessary to catch the exception. Java does not check that these exceptions are thrown. On the other hand, classes under the left branch, that is, derived classes of Exception but not RuntimeException or one of its derived classes, are considered checked exceptions . If a block of code has the potential to throw a checked exception, including IOException or one of its derived classes such as FileNotFoundException, then either the code must be placed in a try-block or the exception may be deferred by indicating that the exception is thrown my modifying the method using a throws keyword and the excetion class name. In either case, the exception must be caught somewhere in your program.  In the next section we will discuss reading and writing files using Java. Related classes have the potential to throw IOExceptions, therefore most of what we do will be placed in a try-block.   "
},
{
  "id": "listing-ex-no-try",
  "level": "2",
  "url": "section-ex-catching.html#listing-ex-no-try",
  "type": "Listing",
  "number": "12.3.1",
  "title": "",
  "body": " DivideByZero.java with no try-catch   \/\/ DivideByZero.java public class DivideByZero { public static void main(String[] args) { int numer = 2; int denom = 0; int result; result = numer \/ denom; }   "
},
{
  "id": "p-916",
  "level": "2",
  "url": "section-ex-catching.html#p-916",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "try-block catch-blocks "
},
{
  "id": "listing-ex-try",
  "level": "2",
  "url": "section-ex-catching.html#listing-ex-try",
  "type": "Listing",
  "number": "12.3.2",
  "title": "",
  "body": " DivideByZero.java with try-catch   \/\/ DivideByZero.java public class DivideByZero { public static void main(String[] args) { int numer = 2; int denom = 0; int result; try { \/\/ Try division result = numer \/ denom; } catch (ArithmeticException e) { \/\/ Catch ArithmeticException objects System.out.println(\"You attempted to divide by zero.\"); } } }   "
},
{
  "id": "listing-ex-extest1",
  "level": "2",
  "url": "section-ex-catching.html#listing-ex-extest1",
  "type": "Listing",
  "number": "12.3.3",
  "title": "",
  "body": " ExceptionTest.java (version 1)   \/\/ ExceptionTest.java public class ExceptionTest { public static void main(String[] args) { int[] nums = {0, 6, 2}; int result; try { result = nums[3]\/nums[0]; System.out.println(\"result: \" + result); } catch (ArithmeticException e) { System.out.println(\"You divided by 0\"); } } }   "
},
{
  "id": "listing-ex-extest2",
  "level": "2",
  "url": "section-ex-catching.html#listing-ex-extest2",
  "type": "Listing",
  "number": "12.3.4",
  "title": "",
  "body": " ExceptionTest.java (version 2)   \/\/ ExceptionTest.java public class ExceptionTest { public static void main(String[] args) { int[] nums = {0, 6, 2}; int result; try { result = nums[3]\/nums[0]; System.out.println(\"result: \" + result); } catch (ArithmeticException e) { System.out.println(\"You divided by 0\"); } catch (Exception e) { \/\/ Catch Exception objects System.out.println(e); \/\/ Something else happened } } }   "
},
{
  "id": "p-924",
  "level": "2",
  "url": "section-ex-catching.html#p-924",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finally block finally block always "
},
{
  "id": "listing-ex-extest3",
  "level": "2",
  "url": "section-ex-catching.html#listing-ex-extest3",
  "type": "Listing",
  "number": "12.3.5",
  "title": "",
  "body": " ExceptionTest.java (version 3)   \/\/ ExceptionTest.java public class ExceptionTest { public static void main(String[] args) { int[] nums = {0, 6, 2}; int result; try { result = nums[3]\/nums[0]; \/\/ Throws exception \/\/result = nums[1]\/nums[2]; \/\/ Does not throw exception System.out.println(\"result: \" + result); } catch (ArithmeticException e) { System.out.println(\"You divided by 0\"); } catch (Exception e) { \/\/ Catch Exception objects System.out.println(e); \/\/ Something else happened } finally { \/\/ Time to clean up System.out.println(\"Cleaning up...\"); } } }   "
},
{
  "id": "p-930",
  "level": "2",
  "url": "section-ex-catching.html#p-930",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unchecked checked exceptions throws "
},
{
  "id": "section-ex-reading-files",
  "level": "1",
  "url": "section-ex-reading-files.html",
  "type": "Section",
  "number": "12.4",
  "title": "Reading Files",
  "body": " Reading Files  The Java Core Library provides a wide range of classes for reading and writing the content of files. In section we begin with background on the nature of files and theor formats, and then explore the most common ways to read and write plain text files using Java.   The Nature of a File  There is no doubt that you are familiar with the concept of a file. We use files to store documents, spreadsheets, pictures, music, games, compressed archives, and more. Files are organized in a hierarchy and stored in a file system, where folders or directories are the containers that contain files or other folders.  A more fundamental way to think of a file is as an ordered sequence of bytes that is assigned a unique name plus location (a path) in file system storage. A file system also stores properties about a file, such as who has access to the file's contents and whether or not it should be interpreted as data or an executable program. How to interpret these bytes varies widely. Even within a single category of file type, algorithms for extracting file contents can be drastically different. For example, the difference between a JPEG and BMP is significant.  The file extension of a file name is a hint to the operating system about the file's type, but not a guarantee. A file extension is the final few characters that make up a file name after the final \".\" character. Examples are \".txt\", \".docx\", \".html\", \".exe\". Operating systems typically use the extension to identify the program that knows how to open the file and interpet its contents. Never open a file unless you trust the author, especially a file that is executable . On the Windows operating system, an executable file often has a \".exe\" extension. On other operating systems, a file is executable if one of its file system properties identifies it as such.  The format that we'll work with here is often referred to as plain text files . The way to interpret the sequence of bytes in a plain text file is as encoding the sequence of characters in the file. The most common standard for translating between the numerical byte value and its character equivalent is the ASCII (See ). To interpret the contents of a plain text file, read the byte sequence and substitute each value with an equivalent character from the ASCII lookup table. Writing a plain text file is the inverse process. Convert your file contents to a String, and then write the ASCII bytes to a file that correspond to the character sequence of that String.  One shortcoming of plain text files is that they can be very large. There is no method of compression employed and so we might find significant content duplication. Another shortcoming is that the content is limited to characters. There is no method for storing native numerical values, which can be very inefficient. For example, the number 3.1415926 as a floating point number is stored in memory using four bytes. In a plain text file each of the nine characters must be stored separately, and reading the number involves the execution of a parsing algorithm to reinterpret the characters as the number. The advantage of plain text files is that the content is easily interpreted, with ASCII character code translation built right into all programming languages, including Java. Another advantage is that many files types are actually plain text files. For example, our Java programs are plain text, although, our compiled \".class\" files are not. Also, HTML files and CSV files (comma-separated values) are stored as plain text.  Let's explore how to read and write plain text files using Java.    Reading with Scanner and File  In we learned how to prompt the user for input from the terminal and to use the Scanner class to read the response. Recall that the Scanner read and interpreted user-entered characters from System.in . In a similar manner, we can use a Scanner to read and interpret bytes from a file. The same Scanner methods apply; only the source of byte data is different. Refer to for a refresher.  A Scanner is instantiated with a java.io.File object that represents a file on the local file system. One File constructor takes a String containing the unique file location. A file location can be a complete path to the file from the file system root, or a relative path from the location of the Java program. We'll assume that the file we want to read is in the same folder as our Java program, and so we can pass only the file name as a String to the File constructor.  For the examples that follow, we assume that you have a plain text file named \"data.txt\" available to read. You can create your own text file using your programming editor or a program like Notepad. You can also enter data into a spreadsheet like Microsoft Excel and save as a \".csv\" or \".txt\" file. The same goes for a program like Microsoft Word. You must save your file as a \".txt\" file. Otherwise, it may not be in a plain text format.  The first step to reading from a file is to instantiate a File object representing the file stored in your file system. Assuming the data file is anmed \"data.txt\" and is saved to the same file system location as your Java program, you can accomplish this with the following statement, where fileName is a String variable with the name of the file to be opened. Before you can instantiate a File object, you must import it from java.io.File . Refer to for the completed program.   File fp = new File(fileName);   With the File object instantiated, the next step is to pass it to the Scanner class constructor to create a new Scanner configured to read from the File object. A Scanner that wraps a File object throws a FileNotFoundException. Because this is a checked exception, the Scanner must be created in a try-block. In the following code snippet, we declare the Scanner variable in the outer method scope because we will use it later, but the instantiation of the Scanner object must be done in the try-block.   import java.util.Scanner; \/\/ Required imports import java.io.File; import java.io.FileNotFoundException; \/\/ … Scanner scn = null; \/\/ Scanner variable in method scope File fp = new File(fileName); \/\/ Create a new File object try { \/\/ Catch exceptions scn = new Scanner(fp); \/\/ Wrap File in a Scanner \/\/ … catch( FileNotFoundException e ) { \/\/ Handle checked exception \/\/ … finally { \/\/ Always execute scn.close(); \/\/ Close the Scanner \/\/ …   In the above code snippet note that we used a finally-block to close the Scanner. If the Scanner is not closed properly, we run the risk of leaking the resources.  For our file reading examples we will read files one line at a time, rather than reading data item by data item. We use the Scanner's hasNextLine() method to check if the file has another line of text to be read, and its readLine() method to read the next line as a String. includes the complete Java program with a utility method named printFile(…) to read all lines from a file and print them to the terminal. Following this listing is a shell session demonstrating compilation and execution of the program. Our example \"data.txt\" file contains random numbers generated using Excel.   ReadFile1.java   \/\/ ReadFile1.java import java.util.Scanner; \/\/ Required imports import java.io.File; import java.io.FileNotFoundException; public class ReadFile1 { public static void main(String[] args) { printFile(\"data.txt\"); \/\/ Print file given path } \/\/ Utility to print a file's contents public static void printFile(String fileName) { String line; \/\/ Helper to hold read line String Scanner scn = null; \/\/ Scanner variable in method scope File fp = new File(fileName); \/\/ Create a new File object try { \/\/ Catch exceptions scn = new Scanner(fp); \/\/ Wrap File in a Scanner while (scn.hasNextLine()) { \/\/ Continue while more to read line = scn.nextLine(); \/\/ Read line from file System.out.println( line ); \/\/ Print line } } catch( FileNotFoundException e ) { \/\/ Handle checked exception System.out.println(e); } finally { \/\/ Always execute scn.close(); \/\/ Close the Scanner } } }     javac ReadFile1.java java ReadFile1  0.493201369 0.197927567 0.213527982 0.888503267 0.509179639 …     Reading with FileReader and BufferedReader  An alternative way to read plain text files in Java is to use the FileReader and BufferedReader classes. The FileReader class reads files byte-by-byte. This is not useful if we are interested in reading a file line-by-line. The BufferedReader class will wrap a FileReader object and use it to buffer file contents and the return these contents in a more convenient manner. For our purposes, we are most interested in the BufferedReader's realLine() method, which returns the next line from the bufferred file contents.  Find a complete example of reading a plain text file line-by-line in . A BufferedReader returns null from its readLine() method when there are no more lines to read. With this in mind, pay close attention to the way the while-statement in is constructed. We invoke readLine() once before the while-statement, and enter the statement only if the line value is not null. This prevents further action to be taken on an empty file. Also, we read the next line at the end of the while-statement body to check if there is another line to be processed, and continue the while-statement only if there is another line.   works in a manner very similar to . We must catch the IOException thrown by the FileReader constructor, and we must use the finally-statement to close the opened BufferedReader to prevent a resource leak. Output generated from running this program is identical to running .   ReadFile2.java   \/\/ ReadFile2.java import java.io.*; \/\/ Required imports public class ReadFile2 { public static void main(String[] args) { printFile(\"data.txt\"); \/\/ Print file given path } \/\/ Utility to print a file's contents public static void printFile(String fileName) { String line; \/\/ Helper variables BufferedReader br = null; FileReader fr = null; try { \/\/ Catch exceptions fr = new FileReader(fileName); \/\/ Throws IOException br = new BufferedReader(fr); \/\/ Wrap FileReader line = br.readLine(); \/\/ Read next line while(line != null) { \/\/ null when no more to read System.out.println( line ); \/\/ Print read line line = br.readLine(); \/\/ Try again } br.close(); \/\/ Close BufferedReader } catch (IOException e) { \/\/ Handle checked exception System.out.println(e); } } }      Defering Exception Handling  Each of the above versions of the printFile(…) method was designed to handle any IOExceptions that might occur right in the method itself. Rather than handling the exceptions in the method, exception handling can be deferred and handled in the invoking method instead. To make the compiler happy about not handling a checked exception in the place it may be thrown, we must declare that the method throws the exception. This has the effect of passing the requirement on the the invoking method. Eventually the checked exception must be handled in your program.   is an alternative version of . The definition of printFile(…) in had no try-catch. Instead, it declares that it throws the checked FileNotFoundException by adding throws FileNotFoundException to the method declaration. This requires us to move the try-catch to main(…) where printFile(…) is invoked. The invocation of this method must be placed in the try-block of the try-catch otherwise the compiler will print an error and fail.   ReadFile1B.java   \/\/ ReadFile1B.java import java.util.Scanner; \/\/ Required imports import java.io.File; import java.io.FileNotFoundException; public class ReadFile1B { public static void main(String[] args) { try { \/\/ Catch exceptions printFile(\"data.txt\"); \/\/ Print file Scanner } catch( FileNotFoundException e ) { \/\/ Handle checked exception System.out.println(e); } } \/\/ Utility to print a file's contents. Defer handling FileNotFoundException public static void printFile(String fileName) throws FileNotFoundException { String line; \/\/ Helper to hold read line String File fp = new File(fileName); \/\/ Create a new File object Scanner scn = new Scanner(fp); \/\/ Wrap File in a Scanner while (scn.hasNextLine()) { \/\/ Continue while more to read line = scn.nextLine(); \/\/ Read line from file System.out.println( line ); \/\/ Print line } scn.close(); \/\/ Close the Scanner } }     "
},
{
  "id": "p-934",
  "level": "2",
  "url": "section-ex-reading-files.html#p-934",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "file extension "
},
{
  "id": "p-935",
  "level": "2",
  "url": "section-ex-reading-files.html#p-935",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "plain text files "
},
{
  "id": "listing-ex-readfile1",
  "level": "2",
  "url": "section-ex-reading-files.html#listing-ex-readfile1",
  "type": "Listing",
  "number": "12.4.1",
  "title": "",
  "body": " ReadFile1.java   \/\/ ReadFile1.java import java.util.Scanner; \/\/ Required imports import java.io.File; import java.io.FileNotFoundException; public class ReadFile1 { public static void main(String[] args) { printFile(\"data.txt\"); \/\/ Print file given path } \/\/ Utility to print a file's contents public static void printFile(String fileName) { String line; \/\/ Helper to hold read line String Scanner scn = null; \/\/ Scanner variable in method scope File fp = new File(fileName); \/\/ Create a new File object try { \/\/ Catch exceptions scn = new Scanner(fp); \/\/ Wrap File in a Scanner while (scn.hasNextLine()) { \/\/ Continue while more to read line = scn.nextLine(); \/\/ Read line from file System.out.println( line ); \/\/ Print line } } catch( FileNotFoundException e ) { \/\/ Handle checked exception System.out.println(e); } finally { \/\/ Always execute scn.close(); \/\/ Close the Scanner } } }   "
},
{
  "id": "listing-ex-readfile2",
  "level": "2",
  "url": "section-ex-reading-files.html#listing-ex-readfile2",
  "type": "Listing",
  "number": "12.4.2",
  "title": "",
  "body": " ReadFile2.java   \/\/ ReadFile2.java import java.io.*; \/\/ Required imports public class ReadFile2 { public static void main(String[] args) { printFile(\"data.txt\"); \/\/ Print file given path } \/\/ Utility to print a file's contents public static void printFile(String fileName) { String line; \/\/ Helper variables BufferedReader br = null; FileReader fr = null; try { \/\/ Catch exceptions fr = new FileReader(fileName); \/\/ Throws IOException br = new BufferedReader(fr); \/\/ Wrap FileReader line = br.readLine(); \/\/ Read next line while(line != null) { \/\/ null when no more to read System.out.println( line ); \/\/ Print read line line = br.readLine(); \/\/ Try again } br.close(); \/\/ Close BufferedReader } catch (IOException e) { \/\/ Handle checked exception System.out.println(e); } } }   "
},
{
  "id": "listing-ex-readfile1b",
  "level": "2",
  "url": "section-ex-reading-files.html#listing-ex-readfile1b",
  "type": "Listing",
  "number": "12.4.3",
  "title": "",
  "body": " ReadFile1B.java   \/\/ ReadFile1B.java import java.util.Scanner; \/\/ Required imports import java.io.File; import java.io.FileNotFoundException; public class ReadFile1B { public static void main(String[] args) { try { \/\/ Catch exceptions printFile(\"data.txt\"); \/\/ Print file Scanner } catch( FileNotFoundException e ) { \/\/ Handle checked exception System.out.println(e); } } \/\/ Utility to print a file's contents. Defer handling FileNotFoundException public static void printFile(String fileName) throws FileNotFoundException { String line; \/\/ Helper to hold read line String File fp = new File(fileName); \/\/ Create a new File object Scanner scn = new Scanner(fp); \/\/ Wrap File in a Scanner while (scn.hasNextLine()) { \/\/ Continue while more to read line = scn.nextLine(); \/\/ Read line from file System.out.println( line ); \/\/ Print line } scn.close(); \/\/ Close the Scanner } }   "
},
{
  "id": "section-try-with-resources",
  "level": "1",
  "url": "section-try-with-resources.html",
  "type": "Section",
  "number": "12.5",
  "title": "try-with-resources",
  "body": " try-with-resources   In the two printFile(…) implementations given in and , we made sure to close the opened resource to ensure that we had no resource leaks. A better way to ensure suitable resources are closed is to use a newer version of try-catch called try-with-resources . This newer version of try-catch takes a closable object as an argument and closes it automatically when its block scope is exited. There is no reason to use finally-statement or other means of checking that the resource is closed in a try-with-resources statement. Java takes of it for us.  For an object resource to be suitable for use in a try-with-resources, it must implement the AutoClosable interface, given below. This interface includes one signature for the close() method. This is the method invoked by a try-with-resources when its block scope is exited.   public interface AutoCloseable { void close() throws Exception; }   The format of a try-with-resources is exactly like a try-catch, only with a parenthesized object declaration added between the try keyword and its opening { . Because both Scanner and BufferedReader implement the AutoClosable interface, we can rewrite the printFile(…) implementations in and to use try-with-resources instead. This simplifies the code and ensures the resources will always be closed properly.  It is a best practice to use one of the following two examples as your standard way to read a file line-by-line.   ReadFile1C.java   \/\/ ReadFile1C.java import java.util.Scanner; \/\/ Required imports import java.io.File; import java.io.FileNotFoundException; public class ReadFile1C { public static void main(String[] args) { printFile(\"data.txt\"); \/\/ Print file given path } \/\/ Utility to print a file's contents public static void printFile(String fileName) { String line; \/\/ Helpers to hold read line String File fp = new File(fileName); \/\/ Create a new File object try (Scanner scn = new Scanner(fp)) { \/\/ try-with-resources while (scn.hasNextLine()) { \/\/ Continue while more to read line = scn.nextLine(); \/\/ Read line from file System.out.println( line ); \/\/ Print line } } catch( FileNotFoundException e ) { \/\/ Handle checked exception System.out.println(e); } } }     ReadFile2C.java   \/\/ ReadFile2C.java import java.io.*; \/\/ Required imports public class ReadFile2C { public static void main(String[] args) { printFile(\"data.txt\"); \/\/ Print file given path } \/\/ Utility to print a file's contents public static void printFile(String fileName) { String line; \/\/ Helper variables \/\/ Open a file using try-with-resources notation try (BufferedReader br = new BufferedReader(new FileReader(fileName))) { \/\/ Read and assign line until null while ( (line = br.readLine()) != null ) { System.out.println(line); \/\/ Print line } } catch (FileNotFoundException ex) { \/\/ Thrown by FileReader System.out.println( \"File was not found: \" + fileName ); } catch (IOException ex){ \/\/ Thrown by BufferedReader System.out.println(ex); } } }     "
},
{
  "id": "p-950",
  "level": "2",
  "url": "section-try-with-resources.html#p-950",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "try-with-resources "
},
{
  "id": "p-951",
  "level": "2",
  "url": "section-try-with-resources.html#p-951",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "AutoClosable "
},
{
  "id": "listing-ex-readfile1c",
  "level": "2",
  "url": "section-try-with-resources.html#listing-ex-readfile1c",
  "type": "Listing",
  "number": "12.5.1",
  "title": "",
  "body": " ReadFile1C.java   \/\/ ReadFile1C.java import java.util.Scanner; \/\/ Required imports import java.io.File; import java.io.FileNotFoundException; public class ReadFile1C { public static void main(String[] args) { printFile(\"data.txt\"); \/\/ Print file given path } \/\/ Utility to print a file's contents public static void printFile(String fileName) { String line; \/\/ Helpers to hold read line String File fp = new File(fileName); \/\/ Create a new File object try (Scanner scn = new Scanner(fp)) { \/\/ try-with-resources while (scn.hasNextLine()) { \/\/ Continue while more to read line = scn.nextLine(); \/\/ Read line from file System.out.println( line ); \/\/ Print line } } catch( FileNotFoundException e ) { \/\/ Handle checked exception System.out.println(e); } } }   "
},
{
  "id": "listing-ex-readfile2c",
  "level": "2",
  "url": "section-try-with-resources.html#listing-ex-readfile2c",
  "type": "Listing",
  "number": "12.5.2",
  "title": "",
  "body": " ReadFile2C.java   \/\/ ReadFile2C.java import java.io.*; \/\/ Required imports public class ReadFile2C { public static void main(String[] args) { printFile(\"data.txt\"); \/\/ Print file given path } \/\/ Utility to print a file's contents public static void printFile(String fileName) { String line; \/\/ Helper variables \/\/ Open a file using try-with-resources notation try (BufferedReader br = new BufferedReader(new FileReader(fileName))) { \/\/ Read and assign line until null while ( (line = br.readLine()) != null ) { System.out.println(line); \/\/ Print line } } catch (FileNotFoundException ex) { \/\/ Thrown by FileReader System.out.println( \"File was not found: \" + fileName ); } catch (IOException ex){ \/\/ Thrown by BufferedReader System.out.println(ex); } } }   "
},
{
  "id": "section-ex-writing-files",
  "level": "1",
  "url": "section-ex-writing-files.html",
  "type": "Section",
  "number": "12.6",
  "title": "Writing Files",
  "body": " Writing Files   Plain text files can be written as well as read using Java. The use of only one Java class is required to write a plain text file, the FileWriter class. The FileWriter must be closed after it is open, and it implements the AutoClosable interface. Consequently, it is best to open it using a try-with-resources so that we allow Java to close the file for us.  There is important option to be aware of when opening a file to write using the FileWriter class. That is, where in the file should writing begin? While it is not uncommon to read an entire file all at once, files are often written incrementally, a bit at a time. For example, you might open a file and write a few lines and then close it. Open it again later in your program and close it again. The implication here is that writing will begin at the end of hte file . If we begin writing from the beginning each time, then the fill will contain only the last data written because the file is being overwritten each time.  When intending to append to the end of a file instead of writing from the beginning, we must be careful to open a file using a FileWriter in append mode . By default, the FileWriter opens in write mode , which begins writing from the beginning of a file. This may or may not be what you want. As a demonstration of FileWriter, let's write a utility function that appends a message to a log file.  The FileWriter class is in java.io.FileWriter and it has a constructor that take a file name String to be opened. If the file does not exist on your file system, FileWriter will create it for you. If it does exist, the existing file will be opened for writing.  The following code snippet demonstrates hwo to create two FileWriter objects using a file name String. The first fw1 variable references a FileWriter object that will write from the beginning of the file, overwriting anything that is in the file currently, and the second fw2 variable references a FileWriter object that will append to the file by beginning to write at the end of the file. Note that the only difference between these two constructors is the addition of a true after the file name when intending to append to the file.   \/\/ Open a file named log.txt and start writing from the beginning of the file FileWriter fw1 = new FileWriter(\"log.txt\"); \/\/ Open a file named log.txt and write by appending to the end of the file FileWriter fw2 = new FileWriter(\"log.txt\", true);   Because FileWriter throws the checked IOException, the object must be instantiated in a try-catch. Also, because the FileWriter must be closed to avoid a resource leak, we use a try-with-resources so Java takes care of closing the FileWriter for us. Beyond these two items, the only additional thing to know is that the FileWriter object uses its write(…) method to write to a file.  In we demonstrate the use of the FileWriter class by defining a utility method named log(…) which takes a message String and appends it to a file named \"log.txt\". This static method can very useful when you need to monitor a long running program that you cannot monitor continuously.  The implementation of log(…) in includes all the required components: the IOException thrown by a FileWriter is caught, and the FileWriter object is instantiated in a try-with-resources to ensure it is closed.   WriteFile1.java   \/\/ WriteFile1.java import java.io.FileWriter; \/\/ Import classes import java.io.IOException; public class WriteFile1 { public static void main(String[] args) { log(\"First message\"); \/\/ Log a message log(\"Second message\"); \/\/ Log another message log(\"Third message\"); \/\/ And another message } \/\/ Utility method to log messages to a file public static void log(String msg) { try (FileWriter fw = new FileWriter(\"log.txt\", true)) { \/\/ Opens a file for appending fw.write(msg + \"\\n\"); \/\/ Write added to end of file } catch (IOException e) { \/\/ Log \/\/ Handle exceptions System.out.println(e); } } }     javac WriteFile1.java java WriteFile1 type log.txt  First message Second message Third message    "
},
{
  "id": "listing-ex-writefile1",
  "level": "2",
  "url": "section-ex-writing-files.html#listing-ex-writefile1",
  "type": "Listing",
  "number": "12.6.1",
  "title": "",
  "body": " WriteFile1.java   \/\/ WriteFile1.java import java.io.FileWriter; \/\/ Import classes import java.io.IOException; public class WriteFile1 { public static void main(String[] args) { log(\"First message\"); \/\/ Log a message log(\"Second message\"); \/\/ Log another message log(\"Third message\"); \/\/ And another message } \/\/ Utility method to log messages to a file public static void log(String msg) { try (FileWriter fw = new FileWriter(\"log.txt\", true)) { \/\/ Opens a file for appending fw.write(msg + \"\\n\"); \/\/ Write added to end of file } catch (IOException e) { \/\/ Log \/\/ Handle exceptions System.out.println(e); } } }   "
},
{
  "id": "section-ex-concepts",
  "level": "1",
  "url": "section-ex-concepts.html",
  "type": "Section",
  "number": "12.7",
  "title": "Key Concepts",
  "body": " Key Concepts   Three types of errors occur in Java: Syntax Errors, Logic Errors and Runtime Errors  Syntax errors occur when rules defined by Java are violated.  The Java compiler reports syntax errors when an attempt is made to compile a program.  Logic errors occur when a syntactically correct program compiles and runs, but produces output that is incorrect.  Logic errors are produced by mistakes in the way the program is written.  Runtime errors occur when an unexpected error occurs while a program is running.  Runtime errors may be due to unexpected situations such as invalid array indexes, missing files, etc. These are called exceptions.  With no special intervention, an exception will cause a Java program to halt with an indication of what caused the exception.  Runtime exceptions may be caught and handled by a Java program.  The try-catch and try-catch-finally statements are used to catch and handle runtime exceptions.  Exceptions are encapsulated as objects in the Core Library and all exception classes inherit the java.lang.Exception class.  Common exception classes include ArithmeticException, NullPointerException, IndexOutOfBoundsException, IllegalArgumentException, ArrayIndexOutOfBoundsException  The try-block contains the code to be executed that may result in an exception.  The catch-block is the code that will be executed if a matching exception is thrown.  The optional finally-block is code that is guaranteed to execute, regardless of whether or not an exception was thrown.  The catch-block may specify the class that it is willing to catch and handle, or it may be set up to handle all thrown exceptions.  Multiple catch-blocks may be specified if different exception classes have their own way of being handled.  As a class, exceptions may be instantiated to create exception objects and the object may be thrown. This is accomplished with the throw statement.  Exception classes may be derived to create custom catchable exception classes with unique data and behavior.  There are two important exception class categories: checked exceptions and unchecked exceptions.  The Java compiler requires that all checked exceptions are handled with a try-catch and will refuse to compile a program with a checked exception that is not caught.  The Exception class and its derived classes, excluding Runtime exception and its derived classes, are checked exceptions. Checked exceptions include IOExceptions and their subclasses such as FileNotFoundException.  The handling of checked exceptions may be deferred from one method to its calling method by adding a throws statement to the method declaration.  Unchecked exceptions are not required to be caught, and may cause a program to halt and dump a stack trace if thrown outside a try-catch block.  RuntimeExceptions, such as IndexOutOfBoundException, are examples of unchecked exceptions.  There is a formal distinction between errors in exceptions in Java: unlike exceptions, errors are fatal and cannot be handled.  Exception objects have their own methods that may be invoked when one is caught.  The printStackTrace() method of Exception objects will print to the terminal the state of the stack at the moment the exception was thrown.  A variation on the try-catch statement called try-with-resources will automatically close an open resource when an exception occurs, such as an open file.   "
},
{
  "id": "section-ex-exercises",
  "level": "1",
  "url": "section-ex-exercises.html",
  "type": "Section",
  "number": "12.8",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-re-thinking",
  "level": "1",
  "url": "section-re-thinking.html",
  "type": "Section",
  "number": "13.1",
  "title": "Recursive Thinking",
  "body": " Recursive Thinking  A palindrome is a word, phrase, or sentence that reads the same, backward or forward, excluding spaces, punctuation, and letter case. For example, \"racecar\" and \"Was it a car or a cat I saw?\" are well-known palindromes. How might you write a program to test whether a String is a palindrome?  An iterative algorithm for checking that a String is a palindrome involves simultaneously iterating from the first character and the last character towards the center of the string. On each iteration we must test that corresponding characters are equal. The moment an equality test fails, we know we don't have a palindrome.   isPalindrome(…) Iterative Implementation   \/\/ Palindrome.java public class Palindrome { \/\/ Iterative implementation of palindrome checking public static boolean isPalindrome(String lets) { \/\/ Loop from 0 to center of lets for (int i=0; i < lets.length()\/2; i++) { \/\/ Compute last char index from first and length int j = lets.length()-1-i; \/\/ Fail if char mismatch if ( lets.charAt(i) != lets.charAt(j) ) { return false; } } return true; } public static void main(String[] args) { \/\/ Palindrome tests String pal1 = \"RACECAR\"; String pal2 = \"WASITACARORACATISAW\"; \/\/ Was it a car or a cat I saw? String pal3 = \"TURNYOURWOUNDSINTOWISDOM\"; \/\/ Turn your wounds into wisdom. System.out.println( isPalindrome(pal2) ); System.out.println( isPalindrome(pal3) ); } }     is an iterative implementation of a method that tests a String for a palindrome. This program iterates i starting at 0 and continues while i < lets.length()\/2 (half the String length). Within the loop we calculate the other character index to compare as j = lets.length()-1-i .  When testing Strings having an even number of chars, pairs of character indexes to compare move inward toward each other and meet at adjacent points. For example when lets.length() == 6 , the index of the first char is 0 and the last is 5. In other words, when i == 0 , j = 6-1-0 = 5 ; we are comparing the first and last chars of the String. When i == 1 , j = 5-1-1=4 , and when i == 2 , j == 3 , and our iteration is complete.  For a String having an odd number of chars, say 7, the loop extent does not change, but iteration terminates with one lone character at the center. lets.length()\/2 is still 3 because we lose the fractional part with integer division. The variable i starts at 0 and again increments to 1 and then 2. The value of j is computed as 7-1-0 == 6 and decrements to 5 and 4. The char at index 3 is not tested. This is not a problem because this is the middle char, which is a singleton and can be ignored because it has no char that must be matched.  The following test of our interative method produces the expected results.   javac Palindrome.java java Palindrome  true false   What about a recursive version of isPalindrome(String lets) ? Can you identify a way to determine if a String is a palindrome involving a test that a substring of the main String is a palindrome?  The first step is to check that the first and last characters in the String are equal. What's left is to continue with the chars in the middle. In a way, we are checking that the middle chars themselves constitute a smaller palindrome. Why not use the same isPalindrome(…) method to check this inner substring, without the first and last chars? Wouldn't this solve our problem? In other words, we can say that a String is a palindrome if the first and last chars are equal and the remaining part of the String is also a palindrome. A String of length 1 is a palindrome by definition because the first and last characters are identical.   is a recursive program that implements this idea.   isPalindrome(…) Recursive Implementation   \/\/ Palindrome.java public class Palindrome { \/\/ Recursive implementation of palindrome checking public static boolean isPalindrome( String lets ) { System.out.println(lets); \/\/ Show string tested if (lets.length() <= 1) { \/\/ BASE CASE 1 return true; } else if ( lets.charAt(0) == lets.charAt(lets.length()-1)) { String smaller = lets.substring( 1, lets.length()-1); return isPalindrome( smaller ); \/\/ RECURSIVE CASE } else { return false; \/\/ BASE CASE 2 (no match) } } public static void main(String[] args) { \/\/ Palindrome tests String pal1 = \"RACECAR\"; String pal2 = \"WASITACARORACATISAW\"; \/\/ Was it a car or a cat I saw? String pal3 = \"TURNYOURWOUNDSINTOWISDOM\"; \/\/ Turn your wounds into wisdom. System.out.println( isPalindrome(pal2) ); System.out.println( isPalindrome(pal3) ); } }    We start our method by checking for special cases. Any String of length 1 (or even 0) is automatically considered a palindrome, by definition. There is nothing more to do so we return true immediately. This is called the base case .  Otherwise, the String is a palindrome if the characters at both ends are equal and the substring excluding the end characters is also a palindrome. To test for the smaller palindrome, we invoke the same method, passing a smaller substring and returning as the overall result whatever the recursive method returns. This is called the recursive case .  In the test of our recursive method we print the intermediate Strings tested in order to watch our method recurse and the String reduce in length.   javac Palindrome.java java Palindrome  WASITACARORACATISAW ASITACARORACATISA SITACARORACATIS ITACARORACATI TACARORACAT ACARORACA CARORAC ARORA ROR O true TURNYOURWOUNDSINTOWISDOM false   How do these two implementations compare? More initial thought was required for the iterative version to ensure we calculated the indexes correctly. Arguably, once you see it, the recursive version is more elegant and easier to understand. The recursive version of isPalindrome(…) says that Strings of length 0 or 1 are a palindrome by definition, and if the end characters are equal then the answer is delegated to testing if the central substring constitutes a palindrome.  We've constructed a way to solve the problem in terms of itself . This is recursion .  Recursive methods always handle one or more recursive cases and one or more bases cases . An if-statement is commonly used to identify these cases, but the cases are not always obvious. Nevertheless, at least one of each case must be handled, always.  Recognize how isPalindrome(…) in stops executing. The String being tested gets shorter by two on each recursive call. This makes progress toward moving us closer to the base case of a String with 1 or even 0 chars. We must always be moving toward the base case condition to avoid an infinite recursion. For example, what would happen if we swapped the order of the first two branches in the if-statement of ? Trace the modified program and make a prediction.  "
},
{
  "id": "listing-re-palindrome-iterative",
  "level": "2",
  "url": "section-re-thinking.html#listing-re-palindrome-iterative",
  "type": "Listing",
  "number": "13.1.1",
  "title": "",
  "body": " isPalindrome(…) Iterative Implementation   \/\/ Palindrome.java public class Palindrome { \/\/ Iterative implementation of palindrome checking public static boolean isPalindrome(String lets) { \/\/ Loop from 0 to center of lets for (int i=0; i < lets.length()\/2; i++) { \/\/ Compute last char index from first and length int j = lets.length()-1-i; \/\/ Fail if char mismatch if ( lets.charAt(i) != lets.charAt(j) ) { return false; } } return true; } public static void main(String[] args) { \/\/ Palindrome tests String pal1 = \"RACECAR\"; String pal2 = \"WASITACARORACATISAW\"; \/\/ Was it a car or a cat I saw? String pal3 = \"TURNYOURWOUNDSINTOWISDOM\"; \/\/ Turn your wounds into wisdom. System.out.println( isPalindrome(pal2) ); System.out.println( isPalindrome(pal3) ); } }   "
},
{
  "id": "listing-re-palindrome-recursive",
  "level": "2",
  "url": "section-re-thinking.html#listing-re-palindrome-recursive",
  "type": "Listing",
  "number": "13.1.2",
  "title": "",
  "body": " isPalindrome(…) Recursive Implementation   \/\/ Palindrome.java public class Palindrome { \/\/ Recursive implementation of palindrome checking public static boolean isPalindrome( String lets ) { System.out.println(lets); \/\/ Show string tested if (lets.length() <= 1) { \/\/ BASE CASE 1 return true; } else if ( lets.charAt(0) == lets.charAt(lets.length()-1)) { String smaller = lets.substring( 1, lets.length()-1); return isPalindrome( smaller ); \/\/ RECURSIVE CASE } else { return false; \/\/ BASE CASE 2 (no match) } } public static void main(String[] args) { \/\/ Palindrome tests String pal1 = \"RACECAR\"; String pal2 = \"WASITACARORACATISAW\"; \/\/ Was it a car or a cat I saw? String pal3 = \"TURNYOURWOUNDSINTOWISDOM\"; \/\/ Turn your wounds into wisdom. System.out.println( isPalindrome(pal2) ); System.out.println( isPalindrome(pal3) ); } }   "
},
{
  "id": "p-972",
  "level": "2",
  "url": "section-re-thinking.html#p-972",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base case "
},
{
  "id": "p-973",
  "level": "2",
  "url": "section-re-thinking.html#p-973",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recursive case "
},
{
  "id": "section-re-call-stack",
  "level": "1",
  "url": "section-re-call-stack.html",
  "type": "Section",
  "number": "13.2",
  "title": "The Call Stack",
  "body": " The Call Stack  A running method must suspend when it invokes another method. The state of the suspended method must be saved so that when the invoked method returns the suspended method can pick upwhere it left off.  The state of a suspended method is saved in an internal data structure called a stack frame . A stack frame tracks the suspended method's scope (variables and their instantaneous values) and on which instruction to continue execution when the invoked method completes. There are as many stack frames as your program has suspended methods, all of which are stored in another data structure called the call stack . To visualize a call statck, think of a stack of clean dinner plates. Typically, you add to the top of a stack, and remove from the top of the stack. It is the same with the call stack. When a new stack frame (dinner plate) is created as a result of one method invoking another, the stack frame is pushed onto the top of the call stack. When the invoked method completes, the stack frame describing the suspended method is popped off the top of the stack and used to resume execution.  Each time a method suspends, it gets its own new stack frame to save its state. This happens even when the method is invoking itself, which is what happens when executing a recursive method. Consider the recursive method countdown(int n) in .   ListOff.java   public class LiftOff { public static void main(String[] args) { countdown(10); } \/\/ Count down from N public static void countdown(int N) { \/\/ When N reaches 0, Lift Off! if (N <= 0) { System.out.println(\"We have lift off!\"); \/\/ Print current count and recurse with decremented value } else { System.out.println(N); countdown(N-1); } } }     javac LiftOff.java java LiftOff  10 9 8 7 6 5 4 3 2 1 We have lift off!     Each time the else-branch in the countdown(…) method in is invoked, the state of the invoking method is captured in a stack frame and pushed on the call stack. During recursion this repeats itself with each new value of N until the base case is reached. is an illustrative diagram of the call stack when this recursion hits the base case. All stack frames hold the value of N when it was suspended. After reaching the base case, each suspended method returns in reverse order, which pops the next stack frame off the call stack, returning control flow to the suspended method.  Every one of the stack frames depicted in represents a suspended version of the countdown(…) method. Recursion works because each newly invoked method has its own scope and its own set of method-scoped variables, even when the method invoked is the same as the invoking method.     Call Stack at the base case     A wonderful tool for visualizing the call stack in action is the Java Visualizer , one instance of which is hosted by the University of Waterloo Centre for Education in Mathematics and Computing . You can paste a small Java program into the editor of this tool and watch it execute, step-by-step. The current state of the call stack is illustrated on the right as you step through the program animation. below is an embedded version of the visualizer for the LiftOff.java program. Scroll to the right to see the call stack. Drag left the right edge of the editor window to bring both into view. Click the [Forward] button to step through the program. Alternatively, click here to visualize the program on the site, directly.  Try your own programs by visiting the Java Visualizer site.    Visualize LiftOff.java    What happens if we make an error in the base case condition, or forget it altogether? Let's test it by making a second version of LiftOff.java with the base case commented out. See and its console session.   NoBaseCase.java   \/\/ NoBaseCase.java public class NoBaseCase { public static void main(String[] args) { countdown(10); } \/\/ Count down from N public static void countdown(int N) { \/\/ When N reaches 0, Lift Off! \/\/ if (N <= 0) { \/\/ System.out.println(\"We have lift off!\"); \/\/ \/\/ Print current count and recurse with decremented value \/\/ } else { System.out.println(N); countdown(N-1); \/\/ } } }     javac NoBaseCase.java java NoBaseCase  10 9 8 7 6 5 4 3 2 1 0 -1 -2 -3 … -14396 -14397 -14398 Exception in thread \"main\" java.lang.StackOverflowError at java.base\/java.nio.CharBuffer.wrap(CharBuffer.java:408) at java.base\/sun.nio.cs.StreamEncoder.implWrite(StreamEncoder.java:281) at java.base\/sun.nio.cs.StreamEncoder.write(StreamEncoder.java:132) at java.base\/java.io.OutputStreamWriter.write(OutputStreamWriter.java:205) at java.base\/java.io.BufferedWriter.flushBuffer(BufferedWriter.java:120) at java.base\/java.io.PrintStream.writeln(PrintStream.java:722) at java.base\/java.io.PrintStream.println(PrintStream.java:938) at NoBaseCase.countdown(NoBaseCase.java:15) at NoBaseCase.countdown(NoBaseCase.java:16) at NoBaseCase.countdown(NoBaseCase.java:16) at NoBaseCase.countdown(NoBaseCase.java:16) at NoBaseCase.countdown(NoBaseCase.java:16) at NoBaseCase.countdown(NoBaseCase.java:16) at NoBaseCase.countdown(NoBaseCase.java:16) at NoBaseCase.countdown(NoBaseCase.java:16) at NoBaseCase.countdown(NoBaseCase.java:16) …   The two ellipses (…) in the previous console session output show where many lines were deleted. The call stack built up about 14,400+ stack frames before it overflowed and threw and error. The line right after the last countdown value was printed shows the java.lang.StackOverflowError and a very long dump of the call stack, which includes the 14,400+ recursive calls at line 16 of NoBaseCase.java . The call stack does not have infinite memory in which to hold all stack frames. This is what happens when it runs out.  "
},
{
  "id": "p-980",
  "level": "2",
  "url": "section-re-call-stack.html#p-980",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stack frame call stack "
},
{
  "id": "listing-re-countdown",
  "level": "2",
  "url": "section-re-call-stack.html#listing-re-countdown",
  "type": "Listing",
  "number": "13.2.1",
  "title": "",
  "body": " ListOff.java   public class LiftOff { public static void main(String[] args) { countdown(10); } \/\/ Count down from N public static void countdown(int N) { \/\/ When N reaches 0, Lift Off! if (N <= 0) { System.out.println(\"We have lift off!\"); \/\/ Print current count and recurse with decremented value } else { System.out.println(N); countdown(N-1); } } }   "
},
{
  "id": "figure-re-countdown",
  "level": "2",
  "url": "section-re-call-stack.html#figure-re-countdown",
  "type": "Figure",
  "number": "13.2.2",
  "title": "",
  "body": " Call Stack at the base case   "
},
{
  "id": "figure-re-countdown-visualizer",
  "level": "2",
  "url": "section-re-call-stack.html#figure-re-countdown-visualizer",
  "type": "Figure",
  "number": "13.2.3",
  "title": "",
  "body": " Visualize LiftOff.java   "
},
{
  "id": "listing-re-no-base-case",
  "level": "2",
  "url": "section-re-call-stack.html#listing-re-no-base-case",
  "type": "Listing",
  "number": "13.2.4",
  "title": "",
  "body": " NoBaseCase.java   \/\/ NoBaseCase.java public class NoBaseCase { public static void main(String[] args) { countdown(10); } \/\/ Count down from N public static void countdown(int N) { \/\/ When N reaches 0, Lift Off! \/\/ if (N <= 0) { \/\/ System.out.println(\"We have lift off!\"); \/\/ \/\/ Print current count and recurse with decremented value \/\/ } else { System.out.println(N); countdown(N-1); \/\/ } } }   "
},
{
  "id": "section-re-characterising",
  "level": "1",
  "url": "section-re-characterising.html",
  "type": "Section",
  "number": "13.3",
  "title": "Characterizing Recursion",
  "body": " Characterizing Recursion  Exploring the characteristics of a recursive method or methods help us to better understand the technique. In this chapter let's explore many of the technique's variations and how it is used to solve a variety of problems.   Accumulating Recursion  Similar to iteration, we can use a recursive technique to accumulate a result. Let's consider the simple problem of summing a sequence of integers in a range [begin, end]. includes two methods to solve this problem: one iterative and one recursive. The main(…) method tests both on the integer range [1, 10]. Both produce the correct value of 55.   Sums.java   \/\/ Sums.java public class Sums { \/\/ Iterative solution to sum a sequence of integers public static int iterativeSum(int begin, int end) { int sum = 0; \/\/ Init accumulator variable for (int i=begin; i<=end; i++) { \/\/ Generate all integers sum += i; \/\/ Accumulate } return sum; \/\/ Return result } \/\/ Recursive solution to sum a sequence of integers public static int recursiveSum(int begin, int end) { \/\/ Base case when begin > end. if (begin > end) { return 0; \/\/ Sum is 0 \/\/ Recursive case } else { \/\/ Total sum is current number plus remaining sum return begin + recursiveSum(begin+1, end); } } \/\/ Test public static void main(String[] args) { System.out.println( \"Iterative sum: \" + iterativeSum( 1, 10) ); System.out.println( \"Recursive sum: \" + recursiveSum( 1, 10) ); } }     javac Sums.java java Sums  Iterative sum: 55 Recursive sum: 55   The iterativeSum(…) method uses the obvious approach of generating the integers to sum with a for-statement. The sum variable is initialized to 0 and updated each time through the loop before returning the final result after the loop completes all iterations.  The recursiveSum(…) method reformulates the solution technique to be recursive. It recasts the solution description as return the first number in the sequence plus the sum of the remaining numbers in the sequence . The base case terminates the recursion when the first parameter, begin , is greater than the second parameter, end , returning a value of 0. The result computed with recursiveSum(…) is the same as iterativeSum(…) when the same parameter value is provided.  An interesting distinction between these two methods is that the iterative technique accumulates the sum as the integer value in the range increases, whereas the recursive technique accumulates the sum after the base case is reached and each stack frame is popped off the call stack.    All-pairs Comparison  Solving problems that require the comparison of element pairs to reach an answer also has a recursive formulation. One simple example is finding an overall maximum of a collection. includes an iterative and a recursive approach to finding the maximum value in a range of doubles. The main(…) method tests both methods on an arbitrary array of doubles. Both produce the correct result of 9.8.   Max.java   \/\/ Max.java public class Max { public static double iterativeMax(double[] arr) { \/\/ Assume max is first element double max = arr[0]; \/\/ Check if any another value is better for (int i=1; i<arr.length; i++) { if (arr[i] > max) max = arr[i]; } \/\/ Return max value return max; } public static double recursiveMax(double[] arr) { \/\/ Call method overload starting a index 0 return recursiveMax(arr, 0); } public static double recursiveMax(double[] arr, int idx) { \/\/ Base case when only 1 item left in array. if (idx == arr.length - 1) { return arr[idx]; \/\/ Recursive case } else { \/\/ Compute max of remaining part of array double max = recursiveMax(arr, idx+1); \/\/ Compare item at idx with max and return greatest if (arr[idx] > max) { return arr[idx]; } else { return max; } } } \/\/ Test public static void main(String[] args) { double[] arr = {2.1, 6.2, 5.9, 3.7, 9.8, 8.0}; System.out.println( iterativeMax(arr) ); System.out.println( recursiveMax(arr) ); } }    The iterativeMax(…) method starts by temporarily initializing the max variable to the first value in the array. A loop is used to compare this value to the remaining array values. If better value is found, exceeding the current maximum, the max variable value is updated. The final value of max is returned as the overall maximum of the array.  We use method polymorphism to overload the recursiveMax(…) method with two implementations. The first overload takes only the double array as a parameter. This is a helper method, which is not recursive. It serves only to help us invoke the second overload, which is a recursive method. This second implementation takes the double array as well as the starting index ( idx ) in the array from which the maximum should be calculated in the remaining elements. The second overload starts by checking for a base case, which occurs when the index from which to start is the last index of the array. The maximum value of one remaining array element is that array element value, so this value is returned immediately. If idx is not the last index, the method is invoked recursively with the double array and a starting index of idx+1 , which computes the the maximum value of the remaining elements in the array, excluding the first. The value returned from this recursive invocation is compared to the element at idx and the maximum of the two is returned. The main(…) method tests both methods on an arbitrary array of doubles. Both produce the correct result of 9.8.  Compare recursiveMax(…) to recursiveSum(…) and note the similarity in the two implementations. In both cases the computation is performed on a smaller version of the problem. The smaller version computes an intermediate result which is used to compute the solution to a larger version of the problem.    Direct and Indirect Recursion  All recursive methods we've explored thus far are examples of direct recursion , which occurs when a recursive method invokes itself directly . It is possible to write a program in which no individual method invokes itself, yet is considered recursive. In the simplest case, one method might invoke a second, which invokes the first, and so on. This is an example of indirect recursion . As long as an invoked method traces back to itself, the program is considered recursive.   is a simple demonstration of indirect recursion . The left(…) method prints \"left\" and the right(…) method prints \"right.\" Neither the left(…) nor the right(…) methods are recursive by themselves. But, because left(…) invokes right(…) and right(…) invokes left(…) , the program is indirectly recursive . Both methods implement a base case that prints \"arrived\" and stops the recursion when the step count N reaches 0.   Walk.java   \/\/ Walk.java public class Walk { \/\/ A journey of a thousand miles begins with a single step. public static void main(String[] args) { left(10); \/\/ Take the first step } \/\/ Left foot public static void left(int N) { if (N <= 0) { System.out.println(\"arrived\"); } else { System.out.println(\"left\"); right(N-1); } } \/\/ Right foot public static void right(int N) { if (N <= 0) { System.out.println(\"arrived\"); } else { System.out.println(\"right\"); left(N-1); } } }     javac Walk.java java Walk  left right left right left right left right left right arrived     Multiple Cases and Multiple Invocations  A recursive method must encode at least one base case and one recursive case to work properly. These cases may not always be obvious. For example, a base case of a void method may simply be a scenario in which program control causes the method to exit because no recursive case condition is satisfied.  A recursive method may have more than one base case and\/or more than one recursive case. Multi-base and multi-recursive case methods encode multiple conditions that trigger different base cases or multiple conditions that trigger different recursive cases. We'll refer to this scenario as multi-case recursion .  Another interesting variation on recursion occurs when the block of code that implements a single recursive case invokes multiple recursive methods or the same recursive method multiple times. We'll refer to this scenario as multiple recursion .  A good example of both multi-case and multiple recursion is a naive implementation of the Fibonacci Number calculation. The mathematical definition of the Fibonacci Number is as follows, where is the Fibonacci number (see ). Note how the definition of the Fibonacci number is recursive. Other examples quantities with definitions that are naturally recursive include Factorial and the Euclidean algorithm for computing Greatest Common Divisor .    Fibonacci Number:    The Fibonacci Number: , for .      First 10 Fibonacci Numbers                 0  1  1  2  3  5  8  13  21  34  55     Let's explore two alternative ways to calculate Fibonacci number: . To help better understand the difference between these implementations, we'll measure and report a few metrics, including recursion\/iteration count as well as elapsed wall-clock time.   Fibonacci.java (version 1)   \/\/ Fibonacci.java public class Fibonacci { public static long count = 0L; \/\/ Counter public static long start = 0L; \/\/ Start time public static long recursiveFibonacci( int N ) { \/\/ Count recursive invocations count++; \/\/ Two base cases if (N == 0) { return 0; } else if (N == 1) { return 1; } \/\/ One base case - multiple recursion \/\/ Return Fibonacci number F[N] else { return recursiveFibonacci(N - 1) + recursiveFibonacci(N - 2); } } public static void main(String[] arg) { int N = 50; count = 0; \/\/ Reset metrics start = System.currentTimeMillis(); long FN = recursiveFibonacci(N); System.out.println( \"F(\" + N + \") = \" + FN ); System.out.println(\"recursion count: \" + count + \", elapsed time: \" + (System.currentTimeMillis() - start) + \" ms\"); } }    is a classic implementation of the recursive definition of the Fibonacci number. The program includes the recursive recursiveFibonacci(…) method. Note that this method has two base cases , one each for the two definitions F[0] = 0 and F[1] = 1 . Also note that the recusive case invokes recursiveFibonacci(…) twice. This method demonstrates both multi-case recursion due to its two base cases and multiple recursion , due to it multiple recursive calls in one case.  The Fibonacci class has two static variables used for tracking metrics. The count long will be used to count the number of recursive calls or iterations in a method, and the start long will hold the moment in time a method starts execution measured as milliseconds since 00:00 on January 1, 1970. The value of start is subtracted from a second measurement of milliseconds after a method completes which estimates the method's execution duration in milliseconds. The built-in static Java utility method System.currentTimeMillis() returns the number of milliseconds that have elapsed since January 1, 1970 at 00:00. It is convenient tool to use to calculate elapsed time. The first line in recursiveFibonacci(…) increments the count variable so it will hold the total number of times the method was invoked.   main() in resets both count and start and then it invokes recursiveFibonacci(…) with an N parameter of 50. It then prints the computed Fibonacci number, the recursion count, and it computes and prints the elapsed time.  In the following console session using a laptop computer, you will see that the Fibonacci number computed was 12586269025, the computation took over 51 seconds to complete, and the number of recursive calls was well over 40 billion!   javac Fibonacci.java java Fibonacci  F(50) = 12586269025 recursion count: 40730022147, elapsed time: 51248 ms     Dynamic Programming  If you dig in to the details of Fibonacci number calculation, it becomes obvious that the naive implementation of the recursive definition is very inefficient. To compute we must compute and . To compute we first (recursively) compute and . We need to compute , but we are computing it for as well, and then throwing it away! We are forced to recompute twice, once for and a second time for . For we need and , but again, we are computing for and throwing it away, but we need it for . The result is a highly inefficient compounding and repetition of the same computation over and over, as you proceed down the chain of dependencies. It certainly seems it would be more efficient to cache intermediate Fibonacci numbers and look them up if they are needed again for subsequent calculations.  When a subproblem in a recursive computation is repeated, it may be worth saving intermediate results and looking them up when needed instead of recomputing them. This idea is at the heart of dynamic programming . With over 40 billion recursions required to calculate , Calculating the Fibonacci number appears to be a good candidate for dynamic programming .  With the Fibonacci number, we can do one better. We know that to compute F[N] we must compute all F[i] for i from 2 up to and including N , so why not just perform that computation from the start. That is, when we want the value of F[N] , let's declare an array named F[] of size N+1, init the base case values F[0] = 0 and F[1] = 1 , and then use iteration to compute F[2] up to F[N] , storing intermediate results in the F[] array, and return F[N] as the result?   adds a second method to our Fibonacci.java program named iterativeFibonacci(…) that implements of dynamic programming version of the Fibonacci number calculation. To the main() method we add a second test by calling our new method with an iteration count and a measurement of the elapsed time.   Fibonacci.java (version 2)   \/\/ Fibonacci.java public class Fibonacci { public static long count = 0L; \/\/ Counter public static long start = 0L; \/\/ Start time public static long recursiveFibonacci( int N ) { \/\/ ... } \/\/ Iterative Fibonacci number calculation using Dynamic Programming public static long iterativeFibonacci(int N) { long[] F = new long[N+1]; \/\/ Array for all intermediate values F[0] = 0L; \/\/ Init first two by definition F[1] = 1L; for (int i=2; i<=N; i++) { \/\/ Calculate remaining Fibonacci.count++; \/\/ Count iterations F[i] = F[i-1] + F[i-2]; \/\/ Fibonacci number calculation } return F[N]; \/\/ Return F[N] } public static void main(String[] arg) { int N = 50; count = 0; \/\/ Reset metrics start = System.currentTimeMillis(); long FN = recursiveFibonacci(N); System.out.println( \"F(\" + N + \") = \" + FN ); System.out.println(\"recursion count: \" + count + \", elapsed time: \" + (System.currentTimeMillis() - start) + \" ms\"); count = 0; \/\/ Reset metrics start = System.currentTimeMillis(); FN = iterativeFibonacci(N); System.out.println( \"F(\" + N + \") = \" + FN ); System.out.println(\"iteration count: \" + count + \", elapsed time: \" + (System.currentTimeMillis() - start) + \" ms\"); } }     javac Fibonacci.java java Fibonacci  F(50) = 12586269025 recursion count: 40730022147, elapsed time: 51264 ms F(50) = 12586269025 iteration count: 49, elapsed time: 0 ms   The elapsed time to execute the iterativeFibonacci(50) method is less that 1 millisecond with an iteration count of 49. That is much more efficient than the recursive method, which takes more than 51 seconds and 40 billion recursions to complete.  When a recursive solution repeats the computation of its subproblems over and over, reformualting a solution using dynamic programming is likely a better option.   "
},
{
  "id": "listing-re-sums",
  "level": "2",
  "url": "section-re-characterising.html#listing-re-sums",
  "type": "Listing",
  "number": "13.3.1",
  "title": "",
  "body": " Sums.java   \/\/ Sums.java public class Sums { \/\/ Iterative solution to sum a sequence of integers public static int iterativeSum(int begin, int end) { int sum = 0; \/\/ Init accumulator variable for (int i=begin; i<=end; i++) { \/\/ Generate all integers sum += i; \/\/ Accumulate } return sum; \/\/ Return result } \/\/ Recursive solution to sum a sequence of integers public static int recursiveSum(int begin, int end) { \/\/ Base case when begin > end. if (begin > end) { return 0; \/\/ Sum is 0 \/\/ Recursive case } else { \/\/ Total sum is current number plus remaining sum return begin + recursiveSum(begin+1, end); } } \/\/ Test public static void main(String[] args) { System.out.println( \"Iterative sum: \" + iterativeSum( 1, 10) ); System.out.println( \"Recursive sum: \" + recursiveSum( 1, 10) ); } }   "
},
{
  "id": "listing-re-max",
  "level": "2",
  "url": "section-re-characterising.html#listing-re-max",
  "type": "Listing",
  "number": "13.3.2",
  "title": "",
  "body": " Max.java   \/\/ Max.java public class Max { public static double iterativeMax(double[] arr) { \/\/ Assume max is first element double max = arr[0]; \/\/ Check if any another value is better for (int i=1; i<arr.length; i++) { if (arr[i] > max) max = arr[i]; } \/\/ Return max value return max; } public static double recursiveMax(double[] arr) { \/\/ Call method overload starting a index 0 return recursiveMax(arr, 0); } public static double recursiveMax(double[] arr, int idx) { \/\/ Base case when only 1 item left in array. if (idx == arr.length - 1) { return arr[idx]; \/\/ Recursive case } else { \/\/ Compute max of remaining part of array double max = recursiveMax(arr, idx+1); \/\/ Compare item at idx with max and return greatest if (arr[idx] > max) { return arr[idx]; } else { return max; } } } \/\/ Test public static void main(String[] args) { double[] arr = {2.1, 6.2, 5.9, 3.7, 9.8, 8.0}; System.out.println( iterativeMax(arr) ); System.out.println( recursiveMax(arr) ); } }   "
},
{
  "id": "p-998",
  "level": "2",
  "url": "section-re-characterising.html#p-998",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct recursion indirect recursion "
},
{
  "id": "listing-re-walk",
  "level": "2",
  "url": "section-re-characterising.html#listing-re-walk",
  "type": "Listing",
  "number": "13.3.3",
  "title": "",
  "body": " Walk.java   \/\/ Walk.java public class Walk { \/\/ A journey of a thousand miles begins with a single step. public static void main(String[] args) { left(10); \/\/ Take the first step } \/\/ Left foot public static void left(int N) { if (N <= 0) { System.out.println(\"arrived\"); } else { System.out.println(\"left\"); right(N-1); } } \/\/ Right foot public static void right(int N) { if (N <= 0) { System.out.println(\"arrived\"); } else { System.out.println(\"right\"); left(N-1); } } }   "
},
{
  "id": "p-1000",
  "level": "2",
  "url": "section-re-characterising.html#p-1000",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base case recursive case "
},
{
  "id": "p-1001",
  "level": "2",
  "url": "section-re-characterising.html#p-1001",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multi-case recursion "
},
{
  "id": "p-1002",
  "level": "2",
  "url": "section-re-characterising.html#p-1002",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiple recursion "
},
{
  "id": "definition-re-fibonacci",
  "level": "2",
  "url": "section-re-characterising.html#definition-re-fibonacci",
  "type": "Definition",
  "number": "13.3.4",
  "title": "",
  "body": "  Fibonacci Number:    The Fibonacci Number: , for .    "
},
{
  "id": "table-re-fibonacci",
  "level": "2",
  "url": "section-re-characterising.html#table-re-fibonacci",
  "type": "Table",
  "number": "13.3.5",
  "title": "First 10 Fibonacci Numbers",
  "body": " First 10 Fibonacci Numbers                 0  1  1  2  3  5  8  13  21  34  55    "
},
{
  "id": "listing-re-fibonacci-recursive",
  "level": "2",
  "url": "section-re-characterising.html#listing-re-fibonacci-recursive",
  "type": "Listing",
  "number": "13.3.6",
  "title": "",
  "body": " Fibonacci.java (version 1)   \/\/ Fibonacci.java public class Fibonacci { public static long count = 0L; \/\/ Counter public static long start = 0L; \/\/ Start time public static long recursiveFibonacci( int N ) { \/\/ Count recursive invocations count++; \/\/ Two base cases if (N == 0) { return 0; } else if (N == 1) { return 1; } \/\/ One base case - multiple recursion \/\/ Return Fibonacci number F[N] else { return recursiveFibonacci(N - 1) + recursiveFibonacci(N - 2); } } public static void main(String[] arg) { int N = 50; count = 0; \/\/ Reset metrics start = System.currentTimeMillis(); long FN = recursiveFibonacci(N); System.out.println( \"F(\" + N + \") = \" + FN ); System.out.println(\"recursion count: \" + count + \", elapsed time: \" + (System.currentTimeMillis() - start) + \" ms\"); } }   "
},
{
  "id": "p-1006",
  "level": "2",
  "url": "section-re-characterising.html#p-1006",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multi-case recursion multiple recursion "
},
{
  "id": "p-1011",
  "level": "2",
  "url": "section-re-characterising.html#p-1011",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dynamic programming "
},
{
  "id": "listing-re-fibonacci-iterative1",
  "level": "2",
  "url": "section-re-characterising.html#listing-re-fibonacci-iterative1",
  "type": "Listing",
  "number": "13.3.7",
  "title": "",
  "body": " Fibonacci.java (version 2)   \/\/ Fibonacci.java public class Fibonacci { public static long count = 0L; \/\/ Counter public static long start = 0L; \/\/ Start time public static long recursiveFibonacci( int N ) { \/\/ ... } \/\/ Iterative Fibonacci number calculation using Dynamic Programming public static long iterativeFibonacci(int N) { long[] F = new long[N+1]; \/\/ Array for all intermediate values F[0] = 0L; \/\/ Init first two by definition F[1] = 1L; for (int i=2; i<=N; i++) { \/\/ Calculate remaining Fibonacci.count++; \/\/ Count iterations F[i] = F[i-1] + F[i-2]; \/\/ Fibonacci number calculation } return F[N]; \/\/ Return F[N] } public static void main(String[] arg) { int N = 50; count = 0; \/\/ Reset metrics start = System.currentTimeMillis(); long FN = recursiveFibonacci(N); System.out.println( \"F(\" + N + \") = \" + FN ); System.out.println(\"recursion count: \" + count + \", elapsed time: \" + (System.currentTimeMillis() - start) + \" ms\"); count = 0; \/\/ Reset metrics start = System.currentTimeMillis(); FN = iterativeFibonacci(N); System.out.println( \"F(\" + N + \") = \" + FN ); System.out.println(\"iteration count: \" + count + \", elapsed time: \" + (System.currentTimeMillis() - start) + \" ms\"); } }   "
},
{
  "id": "p-1015",
  "level": "2",
  "url": "section-re-characterising.html#p-1015",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dynamic programming "
},
{
  "id": "section-re-graphics",
  "level": "1",
  "url": "section-re-graphics.html",
  "type": "Section",
  "number": "13.4",
  "title": "Recursive Graphics",
  "body": " Recursive Graphics   Fractal art is composed using algorithms to generate graphical illustrations, where each part of the illustation can be identified as a reduced-size copy of the original. This self-similarity property makes recursive algorithms an ideal method to use to compose fractal art.   Fractal Tree  One example of fractal art is the Fractal Tree . The recursive method of a Fractal Tree draws one linear branch of the tree and then recursively draws two shorter linear branches starting at the end of the current branch with an added positive and negative angle of rotation as well as an incrementally shorter length.   draws a Fractal Tree, with the recursive method branch(…) . The branch(…) method takes six parameters:  x1 : Branch starting x-location  y1 : Branch starting y-location  angle : Angle with which to rotate branch [degrees]  length : Length of branch  dangle : Amount to rotate next branch (positive and negative) [degrees].  dlength : Amount to shorten next branch [pixels]  The branch(…) method calls itself twice, with new angles and a shorter length. This method is an example of multiple recursion due to the two recursive invocations. The base case stops recursion when branch length is reduced to a value that is less than 10. shows output from .  Try modifying the initial parameters of branch(…) and rerun to better understand how parameter values impact the resulting generated figure.   FractalTree.java   \/\/ FractalTree.java import doodlepad.*; public class FractalTree { public static void main(String[] args) { \/\/ Grow from bottom center of window branch(450, 600, 90, 100, 25, 9); } \/\/ Draw one branch and then invoke recursively for two new branches public static void branch(int x1, int y1, int angle, int length, int dangle, int dlength) { \/\/ Base case - reached last branch if (length & 10) { return; } \/\/ Convert degrees to radians double rads = Math.toRadians(angle); \/\/ Compute line ends int x2 = x1 - (int)Math.round(Math.cos(rads) * length); int y2 = y1 - (int)Math.round(Math.sin(rads) * length); \/\/ Create Line object new Line(x1, y1, x2, y2); \/\/ Recurively draw branches at new angles with length decreased by 10 branch(x2, y2, angle+dangle, length-dlength, dangle, dlength); branch(x2, y2, angle-dangle, length-dlength, dangle, dlength); } }     FractalTree.java      Sierpiński Carpet  Another example of Fractal Art is the Sierpiński Carpet . One way for drawing a Sierpiński Carpet starts with an empty canvas with square dimensions. A new square shape is drawn at the center of the canvas, having a width and height that is 1\/3 the width and 1\/3 the height of the canvas square. This step is repeated recursively for square subregions at the eight points surrounding the central square.   lists the program that generates . The main recursive method, square(…) , includes eight direct recursive invocations for each of the eight surrounding square regions. This repeats recursively until a recursive call asks for a new square shape to be drawn with a width (or height) less than 5 pixels.   SierpinskiCarpet.java   \/\/ SierpinskiCarpet.java import doodlepad.*; public class SierpinskiCarpet { public static void main(String[] args) { \/\/ Init Window new Pad(\"Sierpinski Carpet\", 600, 600); \/\/ Draw Sierpinski Carpet for entire window square(0, 0, 600, 600); } public static void square(double x, double y, double w, double h) { \/\/ Base case \/\/ Terminate recursion when side is less than 5 if (w & 5) { return; } \/\/ Calculate square dimensions and location double w1 = w \/ 3.0; double h1 = h \/ 3.0; double x1 = x + w1; double y1 = y + h1; \/\/ Draw square Rectangle r = new Rectangle(x1, y1, w1, h1); r.setFillColor(0); \/\/ Eight recursive invocations around square square(x, y, w1, h1); square(x + w1, y, w1, h1); square(x + 2*w1, y, w1, h1); square(x, y + h1, w1, h1); square(x + 2*w1, y + h1, w1, h1); square(x, y + 2*h1, w1, h1); square(x + w1, y + 2*h1, w1, h1); square(x + 2*w1, y + 2*h1, w1, h1); } }     SierpinskiCarpet.java    There are quite a few examples of fractal art and other landscapes to explore. These include the Mandelbrot set , Sierpiński triangle , the von Koch curve , and fractal waves inspired by The Great Wave of Kanagawa (by Katsushika Hokusai, 1831).   "
},
{
  "id": "p-1017",
  "level": "2",
  "url": "section-re-graphics.html#p-1017",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiple recursion "
},
{
  "id": "listing-re-fractal-tree",
  "level": "2",
  "url": "section-re-graphics.html#listing-re-fractal-tree",
  "type": "Listing",
  "number": "13.4.1",
  "title": "",
  "body": " FractalTree.java   \/\/ FractalTree.java import doodlepad.*; public class FractalTree { public static void main(String[] args) { \/\/ Grow from bottom center of window branch(450, 600, 90, 100, 25, 9); } \/\/ Draw one branch and then invoke recursively for two new branches public static void branch(int x1, int y1, int angle, int length, int dangle, int dlength) { \/\/ Base case - reached last branch if (length & 10) { return; } \/\/ Convert degrees to radians double rads = Math.toRadians(angle); \/\/ Compute line ends int x2 = x1 - (int)Math.round(Math.cos(rads) * length); int y2 = y1 - (int)Math.round(Math.sin(rads) * length); \/\/ Create Line object new Line(x1, y1, x2, y2); \/\/ Recurively draw branches at new angles with length decreased by 10 branch(x2, y2, angle+dangle, length-dlength, dangle, dlength); branch(x2, y2, angle-dangle, length-dlength, dangle, dlength); } }   "
},
{
  "id": "figure-re-fractal-tree",
  "level": "2",
  "url": "section-re-graphics.html#figure-re-fractal-tree",
  "type": "Figure",
  "number": "13.4.2",
  "title": "",
  "body": " FractalTree.java   "
},
{
  "id": "listing-re-sierpinski-carpet",
  "level": "2",
  "url": "section-re-graphics.html#listing-re-sierpinski-carpet",
  "type": "Listing",
  "number": "13.4.3",
  "title": "",
  "body": " SierpinskiCarpet.java   \/\/ SierpinskiCarpet.java import doodlepad.*; public class SierpinskiCarpet { public static void main(String[] args) { \/\/ Init Window new Pad(\"Sierpinski Carpet\", 600, 600); \/\/ Draw Sierpinski Carpet for entire window square(0, 0, 600, 600); } public static void square(double x, double y, double w, double h) { \/\/ Base case \/\/ Terminate recursion when side is less than 5 if (w & 5) { return; } \/\/ Calculate square dimensions and location double w1 = w \/ 3.0; double h1 = h \/ 3.0; double x1 = x + w1; double y1 = y + h1; \/\/ Draw square Rectangle r = new Rectangle(x1, y1, w1, h1); r.setFillColor(0); \/\/ Eight recursive invocations around square square(x, y, w1, h1); square(x + w1, y, w1, h1); square(x + 2*w1, y, w1, h1); square(x, y + h1, w1, h1); square(x + 2*w1, y + h1, w1, h1); square(x, y + 2*h1, w1, h1); square(x + w1, y + 2*h1, w1, h1); square(x + 2*w1, y + 2*h1, w1, h1); } }   "
},
{
  "id": "figure-re-sierpinski-carpet",
  "level": "2",
  "url": "section-re-graphics.html#figure-re-sierpinski-carpet",
  "type": "Figure",
  "number": "13.4.4",
  "title": "",
  "body": " SierpinskiCarpet.java   "
},
{
  "id": "section-re-concepts",
  "level": "1",
  "url": "section-re-concepts.html",
  "type": "Section",
  "number": "13.5",
  "title": "Key Concepts",
  "body": " Key Concepts   The call stack is a data structure that tracks all currently executing methods.  A stack frame tracks the state of each executing method on the call stack.  A stack frame contains all information about the associated suspended method.  Stack frames are pushed on the top of the call stack when a method starts execution and popped off the top of the call stack when execution terminates.  When a method invokes itself, a new stack frame is added to the call stack so all instances of an executing method may be tracked.  The size of the call stack is limited. If an excessive number of methods are invoked, the call stack may overflow resulting in a StackOverflowError being thrown.  When a method (eventually) invokes itself during execution, the process is called recursion .  When a recursively invoked method returns, the method call resolves to the returned value.  Many algorithms may be implemented using recursion.  Most recursive algorithms have alternative iterative implementations that tend to be more efficient in terms of the amount of memory used.  Computing a factorial, the Fibonacci number, and the Greatest Common Divisor have elegant recursive implementations as well as iterative implementations.  Recursive programs may be divided into direct recursion and indirect recursion .  All recursive programs must have at least one base case and at least one recursive case .  The base case executes when the recursive algorithm has reached the end of execution and no further recursion is required.  A recursive case must move the state of the program closer to the base case in some way to ensure the recursive program terminates.  There may be multiple base cases and multiple recursive cases in a recursive algorithm.  The code block of one recursive case may invoke more than one recursive method.   "
},
{
  "id": "section-re-exercises",
  "level": "1",
  "url": "section-re-exercises.html",
  "type": "Section",
  "number": "13.6",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "section-113",
  "level": "1",
  "url": "section-113.html",
  "type": "Section",
  "number": "14.1",
  "title": "Searching and Sorting Algorithms",
  "body": " Searching and Sorting Algorithms   A class that holds only static methods capable of performing several algorithms on Java Collection classes    "
},
{
  "id": "section-114",
  "level": "1",
  "url": "section-114.html",
  "type": "Section",
  "number": "14.2",
  "title": "Complexity",
  "body": "Complexity  Worst case complexity (Big-Oh)  Best case complexity  Average case complexity  "
},
{
  "id": "section-115",
  "level": "1",
  "url": "section-115.html",
  "type": "Section",
  "number": "14.3",
  "title": "Sequential Search",
  "body": "Sequential Search  Search for an item in a linear sequence by testing all elements one at a time, in order, until element is found or all elements of the sequence are tested.  Complexity  "
},
{
  "id": "section-116",
  "level": "1",
  "url": "section-116.html",
  "type": "Section",
  "number": "14.4",
  "title": "Binary Search",
  "body": "Binary Search  Requires a sorted sequence to start  Eliminates half the linear sequence by comparing the middle element to element searched  Iterative implementation  Recursive implementation  Complexity  "
},
{
  "id": "section-117",
  "level": "1",
  "url": "section-117.html",
  "type": "Section",
  "number": "14.5",
  "title": "Selection Sort",
  "body": "Selection Sort  Repeatedly selects the next most suitable element from an unsorted partition of a linear sequence and moves it to the sorted partition.  Complexity  "
},
{
  "id": "section-118",
  "level": "1",
  "url": "section-118.html",
  "type": "Section",
  "number": "14.6",
  "title": "Insertion Sort",
  "body": "Insertion Sort  Elements from the unsorted partition of a linear sequence are picked and placed at the correct position in the sorted partition.  Complexity  "
},
{
  "id": "section-119",
  "level": "1",
  "url": "section-119.html",
  "type": "Section",
  "number": "14.7",
  "title": "Merge Sort",
  "body": "Merge Sort  Works by dividing a linear sequence into smaller subsequences, sorting each subsequence and merging sorted subsequences together to form a final sorted sequence.  Recursive implementation  Complexity  "
},
{
  "id": "section-120",
  "level": "1",
  "url": "section-120.html",
  "type": "Section",
  "number": "14.8",
  "title": "Key Concepts",
  "body": "Key Concepts    Algorithms are systematic ways of solving a given problem. Two categories of algorithms include searching for an item and sorting a linear sequence of values in some order. Algorithms for searching include sequential search and binary search Sequential search looks for an item in a linear sequence by testing all elements one at a time, in order, until element is found or all elements of the sequence are tested. Binary search must start with a sorted sequence. It recursvely eliminates half the sequence to search by comparing the middle sequence value with the item sought. Repeats until the item is found or the length of the searched sequence reduces to 0. Three algorithms for sorting include selection sort, insertion sort, and merge sort. Selection sort repeatedly selects the next most suitable element from an unsorted partition of a linear sequence and moves it to the sorted partition. Insertion sort picks elements from the unsorted partition of a linear sequence and places them at the correct position in the sorted partition. Merge sort works by dividing a linear sequence into smaller subsequences, sorting each subsequence and merging sorted subsequences together to form a final sorted sequence. The cost of an algorithm may be determined by mathematical analysis. This result of analysis in a mathematical expression that describes how cost grows with some respect to some input, such as the the size of the data structure processed. How an algorithms grows is referred to as Big-Oh notation.   "
},
{
  "id": "section-al-exercises",
  "level": "1",
  "url": "section-al-exercises.html",
  "type": "Section",
  "number": "14.9",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   "
},
{
  "id": "appendix_ascii_table",
  "level": "1",
  "url": "appendix_ascii_table.html",
  "type": "Appendix",
  "number": "A",
  "title": "ASCII Table",
  "body": " ASCII Table   Americal Standard Code Information Interchange (ASCII)    Decimal Code  Symbol  Description   0 NUL Null character  1 SOH Start of Heading  2 STX Start of Text  3 ETX End of Text  3 ETX End of Text  4 EOT End of Transmission  5 ENQ Enquiry  6 ACK Acknowledge  7 BEL Bell, Alert  8 BS Backspace  9 HT Horizontal Tab  10 LF Line Feed  11 VT Vertical Tabulation  12 FF Form Feed  13 CR Carriage Return  14 SO Shift Out  15 SI Shift In  16 DLE Data Link Escape  17 DC1 Device Control One (XON)  18 DC2 Device Control Two  19 DC3 Device Control Three (XOFF)  20 DC4 Device Control Four  21 NAK Negative Acknowledge  22 SYN Synchronous Idle  23 ETB End of Transmission Block  24 CAN Cancel  25 EM End of medium  26 SUB Substitute  27 ESC Escape  28 FS File Separator  29 GS Group Separator  30 RS Record Separator  31 US Unit Separator  32 SP Space  33 ! Exclamation mark  34 \" Double quotes (or speech marks)  35 # Number sign  36 $ Dollar  37 % Per cent sign  38 & Ampersand  39 ' Single quote  40 ( Open parenthesis (or open bracket)  41 ) Close parenthesis (or close bracket)  42 * Asterisk  43 + Plus  44 , Comma  45 - Hyphen-minus  46 . Period, dot or full stop  47 \/ Slash or divide  48 0 Zero  49 1 One  50 2 Two  51 3 Three  52 4 Four  53 5 Five  54 6 Six  55 7 Seven  56 8 Eight  57 9 Nine  58 : Colon  59 ; Semicolon  60 Less than (or open angled bracket)  61 = Equals  62 > Greater than (or close angled bracket)  63 ? Question mark  64 @ At sign  65 A Uppercase A  66 B Uppercase B  67 C Uppercase C  68 D Uppercase D  69 E Uppercase E  70 F Uppercase F  71 G Uppercase G  72 H Uppercase H  73 I Uppercase I  74 J Uppercase J  75 K Uppercase K  76 L Uppercase L  77 M Uppercase M  78 N Uppercase N  79 O Uppercase O  80 P Uppercase P  81 Q Uppercase Q  82 R Uppercase R  83 S Uppercase S  84 T Uppercase T  85 U Uppercase U  86 V Uppercase V  87 W Uppercase W  88 X Uppercase X  89 Y Uppercase Y  90 Z Uppercase Z  91 [ Opening bracket  92 \\ Backslash  93 ] Closing bracket  94 ^ Caret - circumflex  95 _ Underscore  96 ` Grave accent  97 a Lowercase a  98 b Lowercase b  99 c Lowercase c  100 d Lowercase d  101 e Lowercase e  102 f Lowercase f  103 g Lowercase g  104 h Lowercase h  105 i Lowercase i  106 j Lowercase j  107 k Lowercase k  108 l Lowercase l  109 m Lowercase m  110 n Lowercase n  111 o Lowercase o  112 p Lowercase p  113 q Lowercase q  114 r Lowercase r  115 s Lowercase s  116 t Lowercase t  117 u Lowercase u  118 v Lowercase v  119 w Lowercase w  120 x Lowercase x  121 y Lowercase y  122 z Lowercase z  123 { Opening brace  124 | Vertical bar  125 } Closing brace  126 ~ Equivalency sign - tilde  127 DEL Delete    "
},
{
  "id": "table-52",
  "level": "2",
  "url": "appendix_ascii_table.html#table-52",
  "type": "Table",
  "number": "A.0.1",
  "title": "Americal Standard Code Information Interchange (ASCII)",
  "body": " Americal Standard Code Information Interchange (ASCII)    Decimal Code  Symbol  Description   0 NUL Null character  1 SOH Start of Heading  2 STX Start of Text  3 ETX End of Text  3 ETX End of Text  4 EOT End of Transmission  5 ENQ Enquiry  6 ACK Acknowledge  7 BEL Bell, Alert  8 BS Backspace  9 HT Horizontal Tab  10 LF Line Feed  11 VT Vertical Tabulation  12 FF Form Feed  13 CR Carriage Return  14 SO Shift Out  15 SI Shift In  16 DLE Data Link Escape  17 DC1 Device Control One (XON)  18 DC2 Device Control Two  19 DC3 Device Control Three (XOFF)  20 DC4 Device Control Four  21 NAK Negative Acknowledge  22 SYN Synchronous Idle  23 ETB End of Transmission Block  24 CAN Cancel  25 EM End of medium  26 SUB Substitute  27 ESC Escape  28 FS File Separator  29 GS Group Separator  30 RS Record Separator  31 US Unit Separator  32 SP Space  33 ! Exclamation mark  34 \" Double quotes (or speech marks)  35 # Number sign  36 $ Dollar  37 % Per cent sign  38 & Ampersand  39 ' Single quote  40 ( Open parenthesis (or open bracket)  41 ) Close parenthesis (or close bracket)  42 * Asterisk  43 + Plus  44 , Comma  45 - Hyphen-minus  46 . Period, dot or full stop  47 \/ Slash or divide  48 0 Zero  49 1 One  50 2 Two  51 3 Three  52 4 Four  53 5 Five  54 6 Six  55 7 Seven  56 8 Eight  57 9 Nine  58 : Colon  59 ; Semicolon  60 Less than (or open angled bracket)  61 = Equals  62 > Greater than (or close angled bracket)  63 ? Question mark  64 @ At sign  65 A Uppercase A  66 B Uppercase B  67 C Uppercase C  68 D Uppercase D  69 E Uppercase E  70 F Uppercase F  71 G Uppercase G  72 H Uppercase H  73 I Uppercase I  74 J Uppercase J  75 K Uppercase K  76 L Uppercase L  77 M Uppercase M  78 N Uppercase N  79 O Uppercase O  80 P Uppercase P  81 Q Uppercase Q  82 R Uppercase R  83 S Uppercase S  84 T Uppercase T  85 U Uppercase U  86 V Uppercase V  87 W Uppercase W  88 X Uppercase X  89 Y Uppercase Y  90 Z Uppercase Z  91 [ Opening bracket  92 \\ Backslash  93 ] Closing bracket  94 ^ Caret - circumflex  95 _ Underscore  96 ` Grave accent  97 a Lowercase a  98 b Lowercase b  99 c Lowercase c  100 d Lowercase d  101 e Lowercase e  102 f Lowercase f  103 g Lowercase g  104 h Lowercase h  105 i Lowercase i  106 j Lowercase j  107 k Lowercase k  108 l Lowercase l  109 m Lowercase m  110 n Lowercase n  111 o Lowercase o  112 p Lowercase p  113 q Lowercase q  114 r Lowercase r  115 s Lowercase s  116 t Lowercase t  117 u Lowercase u  118 v Lowercase v  119 w Lowercase w  120 x Lowercase x  121 y Lowercase y  122 z Lowercase z  123 { Opening brace  124 | Vertical bar  125 } Closing brace  126 ~ Equivalency sign - tilde  127 DEL Delete   "
},
{
  "id": "appendix_shells",
  "level": "1",
  "url": "appendix_shells.html",
  "type": "Appendix",
  "number": "B",
  "title": "Shells and Commands",
  "body": " Shells and Commands   Operating systems and their common shell programs    Shell  Operating System    Command (Prompt) Shell  Windows    PowerShell  Windows    bash (Bourne-again Shell)  macOS    bash (Bourne-again Shell)  Linux\/UNIX      Shell commands    Task  Shell  Command    Get the current working directory  Command Prompt  cd     PowerShell  pwd     bash  pwd    List directory contents  Command Prompt  dir     PowerShell  dir     bash  ls    Change the current working directory  Command Prompt  cd  path\\to\\directory     PowerShell  cd  path\\to\\directory     bash  cd  path\/to\/directory    Move up one directory level  Command Prompt  cd ..     PowerShell  cd ..     bash  cd ..    Create a new directory  Command Prompt  mkdir  directoryname     PowerShell  mkdir  directoryname     bash  mkdir  directoryname    Copy a file  Command Prompt  copy  source\\file\\path destination\\file\\path     PowerShell  Copy-Item -Path  source\\file\\path  -Destination  destination\\file\\path     bash  cp  source\/file\/path destination\/file\/path    Delete a file  Command Prompt  del  filename     PowerShell  del  filename     bash  rm  filename     "
},
{
  "id": "table-53",
  "level": "2",
  "url": "appendix_shells.html#table-53",
  "type": "Table",
  "number": "B.0.1",
  "title": "Operating systems and their common shell programs",
  "body": " Operating systems and their common shell programs    Shell  Operating System    Command (Prompt) Shell  Windows    PowerShell  Windows    bash (Bourne-again Shell)  macOS    bash (Bourne-again Shell)  Linux\/UNIX    "
},
{
  "id": "table-54",
  "level": "2",
  "url": "appendix_shells.html#table-54",
  "type": "Table",
  "number": "B.0.2",
  "title": "Shell commands",
  "body": " Shell commands    Task  Shell  Command    Get the current working directory  Command Prompt  cd     PowerShell  pwd     bash  pwd    List directory contents  Command Prompt  dir     PowerShell  dir     bash  ls    Change the current working directory  Command Prompt  cd  path\\to\\directory     PowerShell  cd  path\\to\\directory     bash  cd  path\/to\/directory    Move up one directory level  Command Prompt  cd ..     PowerShell  cd ..     bash  cd ..    Create a new directory  Command Prompt  mkdir  directoryname     PowerShell  mkdir  directoryname     bash  mkdir  directoryname    Copy a file  Command Prompt  copy  source\\file\\path destination\\file\\path     PowerShell  Copy-Item -Path  source\\file\\path  -Destination  destination\\file\\path     bash  cp  source\/file\/path destination\/file\/path    Delete a file  Command Prompt  del  filename     PowerShell  del  filename     bash  rm  filename    "
},
{
  "id": "appendix-dp-classes",
  "level": "1",
  "url": "appendix-dp-classes.html",
  "type": "Appendix",
  "number": "C",
  "title": "DoodlePad Classes and Methods",
  "body": " DoodlePad Classes and Methods     "
},
{
  "id": "appendix-shape-events",
  "level": "1",
  "url": "appendix-shape-events.html",
  "type": "Appendix",
  "number": "D",
  "title": "DoodlePad Shape Events",
  "body": " DoodlePad Shape Events  The Shape class implements a series of \"on\" methods: one for each mouse event. For example, Shape implements a method named onMousePressed which is invoked when a Shape is pressed by the mouse. This method as well as all other methods that correspond with mouse events share a common signature with the types: double, double and int. These are the mouse event x and y coordinates and an integer identifying the mouse button in use. These parameters are identical to the signature of methods used in the method reference approach, minus the first parameter identifying the Shape object.  The following table lists all methods that may be overridden in order to handle a triggered mouse event.   Overridable Shape Event Methods    Method  Description    public void onMouseClicked(double x, double y, int button)  Override to handle a mouse-click event    public void onMouseDoubleClicked(double x, double y, int button)  Override to handle a mouse-double-click event.    public void onMousePressed(double x, double y, int button)  Override to handle a mouse-pressed event - when a mouse button is depressed.    public void onMouseReleased(double x, double y, int button)  Override to handle a mouse-released event - when a mouse button is released after being depressed.    public void onMouseMoved(double x, double y, int button)  Override to handle a mouse-moved event. This occurs when the mouse is moved over a Shape while no buttons are depressed.    public void onMouseDragged(double x, double y, int button)  Override to handle a mouse-dragged event. This occurs when the mouse is moved over a Shape while simultaneously holding a mouse button down.    public void onMouseEntered(double x, double y, int button)  Override to handle a mouse-entered event. This occurs when the mouse moves over a Shape from another Shape or the Pad.    public void onMouseExited(double x, double y, int button)  Override to handle a mouse-exited event. This occurs when the mouse moves off a Shape on to another Shape or the Pad.     "
},
{
  "id": "table-55",
  "level": "2",
  "url": "appendix-shape-events.html#table-55",
  "type": "Table",
  "number": "D.0.1",
  "title": "Overridable Shape Event Methods",
  "body": " Overridable Shape Event Methods    Method  Description    public void onMouseClicked(double x, double y, int button)  Override to handle a mouse-click event    public void onMouseDoubleClicked(double x, double y, int button)  Override to handle a mouse-double-click event.    public void onMousePressed(double x, double y, int button)  Override to handle a mouse-pressed event - when a mouse button is depressed.    public void onMouseReleased(double x, double y, int button)  Override to handle a mouse-released event - when a mouse button is released after being depressed.    public void onMouseMoved(double x, double y, int button)  Override to handle a mouse-moved event. This occurs when the mouse is moved over a Shape while no buttons are depressed.    public void onMouseDragged(double x, double y, int button)  Override to handle a mouse-dragged event. This occurs when the mouse is moved over a Shape while simultaneously holding a mouse button down.    public void onMouseEntered(double x, double y, int button)  Override to handle a mouse-entered event. This occurs when the mouse moves over a Shape from another Shape or the Pad.    public void onMouseExited(double x, double y, int button)  Override to handle a mouse-exited event. This occurs when the mouse moves off a Shape on to another Shape or the Pad.    "
},
{
  "id": "appendix-pad-events",
  "level": "1",
  "url": "appendix-pad-events.html",
  "type": "Appendix",
  "number": "E",
  "title": "DoodlePad Pad Events",
  "body": " DoodlePad Pad Events  The Pad class offers several opportunities to handle events by overriding its methods. In addition to mouse-related events, the Pad class handles keyboard events, network socket events, as well as a global timer.   Overridable Pad Mouse, Keyboard and Timer Event Methods    Method  Description    public void onMousePressed(double x, double y, int button)  A method that can be overridden to handle mouse pressed events.    public void onMouseReleased(double x, double y, int button)  A method that can be overridden to handle mouse released events.    public void onMouseMoved(double x, double y, int button)  A method that can be overridden to handle mouse moved events.    public void onMouseClicked(double x, double y, int button)  A method that can be overridden to handle mouse clicked events.    public void onMouseDoubleClicked(double x, double y, int button)  A method that can be overridden to handle mouse double-clicked events.    public void onMouseDragged(double x, double y, int button)  A method that can be overridden to handle mouse dragged events. A mouse dragged event is the same as a mouse moved event while the mouse is pressed.    public void onMouseEntered(double x, double y, int button)  A method that can be overridden to handle mouse entered events.    public void onMouseExited(double x, double y, int button)  A method that can be overridden to handle mouse exited events.    public void onKeyPressed(java.lang.String keyText, java.lang.String keyModifiers)  A method that can be overridden to handle key pressed events    public void onKeyReleased(java.lang.String keyText, java.lang.String keyModifiers)  A method that can be overridden to handle key released events    public void onKeyTyped(char keyChar)  A method that can be overridden to handle key typed events    public void onTick(long when)  A method that can be overridden to handle the Pad timer`s tick event. The timer tick rate is set with the setTickRate() method. The timer is started by invoking the startTimer() method. The timer is stopped by invoking the stopTimer() method.      Overridable Pad Socket Event Methods    Method  Description    public void onClientOpened(int id)  Invoked when a new client connection opens    public void onClientOpened(int id)  Invoked when a new client connection opens    public void onClientReceived(int id, java.lang.String msg)  Invoked when a connected client socket receives a message    public void onClientClosed(int id)  Invoked when a client connection is closed    public void onClientError(int id, java.lang.String msg)  Invoked when a connected client socket has has error    public void onClientInfo(int id, java.lang.String msg)  Invoked when a connected client socket has some information to share    public void onServerStarted()  Invoked when the listening server starts    public void onServerStopped()  Invoked when the listening server stops and all connections are closed    public void onServerError(java.lang.String msg)  Invoked when the listening server has an error    public void onServerInfo(java.lang.String msg)  Invoked when the listening server has some information to share     "
},
{
  "id": "table-56",
  "level": "2",
  "url": "appendix-pad-events.html#table-56",
  "type": "Table",
  "number": "E.0.1",
  "title": "Overridable Pad Mouse, Keyboard and Timer Event Methods",
  "body": " Overridable Pad Mouse, Keyboard and Timer Event Methods    Method  Description    public void onMousePressed(double x, double y, int button)  A method that can be overridden to handle mouse pressed events.    public void onMouseReleased(double x, double y, int button)  A method that can be overridden to handle mouse released events.    public void onMouseMoved(double x, double y, int button)  A method that can be overridden to handle mouse moved events.    public void onMouseClicked(double x, double y, int button)  A method that can be overridden to handle mouse clicked events.    public void onMouseDoubleClicked(double x, double y, int button)  A method that can be overridden to handle mouse double-clicked events.    public void onMouseDragged(double x, double y, int button)  A method that can be overridden to handle mouse dragged events. A mouse dragged event is the same as a mouse moved event while the mouse is pressed.    public void onMouseEntered(double x, double y, int button)  A method that can be overridden to handle mouse entered events.    public void onMouseExited(double x, double y, int button)  A method that can be overridden to handle mouse exited events.    public void onKeyPressed(java.lang.String keyText, java.lang.String keyModifiers)  A method that can be overridden to handle key pressed events    public void onKeyReleased(java.lang.String keyText, java.lang.String keyModifiers)  A method that can be overridden to handle key released events    public void onKeyTyped(char keyChar)  A method that can be overridden to handle key typed events    public void onTick(long when)  A method that can be overridden to handle the Pad timer`s tick event. The timer tick rate is set with the setTickRate() method. The timer is started by invoking the startTimer() method. The timer is stopped by invoking the stopTimer() method.    "
},
{
  "id": "table-57",
  "level": "2",
  "url": "appendix-pad-events.html#table-57",
  "type": "Table",
  "number": "E.0.2",
  "title": "Overridable Pad Socket Event Methods",
  "body": " Overridable Pad Socket Event Methods    Method  Description    public void onClientOpened(int id)  Invoked when a new client connection opens    public void onClientOpened(int id)  Invoked when a new client connection opens    public void onClientReceived(int id, java.lang.String msg)  Invoked when a connected client socket receives a message    public void onClientClosed(int id)  Invoked when a client connection is closed    public void onClientError(int id, java.lang.String msg)  Invoked when a connected client socket has has error    public void onClientInfo(int id, java.lang.String msg)  Invoked when a connected client socket has some information to share    public void onServerStarted()  Invoked when the listening server starts    public void onServerStopped()  Invoked when the listening server stops and all connections are closed    public void onServerError(java.lang.String msg)  Invoked when the listening server has an error    public void onServerInfo(java.lang.String msg)  Invoked when the listening server has some information to share    "
},
{
  "id": "appendix-timer-events",
  "level": "1",
  "url": "appendix-timer-events.html",
  "type": "Appendix",
  "number": "F",
  "title": "DoodlePad Timer Events",
  "body": " DoodlePad Timer Events  DoodlePad implements a Timer class, that may be used to drive repeating events, like animations. You may create any number of Timer objects, set the tick-rate in ticks-per-second, start and stop TImer objects, and handle a Timer-related events by extending the class and overriding methods.   Overridable Pad Mouse, Keyboard and Timer Event Methods    Method  Description    public void onStart(long when)  A method that can be overridden to handle the Timer's start event. The timer is started by invoking the startTimer() method. The when parameter is the difference in milliseconds between the timestamp of when this event occurred and midnight, January 1, 1970 UTC.    public void onStop(long when)  A method that can be overridden to handle the Timer's stop event. The timer is started by invoking the stopTimer() method. The when parameter is the difference in milliseconds between the timestamp of when this event occurred and midnight, January 1, 1970 UTC.    public void onTick(long when)  A method that can be overridden to handle the Timer's tick event. The timer tick rate is set with the setTickRate() method. The timer is started by invoking the startTimer() method. The timer is stopped by invoking the stopTimer() method. The when parameter is the difference in milliseconds between the timestamp of when this event occurred and midnight, January 1, 1970 UTC.     "
},
{
  "id": "table-58",
  "level": "2",
  "url": "appendix-timer-events.html#table-58",
  "type": "Table",
  "number": "F.0.1",
  "title": "Overridable Pad Mouse, Keyboard and Timer Event Methods",
  "body": " Overridable Pad Mouse, Keyboard and Timer Event Methods    Method  Description    public void onStart(long when)  A method that can be overridden to handle the Timer's start event. The timer is started by invoking the startTimer() method. The when parameter is the difference in milliseconds between the timestamp of when this event occurred and midnight, January 1, 1970 UTC.    public void onStop(long when)  A method that can be overridden to handle the Timer's stop event. The timer is started by invoking the stopTimer() method. The when parameter is the difference in milliseconds between the timestamp of when this event occurred and midnight, January 1, 1970 UTC.    public void onTick(long when)  A method that can be overridden to handle the Timer's tick event. The timer tick rate is set with the setTickRate() method. The timer is started by invoking the startTimer() method. The timer is stopped by invoking the stopTimer() method. The when parameter is the difference in milliseconds between the timestamp of when this event occurred and midnight, January 1, 1970 UTC.    "
},
{
  "id": "appendix-7",
  "level": "1",
  "url": "appendix-7.html",
  "type": "Appendix",
  "number": "G",
  "title": "Debugging",
  "body": " Debugging    Debugging is the process of identifying and correcting errors in a program  The simplest form of debugging a program involved hand tracing its statements and program flow.  Another form of debugging involves strategically placed print statements in a program that reveal its intermediate state during execution.  Java assertions are statement that evaluate an expression that should evaluate to true. An AssertionError is thrown when the expression evaluates to false.  A debugger is special software what allows you to step through a program and introspect its state and values between each step.    "
},
{
  "id": "glossary",
  "level": "1",
  "url": "glossary.html",
  "type": "Glossary",
  "number": "",
  "title": "Glossary",
  "body": "  abstract-class  abstract class  An abstract class is    abstract-method  abstract method  An abstract method is    abstraction  abstraction  A technique for handling complexity by hiding details and exposing only the high level concept. Abstraction is a key concept in object oriented programming.    glossary-ascii  ASCII  American Standard Code for Information Interchange    base-class  base class  Also called a superclass    constructor  constructor  A constructor is ...    derived-class  derived class  Also called a subclass    doodlepad  DoodlePad  DoodlePad is an open source, precompiled Java library of interactive Java Shape classes. DoodlePad is built on Java Swing, and is designed as a learning tool. A key feature of DoodlePad is that the standard AWT\/Swing infrastructure is unnecessary. DoodlePad automatically bootstraps and necessary infrastructure to create a fully functioning Swing program with as little as a Shape class instantiation. Custom methods may be invoked automatically when interacting with Shape objects. Linking a Shape with a custom method is accomplished with method references, not by implementing the required Swing interfaces. Interfaces is a topic that is not covered until the end of a standard CS1 progression. (See DoodlePad ).    dynamic-binding  dynamic binding  When a method of a derived class is invoked at runtime using a variable of type base class.    encapsulation  encapsulation  The grouping of related data and behavior in a single computational unit. Encapsulation is a key concept in object oriented programming.    extends  extends  The Java keyword use to establish an inheritance relationship between two classes.    gc  Garbage Collection  ...    inheritance  inheritance  A relationship between two classes where one class may access the members of another class    instanceof  instanceof  The operator used to test of an object is the type of a class or one if its inherited base classes.    java  Java  The Java Programming Language is ...    jdk  JDK  The Java Development Kit (JDK) is ...    jre  JRE  The Java Runtime Environment (JRE) is ...    jshell  JShell  The Java Shell tool (JShell) is an interactive console for executing snippets using the Java programming language. When started in verbose mode, JShelll will evaluate Java code snippets and print the result as well as the result type.    jvm  JVM  The Java virtual machine (JVM) is an abstract computing machine that executes instructions from a well-defined standardized low-level instruction set. The JVM has been ported to a variety of computing platforms to abstract away platform-specific details making it possible to run the identical compiled Java and other JVM-based programs across platforms.    method_signature  method signature  A method signature is a combination of the name of a method and an ordered list of parameter types. A method signature must be unique. It is used by the Java compiler to bind a method invocation within a program with the correct method declaration.    nullary-constructor  nullary constructor  A constructor having no parameters    object  Object  The class inherited by all Java classes.    OOP  object oriented programming  A style of computer programming that focusses on the design and use of objects. It it characterized by several principles, including encapsulation and polymorphism.    overload  overload  To define two or more methods in a class with a common name but a different signatures    override  override  To define a method in a derived class having the same signature as a method in one of its base classes.    pemdas  PEMDAS  An acronym for \"parentheses, exponents, multiplication, division, addition, subtraction.\" Indicats the order in which operations are performed when evaluating a mathematical expression.    polymorphism  polymorphism  A key concept in object oriented programming where one item may have many forms.    protected  protected  Visibility modifier allowing access only from a derived class.    scope  scope  Scope of an item is the area within which the item (potentially) exists. If you can precede an item with a name (like package, class, or object) and a dot-operator to access it, then it has that scope. If the scope of an item does not exist, all items declared with that scope also do not exist. Scope is different than visibility. An item may be scoped to an object but visible and accessible from outside the scope of the object if declared public .    shadowing  shadowing  When a variable declared in a local scope has the same name as a variable declared in an outer scope    string  String  A class provided by Java that encapsulates a sequence of characters.    super  super  Keyword use to set base class scope    signature  signature  A method's unique name and the number, type and order of its parameters.    glossary-unicode  UNICODE  An international standard for encoding characters that make up in most of the world's writing systems    visibility  visibility  The visibility of an item determines from where in a program an item may be accessed. Visibility is different than scope. An item may be scoped to an object but visible and accessible from outside the scope of the object if declared public .   "
},
{
  "id": "references",
  "level": "1",
  "url": "references.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " Blikstein, P., and Moghadam, S. (2019). Computing Education Literature Review and Voices from the Field . In S. Fincher & A. Robins (Eds.), The Cambridge Handbook of Computing Education Research (Cambridge Handbooks in Psychology, pp. 56-78). Cambridge: Cambridge University Press. doi:10.1017\/9781108654555.004  Fincher, Sally A and Robins, Anthony V, eds. (2019) The Cambridge Handbook of Computing Education Research . Cambridge University Press, Cambridge, UK, 906 pp. ISBN 978-1-108-65455-5. (doi:10.1017\/9781108654555)  Knuth, Donald E., Literate Programming . The Computer Journal , 1983, .  Russo, Mark F. \"DoodlePad: next-gen event-driven programming for CS1.  Journal of Computing Sciences in Colleges VOlume 32 (2017): pp 99-105.   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": ""
},
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   doodlepad.org   https:\/\/doodlepad.org   copyright  This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
