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
  "body": " Preface  This book was born from materials developed to teach many sections of the course CSC 220: Computational Problem Solving at The College of New Jersey . Rather than start with the Java compiler, this book introduces students to the interactive Java Shell named JShell which allows them to explore primitive types, basic objects, and expressions, interactively. We avoid starting with the magical  public static void main(String[] args) {... in favor of core topics such as types and memory. The Java compiler and runtime is deferred until .  This book also introduces a learning library for Java called DoodlePad . Extra effort is made to separate DoodlePad from other material to ensure that the book may be used independent of the library. DoodlePad is an interactive object graphics library for Java which was developed expressely to teach computing in a fun and engaging context. The DoodlePad library provides introductory students with the ability to create Java Swing applications and to render basic graphic objects without the need to master advanced Java concepts (like interfaces) required for using Swing and the AWT. DoodlePad works by bootstrapping the Swing intrastructure as necessary to create a graphics Window and to draw shapes. It also implements a pixel-prefect event dispatch system, which allows introductory students to interact with shapes using the mouse. This event system uses methods references , introduced Java 8, to allow custom event handler methods to be set to handle individual events. Once again, no prerequisite knowledge of advanced Java concepts is necessary.  Note that JShell and DoodlePad may be used together. For example, the following interactive JShell session containing three lines is all that is necessary for the student to create their first Java Swing Program with an interactive Oval displayed. This gives students the ability to get running very quickly, on the first day. It builds confidence and dispells the real fear felt by so many introductory programming students entering a Java class for the first time.   jshell>  \/env -c doodlepad.jar  jshell>  import doodlepad.*;  jshell>  new Oval()   DoodlePad was designed conservatively. All user-initiated graphics commands are first checked to see if they are being invoked on a thread different than the main AWT event-dispatching thread. If so, it uses SwingUtils.invokeLater() to invoke the user-initiated command to ensure that the command is not execute immediately, but instead is added to the AWT event-dispatching thread. This makes it possible for student programs to interact with Swing programs seamlessly. It also makes the interactive nature of invoking graphics programs from JShell work without a hitch. While crossing thread boundaries does incur a performance penalty, it shelters introductory students from the complexities of cross-thread programming and achieves one of the libraries main goals, which is for a program to \"just work.\"  An advantage of self-publishing a book online is that corrections, clarifications, and additions may be made immediately. There is no need to wait for the next edition. If you find any problems with this book, or would like to make suggestions, please send an email to: russom@tcnj.edu .  "
},
{
  "id": "section-gs-learning",
  "level": "1",
  "url": "section-gs-learning.html",
  "type": "Section",
  "number": "1.1",
  "title": "Learning to Program",
  "body": " Learning to Program  Why learn to program a computer? Blikstein and Moghadam in list four rationales for why we all should learn how to program.    The labor market rationale  Computer Science knowledge is useful not only for CS professionals but also for a variety of twenty-first century non-technical careers. A basic understanding of computers and how they work is an essential skill for being successful in the labor market.    The computational thinking rationale  The way a computer scientist thinks, problem-solving strategies and heuristics, is universally important and transfers to a variety of knowledge domains and everyday problems. Learning how to apply these unique strategies will give you a skill that can be applied broadly.    The computational literacy rationale  Computational literacy is a set of material, cognitive and social elements that generate new ways of thinking and learning. This new literacy is necessary for full and meaningful participation in society.  In contrast, by not having this basic literacy you run the risk of being left out of some of what might become the most important and impactful societal conversations.    The equity of participation rationale  Computer Science knowledge is required for civic participation, lucrative employment, and for understanding the impact of computing on society.  Equity of participation in computing education is necessary for future success. An opportunity to gain this basic knowledge should be a right extended to us all.    There is a fifth reason to learn how to program, it can be fun ! Some readers may be skeptical about this claim. I urge you to press on. There is nothing more satisfying than seeing the first window pop up on your computer screen with the widgets that you created.  In this book we introduce the OOP ( OOP ) style using the Java programming language. Java is one of the most popular and mature programming languages in use. Unlike some of the other popular programming languages, Java was designed from the outset to follow the object oriented style. Consequently, you will find Java being used to build large and powerful software applications that benefit from the power and safety of the object oriented programming style.  "
},
{
  "id": "p-11",
  "level": "2",
  "url": "section-gs-learning.html#p-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The labor market rationale "
},
{
  "id": "p-13",
  "level": "2",
  "url": "section-gs-learning.html#p-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The computational thinking rationale "
},
{
  "id": "p-15",
  "level": "2",
  "url": "section-gs-learning.html#p-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The computational literacy rationale "
},
{
  "id": "p-18",
  "level": "2",
  "url": "section-gs-learning.html#p-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The equity of participation rationale "
},
{
  "id": "section-gs-computers",
  "level": "1",
  "url": "section-gs-computers.html",
  "type": "Section",
  "number": "1.2",
  "title": "Computers and Computational Devices",
  "body": " Computers and Computational Devices  Computers and computational devices are electronic machines designed to process and manipulate data, perform calculations, and execute instructions to solve problems or perform specific tasks. They are the foundation of modern technology and play a crucial role in various aspects of our lives, from personal communications to complex weather predictions.  Computational devices come in many shapes and sizes. They range from small microprocessors found in your smart thermostat to very large multiprocessor systems that execute computations at ever-increasing speeds.  All computational devices have similar characteristics and are made up of the same or similar key components.  Hardware : Computers consist of physical components that perform the actual computations. The hardware includes the central processing unit (CPU), which serves as the \"brain\" of the computer and executes instructions. Other important hardware components include memory (RAM), storage devices (hard drives, solid-state drives), input devices (keyboard, mouse), output devices (monitor, printer), and various peripheral devices (USB devices, network cards, etc.).  Software : Software refers to the programs and instructions that tell the hardware what to do. It includes operating systems (such as Windows, macOS, or Linux) that manage the computer's resources, as well as application software that performs specific tasks or provides services. Software is typically written in programming languages and compiled or interpreted into machine code that the hardware can understand and execute.  Data Representation : Computers use binary representation, which means they store and manipulate data in the form of binary digits (bits). Binary digits are either 0 or 1, and they can represent various types of information, such as numbers, text, images, and sound. Higher-level abstractions are used to interpret and manipulate data, allowing for complex operations and computations.  Processing and Execution : Computers perform computations by executing instructions sequentially. These instructions are represented in machine code, which is a low-level language that the CPU can directly understand and execute. The CPU fetches instructions from memory, decodes them, and performs the necessary calculations or operations. The results are then stored back in memory or sent to output devices.  Input and Output : Computers interact with users and the external world through input and output devices. Input devices, like keyboards and mice, allow users to provide data and instructions to the computer. Output devices, such as monitors and printers, display or present the results of computations or provide information to users. Other input and output devices include scanners, microphones, speakers, and various sensors used in embedded systems.  Connectivity and Networking : Computers can be connected to networks, allowing them to communicate and share data with other devices. This enables tasks like accessing the internet, transferring files, sharing resources, and remote collaboration. Networking protocols and technologies, such as Ethernet and Wi-Fi, facilitate data exchange between computers and other devices.    It is worth taking a moment to understand what is meant by binary data representation . If you could look at computer memory and see the data stored, you'd see that all memory locations can store only two states. Depending upon the kind of memory, these two state are represented in different ways: charged or neutral, magnetic field pointing up or down, reflective or dispersive of a laser, a conductive or not. We represent these two states as 0 and 1, and call them bits . Also, we always consider these bits in groups of 8, called bytes. One byte is composed of eight ordered bits.  We can translate a byte into a base 10 number by defining each bit as contributing a value equal to a power of 2 to a final sum. To compute a base 10 number from a byte, we find all its bits with a value of 1 and add up the corresponding powers of 2. For example, the rightmost bit in a byte is assigned to the value . If the rightmost bit in a byte is 1 (i.e. 00000001 ), than we add to a total sum, and so the byte 00000001 encodes the base 10 number 1. If the bit is 0, we skip it when forming the final base 10 value. If both the first and second bits from the right in a byte are set to 1 (i.e. 00000011 ) then the encoded base 10 value of the byte 00000011 is , and so on.  Use the interactive widget below to check your understanding. The widget illustrates the bits from two sequential bytes, where the byte on the left encodes even larger powers of 2. Click each bit to toggle its value and watch how the encoded base 10 number changes. Make sure you understand how the bits if a byte form a base 10 number. Here are a few questions to consider.  Can you encode all the base 10 numbers 0, 1, through 10 in binary?  Do you see a pattern in the way bits are flipped as you count up?  What is the maximum base 10 number that can be represented by the bits of one byte?  How might we represent negative numbers?     Interactively build base 10 integers from bits    Computers and computational devices have revolutionized the way we work, communicate, learn, and entertain ourselves. They have become an integral part of industries such as finance, healthcare, transportation, and entertainment, driving innovation and transforming society as a whole. Understanding what they can, and cannot do, is critical to being a knowledgeable and productive participant in society. Furthermore, understanding how programming languages work is our way in to the world of computational devices.  "
},
{
  "id": "p-25",
  "level": "2",
  "url": "section-gs-computers.html#p-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hardware Software Data Representation Processing and Execution Input and Output Connectivity and Networking "
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
  "body": " Programming Languages  Programming languages are formal languages that allow programmers to write instructions or code to communicate with computers and create software applications. They serve as a means of instructing the computer to perform specific tasks or calculations. Each programming language has its own syntax and set of rules that dictate how code is written and interpreted. In fact, learning a programming language is not dissimilar to learning a foreign spoken language. There are rules that must be followed in order to speak any language correctly, and this goes for progamming languages as well. What is different is the interpretation. Unlike a human who interprets a spoken language, a programming language is read by a computer, which is very strict about the use of proper grammar and syntax. Fortunately, the computer programs that read the programs we write will tell us when we make a mistake. This gives us the the opportunity to learn and try again.  In this book we will study the Java programming language, one of the most popular object oriented programming languages, especially for writing large software systems.  Programming languages can be classified into different types, including low-level languages , high-level languages , and scripting languages . Low-level languages, such as assembly language, execute closer to machine code and provide direct control over hardware resources. High-level languages, like C++ and Java, offer more abstraction and are designed to be more user-friendly and easier for humans to create. They provide built-in features and libraries that simplify complex tasks.  Executing code written in a high-level programming language is usually a two-step process. First a program is translated from high-level syntax files to a low-level syntax file. Once this translation is successful, the low-level program file is executed on the computer hardware. You will perform this translation using a special helper program called the compiler . Depending upon the programming language, this compiled program may be run directly. or it may require other helper programs called a runtime engine and a virtual environment . Learning the toolkit that comes with a programming language is part of learning how to program in the language itself.  Scripting languages, such as JavaScript and PHP, are often used for small tasks and web development, and are interpreted at runtime rather than compiled ahead-of-time. They are typically used to write small programs that automate tasks or enhance web pages.  Programming languages may also be categorized based on their purpose or application domain. For example, there are languages specifically designed for web development (e.g., HTML, CSS, JavaScript), preferred for data science (e.g., R, Python), and better for mobile app development (e.g., Swift, Kotlin).  Each programming language has its strengths and weaknesses, and the choice of language depends on factors like project requirements, project size, performance needs, available libraries, and personal preference of the developer.  "
},
{
  "id": "section-gs-oop",
  "level": "1",
  "url": "section-gs-oop.html",
  "type": "Section",
  "number": "1.4",
  "title": "Object Oriented Programming",
  "body": " Object Oriented Programming   Object-oriented programming (OOP) is a programming paradigm centered around the idea of organizing and structuring a program as software objects that encapsulate data and behavior. In a way, these object are models of discrete elements that make up a larger system to solve a particular problem.  Imagine that you have been called upon to write a program that manages the items in a brick-and-mortar library. Among other things, the job of a library is to maintain, track, and lend items from its collection, including books, reference materials, digital recordings, and more. It must also track who has permission to borrow items from the library. What then might be the objects associated with a library management system? There are several material items that we can identify right away. For example, a Book, a DVD, a Borrower, or even a Bookshelf, might be items that your library management software system might need to model and manage. A Book object may be described by several data items, including a title, authors, publication date, a Dewey Decimal identifier, library storage location, and whether or not it is currently checked out or available for circulation. Each of these data items are properties of a Book object and, in accordinate with the the principles of object oriented programming, should be encapsulated within the Book software object. The same arguments may be made for other library system objects, such as DVD, Borrower, and Bookshelf.  It is not necessary for objects to be physical. For example, a book Collection might itself be an object. A book Collection might have encapsulated properties such as the number of Book objects it contains, the name of the building to which the Collection belongs, who is responsible for the collection, and of course the Book objects themselves. A book Collection object may be able to do things, such as add a Book object to or remove a Book object from its collection and iterate over the collection, returning one Book object at a time.   Objects in a Library Management System    Another example of an object might be the relationship between a Book object and a Borrower object. A Book may have had many Borrowers and a Borrower may be borrowing many Books. Rather than choose to encapsulate a list of Books in a Borrower or a list of Borrows in a Book, you might want an object that models that relationship between a book and a borrower. We might encapsualte the properties of this relationship a Circulate object. A Circulate object might have one reference to a Book, one to a Borrower, a date that the Book was lent, a date that the Book is due to be returned to the Library, and whether or not it is overdue.  The process of mapping a problem on to models of objects is called software design . We will consider some of the basic principles of design and object modeling in the chapter .  Because we may have many kinds of objects (e.g. Book vs. Borrower), and there may be many instances of each kind, we must have a unique template for creating each kind. In object oriented programming this template is called a class . Classes serve as blueprints for creating new objects. They define the data that each object instance can hold (e.g. title and author) as well as what it can do (e.g. add or remove a Book). We will learn how to do this in the chapter .  One of the real benefits of object oriented programming is abstraction . When I drive a car, I don't need to know all the underlying details. I know that if I press the button in my electric car, then engine comes on. I know if I put the car in gear and press the accelerator, the car moves. There is quite a lot of engineering that makes this possible, but I don't need to know all the details. From my perspective as a driver, I need only understand how to make the car move, turn, and stop. The details of how the car works have been abstracted away, making it possible for me to operate a car with minimal knowledge. This is power of abstraction.  Let's think about our library Collection object. A Collection knows how to add a reference to a Book object so the Book is considered to be in the Collection. How does this work? What is involved with actually putting a Book object in a Collection object? If you are creating this behavior in the Collection class, then you'll need to know the details. But if you are only using the behavior, then you can ignore the details and just invoke the behavior when you need it, very similar to driving a car. You can just ask your Collection object to add a Book object to itself. The details don't matter (assuming you trust the author). They have been abstracted away. As we'll learn, most modern programming languages come with prewritten and tested software libraries that we can use to write our programs. It is not necessary for us to learn how each works. That detail has been abstracted away and encapsulated in libraries of classes that we can use. Nice.  One more benefit of object oriented programning is inheritance . In most object oriented programming languages it is possible to relate classes to one another in a hierarchical fashion. For example, a Book class and a DVD class might both be related to a more general class called CirculationItem, which encapsualtes all the common properties and behavior shared by all items in a library that circulate. A Book object has its unique properties, like number of pages, and a DVD object has its unique properties, such as run duration, but both have properties like Decimal Dewey number or storage location. Rather than duplicate these common properties in each class, we can add them to the more general CirculationItem class, and then relate both Book and DVD to CirculationItem through inheritance . The inheritance relationship allows both Book and DVD access to the properties and behaviors in the more general CirculationItem class. As programmers, this allows us to author common properties and behaviors once, in CirculationItem, but give all inheriting classes access to the same properties and behaviors. Updating the behaviors in CirculationItem automatically updates the behavior of both Book and DVD. When used correctly, inheritance can be very powerful.  From an object oriented programming standpoint, both Book and DVD are two kinds of CirculationItem. In that sense, Book and DVD are different forms of CirculationItem, and so it is possible to treat both as if they were CirculationItem classes. This is one way that object oriented programming supports another concept called polymorphism (many forms). We'll learn more about inheritance in the chapter and the many forms of polymorphism in object oriented programming throughout the remainder of this book.   The CirculationItem inheritance hierarchy    Taken together, the key principles of object-oriented programming are:  Encapsulation : Encapsulation refers to the bundling of data and related behavior (methods or functions) into a single unit called an object. The data, also known as attributes or properties, tend be accessed and modified by the methods defined in the class. Encapsulation helps in organizing code, as the internal workings of an object are hidden from the outside, and it also provides data protection and security.  Inheritance : Inheritance allows the creation of new classes based on existing classes, inheriting their attributes and behaviors. The existing class is called the \"parent class\", \"base class\", or \"superclass\", and the new class is called the \"child class\",\"derived class\", or \"subclass\". The child class can extend or modify the behavior of the parent class by adding new methods or overriding existing ones. Inheritance promotes code reuse and supports the concept of hierarchical relationships between classes.  Polymorphism : Polymorphism means that objects of different classes can be treated as objects of a common superclass. It allows you to write code that can work with objects of different types (classes), as long as they share a common interface or base class. Polymorphism enables more flexible and extensible code, as it allows for method overriding and method overloading. Method overriding means that a subclass can provide its own implementation of a method defined in the superclass, while method overloading allows multiple methods with the same name but different parameters to coexist in a class.  Abstraction : Abstraction focuses on capturing the essential features and behaviors of an object while hiding unnecessary details. It allows you to create abstract classes or interfaces that define a set of methods without specifying their implementation. Concrete classes that inherit from abstract classes or implement interfaces provide the implementation details. Abstraction helps in designing complex systems by breaking them down into manageable and modular components.    By applying these principles, object oriented programming promotes modular, reusable, and maintainable code. It allows you to model real-world entities or concepts as objects, which interact with each other to solve problems or simulate systems. OOP languages, such as Java, C++, and Python, provide constructs to support these principles and enable the creation of object oriented systems.  Don't worry if these concept seem vague or confusing. They will become more clear as we explore examples of how each is implemented in Java and explain their benefits.  "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "section-gs-oop.html#figure-2",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " Objects in a Library Management System   "
},
{
  "id": "figure-3",
  "level": "2",
  "url": "section-gs-oop.html#figure-3",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " The CirculationItem inheritance hierarchy   "
},
{
  "id": "p-47",
  "level": "2",
  "url": "section-gs-oop.html#p-47",
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
  "body": " The Java Programming Language  The Java programming language was created by James Gosling and his team at Sun Microsystems (now owned by Oracle Corporation) in the mid-1990s. The development of Java began in 1991 as a project called \"Oak\" and was initially intended for use in consumer electronic devices. However, as time progressed, Java's focus shifted towards more general-purpose software development and it became widely known for its ability to create platform-independent applications.  The features of Java include the following.  Simple and Object-Oriented : Java was designed to be a simple and easy-to-learn language. It follows the principles of object oriented programming and provides features such as classes, objects, inheritance, and polymorphism. This makes it suitable for building modular and reusable code.  Platform-Independence : One of the key features of Java is its \"write once, run anywhere\" capability. Java programs are compiled into bytecode, which can run on any system with a Java Virtual Machine (JVM). Once the JVM is ported to run on a computational device, programs written in Java, or one of the JVM family of languages, will run on the device. This allows Java applications to be executed on different platforms without the need for recompilation, making it highly portable.  Robust and Secure : Java was built with a strong emphasis on reliability and security. It includes features like automatic memory management (garbage collection), exception handling, and runtime type checking, which help in writing robust and error-free code. Additionally, Java has a security model that prevents unauthorized access to resources and protects against malicious code execution.  Rich Standard Library : Java comes with a vast and comprehensive standard library that provides a wide range of pre-built classes and application programming interfaces (APIs) for common tasks. The standard library includes packages for networking, input\/output (I\/O), data structures, graphical user interfaces (GUIs), and much more. This extensive library reduces the need to write code from scratch and accelerates development.  Multi-threading : Java has built-in support for multi-threading, allowing concurrent execution of multiple threads within a single program. Multi-threading enables developers to create efficient and responsive applications by dividing tasks into separate threads that can run simultaneously. However, proper synchronization mechanisms need to be employed to ensure thread safety.  Garbage Collection : Java's automatic garbage collection feature relieves developers from manually managing memory allocation and deallocation. The garbage collector automatically detects and removes unreferenced objects, freeing up memory and reducing the chances of memory leaks and crashes.  Community and Ecosystem : Java has a vast and active developer community, which has contributed to the growth of numerous open-source libraries, frameworks, and tools. This vibrant ecosystem makes it easier for developers to leverage existing solutions and accelerates software development.    Over the years, Java has evolved through various versions, with each release introducing new features and enhancements. The language has found extensive use in enterprise software development, web applications, mobile development (Android), scientific research, and more. Java's versatility, performance, and wide adoption have made it one of the most popular programming languages in the world.  Java is packaged in editions that include a different set of tools tailored for specific purposes and platforms. Java editions available include the following.  Java Standard Edition (Java SE). Java SE is the core edition of Java and serves as the foundation for developing general-purpose applications. It provides a robust set of libraries, APIs, and tools for creating desktop, web, and server applications. Java SE includes the Java Development Kit (JDK), which includes the necessary tools and resources for Java development.  Java Enterprise Edition (Java EE). Java EE, now known as Jakarta EE, is an extension of Java SE specifically designed for developing enterprise-level applications. It provides an enterprise application framework with additional libraries, APIs, and services to facilitate the development of large-scale, distributed, and scalable applications. Java EE includes features such as web services, messaging, security, and JavaServer Pages (JSP).  Java Micro Edition (Java ME). Java ME is a scaled-down version of Java designed for resource-constrained devices such as mobile phones, embedded systems, and other small devices. It provides a runtime environment and a set of APIs optimized for these devices, enabling developers to create mobile applications and embedded systems with limited resources.  Other Java Editions. In addition to the main editions mentioned above, there are other specialized editions of Java, including Java Card (for running Java applications on smart cards), JavaFX (for building rich client applications with a modern user interface), and Java Embedded (for developing applications for embedded systems and IoT devices).  It's worth noting that Java SE forms the foundation for the other editions, and many developers primarily work with Java SE while leveraging specific features or APIs from other editions as needed. We use the Java SE throughout this book.  "
},
{
  "id": "p-50",
  "level": "2",
  "url": "section-gs-java.html#p-50",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simple and Object-Oriented Platform-Independence Java Virtual Machine Robust and Secure Rich Standard Library Multi-threading Garbage Collection Community and Ecosystem "
},
{
  "id": "p-53",
  "level": "2",
  "url": "section-gs-java.html#p-53",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Java Standard Edition (Java SE). "
},
{
  "id": "p-54",
  "level": "2",
  "url": "section-gs-java.html#p-54",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Java Enterprise Edition (Java EE). "
},
{
  "id": "p-55",
  "level": "2",
  "url": "section-gs-java.html#p-55",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Java Micro Edition (Java ME). "
},
{
  "id": "p-56",
  "level": "2",
  "url": "section-gs-java.html#p-56",
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
  "body": " The Java Development Kit  The Java Development Kit (JDK) is a software development kit that allows developers to create, compile, and run Java applications. It includes tools, libraries, and documentation necessary for Java development. The JDK is available for multiple platforms, including Windows, macOS, and Linux.  The key components and features of the Java Development Kit include the following.  Java Compiler (javac) for translating source code into bytecode.  Java Virtual Machine (JVM) which is responsible for executing Java bytecode.  Java Runtime Environment (JRE) which contains the JVM and essential class libraries required to run Java applications.  The Java Shell (JShell) is a Read-Evaluate-Print Loop tool (REPL) that runs in a terminal. It evaluates entered declarations, statements, and expressions immediately and prints results.  Other Java Development Tools including the Java Debugger (jdb) and the Java Archive (JAR) tool .  Libraries and APIs , a large set of standard class libraries and APIs that provide pre-built functionality for various tasks.  Development Documentation , a comprehensive set of documentation that describes all of the above.    One item worth highlighting is the platform-independence of the Java Virtual Machine. The JVM plays a fundamental role in achieving Java's \"write once, run anywhere\" capability. Since the JVM executes bytecode, which is a platform-neutral format, Java programs can be executed on any system that has a compatible JVM. This makes Java programs highly portable and eliminates the need to recompile the code for different operating systems or architectures.  Another item worth expanding upon is the JShell REPL. JShell provides a lightweight and interactive way to explore and experiment with Java code. It is particularly useful for learning the Java language, prototyping, and debugging small code snippets. It offers a flexible and dynamic environment for interactive Java development without the need to set up a complete project structure or compile and run separate Java files. JShell tracks history and stores past results. It also acts as an interactive help tool.  In verbose mode JShell not only produces the output from evaluating Java, but it also prints the type of the result -- something that we will be using extensively in the next chapter.  Overall, the Java Development Kit is an essential tool for Java developers, providing everything needed to create, compile, and run Java applications. It offers a rich set of development tools, libraries, and documentation, enabling developers to build robust and platform-independent Java software.  "
},
{
  "id": "p-58",
  "level": "2",
  "url": "section-gs-toolkit.html#p-58",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Java Compiler (javac) Java Virtual Machine (JVM) Java Runtime Environment (JRE) Java Shell (JShell) Java Debugger (jdb) Java Archive (JAR) tool Libraries and APIs Development Documentation "
},
{
  "id": "section-gs-install",
  "level": "1",
  "url": "section-gs-install.html",
  "type": "Section",
  "number": "1.7",
  "title": "Installing Your Toolkit",
  "body": " Installing Your Toolkit  To get the most from this book you must install (1) a recent version of the Java JDK and (2) a good programmer's editor. There are no-cost and paid options for both of these tools. We will focus on the no-cost options. Typically, paid options include a better experience and support. Note that these tools change quickly, and so the information in this section may be somewhat out of date. Use your best judgement to acquire or get access to the tools you need.  Install the Java Development Kit (JDK)  As we discussed in , to develop Java programs, you must install or have available the Java Development Kit (JDK). Only the JDK includes necessary tools, including the Java compiler ( javac ).  JDK installers are specific to the operating system of your computer. As we've described, the JVM executes Java bytecode in a platform-independent manner. That is possible because there is a different JVM for each platform which runs Java bytecode by translating bytecode to native platform instructions.  To download an installer, visit https:\/\/adoptium.net\/ with a browser from your computer. You will be offered for download the correct installer for OpenJDK, an open-source implementation of the Java Platform, Standard Edition. Download and run the matching installer. Follow the instructions for your particular operating system to install the JDK.  JDK tools like javac are executed using programs like a terminal or command prompt program. Every operating system provides one or more terminal programs for executing commands, and they differ in subtle ways. Typically, these programs start as black boxes that accept text commands and usually output results as text as well. Terminal programs may run a shell, which provides more sophisticated capabilities for running commands and interacting with the underlying operating system. The shell you choose also can impact how commands are entered. While we cannot cover the details of every terminal and every shell, we will point out common pitfalls for popular options.  One pitfall often experienced after a new installation is the inability to access JDK commands from a terminal. The JDK installs successfully, the new user opens and terminal, and proceeds to test the new installation by entering the command java -version , which should print the version of Java that is installed. Instead, the command is not found and an error is printed to the terminal. If the JDK is indeed installs successfully, the program is almost always associated with the directory paths that a terminal searches for a command after the command is entered. Only if the command program can be found on one of those paths can the command be executed. These search paths are stored in an operating system environment variable, frequently named PATH . For example, on Windows you can search for the \"Environment Variables\" program and use that to inspect the PATH environment variable and edit it to add a filesystem path to the bin subdirectory under the location of where the JDK is installed. It is the bin subdirectory where you'll find the JDK commands.   Install a Programming Editor  A Java source code program is a \"plain text file.\" When a file is referred to as \"plain text\" the implication is that the file contains characters only, from the default character set of the file. You will find no formatting or other commands that set font family or font style, such as bold or italics. Characters are the only items in the file. One import feature of a programming editor is that it edits and saves plain text files.  Another import feature of a good programming editor is knowledge of the programming language being edited. This gives the editor the ability to categorize and colorize the symbols and keywords in a given program file, and to format and indent the program's text automatically, using standard rules. Modern editors can do even more, such as detecting syntax errors or performing advanced context aware searching and editing of the file.  There are many good programming editors available for use. You may choose any editor known to be suitable for writing Java programs. If you do not have an editor installed or in mind, the Visual Studio Code (VSCode) editor from Microsoft, is a good option. Note that the VS Code editor is different that the Visual Studio Integrated Development Environment, which is a much more full-featured environment. VSCode is a simple and freely available editor suitable for many programming languages. Visit the url https:\/\/code.visualstudio.com, download a suitable installer, and install on your computer. Using a suitable editor will pay off quickly.  If you do choose to install VSCode, consider adding the Extension Pack for Java . Installing this extension pack will add functionality to the editor specific for the Java programming language.   "
},
{
  "id": "p-63",
  "level": "2",
  "url": "section-gs-install.html#p-63",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "javac "
},
{
  "id": "p-66",
  "level": "2",
  "url": "section-gs-install.html#p-66",
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
  "body": "The JShell REPL  JShell is an interactive commandline tool introduced in Java 9 as part of the Java Development Kit (JDK). As mentioned in , JShell provides a Read-Eval-Print Loop (REPL) environment for evaluating and executing Java code snippets interactively, and is an excellent tool to explore Java syntax while learning the language.  Several key features and characteristics of JShell include the following.  Interactive Java Execution: JShell allows developers to enter Java code directly into the command-line interface and immediately see the results without the need for writing a complete Java program. It eliminates the need to compile and run a separate Java file.  Code Exploration and Experimentation: JShell enables developers to explore and experiment with Java features, APIs, and libraries in an interactive manner. They can quickly test code snippets, try out new language constructs, and experiment with different approaches before incorporating them into a full-fledged Java application.  Instant Feedback: As you enter code in JShell, it evaluates and executes each line immediately, providing instant feedback on the results. It displays the output, errors, and any generated exceptions right after each statement is executed.  Tab Completion: JShell provides tab completion functionality, allowing developers to easily explore available classes, methods, variables, and packages. By typing a partial name and pressing the tab key, JShell suggests and completes the remaining portion, helping reduce typing errors and providing a convenient way to discover available options.  Variable Retention: JShell remembers and retains previously defined variables and their values, allowing developers to refer to and use them in subsequent code snippets. This feature facilitates incremental development and experimentation, as you can build upon previously defined variables without redefining them.  Multiline Input: JShell supports multiline input, enabling the entry of code blocks or longer code snippets spread across multiple lines. This is useful for writing more complex Java statements, loops, or methods interactively.  JShell is a commandline tool that runs in a terminal. To start JShell, first open a terminal and enter the command jshell . You will see the JShell prompt, similar to the following. At the JShell prompt you may enter any valid Java expression. We'll explore this more in .  >jshell | Welcome to JShell -- Version 17.0.6 | For an introduction type: \/help intro jshell> 2 + 2 $1 ==> 4 jshell>  To exit JShell enter the command \/exit .  While learning Java, it is useful to start JShell in verbose mode . To accomplish that, add the -v option to the initial jshell command, in other words enter jshell -v into the terminal. Once in verbose mode, the output from executing Java expressions is more verbose, including the output type.  >jshell -v | Welcome to JShell -- Version 17.0.6 | For an introduction type: \/help intro jshell> 2 + 2 $1 ==> 4 | created scratch variable $1 : int jshell>  JShell includes many additional commands, all of which begin with the forward slash, like \/exit (see below). We will explore several of these additional commands in .  jshell> \/help | Type a Java language expression, statement, or declaration. | Or type one of the following commands: | \/list [<name or id>|-all|-start] | list the source you have typed | \/edit <name or id> | edit a source entry | \/drop <name or id> | delete a source entry | \/save [-all|-history|-start] <file> | Save snippet source to a file | \/open <file> | open a file as source input | \/vars [<name or id>|-all|-start] | list the declared variables and their values | \/methods [<name or id>|-all|-start] | list the declared methods and their signatures | \/types [<name or id>|-all|-start] | list the type declarations | \/imports | list the imported items | \/exit [<integer-expression-snippet>] | exit the jshell tool | \/env [-class-path <path>] [-module-path <path>] [-add-modules <modules>] ... | view or change the evaluation context | \/reset [-class-path <path>] [-module-path <path>] [-add-modules <modules>]... | reset the jshell tool | \/reload [-restore] [-quiet] [-class-path <path>] [-module-path <path>]... | reset and replay relevant history -- current or previous (-restore) | \/history [-all] | history of what you have typed | \/help [<command>|<subject>] | get information about using the jshell tool | \/set editor|start|feedback|mode|prompt|truncation|format ... | set configuration information | \/? [<command>|<subject>] | get information about using the jshell tool | \/! | rerun last snippet -- see \/help rerun | \/<id> | rerun snippets by ID or ID range -- see \/help rerun | \/-<n> | rerun n-th previous snippet -- see \/help rerun  JShell is particularly helpful for learning Java, prototyping code, and exploring the language's features in an interactive manner.  "
},
{
  "id": "p-74",
  "level": "2",
  "url": "section-gs-jshell.html#p-74",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Interactive Java Execution: "
},
{
  "id": "p-75",
  "level": "2",
  "url": "section-gs-jshell.html#p-75",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Code Exploration and Experimentation: "
},
{
  "id": "p-76",
  "level": "2",
  "url": "section-gs-jshell.html#p-76",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Instant Feedback: "
},
{
  "id": "p-77",
  "level": "2",
  "url": "section-gs-jshell.html#p-77",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tab Completion: "
},
{
  "id": "p-78",
  "level": "2",
  "url": "section-gs-jshell.html#p-78",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Variable Retention: "
},
{
  "id": "p-79",
  "level": "2",
  "url": "section-gs-jshell.html#p-79",
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
  "body": " The DoodlePad Library  DoodlePad is an open source object oriented graphics library that makes it easy to write computer graphics programs in Java. It automatically sets up the Java graphics environment for you, including graphic object management, rendering, double buffering and a diverse set of pixel-perfect, shape-specific events and event handling. Because of these features, DoodlePad is ideal for introductory computing education as students are free to focus on developing core programming skills while working in the fun and engaging world of interactive computer graphics. DoodlePad is designed to help you get started quickly and to have a Java graphics program running in no time.  From a user's perspective, DoodlePad is nothing more than a zip archive file containing precompiled Java classes ready for use packaged as a Java Archive (JAR) file. No installation is required other than to download the doodlepad.jar file from the project's GitHub repository . You will find a direct link to the GitHub repository and the JAR file at the site https:\/\/doodlepad.org\/ .  While developing the DoodlePad library, care has been taken to ensure that the library works across process boundaries. This allows us to use DoodlePad interactively from tools like JShell. As a preview, below you'll find a JShell session that creates a default Oval object in a graphics window. The result of executing these commands will be similar to the Windows that follows. After downloading the doodlepad.jar file and saving to your working folder, telling Java where to find the file using the \/env --class-path doodlepad.jar command, and importing all classes into JShell using the import doodlepad.*; command, creating the new Oval object is as simple as executing the command new Oval(); .  This simple script demonstrates how DoodlePad allows a programmer to focus on writing their program, such as the creation of an Oval object, and not on details such as creating all the ancilliary intrustructure objects, such as the JFrame and JPanel objects, as well as how to use a Graphics2D object, etc.  >jshell | Welcome to JShell -- Version 17.0.6 | For an introduction type: \/help intro jshell> \/env --class-path doodlepad.jar | Setting new options and restoring state. jshell> import doodlepad.*; jshell> new Oval() $2 ==> Oval x=61.94595675351811, y=130.01502432069648, width=100.0, height=100.0, layer=doodlepad.Layer@47ef968d jshell>   A DoodlePad Oval created from JShell    We will begin using DoodlePad library classes in  "
},
{
  "id": "figure-4",
  "level": "2",
  "url": "section-gs-doodlepad.html#figure-4",
  "type": "Figure",
  "number": "1.9.1",
  "title": "",
  "body": " A DoodlePad Oval created from JShell   "
},
{
  "id": "section-10",
  "level": "1",
  "url": "section-10.html",
  "type": "Section",
  "number": "1.10",
  "title": "Key Concepts",
  "body": "Key Concepts   There are many programming styles and languages available for use. We focus on the object oriented programming style using the Java programming language.  Object oriented programming is a programming style based on software objects.  Encapsulation refers to the bundling of data and related behavior (methods or functions) into a single object.  Inheritance allows the creation of new classes based on existing classes, sharing their attributes and behaviors. Inheritance promotes code reuse and supports the concept of hierarchical relationships between classes.  Polymorphism means that objects of different classes can be treated as objects of a common inherited class. It allows you to write code that can work with objects of different types (classes), as long as they share a common interface or base class.  Abstraction focuses on capturing the essential features and behaviors of an object while hiding unnecessary details. Abstraction helps in designing complex systems by breaking them down into manageable and modular components.  The Java ecosystem is composed of several core components, including the JVM , JRE , JDK , and JShell .  The Java Virtual Machine  (JVM) is a platform independent utility responsible for executing compiled Java bytecode.  The Java Runtime Environment  (JRE) adds to the JVM a very large libary of prewritten classes used to within Java applications. The JRE is the minimum required to run Java programs.  The Java Development Kit  (JDK) adds to the JRE a suite of tools required to develop Java programs, including the Java compiler (javac).  The Java Shell  (JShell) is a tool for executing Java code snippets interactively.  Low-level Language Execute closer to machine code and provide direct control over hardware resources.  High-level Language Offer more abstraction and are designed to be more user-friendly and easier for humans to create.  Scripting Language Often used for small tasks and web development, and are interpreted at runtime rather than compiled ahead-of-time.  Event-driven computer graphics is one of our learning contexts. We will create objects that we can see on our screen as shapes and interact with them using the mouse and keyboard.  DoodlePad is an open source Java interactive object graphics library we will use for developing fun and engaging Java programs. It was designed for teaching Java programming in an event-driven computer graphics context.  DoodlePad classes encapsulate shapes, render them in a graphics window, and respond to interaction using the mouse and keyboard.   "
},
{
  "id": "section-gs-exercises",
  "level": "1",
  "url": "section-gs-exercises.html",
  "type": "Section",
  "number": "1.11",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Chapter Exercises    "
},
{
  "id": "gs-exercises",
  "level": "2",
  "url": "section-gs-exercises.html#gs-exercises",
  "type": "Figure",
  "number": "1.11.1",
  "title": "",
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
  "body": " Variables and Comments  In Java, a variable is a named storage location that holds a value of a particular data type. Variables are used to access data stored in memory and manipulate that data within a program. Before using a variable, it must be declared with a specific data type, which determines the kind of data it can store. Java is a statically typed language, which means that the type of a variable is known at at the time your program is compiled, and must be declared explicitly.  Here's the general syntax for declaring a variable in Java:  dataType variableName;  Here, dataType represents the type of data the variable can hold, such as int for integers, double for floating-point numbers, boolean for boolean values, String for text, etc. variableName is an identifier that you choose for the variable representing the underlying memory. But don't worry, we don't have to think about the memory itself. Java will take care of choosing a location and setting asside the correct amount. It know how much to set asign using the dataType that you specified when declaring the variable. Also note how the statement ends with a semicolon ( ; ). All Java statements must end with a semicolon.  For example, let's declare a few variables in Java. Note the \/\/ to the right of each declaration. These are Java single-line comments . Anything to the right of a \/\/ on a line in Java is ignored. We use single-line comments extensively.  int age; \/\/ declare an integer variable named 'age' double pi; \/\/ declare a double variable named 'pi' boolean isStudent; \/\/ declare a boolean variable named 'isStudent' String name; \/\/ declare a String variable named 'name'  You may not choose just any sequence of characters for your variable name. Java variable names must follow certain rules.  Variable names must start with a letter (upper or lower case), an underscore ( _ ) or a dollar sign ($)  After the first character, variable names may be made up of additional letters (A-Za-z), digits (1-9), an underscore ( _ ) and\/or a dollar sign ($)  Spaces are not permitted in a variable name.    After declaring a variable you can assign it an initial value using the assignment operator (=):  age = 25; \/\/ assign the value 25 to the 'age' variable pi = 3.14; \/\/ assign the value 3.14 to the 'pi' variable isStudent = true; \/\/ assign the value true to the 'isStudent' variable name = \"Moonman\"; \/\/ assign the value \"Moonman\" to the 'name' variable  Optionally, you can combine the declaration of a variable and initial assignment in a single statement:  int age = 25; \/\/ declare and initialize the 'age' variable double pi = 3.14; \/\/ declare and initialize the 'pi' variable boolean isStudent = true; \/\/ declare and initialize the 'isStudent' variable String name = \"Moonman\"; \/\/ declare and initialize the 'name' variable  Once a variable is declared and assigned a value, you can use it in various operations and expressions within your program.  Now it's your turn. Open a new terminal on your computer or in your editor and start JShell by entering the command jshell -v . The -v at the end of this command tells JShell to run in verbose mode. In verbose mode JShell prints additional information after each entry, which is useful to see while you are still learning. Additional information includes the type of the result just calculated. Following s a sample JShell session for you to try.   jshell -v | Welcome to JShell -- Version 17.0.6 | For an introduction type: \/help intro jshell> 1 $1 ==> 1 | created scratch variable $1 : int jshell> 255 $2 ==> 255 | created scratch variable $2 : int jshell> 1 + 255 $3 ==> 256 | created scratch variable $3 : int jshell> int x; x ==> 0 | created variable x : int jshell> int y = 100; y ==> 100 | created variable y : int jshell> x = 200; x ==> 200 | assigned to x : int jshell> x + y; $7 ==> 300 | created scratch variable $7 : int jshell> \/exit | Goodbye    Complete the following.  Declare a variable of type double named amount and initialize it to 10.5  Declare a variable of type int named nCats and initialize it to 3  Enter the expression nCats * amount  Compare the variable types used in the expressed and the type of the computed result? Why do you think Java produced a result of this type?   Java provides different modifier terms that may be used when declaring a variable. For example, you may preceded a declaration with the additional keyword final . This turns your variable into a constant (the value cannot be changed after initialized). We'll explore these topics in more detail later.   You now know how to declare, assign, initialize and use variables in simple mathematical expressions. Variables in Java are essential for storing and manipulating data, and they play a fundamental role in programming with Java.  "
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
  "title": "Integer Primitive Types",
  "body": " Integer Primitive Types  Java divides numeric values into two broad categories: integers and floating point numbers . An integer is a numeric value having no decimal places. It may optionally be preceded by a sign, like - or +, but it may not have commas or a decimal place (.). Consequently, integers are whole numbers (positive, negative or zero). No fractional part is permitted. Examples of Java integer value include 2, -64, 0, and 2147483647. We may enter these values directly into JShell, with no comma, at least up to a point. For example, if we enter 2147483647, JShell happily reads it and saves it with a new variable name generated automatically (beginning with $ and followed a number). But if we enter a value that is larger by 1, that is 2147483648, we see an error.   jshell> 2147483647; $1 ==> 2147483647 | created scratch variable $1 : int jshell> 2147483648 | Error: | integer number too large: 2147483648; | 2147483648 | ^   The error tells us that the number is too large . More specifically, the number is too large to be stored in the memory allotted by the default type that JShell uses to store integers values, int . To store 2147483648 in memory, we must choose a different Java integer type, one capable of holding larger numbers by virtue of being allocated more memory.  Recall that Java provides four primitive integer types, byte , short , int , long . We use the term primitive because these types are fundamental to the Java language. These four types are listed in the following table along with the amount of memory used to store each as well as the range of values that may be stored as min and max. All integer variables are stored as one of these types. JShell chooses int to store integers by default. We can see this in the $1 scratch variable above when JShell produces the output created scratch variable $1 : int . The final int tells us that $1 is of type int . Attempting to create the value 2147483648 and store it as an int produces an error because, according to the following table, that value is outside the range of values capable of being stored as an int . What we really need is a way to store the number as a long .   Integer types, range, and memory requirements.    type min max memory    byte -128 127 1 byte    short -32,768 32,767 2 bytes    int -2,147,483,648 2,147,483,647 4 bytes    long -9,223,372,036,854,770,000 9,223,372,036,854,770,000 8 bytes     Any time we enter a number directly into a Java program, even if we don't store it using a variable, Java must interpret it and hold in memory, at least temporarily. Whenever any value is entered directly into a Java program, such as a number, it is called a literal . Integer literals of type int are written as a sequence of digits, using no other special syntax. But other literal types require extra care, such as by adding trailing characters to indicate their type. For example, a long literal is written as a sequence of digits followed by a trailing L . The special trailing character tells Java to set aside twice the amont of memory used to store an int (8 bytes). To create a long literal, terminate the literal's sequence of integer digits with an L , as follows. Note that when we enter an integer value like this, JShell in verbose mode tells us that the type is long .   jshell> 2147483648L; $3 ==> 2147483648 | created scratch variable $3 : long   Java now knows you intend to create a long and so is declares the scratch variable $3 with a type of long and initializes it with the value entered. This time, because a variable of type long is capable of storing the number 2147483648, JShell does not produce an error. long literals are made up of digits and a trailing L >. Unfortunately, Java provides no way to express a short and byte literals. We can declare short and byte variables and initialise them, but we must use integer literals as the initial value. Java handles the automatic conversion from an int to a short and byte before it is written to the variable's memory. If the initial value is too big to fit, we'll see an error.  As we've seen, declaring a variable is accomplished by entering a type followed by the name of the variable we wish to create and a final semicolon. For example, let's say we want to create a variable named n of type long . We would enter long n; . Java assigns a default value of 0 to all new integer variables that have not been initialized.  With the variable n and its associated memory created, we may safely assign our larger number to the variable because as a type long it is capable of holding the larger value.   jshell> long n; n ==> 0 | created variable n : long jshell> n = 2147483648L; n ==> 2147483648 | assigned to n : long jshell>   Using similar procedures you may declare variables with one of the four integer types and assign values. You may also use these variable names any place you would normally use its associated value, such as in a mathematical expression. Make sure to be careful that all variables assigned values have enough memory to hold assigned values. Assigning an int value to a long variable is permitted, but not the other way around.   Declare and initialize integer variables of all four integer types.  Write simple mathematical expressions that combine the different types.  What do you notice about the result type when you add an int and a long . Why is this the case?   "
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
  "id": "p-112",
  "level": "2",
  "url": "section-pe-integers.html#p-112",
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
  "title": "Character Primitive Type",
  "body": " Character Primitive Type  In Java, the char primitive type is used to represent a single character. It can hold any character from the ASCII or Unicode character sets, which includes characters from various languages and scripts.  The char type is declared using the keyword char and occupies 2 bytes of memory. It can store characters using either their Unicode representation or the corresponding escape sequences. For example:  char letterA = 'A'; char digit7 = '7'; char euroSymbol = '\\u20AC'; \/\/ Unicode representation for the Euro symbol char newLine = '\\n'; \/\/ Escape sequence for a new line  In the above examples, letterA stores the character 'A', digit7 stores the character '7', euroSymbol stores the Euro symbol (€), and newLine stores the newline command character.  Java provides various methods and operators to work with char values. Some commonly used methods include:   Character.isLetter(char ch) : Checks if the specified character is a letter.  Character.isDigit(char ch) : Checks if the specified character is a digit.  Character.isWhitespace(char ch) : Checks if the specified character is a whitespace character.  Character.toLowerCase(char ch) : Converts the specified character to lowercase.  Character.toUpperCase(char ch) : Converts the specified character to uppercase.   Note that char values can also be used in arithmetic expressions, as they are internally represented as two-byte integers. For example, in JShell:   jshell> char ch; \/\/ Declare a char variable ch ch ==> '\\000' \/\/ Default value of 0 | created variable ch : char jshell> ch = 'A' + 1; \/\/ Assign 'A' + 1 to it ch ==> 'B' | assigned to ch : char jshell> ch \/\/ The value of ch is 'B' ch ==> 'B' \/\/ ASCII code for 'A' is 65 and 'B' is 66 | value of ch : char jshell>  Overall, the char primitive type in Java allows you to work with individual characters, making it useful for text processing, string manipulation, and various other tasks involving character-level operations.   Using JShell in verbose mode, enter a char literal using the single-quote notation. Make sure that JShell tells you that your literal is of type char .  What happens if you enter a multi-char char literal, like 'abc' ? Why do you get that response?  char s are stored as two-byte numbers. To what does the expression 'A' + 0; evaluate?  What does the previous result tell you about the way capital-A is stored in memory? Is that consistent with the corresponding ASCII Table entry for capital-A?   "
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
  "title": "Floating Point Primitive Number Types",
  "body": " Floating Point Primitive Number Types   In Java, the float and double primitive types are used to represent floating-point numbers. Both types are used for storing numeric values with a fractional part. The main difference between the two lies in the precision and range of values they can store.  The float type is a single-precision floating-point number, while the double type is a double-precision floating-point number. Here are the key characteristics of each type:    Floating-point types, range, and memory requirements.    type  type suffix  min  max  memory  precision    float  F or f    4 bytes  6-7 digits    double  D or d    8 bytes  15-16 digits     Due to their larger size and higher precision, double is the preferred choice when working with floating-point numbers in Java. Use double s unless there are specific memory or performance constraints that necessitate the use of float . double is the default floating-point number type; if you write down a floating-point number literal with no special literal type suffix character, the type of that floating-point value is double . The literal 3.14 is a double . Adding an F or f to the end of a floating-point literal, like 3,14F , tells Java that you want the number of be a float .  Both float and double types support standard arithmetic and mathematical operations, such as addition, subtraction, multiplication, and division. Java provides built-in mathematical functions in the Math class that can be used with float and double values.  When performing calculations involving floating-point numbers, it is important to be aware of the limitations of floating-point representation. Floating-point numbers are stored as approximations, and certain calculations can introduce rounding errors. Therefore, comparing floating-point numbers for equality is not recommended. Instead, it is common practice to compare the difference between two floating-point values to a small epsilon value.  Here's an example in JShell showcasing the usage of float and double types:   jshell> float myFloat = 3.14F; myFloat ==> 3.14 | created variable myFloat : float jshell> double myDouble = 3.14; myDouble ==> 3.14 | created variable myDouble : double jshell> float result = myFloat * 2; result ==> 6.28 | created variable result : float jshell> double otherResult = myDouble \/ 2; otherResult ==> 1.57 | created variable otherResult : double jshell>  In summary, the float and double primitive types in Java are used for storing floating-point numbers. The choice between them depends on the desired precision and range of values. double provides higher precision and is the default choice, while float is used in situations where memory or performance constraints exist.  "
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
  "id": "p-137",
  "level": "2",
  "url": "section-pe-strings.html#p-137",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "class "
},
{
  "id": "section-pe-math",
  "level": "1",
  "url": "section-pe-math.html",
  "type": "Section",
  "number": "2.7",
  "title": "Mathematical Expressions",
  "body": " Mathematical Expressions   Expressions in Java are combinations of variables, literals, operators, and other expressions that evaluate to a value with a type. Expressions are the building blocks of Java programs and are used to perform computations and help make decisions programmatically.  Four of the more common types of Java expressions are:  Mathematical Expressions  Assignment Expressions  Relational Expressions  Logical Expressions     Mathematical Expressions involve mathematical operations such as addition (+), subtraction (-), multiplication (*), division (\/), and modulus (%). The evaulation of an arithmetic expression produces a number. For instance:   jshell> 9 + 5; \/\/ Addition $1 ==> 14 | created scratch variable $1 : int jshell> 9 - 5; \/\/ Subtraction $2 ==> 4 | created scratch variable $2 : int jshell> 9 * 5; \/\/ Multiplication $3 ==> 45 | created scratch variable $3 : int jshell> 9 \/ 5; \/\/ Integer division $4 ==> 1 | created scratch variable $4 : int jshell> 9 % 5; \/\/ Modulus (remainder of division) $5 ==> 4 | created scratch variable $5 : int jshell>  Following is a list of many of the most common Java mathematical operators.  Common Java Mathematical Operators    Operator  Type  Description    +  binary, infix  addition    -  binary, infix  subtraction    -  unary, prefix  negation    *  binary, infix  multiplication    \/  binary, infix  division    %  binary, infix  modulus     The unary prefix operator - in Java is negation , which is used to compute the additive inverse of a numeric value or variable. In other words, it turns a positive value negative, and a negative value positive.  An important general rule of thumb to know regarding Java's binary operators is that both operands must be of the same type going in, and the type of the result produced is the generally the same as the operands . This applies to the numeric operand types int , long , float , and double , and implies the following.   If we add two double s, the sum produced is a double .  If we multiply two float s, the product is a float .  If we subtract two long s, the difference is a long .  If we divide two int s, the quotient is an int .   That last implication is a bit troubling. The value 3 divided by 2 is 1.5. If 3 and 2 are int types, how can the quotient hold the correct value? Let's give it a try in JShell.   jshell> int x = 3, y = 2; \/\/ Declare and init two ints x ==> 3 | created variable x : int y ==> 2 | created variable y : int jshell> x \/ y; \/\/ Divide ints $3 ==> 1 \/\/ Is this a mistake? | created scratch variable $3 : int jshell>   Sure enough, as you can see by the session above, dividing 3 by 2 produces an int with a value of 1, not 1.5. Because 1.5 cannot be stored in an int , the result produced has value of 1. Specifically, dividing two integer number types performs integer division , not floating point division. Integer division drops any fractional parts of the result. A frequent pitfall of novice Java programmers is to expect a fractional part in a result after dividing two integer types, which is impossible, where would it be stored? Of course, this is not a problem when dividing floating point types.  Mathematical functions are available in Java by preceding the function with Math. , for example Math.pow(2,3) evaluates producing 8 . Technically, when using this notation we are accessing static methods of the Math class. The following table lists many of the common mathematical functions implemented in Math . These may be included in any Java expression and will be invoked during expression evaluation.   Java Math class static methods    Method\/Constant  Description    Math.PI  The mathematical constant .    Math.E  Euler's mathematical constant .    Math.pow(x, y)  Raise x to the power of e and return result    Math.abs(x)  Return the absolute value of x.    Math.sqrt(x)  Compute the square root of x.    Math.min(x, y)  Return the minimum of x and y.    Math.max(x, y)  Return the maximum of x and y.    Math.ceil(x)  Return the next integer greater than x .    Math.floor(x)  Return the next integer below than x .    Math.round(x)  Round x to the nearest integer.    Math.exp(x)  Raise Euler's number ( ) to the power of x ( ).    Math.log(x)  Compute the natural logarithm of x ( ).    Math.log10(x)  Compute the base-10 logarithm of x ( ).    Math.sin(x)  Compute the sine function of x.    Math.cos(x)  Compute the cosine function of x.    Math.tan(x)  Compute the tangent function of x.    Math.sinh(x)  Compute the hyperbolic sine function of x.    Math.cosh(x)  Compute the hyperbolic cosine function of x.    Math.tanh(x)  Compute the hyperbolic tangent function of x.    Math.asin(x)  Compute the inverse (arc) sine function of x.    Math.acos(x)  Compute the inverse (arc) cosine function of x.    Math.atan(x)  Compute the inverse (arc) tangent function of x.    Math.atan2(x, y)   An alternative inverse tangent function taking rectilinear  coordinates x,y and returning the angle .      For example, consider the following JShell session, where we compute .   jshell> double a = 3, b = 4; a ==> 3.0 | created variable a : double b ==> 4.0 | created variable b : double jshell> double c = Math.sqrt( Math.pow(a,2) + Math.pow(b,2) ); c ==> 5.0 | created variable c : double jshell>   When expressions become more complex, involving multiple operators, operands, functions, etc., the standard mathematical operator precedence determines the order of evaluation, which is: parentheses > exponents > multiplication and division > addition and subtraction . PEMDAS is an mnemonic that helps us recall operator precedence in arithmetic expressions. When multiple operators of the same precedence are adjacent, evaluation is performed left-to-right. Expressions within parentheses take precedence over all other operations.  The PEMDAS mnemonic is represented below with standard operator precedence   (4) P : parentheses, ()  (3) E : exponents, (not available in Java as an operator)  (2) M : multiplication, *  (2) D : division, \/  (1) A : addition, +  (1) S : subtraction, -   In the following example, note how the result of is 14, not 20. A value of 20 would be expected if the expression was evaluated strictly left-to-right. Because the * operator takes precedence over + , the multiplication is performed before the addition. Surrounding the first subexpression with parentheses causes the subexpression to be evaluated first due to the high precedence of parentheses.   jshell> 2 + 3 * 4; $1 ==> 14 | created scratch variable $1 : int jshell> (2 + 3) * 4; $2 ==> 20 | created scratch variable $2 : int jshell>    Using JShell in verbose mode, evaluate the expression 1 \/ 3 . Why did you get the answer you did?  Evaluate 8 - 4 \/ 2 and (8 - 4) \/ 2 . Why are the answers different?  Evaluate 14 % 12 . Where did that answer come from?  A customer just ordered 100 bagels from my shop. I charge one price for each baker's dozen (13) and another prices for single bagels. How might I calculate the number of baker's dozens and the number of remain single bagels using the operators \/ and % ?  Write an expression that calculates the length of the hypotenuse if a right-triangle with two sides of length 5 and 12 connected by a right angle.   "
},
{
  "id": "table-4",
  "level": "2",
  "url": "section-pe-math.html#table-4",
  "type": "Table",
  "number": "2.7.1",
  "title": "Common Java Mathematical Operators",
  "body": " Common Java Mathematical Operators    Operator  Type  Description    +  binary, infix  addition    -  binary, infix  subtraction    -  unary, prefix  negation    *  binary, infix  multiplication    \/  binary, infix  division    %  binary, infix  modulus    "
},
{
  "id": "table-5",
  "level": "2",
  "url": "section-pe-math.html#table-5",
  "type": "Table",
  "number": "2.7.2",
  "title": "Java <code class=\"code-inline tex2jax_ignore\">Math<\/code> class static methods",
  "body": " Java Math class static methods    Method\/Constant  Description    Math.PI  The mathematical constant .    Math.E  Euler's mathematical constant .    Math.pow(x, y)  Raise x to the power of e and return result    Math.abs(x)  Return the absolute value of x.    Math.sqrt(x)  Compute the square root of x.    Math.min(x, y)  Return the minimum of x and y.    Math.max(x, y)  Return the maximum of x and y.    Math.ceil(x)  Return the next integer greater than x .    Math.floor(x)  Return the next integer below than x .    Math.round(x)  Round x to the nearest integer.    Math.exp(x)  Raise Euler's number ( ) to the power of x ( ).    Math.log(x)  Compute the natural logarithm of x ( ).    Math.log10(x)  Compute the base-10 logarithm of x ( ).    Math.sin(x)  Compute the sine function of x.    Math.cos(x)  Compute the cosine function of x.    Math.tan(x)  Compute the tangent function of x.    Math.sinh(x)  Compute the hyperbolic sine function of x.    Math.cosh(x)  Compute the hyperbolic cosine function of x.    Math.tanh(x)  Compute the hyperbolic tangent function of x.    Math.asin(x)  Compute the inverse (arc) sine function of x.    Math.acos(x)  Compute the inverse (arc) cosine function of x.    Math.atan(x)  Compute the inverse (arc) tangent function of x.    Math.atan2(x, y)   An alternative inverse tangent function taking rectilinear  coordinates x,y and returning the angle .     "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-pe-math.html#exercise-10",
  "type": "Exercise",
  "number": "2.7.1",
  "title": "",
  "body": "Using JShell in verbose mode, evaluate the expression 1 \/ 3 . Why did you get the answer you did? "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-pe-math.html#exercise-11",
  "type": "Exercise",
  "number": "2.7.2",
  "title": "",
  "body": "Evaluate 8 - 4 \/ 2 and (8 - 4) \/ 2 . Why are the answers different? "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-pe-math.html#exercise-12",
  "type": "Exercise",
  "number": "2.7.3",
  "title": "",
  "body": "Evaluate 14 % 12 . Where did that answer come from? "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-pe-math.html#exercise-13",
  "type": "Exercise",
  "number": "2.7.4",
  "title": "",
  "body": "A customer just ordered 100 bagels from my shop. I charge one price for each baker's dozen (13) and another prices for single bagels. How might I calculate the number of baker's dozens and the number of remain single bagels using the operators \/ and % ? "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-pe-math.html#exercise-14",
  "type": "Exercise",
  "number": "2.7.5",
  "title": "",
  "body": "Write an expression that calculates the length of the hypotenuse if a right-triangle with two sides of length 5 and 12 connected by a right angle. "
},
{
  "id": "section-pe-assignment",
  "level": "1",
  "url": "section-pe-assignment.html",
  "type": "Section",
  "number": "2.8",
  "title": "Assignment Expressions",
  "body": " Assignment Expressions  Assignment expressions are used to store values in variable memory. Java provides a range of assignment operators for manipulating numerical values.  Assignment is performed using the assignment operator ( = ). This operator assigns the value of the evaluated expression on the right side of the operator to the variable on the left side. As we've seen, we can perform a variable assignment alone and during variable declaration as an initializer. The right side of an assignment need not be a constant value. For instance:  int age; age = 19; \/\/ Assign a value to a variable int height = 6; \/\/ Declare and initialize a variable double hypotenuse = Math.sqrt( Math.pow(3,2) + Math.pow(4,2) );  Compound assignment operators combine assignment with an arithmetic operation. They provide a shorthand way to perform an operation and assign the result back to the same variable. For example, the += infix binary operator performs addition followed by assignment. The value of the right operand is added to the variable given as the left operand and then reassigned to the variable on the left. Similarly, the *= infix binary operator performs multiplication followed by assignment in a similar manner. Following are descriptions of several of Java's common compound assignment, increment, and decrement operators.   Common Compound Assignment, Increment, and Decrement Operators    Operator  Type  Description    ++  unary, prefix or postfix  increment by 1    --  unary, prefix or postfix  decrement by 1    +=  binary, infix  increment the left operand by the right operand and reassign    -=  binary, infix  decrement the left operand by the right operand and reassign    *=  binary, infix  multiply the left operand by the right operand and reassign    \/=  binary, infix  divide the left operand by the right operand and reassign    %=  binary, infix  compute modulus the left operand using the right operand and reassign     The following code snippet illustrates all of the Java compound infix binary and postfix or prefix unary operators.  x++; \/\/ Equivalent to x = x + 1 ++x; \/\/ Equivalent to x = x + 1 x--; \/\/ Equivalent to x = x - 1 --x; \/\/ Equivalent to x = x - 1 x += y; \/\/ Equivalent to x = x + y x -= y; \/\/ Equivalent to x = x - y x *= y; \/\/ Equivalent to x = x * y x \/= y; \/\/ Equivalent to x = x \/ y x %= y; \/\/ Equivalent to x = x % y  Two of these operators require a little more explanation: the increment operator ( ++ ) and the decrement operator ( -- ). Both of these operators may be used in prefix and postfix form on a variable. The ++ increment operator simultaneously adds a value of 1 to the existing value of a variable and reassigns the variable to the incremented value. The -- decrement operator subtracts a value of 1 from the existing variable value and reassigns it. Why are there both prefix and postfix versions?  When either of these operators are applied to a variable in prefix form, the result is what you would expect. The expression evaluates to the incremented or decremented values. Consider the following JShell session. The variable a is declared and initialized to a value of 5. After the prefix ++ is executed on a , the value changes to 6. Following this the prefix -- operator is applied, and the value is decrements a back to 5. Nothing unusual here. Repeat this example yourself by declaring and initializing new variables, and incrementing and\/or decrementing them using the prefix ++ and -- operators.  jshell> int a = 5; a ==> 5 jshell> ++a $2 ==> 6 jshell> --a $3 ==> 5 jshell>  Let's repeat that exercise, only this time we will use the postfix versions of the operators. Remember, the ++ increment operator always increments the variable by 1 and reassigns to the variable, and the -- decrement operator always decrements by 1 and reassigns to the variable.  jshell> int a = 5; a ==> 5 jshell> a++ \/\/ Let's increment by 1 using the postfix operator. $2 ==> 5 \/\/ The new value appears to remain 5. jshell> a \/\/ Let's check that. a ==> 6 \/\/ Now it is 6. What gives? jshell> a-- \/\/ Let's decrement by 1 using the postfix operator. $4 ==> 6 \/\/ Once again, it appears that the value did not change. jshell> a \/\/ Let's check that. a ==> 5 \/\/ Now it is 5! jshell>  Clearly, something is different about ++ and -- when they are used as postfix operators.  Both the ++ and -- operators change the value of the variable operated upon. The core difference between the prefix and postfix forms of these operators is that expressions using the postfix operators evaluate to the original value of the variable , not the new value. To clarify, in postfix form, both operators do increment or decrement the variable, but the expression evaluates to the original value of the variable, not the new value. With the postfix forms of these operators, even though the value of the variable has changed the evaluated value of the entire expression (including the postfix operator) is the value of the variable before the value was updated.  Another item worth noting is that an assignment expression also evaluates to a value, similar to other mathematical expressions. For example, we know that the expression 2 + 2 evaluates to the value 4 . Also, we know that if we put that expression on the right side of an assignment expression, the variable on the left will be assigned to 4 .  jshell> int x = (2 + 2); x ==> 4 | created variable x : int jshell>  Similarly, an assignment expression itself evaluates to the value being assigned. This implies that if we assign a second variable to an assignment expression, then the second variable will also be assigned to the value. Extending further, we can use this feature to assign multiple variables all as once, even when used as an initialization expression during declaration.  jshell> int y = (x = 5); \/\/ Both x and y are assigned to 5 y ==> 5 \/\/ y has the value 5 | created variable y : int jshell> x x ==> 5 \/\/ x also has the value 5 | value of x : int jshell> int z = y = x = 6; \/\/ z is declared and initialized z ==> 6 | created variable z : int jshell> y y ==> 6 | value of y : int jshell> x x ==> 6 \/\/ x, y, and z all have the value 6 | value of x : int jshell>  By using compound assignment, increment and decrement operations effectively, you can perform various calculations in a compact and succint format.   Declare an int variable x , initialize to 0 and then increment it by 1.  Evaluate the expressions int x = 0; int y = x++; . What are the values of x and y and why?  Evaluate the expressions int x = 0; x -= 10; . What is the value of x and why?   "
},
{
  "id": "p-161",
  "level": "2",
  "url": "section-pe-assignment.html#p-161",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Compound assignment operators "
},
{
  "id": "table-6",
  "level": "2",
  "url": "section-pe-assignment.html#table-6",
  "type": "Table",
  "number": "2.8.1",
  "title": "Common Compound Assignment, Increment, and Decrement Operators",
  "body": " Common Compound Assignment, Increment, and Decrement Operators    Operator  Type  Description    ++  unary, prefix or postfix  increment by 1    --  unary, prefix or postfix  decrement by 1    +=  binary, infix  increment the left operand by the right operand and reassign    -=  binary, infix  decrement the left operand by the right operand and reassign    *=  binary, infix  multiply the left operand by the right operand and reassign    \/=  binary, infix  divide the left operand by the right operand and reassign    %=  binary, infix  compute modulus the left operand using the right operand and reassign    "
},
{
  "id": "p-163",
  "level": "2",
  "url": "section-pe-assignment.html#p-163",
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
  "number": "2.8.1",
  "title": "",
  "body": "Declare an int variable x , initialize to 0 and then increment it by 1. "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-pe-assignment.html#exercise-16",
  "type": "Exercise",
  "number": "2.8.2",
  "title": "",
  "body": "Evaluate the expressions int x = 0; int y = x++; . What are the values of x and y and why? "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-pe-assignment.html#exercise-17",
  "type": "Exercise",
  "number": "2.8.3",
  "title": "",
  "body": "Evaluate the expressions int x = 0; x -= 10; . What is the value of x and why? "
},
{
  "id": "section-pe-relational",
  "level": "1",
  "url": "section-pe-relational.html",
  "type": "Section",
  "number": "2.9",
  "title": "Relational Expressions",
  "body": " Relational Expressions  Relational expressions include the familiar greater-than ( > ), less-than ( < ) and equal-to ( == ) operators. Note that testing for equality in Java uses the double-equal operator ( == ) because the single-equal operator ( = ) is reserved for assignment.  In addition to these operators, Java implements compound relational operators , including greater-than or equal-to ( >= ), less-than or equal-to ( <= ) and not-equal-to ( != ). These have the obvious interpretations.   Type Promotion    Operator  Type  Description    <  binary, infix  less-than    <=  binary, infix  less-than or equal-to    >  binary, infix  greater-than    >=  binary, infix  greater-than or equal-to    ==  binary, infix  equal-to    !=  binary, infix  not equal-to     All relational operators evaluate to a boolean value ( true or false ). If you think about that for a moment, you should see the logic in that statement. In general, relational operators involving > or < take numerical operands only.  Relational operators may be used in larger expressions that also involve arithmetic and even assignment operators. All relational operators have a precedence that is lower than arithmetic operators. When evaluating expressions that mix both, evaluate the arithmetic operators first, and then the relational operators. Consider the following examples.  jshell> int a = 1, b = 2, c = 3; a ==> 1 | created variable a : int b ==> 2 | created variable b : int c ==> 3 | created variable c : int jshell> a < b; $4 ==> true | created scratch variable $4 : boolean jshell> a > b; $5 ==> false | created scratch variable $5 : boolean jshell> a + b < c; $6 ==> false | created scratch variable $6 : boolean jshell> a + b == c; $7 ==> true | created scratch variable $7 : boolean jshell> a + b <= c; $8 ==> true | created scratch variable $8 : boolean jshell> c > a; $9 ==> true | created scratch variable $9 : boolean jshell> c >= a; $10 ==> true | created scratch variable $10 : boolean jshell> c != a + b; $11 ==> false | created scratch variable $11 : boolean jshell> a < b < c; | Error: | bad operand types for binary operator '<' | first type: boolean | second type: int | a < b < c; | ^-------^ jshell>  Note how that last example in the above results in a \"bad operand type\" error. The syntax a < b < c is common mathematics notation, but it is invalid Java. When evaluating this expression, the left-most operator is evaluated first to the boolean value of true . That is, a < b becomes true . Then the right-most operator is evaluated as true < c . The < operator cannot take a boolean value type as an operand, therefore the expression results in an error.  Consider one more example.  jshell> 0.1 + 0.2 == 0.3; $12 ==> false | created scratch variable $12 : boolean jshell>  Clearly, we know that is exactly equal to . Why does Java evaluate this expression to false ? Is Java broken?  It turns out that the problem is not with Java, but with floating point number representation in general. The explanation is obvious by observing the result of 01 + 0.2 .  jshell> 0.1 + 0.2; $13 ==> 0.30000000000000004 | created scratch variable $13 : double jshell>  The answer is not the expected value of 0.3, but instead it has an extra \"4\" way out in the last decimal place. The fundamental reason for this is that the numbers 0.1 , 0.2 , and 0.3 cannot be represented exactly in the 16 decimal places of a double-precision number. Recall from  that computer memory stores numeric values in binary (base 2 numbers), not base 10. While integer values may be represented exactly in binary, certain fractional floating-point numbers are not.  The nearest binary-encoded floating-point number to the value 0.3 , out to 55 decimal places, is  0.299999999999999988897769753748434595763683319091796875 .  By contrast, without considering all the technical detail associated with the rounding and approximation required, the sum 0.1 + 0.2 evaluates to the value  0.3000000000000000444089209850062616169452667236328125  a different number. This helps explain why 0.1 + 0.2 == 0.3 evaluates to false , and teaches us an important lesson about comparing floating-point numbers.  Never compare floating-point numbers with == .  Instead, when testing floating-point numbers, check if the absolute value of the difference between two floating-point values is close enough , for your purposes. See the following example for the better way to test if 0.1 + 0.2 is \"close enough\" to 0.3 .  jshell> Math.abs((0.1 + 0.2) - 0.3) < 0.000000000000001; $1 ==> true | created scratch variable $1 : boolean jshell>   Start with the following declarations.  double xc = 0.5, yc = 0.5, r = 0.3, x = 0.6, y = 0.7;  Write one or more Java expressions that test if the distance between the points and is less than . Recall the distance formula . If is the center of a circle with radius , then your computation will test if the point is within the circle.   "
},
{
  "id": "table-7",
  "level": "2",
  "url": "section-pe-relational.html#table-7",
  "type": "Table",
  "number": "2.9.1",
  "title": "Type Promotion",
  "body": " Type Promotion    Operator  Type  Description    <  binary, infix  less-than    <=  binary, infix  less-than or equal-to    >  binary, infix  greater-than    >=  binary, infix  greater-than or equal-to    ==  binary, infix  equal-to    !=  binary, infix  not equal-to    "
},
{
  "id": "p-188",
  "level": "2",
  "url": "section-pe-relational.html#p-188",
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
  "number": "2.9.1",
  "title": "",
  "body": "Start with the following declarations.  double xc = 0.5, yc = 0.5, r = 0.3, x = 0.6, y = 0.7;  Write one or more Java expressions that test if the distance between the points and is less than . Recall the distance formula . If is the center of a circle with radius , then your computation will test if the point is within the circle. "
},
{
  "id": "section-pe-logical",
  "level": "1",
  "url": "section-pe-logical.html",
  "type": "Section",
  "number": "2.10",
  "title": "Logical Expressions",
  "body": " Logical Expressions  Java implements three logical operators:   Java Logical Operators    Operator  Type  Description    &&  infix, binary  Logical conjunction (AND)    ||  infix, binary  Logical disjunction (AND)    !  prefix, unary  Negation (NOT)     Logical expressions combine subexpressions using logical operators. All input operands for logical operators must be boolean in type, and logical logical expressions always evaluate to a boolean . In short, when it comes to logical expressions, its boolean s in and boolean s out.  Finally, note that logical operators have a precedence that is lower than relational operators. That means that relational subexpressions involving inequalities used as operands for a logical operator, will be evaluated before the logical operator is evaluated. This is a good thing because relational expressions evaluate to exclusively to boolean s and logical expression operands are exclusively boolean , so the two fit together nicely.  With the conjunction operator ( && ), if both the first operand AND the second operand both evaluate to true , then the conjunction expression evaluates to true . If either the first or second operand evaluates to false , then the conjunction expression is false .  jshell> true && true; $1 ==> true | created scratch variable $1 : boolean jshell> true && false; $2 ==> false | created scratch variable $2 : boolean jshell> false && true; $3 ==> false | created scratch variable $3 : boolean jshell> false && false; $4 ==> false | created scratch variable $4 : boolean jshell>  The above can be summarized in a truth table.   Truth Table for Conjunction ( && )    A  B  A && B    true  true  true    true  false  false    false  true  false    false  false  false     The disjunction operator ( || ) is similar. If either the first operand OR the second operand evaluates to true , then the disjunction expression evaluates to true . If both the first and second operand evaluates to false , then the disjunction expression is false .  jshell> true || true; $1 ==> true | created scratch variable $1 : boolean jshell> true || false; $2 ==> true | created scratch variable $2 : boolean jshell> false || true; $3 ==> true | created scratch variable $3 : boolean jshell> false || false; $4 ==> false | created scratch variable $4 : boolean jshell>  The above also can be summarized in a truth table.   Truth Table for Disjunction ( || )    A  B  A || B    true  true  true    true  false  true    false  true  true    false  false  false     Negation ! is the simplest of the Java logical operators. It turns a true value into false and a false value into true . Consider the following example and truth table.  jshell> !true; $1 ==> false | created scratch variable $1 : boolean jshell> !false; $2 ==> true | created scratch variable $2 : boolean jshell>   Truth Table for Negation ( ! )    A  !A    true  false    false  true     Let's consider a few practical examples of more complex logical expressions.  Test if x is greater than 18 AND less than 65.  Logical expression: x > 18 && x < 65  jshell> int x = 40; x ==> 40 | created variable x : int jshell> x > 18 && x < 65; \/\/ Logical test $2 ==> true | created scratch variable $2 : boolean jshell> x = 12; x ==> 12 | assigned to x : int jshell> x > 18 && x < 65; \/\/ Logical test $4 ==> false | created scratch variable $4 : boolean jshell>  Test if x is less-than or equal-to 18 OR greater-than or equal-to 65.  Logical expression: x <= 18 || x >= 65  jshell> int x = 40; x ==> 40 | created variable x : int jshell> x <= 18 || x >= 65; \/\/ Logical test $2 ==> false | created scratch variable $2 : boolean jshell> x = 12; x ==> 12 | assigned to x : int jshell> x <= 18 || x >= 65; \/\/ Logical test $4 ==> true | created scratch variable $4 : boolean jshell> x = 70; x ==> 70 | assigned to x : int jshell> x <= 18 || x >= 65; \/\/ Logical test $6 ==> true | created scratch variable $6 : boolean jshell>  Are the last two examples complementary? Is the truth table of one expression equal to the negated truth table of the other? Let's check.  Logical expression: !(x <= 18 || x >= 65) == (x > 18 && x < 65)  jshell> int x = 40; x ==> 40 | created variable x : int jshell> !(x <= 18 || x >= 65) == (x > 18 && x < 65); $2 ==> true | created scratch variable $2 : boolean jshell> x = 12; x ==> 12 | assigned to x : int jshell> !(x <= 18 || x >= 65) == (x > 18 && x < 65); $4 ==> true | created scratch variable $4 : boolean jshell> x = 70; x ==> 70 | assigned to x : int jshell> !(x <= 18 || x >= 65) == (x > 18 && x < 65); $6 ==> true | created scratch variable $6 : boolean jshell>  Forming logical expressions to test complex conditions takes practice. The more you practice the better you'll be able to solve form the expressions you need to solve your computing problems.   Demonstrate the following two De Morgan's laws using Java logical expressions.      You've invented a dart game that awards points to the player when the dart lands anywhere within a 451 mm diameter green target circle, except in a certain smaller red penalty ring centered in the larger circle. If a dart misses the green circle altogether, or lands anywhere within the red penalty ring, the player loses points. The red penalty ring is at a distance from the circle's center that is greater than 107 mm and less than 170 mm. The game board is instrumented with sensors; it reports the (x, y) coordinates in mm when each dart lands. The center of the target circle is at the coordinates (0, 0).   An illustration of your game board is on the right.  Write a logical expression that evaluates to true if a dart lands in the circle but not within the penalty ring (greater than 107 mm and less than 170 mm from the center) and false if it lands at any other location.    Dart Game Board      "
},
{
  "id": "table-8",
  "level": "2",
  "url": "section-pe-logical.html#table-8",
  "type": "Table",
  "number": "2.10.1",
  "title": "Java Logical Operators",
  "body": " Java Logical Operators    Operator  Type  Description    &&  infix, binary  Logical conjunction (AND)    ||  infix, binary  Logical disjunction (AND)    !  prefix, unary  Negation (NOT)    "
},
{
  "id": "p-196",
  "level": "2",
  "url": "section-pe-logical.html#p-196",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "AND "
},
{
  "id": "table-9",
  "level": "2",
  "url": "section-pe-logical.html#table-9",
  "type": "Table",
  "number": "2.10.2",
  "title": "Truth Table for Conjunction (<code class=\"code-inline tex2jax_ignore\">&&<\/code>)",
  "body": " Truth Table for Conjunction ( && )    A  B  A && B    true  true  true    true  false  false    false  true  false    false  false  false    "
},
{
  "id": "p-198",
  "level": "2",
  "url": "section-pe-logical.html#p-198",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "OR "
},
{
  "id": "table-10",
  "level": "2",
  "url": "section-pe-logical.html#table-10",
  "type": "Table",
  "number": "2.10.3",
  "title": "Truth Table for Disjunction (<code class=\"code-inline tex2jax_ignore\">||<\/code>)",
  "body": " Truth Table for Disjunction ( || )    A  B  A || B    true  true  true    true  false  true    false  true  true    false  false  false    "
},
{
  "id": "table-11",
  "level": "2",
  "url": "section-pe-logical.html#table-11",
  "type": "Table",
  "number": "2.10.4",
  "title": "Truth Table for Negation (<code class=\"code-inline tex2jax_ignore\">!<\/code>)",
  "body": " Truth Table for Negation ( ! )    A  !A    true  false    false  true    "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-pe-logical.html#exercise-19",
  "type": "Exercise",
  "number": "2.10.1",
  "title": "",
  "body": "Demonstrate the following two De Morgan's laws using Java logical expressions.     "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-pe-logical.html#exercise-20",
  "type": "Exercise",
  "number": "2.10.2",
  "title": "",
  "body": "You've invented a dart game that awards points to the player when the dart lands anywhere within a 451 mm diameter green target circle, except in a certain smaller red penalty ring centered in the larger circle. If a dart misses the green circle altogether, or lands anywhere within the red penalty ring, the player loses points. The red penalty ring is at a distance from the circle's center that is greater than 107 mm and less than 170 mm. The game board is instrumented with sensors; it reports the (x, y) coordinates in mm when each dart lands. The center of the target circle is at the coordinates (0, 0).   An illustration of your game board is on the right.  Write a logical expression that evaluates to true if a dart lands in the circle but not within the penalty ring (greater than 107 mm and less than 170 mm from the center) and false if it lands at any other location.    Dart Game Board    "
},
{
  "id": "section-pe-conversion",
  "level": "1",
  "url": "section-pe-conversion.html",
  "type": "Section",
  "number": "2.11",
  "title": "Type Conversions",
  "body": " Type Conversions  Back in section  we mentioned that Java binary operators require both operands to be the same type. Remember to pay close attention to operand types when dividing int s. A common source of errors occurs when dividing two int s, which has the potential to drop the fractional part to the right of the decimal in the resulting quotient.  What happens if two dissimilar types are passed as operands to an operator? For example, what happens if we add an int and a double ? And what happens if we add a String and a double , or subtract a double from a String ? Let's find out.  jshell> int a = 2; double b = 2.0; a ==> 2 | created variable a : int b ==> 2.0 | created variable b : double jshell> a + b; $3 ==> 4.0 | created scratch variable $3 : double jshell> \"a\" + b; $4 ==> \"a2.0\" | created scratch variable $4 : String jshell> \"a\" - b; | Error: | bad operand types for binary operator '-' | first type: java.lang.String | second type: double | \"a\" - b; | ^-----^ jshell>  In the first test above, the result produced is a double . Apparently, the int a was converted to a double automatically before the addition was performed. In the second test, we added the String \"a\" to the double b . This time the value of b was converted to a String first and then the + operator was executed on the String types, which results in String concatenation. The third test failed. Apparently it is not possible to subtract a double from a String in Java.  In fact, this demonstrates a general rule for evaluating mixed type expressions in Java. When two operands of a binary operator are NOT of the same type, Java tries to promote one of the operands to the type of the other operand before it performs the operation indicated by the operator. This is not always successful. The error printed by the third test above clearly indicates that the - binary operator is not valid for the operand types provided.  How do we know when and which operand will be promoted ? The answer is that automatic type conversions generally take place for widening primitive conversions . A widening primtiive conversion occurs when the initial data type requires less memory than the converted type. In the case of adding an int and a double , we know from and that a double consumes 8 bytes of memory while an int consumes only 4 bytes of memory. Consequently, automatic promotion will occur from an int to a double , but not the other way around.  The following table shows all valid widening primitive type conversions. The type listed in the FROM column may be promoted to any type in the TO column. Notice that in general the amount of memory used by the types in the TO column increases progressively from left to right. Note especially the expection that a long is promoted to a float , and not the other way around. A long consumes 8 bytes while a float consumes only 4 bytes.   Widening Primitive Conversions    FROM  TO    byte  short , int , long , float , double    short  int , long , float , double    int  long , float , double    long  float , double    float  double    char  int , long , float , double     There are a few other special cases to consider.  In the previous example we added a String and a double . As we know, a String is not primitive type. Yet, a primitive type may be promoted to a String automatically in an exprssion when the operator can take String operands. This type of conversion is called String conversion . Any type in Java may be converted to a String . This may occur automatically as part of the evaluation of an exprssion, or explicitly. The best way to perform the explicit convertion of a primitive type to a String is to use the built-in String.valueOf(...) static method. For example, the expression String.valueOf(3.14) evaluates to the String \"3.14\" . But the automatic type conversion performed by expression evaluation gives us another way to convert anything to a String . Just add \"\" to any individual data. See the session below, for an example.  jshell> String.valueOf(3.14); $1 ==> \"3.14\" | created scratch variable $1 : String jshell> 3.14 + \"\"; $2 ==> \"3.14\" | created scratch variable $2 : String jshell>  When you perform arithmetic operations like + on byte or short integers, you'll notice that the result is always of type int , and not byte or short . The reason for this is that Java does not define arithmetic operators for byte and short integer types. Instead, it promotes both operands to an int before performing the operation. This is the reason the result is always an int . If you really want the result to be a byte or a short integer expression, you'll have to explicitly convert the result back to the desired type. This is the subject of the next section.  Narrowing primitive conversions occur when converting a value of a data type that consumes more memory to one that consumes less memory. In narrowing primitive conversions, there is a potential loss of information or precision. Clearly this is case when we force more bytes into less memory. Narrowing primitive conversions must be performed explicitly using a technique called casting . To cast an expression, precede the expression with the desired type surrounded with parentheses.  For example, converting a double to an int requires explicit casting:  jshell> double pi = 3.14; pi ==> 3.14 | created variable pi : double jshell> (int)pi; \/\/ Narrowing primitive conversion cast double to int $2 ==> 3 | created scratch variable $2 : int jshell>  In the above example, the value of pi (a double) is explicitly cast to int using the (int) cast. The double stored in 8 bytes was reformulated and copied to the 4 bytes of memory available to the int .  The following table shows all valid narrowing primitive conversions of primitive types, which can be performed using a cast.  Narrowing Primitive Conversions    FROM  TO    byte  char    short  byte , char    int  byte , short , char    long  byte , short , char , int    float  byte , short , char , int , long    double  byte , short , char , int , long , float    char  byte , short     It's important to remember that narrowing conversions may result in data loss or truncation. For example, when converting a floating-point value to an integer, the fractional part is discarded, leading to the potential loss of precision.   There is a way to reverse a String conversion , that is, to turn a String representation of a primitive back into a primitive type. This process is more sophisticated, requiring careful parsing of the characters in the String . For most Java primitives (all except char ) Java provides a class equivalent for the primitive type that implements a static method that starts with parse... . These methods take a String parameter and attempt to parse it, returning a value having the corresponding primitive type. The following table lists the class equivalents of each primitive type and demonstrates the use of the relevant static method.   Class primitive equivalents and Java primitive parsing    Primitive  Class  Parse method  Evaluates to    byte  Byte  Byte.parseByte(\"1\")  1 (byte)    short  Short  Short.parseShort(\"1\")  1 (short)    int  Integer  Integer.parseInt(\"1\")  1 (int)    long  Long  Long.parseLong(\"1\")  1 (long)    float  Float  Float.parseFloat(\"3.15\")  3.14 (float)    double  Double  Double.parseDouble(\"3.15\")  3.14 (double)    boolean  Boolean  Boolean.parseBoolean(\"true\")  true (boolean)     As we've seen, type conversions (e.g. primitive promotion and String conversion) take place automatically during expression evaluation. The specific conversion that occurs depends entirely on the types that operands have at the moment the operator is about to be evaluated. This might not be obvious by looking at an expression before evaluation. Prediction of the type from the evaluation of a given expression requires a careful tracking of the expression evaluation process intermixed with necessary types conversions. The order of subexpression evaluation must follow operator precedence and left-to-right evaluation.  Consider the following expression examples and their evaluated value and type. Can you explain how each value and type result is arrived?   Expression evaluation value and type    Expression  Evaluated Value  Evaluated Type    1 + 1.0  2.0  double    1.0F + 1  2.0F  float    1 + 1L  2L  long    (long)1.5 + 1F  2.0  float    1 + \"1\"  \"11\"  String    \"2\" + 2  \"22\"  String    1 + 1 + \"1\"  \"21\"  String    \"1\" + 1 + 1  \"111\"  String    \"1\" + (1 + 1)  \"12\"  String    (2 > 1) + \"blue\"  \"trueblue\"  String     Type promotion and conversions are essential in Java for maintaining compatibility between different data types and enabling operations involving different types. Understanding the rules and implications of type promotion and conversions is crucial to ensure correct and reliable behavior in Java programs.     "
},
{
  "id": "p-216",
  "level": "2",
  "url": "section-pe-conversion.html#p-216",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "promote "
},
{
  "id": "p-217",
  "level": "2",
  "url": "section-pe-conversion.html#p-217",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "promoted widening primitive conversions "
},
{
  "id": "table-12",
  "level": "2",
  "url": "section-pe-conversion.html#table-12",
  "type": "Table",
  "number": "2.11.1",
  "title": "Widening Primitive Conversions",
  "body": " Widening Primitive Conversions    FROM  TO    byte  short , int , long , float , double    short  int , long , float , double    int  long , float , double    long  float , double    float  double    char  int , long , float , double    "
},
{
  "id": "p-220",
  "level": "2",
  "url": "section-pe-conversion.html#p-220",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "String conversion "
},
{
  "id": "p-222",
  "level": "2",
  "url": "section-pe-conversion.html#p-222",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Narrowing primitive conversions casting "
},
{
  "id": "table-13",
  "level": "2",
  "url": "section-pe-conversion.html#table-13",
  "type": "Table",
  "number": "2.11.2",
  "title": "Narrowing Primitive Conversions",
  "body": " Narrowing Primitive Conversions    FROM  TO    byte  char    short  byte , char    int  byte , short , char    long  byte , short , char , int    float  byte , short , char , int , long    double  byte , short , char , int , long , float    char  byte , short    "
},
{
  "id": "table-14",
  "level": "2",
  "url": "section-pe-conversion.html#table-14",
  "type": "Table",
  "number": "2.11.3",
  "title": "Class primitive equivalents and Java primitive parsing",
  "body": " Class primitive equivalents and Java primitive parsing    Primitive  Class  Parse method  Evaluates to    byte  Byte  Byte.parseByte(\"1\")  1 (byte)    short  Short  Short.parseShort(\"1\")  1 (short)    int  Integer  Integer.parseInt(\"1\")  1 (int)    long  Long  Long.parseLong(\"1\")  1 (long)    float  Float  Float.parseFloat(\"3.15\")  3.14 (float)    double  Double  Double.parseDouble(\"3.15\")  3.14 (double)    boolean  Boolean  Boolean.parseBoolean(\"true\")  true (boolean)    "
},
{
  "id": "table-15",
  "level": "2",
  "url": "section-pe-conversion.html#table-15",
  "type": "Table",
  "number": "2.11.4",
  "title": "Expression evaluation value and type",
  "body": " Expression evaluation value and type    Expression  Evaluated Value  Evaluated Type    1 + 1.0  2.0  double    1.0F + 1  2.0F  float    1 + 1L  2L  long    (long)1.5 + 1F  2.0  float    1 + \"1\"  \"11\"  String    \"2\" + 2  \"22\"  String    1 + 1 + \"1\"  \"21\"  String    \"1\" + 1 + 1  \"111\"  String    \"1\" + (1 + 1)  \"12\"  String    (2 > 1) + \"blue\"  \"trueblue\"  String    "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "section-pe-conversion.html#exercise-21",
  "type": "Exercise",
  "number": "2.11.1",
  "title": "",
  "body": ""
},
{
  "id": "section-pe-concepts",
  "level": "1",
  "url": "section-pe-concepts.html",
  "type": "Section",
  "number": "2.12",
  "title": "Key Concepts",
  "body": " Key Concepts   Java defines primitive types, which may be organized into four groups:  Primitive Types  primitive types    integer number types  byte , short , int , long    floating point number types  float , double    boolean type  boolean    a single character type  char      Java has an additional type called String , which is a class, not a primitive. What makes String unique is that Java provides a literal notation for creating new String objects. Merely writing a sequence of characters surrounded by a pair of double-quotes (\") is enough to create a String in Java. This makes String objects easy to create and use in expressions. We'll learn much more about String objects. String  Using Java we can write down arithmetic, and arithmetic-like, expressions. Java will automatically evaluate these expressions, producing a final value with a well-defined type.  The rules for evaluating expressions are nearly the same as the standard rules used to evaluate mathematical expressions. For example, recall PEMDAS .  All data items in Java have a type, which informs Java about the memory required to store it. The value resulting from evaluating an expression also has a type, which informs Java how to store it.  Java implements all standard mathematical operators. These include +, -, * (multiplication), and \/ (division). Java also implements the % operator (modulo), which produces the remainder after Euclidian division (division with a remainder).  The operation performed by an operator on its operands may change, depending upon the types of the operands. For example, Java has two forms of division (\/): one that executes on floating point operands producing a floating point result, and another that executes on integer operands producing an integer result.  Another special operator is addition (+). This operator works as you expect with any number type. But, if one operand is a String, then Java changes the meaning of + from addition to String concatenation (it joins the two Strings producing one new String). You must identify the operand types of a + operator to predict the result.  Java will operate only on operands having the same type. For example, Java will not add an int and long. Similarly, Java will not add a float and a double. Before evaluating an expression with different operand types, Java attempts to promote the type automatically of one of the operands to match the type of the other. These type changes are called widening conversions because more memory is used to store the converted data compared to the original data (the memory required widens).  There are rules for what types may be promoted automatically during expression evaluation. Types that may be promoted automatically during expression evaluation are summarized in the following table.  Type Promotion (Widening Conversions)    FROM  TO    byte  short , int , long , float , double    short  int , long , float , double    int  long , float , double    long  float , double    float  double    char  int , long , float , double      There is a way to force data type conversions in the other direction. That is, to force data into a smaller amount of memory. These conversions are called narrowing conversions because less memory is used to store the converted data as compared to the original data (the amount of memory narrows).  One way to force a narrowing conversion is called a cast . We say that the type of one data value is cast to another.  There are rules for which primitive types may be cast to another. These are summarized in the following table.  Type Casting (Narrowing Conversions)    FROM  TO    byte  char    short  byte , char    int  byte , short , char    long  byte , short , char , int    float  byte , short , char , int , long    double  byte , short , char , int , long , float    char  byte , short      To cast data from one type to another, precede the given value, variable, or expression with parentheses containing the new type. For example, to convert a long to an int, precede a variable, value or expression with (int).  jshell>  (int)123L  $2 ==> 123 | created scratch variable $2 : int To convert a double to a float, precede a variable, value, or expression with (float)  jshell>  (float)12.34  $3 ==> 12.34 | created scratch variable $3 : float    Java provides ways of writing down literal values with many (but not all) primitive types and a String. You can look at data in a Java expression and identify its type by the way it is written.   Numbers without decimal places are of type int (eg, 1, 345, -10, 0)  Numbers without decimal places and a trailing L are of type long (eg, 1L, 25L, -10L, 0L)  Numbers with decimal places are of type double (eg, 1.2, -0.07, 100.0, 4E-3)  Numbers with decimal places and a trailing F are of type float (eg, 1.2F, -0.07F, 4E-3F)  The reserved words true and false are booleans  A single letter surrounded by single quotes is of type char (eg, 'a', '0', '*')  A sequence of zero or more characters surrounded by double quotes is of type String (eg, \"Hello\", \"1234\", \"\")   We may declare variables to hold data of any type. Notation for variable declaration is the data type followed by the new variable name. Variables may be used in any expression in place of values. Examples of variable declarations include: int i; double x; String name; boolean result;   Variables may be initialized with a value at the same time they are declared. For example: int i = 1; double x = 3.1415926; String name = \"Roscoe\"; boolean result = true;   Comments are text that are ignored by Java. They are useful for describing a program. Java comments come in two forms. In the first form, Java ignores any text between \/* and *\/ . Comments of this form may span any number of lines. In second form of comment, Java ignores everything from the characters \/\/ through the end of a line.   "
},
{
  "id": "table-16",
  "level": "2",
  "url": "section-pe-concepts.html#table-16",
  "type": "Table",
  "number": "2.12.1",
  "title": "Primitive Types",
  "body": " Primitive Types  primitive types    integer number types  byte , short , int , long    floating point number types  float , double    boolean type  boolean    a single character type  char    "
},
{
  "id": "table-17",
  "level": "2",
  "url": "section-pe-concepts.html#table-17",
  "type": "Table",
  "number": "2.12.2",
  "title": "Type Promotion (Widening Conversions)",
  "body": " Type Promotion (Widening Conversions)    FROM  TO    byte  short , int , long , float , double    short  int , long , float , double    int  long , float , double    long  float , double    float  double    char  int , long , float , double    "
},
{
  "id": "table-18",
  "level": "2",
  "url": "section-pe-concepts.html#table-18",
  "type": "Table",
  "number": "2.12.3",
  "title": "Type Casting (Narrowing Conversions)",
  "body": " Type Casting (Narrowing Conversions)    FROM  TO    byte  char    short  byte , char    int  byte , short , char    long  byte , short , char , int    float  byte , short , char , int , long    double  byte , short , char , int , long , float    char  byte , short    "
},
{
  "id": "section-pe-exercises",
  "level": "1",
  "url": "section-pe-exercises.html",
  "type": "Section",
  "number": "2.13",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Chapter Exercises    "
},
{
  "id": "pe-exercises",
  "level": "2",
  "url": "section-pe-exercises.html#pe-exercises",
  "type": "Figure",
  "number": "2.13.1",
  "title": "",
  "body": " Chapter Exercises   "
},
{
  "id": "section-jp-compile",
  "level": "1",
  "url": "section-jp-compile.html",
  "type": "Section",
  "number": "3.1",
  "title": "Your First Java Program",
  "body": " Your First Java Program  javac and java commands  "
},
{
  "id": "p-234",
  "level": "2",
  "url": "section-jp-compile.html#p-234",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "javac java "
},
{
  "id": "section-jp-static-methods",
  "level": "1",
  "url": "section-jp-static-methods.html",
  "type": "Section",
  "number": "3.2",
  "title": "Static Methods",
  "body": "Static Methods  Anatomy of a Static Method  main() method   \/\/ Roots.java public class Roots { public static void main(String[] args) { \/\/ Define coefficient values for the quadratic polynomial double a = 1.0; double b = 0.0; double c = -4.0; \/\/ Compute the roots double discr = b * b - 4 * a * c; \/\/ the discriminant double root1 = (-b - Math.sqrt(discr)) \/ (2 * a); double root2 = (-b + Math.sqrt(discr)) \/ (2 * a); \/\/ Print the results String resp = \"Coefficients: a=\" + a + \", b=\" + b + \", c=\" + c; resp += \"\\nRoots: \" + root1 + \" and \" + root2; System.out.println(resp); } }   "
},
{
  "id": "section-jp-string",
  "level": "1",
  "url": "section-jp-string.html",
  "type": "Section",
  "number": "3.3",
  "title": "String Class",
  "body": " String Class  Java provides a rich set of methods and functionalities in the String class, making it powerful and versatile for working with text and string manipulation.  Once a String variable is created and initialized, you can perform various operations on it. Here are some commonly used methods and functionalities of the String class:   Retrieving the length of a string: int length = myString.length();  Concatenating strings: String concatenated = myString1 + myString2;  Comparing strings: boolean isEqual = myString1.equals(myString2);  Accessing individual characters: char firstChar = myString.charAt(0);  Extracting substrings: String substring = myString.substring(startIndex, endIndex);  Converting case: String lowercase = myString.toLowerCase();  Splitting strings: String[] parts = myString.split(delimiter);  Replacing characters or substrings: String replaced = myString.replace(oldValue, newValue);  Formatting strings: String formatted = String.format(\"Hello, %s!\", name);   To compare the content of two Strings, you should use the equals() method instead of the == operator. The equals() method compares the actual characters of the strings, while the == operator checks if the two string references point to the same memory location.  "
},
{
  "id": "section-jp-scanner",
  "level": "1",
  "url": "section-jp-scanner.html",
  "type": "Section",
  "number": "3.4",
  "title": "Scanner Class",
  "body": "Scanner Class  (Reading from the terminal)  "
},
{
  "id": "section-jp-doodlepad",
  "level": "1",
  "url": "section-jp-doodlepad.html",
  "type": "Section",
  "number": "3.5",
  "title": "DoodlePad Library",
  "body": " DoodlePad Library   import doodlepad.*; public class MyFirstOval { public static void main(String[] args) { Oval oval1 = new Oval(); } }   "
},
{
  "id": "section-jp-shapes",
  "level": "1",
  "url": "section-jp-shapes.html",
  "type": "Section",
  "number": "3.6",
  "title": "Creating Shapes",
  "body": "Creating Shapes  "
},
{
  "id": "section-jp-mouse",
  "level": "1",
  "url": "section-jp-mouse.html",
  "type": "Section",
  "number": "3.7",
  "title": "Handling Mouse Interaction",
  "body": "Handling Mouse Interaction  Method References  "
},
{
  "id": "section-rt-stringbuilder",
  "level": "1",
  "url": "section-rt-stringbuilder.html",
  "type": "Section",
  "number": "4.1",
  "title": "StringBuilder Class",
  "body": "StringBuilder Class  (Example demonstrating how reassigning to another ref variable gives the same object two names  "
},
{
  "id": "section-rt-refvars",
  "level": "1",
  "url": "section-rt-refvars.html",
  "type": "Section",
  "number": "4.2",
  "title": "Reference Variables",
  "body": " Reference Variables  (Using dot as a dereference operator)  (null - breaking a reference)  "
},
{
  "id": "section-34",
  "level": "1",
  "url": "section-34.html",
  "type": "Section",
  "number": "4.3",
  "title": "Garbage Collection",
  "body": "Garbage Collection  Garbage Collection Garbage collection is a fundamental concept in computer programming, particularly in languages like Java. It is the process of automatically reclaiming memory that is no longer in use by the program, freeing it up for future allocations. Garbage collection plays a vital role in memory management, ensuring efficient resource utilization and preventing memory leaks.  When a program executes, it dynamically allocates memory to hold objects, variables, and other data structures. As the program runs, the garbage collector periodically examines the objects to determine which ones are still in use. It does this through a process called \"mark and sweep.\" It starts by traversing the reachable objects (e.g., through global variables, static variables, and local variables, etc.), marking all objects in use. Any objects not marked during this traversal are considered unreachable and eligible for garbage collection.  After marking all reachable objects, the garbage collector performs the sweep phase. It frees the memory occupied by objects that were not marked as reachable. This memory is then returned to the available memory pool for future allocations.  In some garbage collection algorithms, an additional step called compaction may be performed. Compaction involves moving the live objects closer together, effectively defragmenting memory. This can improve memory access performance.  Garbage collection alleviates the burden of manual memory management, where programmers would have to explicitly allocate and deallocate memory for objects. By automating memory reclamation, garbage collection reduces the risk of memory leaks and simplifies the development process. However, it's essential to be mindful of object lifetimes and design memory-efficient programs to optimize garbage collection performance.  "
},
{
  "id": "section-35",
  "level": "1",
  "url": "section-35.html",
  "type": "Section",
  "number": "4.4",
  "title": "Variable Scope and Lifetime",
  "body": "Variable Scope and Lifetime  Method Scope  static (Class) Scope  "
},
{
  "id": "section-rt-concepts",
  "level": "1",
  "url": "section-rt-concepts.html",
  "type": "Section",
  "number": "4.5",
  "title": "Key Concepts",
  "body": "Key Concepts   Variables that refer to objects are called 'reference variables.' They are different from primitive variables in important ways.  It is useful to think of the value held by a reference variable to be the address in memory where an object is stored, not the object itself.  Any variable declared as type object is a kind of reference variable.  When an reference variable is copied to another reference variable using assignment (=) the address of the object is copied, not the object itself.  The implication is that two or more reference variables may refer to one object in memory  To break the connection between a reference variable and an object, assign the variable to the special value null . After such an assignment the variable no longer refers to the object as it no longer holds the object's address in memory.  Java is able to track references to an object. When no more references are found, Java deletes the object from memory. This process is called Garbage Collection .  To trigger garbage collection, assign null to all variables that reference an object.  The StringBuilder class defines a special kind of object that builds large Strings in a memory-efficient manner.  The StringBuilder class implements append() and toString() methods  When variables are declared within the scope of a method, they come in to existence during execution of the method, and go out of existence when the method exits.  To ensure a variable persists for more than the time during which a method executes, declare that variable within the class definition but but outside the method defintion.  Variables declared outside a method must be at the top of a class definition.  Variables declared outside a method are accessible from within all methods of a class.  A useful problem solving strategy is to use such variables as a kind of bulletin board to post values to be used by other methods. One method can set or update a value, while another method can access and report that value.  Never declare a variable outside the scope of a method unless it is absolutely necessary. Variables declared in this manner unnecessarily often lead to bugs that are difficult to find.   "
},
{
  "id": "exercises-9",
  "level": "1",
  "url": "exercises-9.html",
  "type": "Exercises",
  "number": "4.6",
  "title": "Exercises",
  "body": "Exercises  TODO: Problems involving the reassigning of reference variables and predicting results.  TODO: Problems involving ref variable declarations and problem solving.  "
},
{
  "id": "section-c1-if-statements",
  "level": "1",
  "url": "section-c1-if-statements.html",
  "type": "Section",
  "number": "5.1",
  "title": "if-Statements",
  "body": " if-Statements  First true condition executes  In Java, the boolean primitive type is used to represent a boolean value, which can be either true or false . It is the simplest data type and is commonly used for making logical decisions and controlling the flow of programs.  The boolean type is declared using the keyword boolean and occupies 1 bit of memory. However, the actual storage size in memory is typically larger (such as 1 byte) to accommodate the storage requirements of other data types. The boolean type can only take on two possible values: true or false .  You can declare a boolean variable and assign a value to it as follows:  boolean isSunny = true; boolean isRaining = false;  The boolean type is primarily used in conditional statements and loops to control the flow of the program based on the evaluation of boolean expressions. Here's an example:  boolean isSunny = true; boolean isWarm = true; if (isSunny && isWarm) { System.out.println(\"It's a perfect day!\"); } else if (isSunny && !isWarm) { System.out.println(\"It's sunny but not warm.\"); } else { System.out.println(\"The weather is not ideal.\"); }  In the above example, the program checks the values of isSunny and isWarm using logical operators ( && for logical AND, ! for logical NOT) to determine the appropriate output based on the weather conditions.  Boolean values can also be stored in variables, returned by methods, and used in boolean expressions. Java provides logical operators (AND, OR, NOT) and comparison operators (equal to, not equal to, greater than, etc.) that work with boolean values.  It's important to note that boolean values cannot be cast to other data types. They are distinct and separate from numeric types like int , float , or double .  Overall, the boolean primitive type in Java is used to represent logical values of true or false . It plays a fundamental role in decision-making and control structures within Java programs.  "
},
{
  "id": "section-38",
  "level": "1",
  "url": "section-38.html",
  "type": "Section",
  "number": "5.2",
  "title": "Multi-branch if-Statements",
  "body": "Multi-branch if-Statements  "
},
{
  "id": "section-39",
  "level": "1",
  "url": "section-39.html",
  "type": "Section",
  "number": "5.3",
  "title": "If-statement Strategies",
  "body": "If-statement Strategies  Multiple if-statements. Mutually-exclusive conditions  Set default and change if necessary  Most limited conditional test to most broad  "
},
{
  "id": "section-40",
  "level": "1",
  "url": "section-40.html",
  "type": "Section",
  "number": "5.4",
  "title": "while-Statements",
  "body": "while-Statements  "
},
{
  "id": "section-41",
  "level": "1",
  "url": "section-41.html",
  "type": "Section",
  "number": "5.5",
  "title": "Block Scope",
  "body": "Block Scope  It's important to note that variables have a scope within which they exist. A variable's scope determines from where in your program they may be accessed. For example, variables can have  block scope (limited to a specific block of code),  method scope (limited to a specific method),  object (instance) scope (limited to a specific object),  class scope (accessible throughout the class), and  package scope (limited to a Java package).  The scope of a variable is defined by the location where it is declared. It is important to understand that the location in your program where a variable is declared dictates from where it may be accesses.  "
},
{
  "id": "section-42",
  "level": "1",
  "url": "section-42.html",
  "type": "Section",
  "number": "5.6",
  "title": "Collection Classes",
  "body": "Collection Classes  ArrayList ...  (Using a loop counter to access elements of an ArrayList)  Autoboxing and Unboxing  "
},
{
  "id": "section-43",
  "level": "1",
  "url": "section-43.html",
  "type": "Section",
  "number": "5.7",
  "title": "Collections library of Static Methods",
  "body": "Collections library of Static Methods  "
},
{
  "id": "section-44",
  "level": "1",
  "url": "section-44.html",
  "type": "Section",
  "number": "5.8",
  "title": "break and continue",
  "body": "break and continue  "
},
{
  "id": "section-45",
  "level": "1",
  "url": "section-45.html",
  "type": "Section",
  "number": "5.9",
  "title": "Nested Control",
  "body": "Nested Control  Nested while statements  Nested if statements  "
},
{
  "id": "section-46",
  "level": "1",
  "url": "section-46.html",
  "type": "Section",
  "number": "5.10",
  "title": "Object Graphics",
  "body": "Object Graphics   "
},
{
  "id": "section-47",
  "level": "1",
  "url": "section-47.html",
  "type": "Section",
  "number": "5.11",
  "title": "Key Concepts",
  "body": "Key Concepts   The flow of a program may be configured to change based on the state of its data values.  An if-statement controls program flow by conditionally executing a block of code when a certain expression evaluates to true , and skips the block of code when the expression evaluates to false .  A while-statement will repeatedly execute a block of code while an expression continues to evaluate to true  The code block for a while statement may never execute if the conditional statement never evaluates to true  A while-statement is also referred to as a \"while loop\" and a counter variable may be used to construct a program flow scenario in which a block of code is executed a precise number of times  Execution of a while-statement code block may be terminated immediately when a break statement is encountered  Execution of a while-statement code block may be terminated immediately when a continue statement is encountered. In this case program flow returns to the while-statement conditional expression to test if the code block should be repeated.  When a while-statement is exited due to a break statement or its conditional expression evaluating to false, execution continues immediately after the while-statement code block, if any  An if-statement nested within a while-statement is a common idiom for determining if a break or continue should be executed.  A while-statement nested within another while-statement is a common idiom for generating all pairs of two counters, such as when working with a rectangular structure  If-statements may be extended with an else-clause which specifies an alternative block of code to be executed when the conditional expression evaluates to false  If-statements may also be extended with an else-if clause which specifies a new conditional expression and alternative block of code and to be executed when all previous conditional expression evaluates to false  An if-statement must include an if-clause, zero more else-if-clauses and zero or one else-clause  Consecutive if-statements are independent from one another - if both conditional expressions evaluate to true, then both code blocks will execute.  The first conditional expression encountered in a single multi-clause if-statement that evaluates to true will result in its code block being executed. All other code blocks are skipped.  The top-down first-true procedure for evaluating if-statements has implications on which code block is executed.  The order of conditional expressions listed in a complex if-statement as well as the way conditional expressions are constructed may have a large impact on the flow of a program.  There are multiple strategies for constructing the conditional expressions of an if-statement, including a strategy that covers all possible cases in every conditional expression and a strategy that specifies subsequent conditional expressions that incrementally admit new cases on each subsequent conditional expression. In former case the later case the order of conditional expressions in a complex if-statement does not matter - all are independent. In the latter case the order of conditional expressions in a complex if-statement can matter greatly as each is dependent upon the previous expressions tested.  If-statements may be nested as a way to simplify conditional expressions  Java Collections are specialized objects designed to store and manage small or large numbers of other objects  An ArrayList is an ordered, resizable collection of objects that may be manipulated using its methods  ArrayList may hold any type of object using generics , also known as diamond notation .  A while-loop with a counter is a standard idiom for accessing all objects stored in an ArrayList.  Variables declared as one of Java's primitive data types may be stored in an ArrayList by first wrapping the primitive value in an equivalent class provided by Java  In many cases Java will automatically wrap a primitive in a class and remove a primitive from a class - processes called AutoBoxing and Unboxing  The classes that Java provides for boxing include Boolean, Byte, Character, Float, Double, Short, Integer, Long   "
},
{
  "id": "exercises-10",
  "level": "1",
  "url": "exercises-10.html",
  "type": "Exercises",
  "number": "5.12",
  "title": "Exercises",
  "body": " "
},
{
  "id": "section-48",
  "level": "1",
  "url": "section-48.html",
  "type": "Section",
  "number": "6.1",
  "title": "for-Statements",
  "body": "for-Statements  "
},
{
  "id": "section-49",
  "level": "1",
  "url": "section-49.html",
  "type": "Section",
  "number": "6.2",
  "title": "do-while-Statements",
  "body": "do-while-Statements  "
},
{
  "id": "section-50",
  "level": "1",
  "url": "section-50.html",
  "type": "Section",
  "number": "6.3",
  "title": "for-each Statements",
  "body": "for-each Statements  "
},
{
  "id": "section-51",
  "level": "1",
  "url": "section-51.html",
  "type": "Section",
  "number": "6.4",
  "title": "Which Iteration Statement?",
  "body": "Which Iteration Statement?  Compare\/contrast options  "
},
{
  "id": "section-52",
  "level": "1",
  "url": "section-52.html",
  "type": "Section",
  "number": "6.5",
  "title": "switch-Statements",
  "body": "switch-Statements  "
},
{
  "id": "section-53",
  "level": "1",
  "url": "section-53.html",
  "type": "Section",
  "number": "6.6",
  "title": "Conditional Expressions",
  "body": "Conditional Expressions  "
},
{
  "id": "section-54",
  "level": "1",
  "url": "section-54.html",
  "type": "Section",
  "number": "6.7",
  "title": "Which Branching Statement?",
  "body": "Which Branching Statement?  Compare\/contrast options  "
},
{
  "id": "section-55",
  "level": "1",
  "url": "section-55.html",
  "type": "Section",
  "number": "6.8",
  "title": "Shortcut Evaluation",
  "body": "Shortcut Evaluation   "
},
{
  "id": "section-56",
  "level": "1",
  "url": "section-56.html",
  "type": "Section",
  "number": "6.9",
  "title": "Comparing Floating-point Numbers",
  "body": "Comparing Floating-point Numbers  Rounding in floating point numbers suggests not using == operator  "
},
{
  "id": "section-57",
  "level": "1",
  "url": "section-57.html",
  "type": "Section",
  "number": "6.10",
  "title": "Key Concepts",
  "body": "Key Concepts   The for-statement may be used for iterating  Parts of a for-statement include the initialization statement, test for continuation, and increment  The do-while statement may be used for iterating  Key difference between a while-statement and do-while-statement is when the test for continuation is evaluated  The for-each statement may be used for iterating over ArrayLists  The for-each statement may be used for iterating over a HashSet  Iterating over a HashMap using its HashSet of keys  There are limitations when using a for-each statement to iterate over a Java Collection including the inability to modify the collection while iterating  A specialized Iterator object may be used to manage the iteration over a collection  Collections may be modified when using an Iterator to iterate over a Collection  The switch-statement is an alternative way to branch program execution  The case label is part of a switch-statement that starts a new branch when the switch variable equals the case value  The default label provides for the case when no case values match  Each code block in a switch statement must end with a break statement otherwise execution continues through to the next block, irnoring the case label value.  Stacking case lables without a break statement is a way to execute one block of code for multiple value matches  The conditional expression is a way to return different values based on the boolean value resulting from an evaluated expression  Conditional expression syntax (? :), a ternary operator – three operands  Conditional expression is like an if\/else statement written and evaluated as a single expression.   "
},
{
  "id": "exercises-11",
  "level": "1",
  "url": "exercises-11.html",
  "type": "Exercises",
  "number": "6.11",
  "title": "Exercises",
  "body": "Exercises  "
},
{
  "id": "section-58",
  "level": "1",
  "url": "section-58.html",
  "type": "Section",
  "number": "7.1",
  "title": "Creating and Initializing Arrays",
  "body": "Creating and Initializing Arrays  "
},
{
  "id": "section-59",
  "level": "1",
  "url": "section-59.html",
  "type": "Section",
  "number": "7.2",
  "title": "Accessing Array Elements with Iteration",
  "body": "Accessing Array Elements with Iteration  (Using a loop counter at access elements of an array)  "
},
{
  "id": "section-60",
  "level": "1",
  "url": "section-60.html",
  "type": "Section",
  "number": "7.3",
  "title": "Array vs. ArrayList",
  "body": "Array vs. ArrayList  Creating and Initializing  Both are reference types  Accessing size  Element access  Element addition  Element removal  "
},
{
  "id": "section-61",
  "level": "1",
  "url": "section-61.html",
  "type": "Section",
  "number": "7.4",
  "title": "Creating Stars",
  "body": "Creating Stars  Use iteration and an array to create Star shapes  "
},
{
  "id": "section-62",
  "level": "1",
  "url": "section-62.html",
  "type": "Section",
  "number": "7.5",
  "title": "Multidimensional Arrays",
  "body": "Multidimensional Arrays  Arrays of Arrays  Nested loops for accessing all elements of multidimensional arrays  "
},
{
  "id": "section-63",
  "level": "1",
  "url": "section-63.html",
  "type": "Section",
  "number": "7.6",
  "title": "Ragged Arrays",
  "body": "Ragged Arrays  "
},
{
  "id": "section-64",
  "level": "1",
  "url": "section-64.html",
  "type": "Section",
  "number": "7.7",
  "title": "Arrays as Parameters",
  "body": "Arrays as Parameters  As a reference type, all the same rules apply.  "
},
{
  "id": "section-65",
  "level": "1",
  "url": "section-65.html",
  "type": "Section",
  "number": "7.8",
  "title": "Arrays of Objects",
  "body": "Arrays of Objects  Like a single variable, array elements of objects hold references to objects  "
},
{
  "id": "section-66",
  "level": "1",
  "url": "section-66.html",
  "type": "Section",
  "number": "7.9",
  "title": "Arrays Library",
  "body": "Arrays Library  The Arrays library of static methods for manipulating arrays in Java  "
},
{
  "id": "section-67",
  "level": "1",
  "url": "section-67.html",
  "type": "Section",
  "number": "7.10",
  "title": "Command line Parameters",
  "body": "Command line Parameters  Command-line parameters are passed to main() as an array of Strings  "
},
{
  "id": "section-68",
  "level": "1",
  "url": "section-68.html",
  "type": "Section",
  "number": "7.11",
  "title": "Key Concepts",
  "body": " Key Concepts   An array is a linear data structure built in the Java.  Arrays may hold primitive data types as well as objects.  Array elements must have a uniform type.  When created, an array has a size that is predetermined and may not be extended.  An array variable is declared by specifying the type of array elements followed by square brackets.  An array is created using the new keyword followed by the type and a size in square brackets.  An array element is accessed using the variable name followed by square brackest and the element number.  Array elements begin at index 0 and end at one less than the length of the array.  The length of an array may be determined using the length property of an array object.  An array may be initialized at the time it is created by leaving out the size of the array but following with curly braces containing a comma-delimited list of values.  A shorthand for initializing an array is to declare an array variable and assign it directly to a curly brace-delimited list of values.  To access an element of an array follow the array variable with a pair of square brackets containing the number of the array element. This form of element access may be used for reading and assigning values to an array element.  Accessing all elements of an array may be performed with a while- or for-loop which generates all indexes.  An array element may itself be an array  An array of arrays is referred to as a 2-dimensional array  2D array variables may be declared with a type followed by two pairs of square brackets.  2D arrays may be created using the new keyword following by two pairs of square brackets containing the number of elements in each dimension. In this case the array is rectangular in shape.  To access an element in a 2D array use two pairs of square brackets, each containing indexes.  A 2D array may be initialized by leaving out dimensions when creating the array and following with nested curly braces containing comma-separated values.  A shorthand for initializing a 2D array is to declare an array variable and assign it directly to nested curly brace-delimited lists of values.  The second dimension of a 2D array is not required to have uniform lengths. This is referred to as a ragged array.  2D ragged arrays may be created by leaving out the length of the second dimension. In this case each array element has the value null.  When using a ragged array each element of the first dimension may be assigned to a 1D array of varying length, provided the types are compatible.  A shorthand for initializing a ragged 2D array is to declare an array variable and assign it directly to nested curly brace-delimited lists of values, where the length of each subordinate list may vary.  To print the elements of a ragged array by looping, the inner loop extent must interrogate each subordinate array length to set the upper loop counter value.  Arrays of dimension higher than two are possible by following the pattern for extending from 1D to 2D arrays.  Use the java.util.Arrays package to access static utility functions for manipulating arrays.  Arrays may be passed by reference to methods, just like any other object reference.  The public static void main()String[] args) method takes an array of Strings, where Strings are read from the terminal following the java command and class name. This array is referred to as the programs command line arguments.   "
},
{
  "id": "exercises-12",
  "level": "1",
  "url": "exercises-12.html",
  "type": "Exercises",
  "number": "7.12",
  "title": "Exercises",
  "body": "Exercises  "
},
{
  "id": "section-69",
  "level": "1",
  "url": "section-69.html",
  "type": "Section",
  "number": "8.1",
  "title": "Class vs Instance",
  "body": "Class vs Instance  There can only ever be one class. There can be zero or more instances.  static fields belong to the class. All non-static fields are copied into each instance.  static methods do not have access to non-static fields. Non-static methods may access the scope of the object through which they are executed.  Class vs Object scope.  "
},
{
  "id": "section-70",
  "level": "1",
  "url": "section-70.html",
  "type": "Section",
  "number": "8.2",
  "title": "Constructors and Methods",
  "body": "Constructors and Methods  Anatomy of a Constructor  Constructor patters - init object fields.  Non-static methods  Method vs Constructor  The this keyword to set object scope  Using class name to set static scope  "
},
{
  "id": "section-71",
  "level": "1",
  "url": "section-71.html",
  "type": "Section",
  "number": "8.3",
  "title": "Access Control",
  "body": "Access Control  public vs private  "
},
{
  "id": "section-72",
  "level": "1",
  "url": "section-72.html",
  "type": "Section",
  "number": "8.4",
  "title": "Accessor and Mutator Methods",
  "body": "Accessor and Mutator Methods  getters and setters  "
},
{
  "id": "section-73",
  "level": "1",
  "url": "section-73.html",
  "type": "Section",
  "number": "8.5",
  "title": "Encapsulation",
  "body": "Encapsulation  The public interface  "
},
{
  "id": "section-cl-enumerated",
  "level": "1",
  "url": "section-cl-enumerated.html",
  "type": "Section",
  "number": "8.6",
  "title": "Enumerated Types",
  "body": " Enumerated Types  In Java, enumerated types, also known as enums , provide a way to define a fixed set of named constants. Enums allow you to create a custom data type with a predefined and automatically assigned set of values, making your code more readable, maintainable, and type-safe.  To define an enum in Java, you use the enum keyword followed by the name of the enum type. Here's an example of a simple enum representing clothing sizes:  TODO: Replace following with a program  >jshell | Welcome to JShell -- Version 17.0.6 | For an introduction type: \/help intro jshell> enum Size { ...> XSMALL, ...> SMALL, ...> MEDIUM, ...> LARGE, ...> XLARGE ...> } | created enum Size jshell>  In this example, Size > is the name of the enum type, and the constants SMALL , MEDIUM , LARGE , etc., are the possible values of the enum. Note that capitalization of constant name is not required, but useful for communicating the fact that these are constants.  You can use enum constants in your code just like any other static variables. For example:  jshell> Size mySize = Size.LARGE; mySize ==> LARGE jshell> System.out.println(\"Please order a \" + mySize); Please order a LARGE jshell>  Enums also have some useful methods automatically provided by Java. For instance, you can retrieve the name of an enum constant using the name() method:  jshell> System.out.println(\"Please order a \" + mySize.name()); Please order a LARGE  You can compare enum constants using the equality operator (==) because each constant is a unique instance of the enum type. Enums can also be used in switch statements for easy branching based on the enum value.  TODO: Replace following with a program  jshell> switch (mySize) { ...> case XSMALL: ...> case XLARGE: ...> System.out.println(\"We are out of 'extra' sizes\"); ...> break; ...> default: ...> System.out.println(\"Order placed\"); ...> } We are out of 'extra' sizes jshell>  Enums can have constructors, fields, and methods like any other Java class. You can even define custom behavior for each enum constant.  In summary, Java enumerated types (enums) provide a convenient way to define a fixed set of named constants, making your code more expressive and robust. Enums are type-safe, can have custom behavior, and provide useful methods out-of-the-box for working with the constants they define.  "
},
{
  "id": "p-314",
  "level": "2",
  "url": "section-cl-enumerated.html#p-314",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "TODO: Replace following with a program "
},
{
  "id": "p-319",
  "level": "2",
  "url": "section-cl-enumerated.html#p-319",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "TODO: Replace following with a program "
},
{
  "id": "section-75",
  "level": "1",
  "url": "section-75.html",
  "type": "Section",
  "number": "8.7",
  "title": "Multiple File Programs",
  "body": "Multiple File Programs  Classes defined in multiple files.  Compiling and running programs spread over multiple files.  Multiple classes in the same file  Packages and file structure  A class's main() method is invoked automatically when the class is run.  jar files - just a zip archive of .class files  "
},
{
  "id": "section-76",
  "level": "1",
  "url": "section-76.html",
  "type": "Section",
  "number": "8.8",
  "title": "Driver Programs",
  "body": "Driver Programs  Typically a top-level class with static methods that create and orchestrate other objects. May only have the static main() method.  "
},
{
  "id": "section-77",
  "level": "1",
  "url": "section-77.html",
  "type": "Section",
  "number": "8.9",
  "title": "Testing",
  "body": "Testing  Using the main() method for testing  "
},
{
  "id": "section-78",
  "level": "1",
  "url": "section-78.html",
  "type": "Section",
  "number": "8.10",
  "title": "Review of Scope",
  "body": "Review of Scope  block, method, object, class  One more, package  Scope sets variable lifetime. Be careful to define variables in the appropriate scope  The \"narrowest scope feasible\" principle.  "
},
{
  "id": "section-79",
  "level": "1",
  "url": "section-79.html",
  "type": "Section",
  "number": "8.11",
  "title": "Shadowing",
  "body": "Shadowing  We get used to declaring and initializing variables. This often causes shadowing errors.  "
},
{
  "id": "section-80",
  "level": "1",
  "url": "section-80.html",
  "type": "Section",
  "number": "8.12",
  "title": "Anonymous Objects",
  "body": "Anonymous Objects  Created, used, and lost  "
},
{
  "id": "section-81",
  "level": "1",
  "url": "section-81.html",
  "type": "Section",
  "number": "8.13",
  "title": "Key Concepts",
  "body": "Key Concepts   The Java Standard Library provides a large number of prewritten classes.  Other prewritten classes may be available from external libraries, often stored in JAR files.  JAR is an acronym for Java Archive.  The driver class (aka driver program) is the class in a larger program that contains the public static void main(String[] args) method. This is where the program begins execution.  An object member is a term used for all class or object variables and methods.  When using the static keyword to modify a variable or method declaration, that member belongs to the class.  A scope is an enclosing context in a program where variables and expressions are associated. Two examples are class scope and object scope.  The scope of a method or instance variable may be specified by preceding it with the name of the class or object followed by a dot. This is called dot-notation.  It may be necessary to specify the scope of a static member with the class name in which it was defined in order to access it.  Regardless of the number of object instances created, there is only one class and therefore one set of static class members.  Every object instantiated using a class will get its own members declared without using the static keyword.  A custom class constructor defines the code executed when the new keyword is used with a constructor to create a new instance of the class.  A constructor must have the same name as the class, have no return type, not even void, and no return statement.  The this keyword always resolves to a reference to the current object.  You may invoke one constructor from another constructor in the same class using the this keyword followed by the constructor argument list.  The visibility of methods and instance variables encapsulated by and object are controlled using certain keywords, including public and private.  The combination of a method name, parameters and parameter types are referred to as a method's signature.  Multiple methods having the same name may be defined within a class, provided their signatures are distinct. This situation is called overloading a method.  Instance variables and methods declared as private are accessible only from within the scope of an object.  A common Java best practice is to declare private all object instance variables, and to control access using methods.  Methods that access private instance variables are called accessor methods, or \"getters\".  Accessor methods often are named using camel case, beginning with the word get followed by the name of the instance variable being accessed.  Methods that modify private instance variables are called mutator methods, or \"setters\".  Mutator methods often are named using camel case, beginning with the word set followed by the name of the instance variable being modified.  Objects should be designed to be self-governing. That is, an object should contain all the code and internal variables necessary to manage its instance variables. This is a core concept of object-oriented programming called encapsulation.  In addition to class scope and object scope, block scope is an enclosing context for a code block, such as when defining a code block that makes up an if-statement or for-statement.  Scopes are nested. Block scopes are nested within method scopes, and method scopes are nested within an object or class scope.  Shadowing occurs when variables defined in an inner scope have names identical to variables defined in an outer scope.  To access a shadowed variable, it is necessary to set the scope of the variable explicitly using dot-notation and the this keyword or the Class name.  When choosing a scope to declare a variable, always use the most narrow scope feasible. This avoids program bugs that emerge when a variable value set by one method instance has an unexpected impact on the execution of another method instance.  The scope within which a variable is declared governs its lifetime. For example, when declaring a variable within a method, it comes into existence upon declaration and goes out of existence when the method scope exits. When declaring an instance variable in an object, it comes in to existence when the object is instantiated and goes out of existence when the object is garbage collected.  Anonymous objects are objects created temporarily but never assigned to a variable. They occur when chaining methods, or when invoking a constructor to set a parameter value as part of calling a method.  The toString() method of an object is a special method used to return a String representation of an object. toString() is invoked by Java's print methods and the String representation is what is printed to the terminal.   "
},
{
  "id": "exercises-13",
  "level": "1",
  "url": "exercises-13.html",
  "type": "Exercises",
  "number": "8.14",
  "title": "Exercises",
  "body": "Exercises  "
},
{
  "id": "section-82",
  "level": "1",
  "url": "section-82.html",
  "type": "Section",
  "number": "9.1",
  "title": "Setting Up Inheritance",
  "body": "Setting Up Inheritance  extends and super keywords keyword  base class, derived class  Prevent subclassing using the final keyword  "
},
{
  "id": "p-339",
  "level": "2",
  "url": "section-82.html#p-339",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "final "
},
{
  "id": "section-83",
  "level": "1",
  "url": "section-83.html",
  "type": "Section",
  "number": "9.2",
  "title": "Benefits of Inheritance",
  "body": "Benefits of Inheritance  Subclassing automatically shares all functionality in base class. Derived class has a head start.  Modifications and updates apply to all derived classes  Reduction of code duplication  Reduction of excessive code maintenance  "
},
{
  "id": "section-84",
  "level": "1",
  "url": "section-84.html",
  "type": "Section",
  "number": "9.3",
  "title": "Generalization and Specialization",
  "body": "Generalization and Specialization  Grouping fields and methods in a base class is a kind of specialization  Defining derived classes with unique state and behavior is a kind of specialization  Overriding methods to replace functionality is one way to specialize a derived class  Overriding methods to augment functionality is another way to specialize a derived class  "
},
{
  "id": "section-85",
  "level": "1",
  "url": "section-85.html",
  "type": "Section",
  "number": "9.4",
  "title": "Subtype Polymorphism and Dynamic Binding",
  "body": "Subtype Polymorphism and Dynamic Binding  Assign an object of type derived class to a variable of type base class  Cast an object of type base class to a variable of type derived class  Dynamic binding  https:\/\/software.rajivprab.com\/2019\/08\/14\/nuances-of-overloading-and-overriding-in-java\/ Single Dispatch, Hidden Override, Exposed Override, Ambiguous Parameter, Multiple Inheritance - Interfaces, Multiple Inheritance - Class and Interface, Transitive Override, Private Override, Static Overrides, Static Linking  Using the @Override annotation on all override methods will help greatly in preventing regressions, by producing compile errors as soon as any base methods have their visibility changed.  "
},
{
  "id": "p-352",
  "level": "2",
  "url": "section-85.html#p-352",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "@Override "
},
{
  "id": "section-86",
  "level": "1",
  "url": "section-86.html",
  "type": "Section",
  "number": "9.5",
  "title": "protected Access",
  "body": "protected Access  "
},
{
  "id": "section-87",
  "level": "1",
  "url": "section-87.html",
  "type": "Section",
  "number": "9.6",
  "title": "The Object Class",
  "body": "The Object Class  All Java classes inherit Object, even when there is no extends  The inherited toString() method and when to override  The inherited equals() and when to override  "
},
{
  "id": "section-88",
  "level": "1",
  "url": "section-88.html",
  "type": "Section",
  "number": "9.7",
  "title": "Testing for a specific Class",
  "body": "Testing for a specific Class  instanceof operator  "
},
{
  "id": "section-89",
  "level": "1",
  "url": "section-89.html",
  "type": "Section",
  "number": "9.8",
  "title": "Abstract Classes and Methods",
  "body": "Abstract Classes and Methods  Force a derived class to implement a method by declaring it abstract in the base class  A class with an abstract method must also be declared abstract  "
},
{
  "id": "p-357",
  "level": "2",
  "url": "section-89.html#p-357",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "abstract "
},
{
  "id": "section-90",
  "level": "1",
  "url": "section-90.html",
  "type": "Section",
  "number": "9.9",
  "title": "Key Concepts",
  "body": "Key Concepts   Inheritance is a hierarchical relationship set up between two classes called a subclass and a superclass.  Inheritance is set up in the subclass declaration using the extends keyword.  One of the benefits of inheritance is that the subclass automatically inherits -- gets access to -- members of a superclass, subject to visibility constraints.  If an attempt is made to access a method or instance variable of a subclass that is in an inheritance relationship, and the subclass does not have a suitable implementation of that variable or method, Java will search up the hierarchy in an attempt to find a suitable method or instance variable implemented by one of its superclasses.  The first suitable member found while searching up a hierarchy will be invoked.  When a subclass defines a member that matches one defined in a superclass, it is said that the subclass member overrides the superclass member.  The scope of a superclass may be specified explicitly using the super keyword.  Subclass constructors must invoke superclass constructors as part of the subclass constructor implementation. This may be accomplished using the super keyword.  Superclass methods may be invoked explicitly from within an object, skipping an overridden implementation in the subclass, by using super as the method's scope.  A method defined in a subclass may overload a superclass method if the method names are the same but the signatures differ.  Inheritance is often referred to an is-a relationship because the subclass is a kind of superclass.  An object of type subclass may be assigned to a variable of type superclass. This is a form of polymorphism found in Java and it is a ramification of the inheritance relationship.  Ramifications of polymorphism in Java include the ability to pass a parameter of type subclass to a method whose parameter declaration is of type superclass, and of storing multiple types of subclasses in an ArrayList declared to store objects of a common superclass type.  When a program invokes a method on an object of type subclass using a variable of type superclass, the method implementation in the subclass is invoked. This is called dynamic binding.  The particular methods invoked are governed by the type of the object referenced by a variable, not the type of object variable.  The Java compiler will not permit the invocation of methods declared by a subclass and not in a superclass if the invocation is attempted on a variable of type superclass even if it references an object of type subclass.  If a superclass member is intended to be access only by itself and its subclasses, and not to be made generally accessible by any external class, the member may be declared using the protected visibility modifier keyword. Compare to public and private visibility modifiers  Another benefit of inheritance is that it allows the program designer to group common members in a superclass, making them accessible to all subclasses, reducing code duplication.  Grouping fields and methods in a base class is a kind of specialization  Defining derived classes with unique state and behavior is a kind of specialization  Overriding methods to replace functionality is one way to specialize a derived class  Overriding methods to augment functionality is another way to specialize a derived class  Inheritance may be prevented by modifying the declaration of a class with the final keyword  All classes ultimately inherit the Object class, even if the extends keyword is not used.  Several useful methods are inherited by all classes from Object, including equals() and toString()  The == operator tests two objects for equal identity, which is not always the desired behavior. Sometimes the notion of equality is different than object identity. For example, String objects should be considered equal when their character sequences are identical, even when the String objects themselves are distinct.  The default behavior of Object's equals() method is to test for object identity. The String class overrides equal() to replace the Object implementation with an implementation that tests characters sequence for equality.  When printing an object, the println() method of PrintStream invokes an object's toString() method to obtain a String representation of an object which is printed to the terminal. This is possible because the Object class provides a default implementation of toString().  It is often useful to override toString() in a custom class to provide a more informative String representation that is printed to the terminal by println().  The instanceof operator is a useful way to test if one object is an instance of a class. The instanceof operator takes inheritance into account; it will return true when testing if a subclass in an instance of a superclass due to the is a nature of the inheritance relationship.  An object of type subclass referenced by a variable of type superclass may be cast to a subclass type using parentheses. Often this is necessary when the object must be accessed as its original subclass type, such as when invoking a method implemented in the subclass only and when passing as a parameter to a method requiring the subclass type.  When a class should not be instantiated, declare it as abstract.  Abstract classes serve to collect common behavior to be inherited by subclasses.  Abstract classes are also useful as types that may reference objects of any subclass type.   "
},
{
  "id": "exercises-14",
  "level": "1",
  "url": "exercises-14.html",
  "type": "Exercises",
  "number": "9.10",
  "title": "Exercises",
  "body": "Exercises  "
},
{
  "id": "section-91",
  "level": "1",
  "url": "section-91.html",
  "type": "Section",
  "number": "10.1",
  "title": "Defining and Implementing Interfaces",
  "body": "Defining and Implementing Interfaces  Consider the following interface. Note how the structure of the interface looks like a class with only method signatures, where the class keyword is replaced with the interface keyword.  (example)  Implementing the interface also looks like extending a base class, only the keyword extends is replaced with the keyword implements .  (example)  Whereas a derived class can extend only a single base class, a class may implement any number of interfaces.  "
},
{
  "id": "p-360",
  "level": "2",
  "url": "section-91.html#p-360",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "class interface "
},
{
  "id": "p-362",
  "level": "2",
  "url": "section-91.html#p-362",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extends implements "
},
{
  "id": "section-92",
  "level": "1",
  "url": "section-92.html",
  "type": "Section",
  "number": "10.2",
  "title": "Interfaces and Polymorphism",
  "body": "Interfaces and Polymorphism  Like a class, an interface can be used as a variable type. Furthermore, any instance of a class that implements an interface can be assigned to a variable of type interface. Only methods in the interface definition may be access through variable of type interface assigned to the variable.  "
},
{
  "id": "section-93",
  "level": "1",
  "url": "section-93.html",
  "type": "Section",
  "number": "10.3",
  "title": "Comparable&lt;T&gt; Interface",
  "body": "Comparable<T> Interface  Comparable<T>  public interface Comparable<T>{ int compareTo(T o); }  Implementing the Comparable interface allows collections of objects to sorted and searched using algorithms built-in to Java.  "
},
{
  "id": "section-94",
  "level": "1",
  "url": "section-94.html",
  "type": "Section",
  "number": "10.4",
  "title": "Iterator&lt;T&gt; Interface",
  "body": "Iterator<T> Interface  Iterator<T>  public interface Iterator<T> { boolean hasNext(); T next(); void remove(); \/\/optional }  Implementing the Iterator<E> interface allows collections of objects implementing the interfaced to be traversed with the enhanced-for statement.  "
},
{
  "id": "section-95",
  "level": "1",
  "url": "section-95.html",
  "type": "Section",
  "number": "10.5",
  "title": "Benefits of an Interface",
  "body": "Benefits of an Interface  An ArrayList holding objects of multiple types  "
},
{
  "id": "section-96",
  "level": "1",
  "url": "section-96.html",
  "type": "Section",
  "number": "10.6",
  "title": "Defining Your Own Interfaces",
  "body": "Defining Your Own Interfaces   "
},
{
  "id": "section-97",
  "level": "1",
  "url": "section-97.html",
  "type": "Section",
  "number": "10.7",
  "title": "Interfaces and Polymorphism",
  "body": "Interfaces and Polymorphism   "
},
{
  "id": "section-98",
  "level": "1",
  "url": "section-98.html",
  "type": "Section",
  "number": "10.8",
  "title": "Key Concepts",
  "body": "Key Concepts   An interface is a kind of contract to be fulfilled by a class definition.  An interface is made up of one or more method signatures.  A class implements an interface when it adds the implements keyword and name of the interface to the start of the class.  When a class implements an interface it is obligated to implement all methods signatures defined in that interface.  The compiler enforces the interface implementation contract. If the contract is not fulfilled completely, the compiler will fail with an error.  Interfaces may be defined using the angle brackets of generic notation which allows methods signatures to be parameterized by type.  By implementing the java.lang.Comparable Interface, objects may be sorted by Arrays.sort() or Collections.sort()  By implementing the java.util.Iterator Interface, objects may be iterated using the enhanced-for statement.  Polymorphism implies a single idea may have many forms. There are multiple forms of polymorphism in Java.  Polymorphic methods are implemented when multiple methods of the same name have distinct signatures  Polymorphic methods also appear when subclasses override superclass methods and dynamic binding.  Polymorphic reference variables occur when a variable of type superclass may reference a value of type subclass.  Polymorphic reference variables lso occur when a variable of type interface may reference any object that implements the interface.  As the number of objects in a program grows, so does its complexity. It is essential to design your program before starting to code.  Implementation inheritance in Java occurs when the extends keyword is used (is-a)  Interface inheritance in Java occurs when the implements keyword is used (another kind of is-a)   "
},
{
  "id": "exercises-15",
  "level": "1",
  "url": "exercises-15.html",
  "type": "Exercises",
  "number": "10.9",
  "title": "Exercises",
  "body": "Exercises  "
},
{
  "id": "section-99",
  "level": "1",
  "url": "section-99.html",
  "type": "Section",
  "number": "11.1",
  "title": "Software Development Life Cycled (SDLC)",
  "body": "Software Development Life Cycled (SDLC)  Design is the first step in the SDLC  When you move on the Software Engineering you will learn about the other parts of various SDLC models  "
},
{
  "id": "section-100",
  "level": "1",
  "url": "section-100.html",
  "type": "Section",
  "number": "11.2",
  "title": "Encapsulation and Abstraction",
  "body": "Encapsulation and Abstraction  When to declare a new object  Public verses private behavior. The public interface.  A user of your class should not have to know how it is implemented.  "
},
{
  "id": "section-101",
  "level": "1",
  "url": "section-101.html",
  "type": "Section",
  "number": "11.3",
  "title": "Object Relationships",
  "body": "Object Relationships  Dependency  Aggregation  Implementation Inheritance  Interface Inheritance  "
},
{
  "id": "section-102",
  "level": "1",
  "url": "section-102.html",
  "type": "Section",
  "number": "11.4",
  "title": "When to use Inheritance",
  "body": "When to use Inheritance  Shared functionality  For generalization and specialization  "
},
{
  "id": "section-103",
  "level": "1",
  "url": "section-103.html",
  "type": "Section",
  "number": "11.5",
  "title": "When to use Interfaces",
  "body": "When to use Interfaces  Common public interface  "
},
{
  "id": "section-104",
  "level": "1",
  "url": "section-104.html",
  "type": "Section",
  "number": "11.6",
  "title": "Cohesion and Coupling",
  "body": "Cohesion and Coupling  Coupling is the degree to which objects and packages depend on one another. High coupling means that objects are tightly connected and changes to one may affect the others. In this case an object model is fragile. Low coupling means that objects are losely or not dependent one one another. Changes to one have little impact on the others.  Cohesion is the degree to which elements within an object or package work together to solve a problem. High cohesion means that objects are related and work together well to solve a problem. Low cohesion means that objects are loosely related and don't work together well.  As a general rule, software system should be designed with low coupling and high cohesion.  "
},
{
  "id": "section-105",
  "level": "1",
  "url": "section-105.html",
  "type": "Section",
  "number": "11.7",
  "title": "Unified Modeling Language (UML)",
  "body": "Unified Modeling Language (UML)  "
},
{
  "id": "section-106",
  "level": "1",
  "url": "section-106.html",
  "type": "Section",
  "number": "11.8",
  "title": "Class Diagram",
  "body": "Class Diagram  A structure diagram  "
},
{
  "id": "section-107",
  "level": "1",
  "url": "section-107.html",
  "type": "Section",
  "number": "11.9",
  "title": "Object Diagram",
  "body": "Object Diagram  A structure diagram  "
},
{
  "id": "section-108",
  "level": "1",
  "url": "section-108.html",
  "type": "Section",
  "number": "11.10",
  "title": "Activity Diagrams",
  "body": "Activity Diagrams  A behavior diagram  "
},
{
  "id": "section-109",
  "level": "1",
  "url": "section-109.html",
  "type": "Section",
  "number": "11.11",
  "title": "State Machine Diagrams",
  "body": "State Machine Diagrams  A behavior diagram  "
},
{
  "id": "section-110",
  "level": "1",
  "url": "section-110.html",
  "type": "Section",
  "number": "11.12",
  "title": "Key Concepts",
  "body": "Key Concepts   Unified Modeling Language (UML) is a standard diagram specification for the design and visualization of software, especially when using an object oriented programming language.  The UML specification defines multiple diagram types. We focus on Class Diagrams.  A Class Diagram describes the classes in a program: including their instance variables and methods.  A Class Diagram also depicts the way classes in a program relate to one another.  Type of relationships include inheritance (implementation and interface), aggregation, and dependency  Implementation inheritance in Java occurs when the extends keyword is used (is-a)  Interface inheritance in Java occurs when the implements keyword is used (another kind of is-a)  Aggregation occurs when one object is contained by another object, like a field or a collection (comprises)  Dependency occurs when a class is used by another but is not a field (depends upon)  The cardinality of a relationship may be indicated using numeric annotations at the end of a connection   "
},
{
  "id": "exercises-16",
  "level": "1",
  "url": "exercises-16.html",
  "type": "Exercises",
  "number": "11.13",
  "title": "Exercises",
  "body": "Exercises  "
},
{
  "id": "section-111",
  "level": "1",
  "url": "section-111.html",
  "type": "Section",
  "number": "12.1",
  "title": "Syntax Errors",
  "body": "Syntax Errors  Caught by the compiler  "
},
{
  "id": "section-112",
  "level": "1",
  "url": "section-112.html",
  "type": "Section",
  "number": "12.2",
  "title": "Logic Errors",
  "body": "Logic Errors  The program runs, but produces the wrong output.  "
},
{
  "id": "section-113",
  "level": "1",
  "url": "section-113.html",
  "type": "Section",
  "number": "12.3",
  "title": "Runtime Errors",
  "body": "Runtime Errors  The program compiles, but something goes wrong while it is running. Java responds to the problem by throwing an exception. Like nearly everything else in Java, an exception is an object created by instantiating a suitable exception class that identifies the problem.  If there is no intervention, Java will eventually print the current state of the call stack when the exception object is thrown.  "
},
{
  "id": "p-397",
  "level": "2",
  "url": "section-113.html#p-397",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "call stack "
},
{
  "id": "section-114",
  "level": "1",
  "url": "section-114.html",
  "type": "Section",
  "number": "12.4",
  "title": "Common Exception Classes",
  "body": "Common Exception Classes  ArithmeticException  NullPointerException  IndexOutOfBoundsException  ArrayIndexOutOfBoundsException  IllegalArgumentException  Exception class hierarchy  printStackTrace() method  "
},
{
  "id": "section-115",
  "level": "1",
  "url": "section-115.html",
  "type": "Section",
  "number": "12.5",
  "title": "Catching Exceptions",
  "body": "Catching Exceptions  try-catch  try-catch-finally  "
},
{
  "id": "section-116",
  "level": "1",
  "url": "section-116.html",
  "type": "Section",
  "number": "12.6",
  "title": "Checked vs. Unchecked Exceptions",
  "body": "Checked vs. Unchecked Exceptions  Checked exceptions must be caught  Alternatively, the catching of a checked exception may be deferred using the throws keyword.  "
},
{
  "id": "p-408",
  "level": "2",
  "url": "section-116.html#p-408",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "throws "
},
{
  "id": "section-117",
  "level": "1",
  "url": "section-117.html",
  "type": "Section",
  "number": "12.7",
  "title": "Reading Files",
  "body": "Reading Files  Thow IO exceptions  IO exceptions are checked, and must be caught in a try-catch  Files need to be closed.  "
},
{
  "id": "section-118",
  "level": "1",
  "url": "section-118.html",
  "type": "Section",
  "number": "12.8",
  "title": "try-with-resources",
  "body": "try-with-resources  May be used with objects that implement the AutoClosable interface.  public interface AutoCloseable { void close() throws Exception; }  "
},
{
  "id": "section-119",
  "level": "1",
  "url": "section-119.html",
  "type": "Section",
  "number": "12.9",
  "title": "Key Concepts",
  "body": "Key Concepts   Three types of errors occur in Java: Syntax Errors, Logic Errors and Runtime Errors  Syntax errors occur when rules defined by Java are violated.  The Java compiler reports syntax errors when an attempt is made to compile a program.  Logic errors occur when a syntactically correct program compiles and runs, but produces output that is incorrect.  Logic errors are produced by mistakes in the way the program is written.  Runtime errors occur when an unexpected error occurs while a program is running.  Runtime errors may be due to unexpected situations such as invalid array indexes, missing files, etc. These are called exceptions.  With no special intervention, an exception will cause a Java program to halt with an indication of what caused the exception.  Runtime exceptions may be caught and handled by a Java program.  The try-catch and try-catch-finally statements are used to catch and handle runtime exceptions.  Exceptions are encapsulated as objects in the standard library and all Exception classes inherit the java.lang.Exception class.  Common exception classes include ArithmeticException, NullPointerException, IndexOutOfBoundsException, ArrayIndexOutOfBoundsException, IllegalArgumentException  The try block contains the code to be executed that may result in an exception.  The catch block is the code that will be executed if a matching exception is thrown.  The optional finally block is code that is guaranteed to execute, regardless of whether or not an exception was thrown.  The catch block may specify the class that it is willing to catch and handle, or it may be set up to handle all thrown exceptions.  Multiple catch blocks may be specified if different exception classes have their own way of being handled.  As a type of class, exceptions may be instantiated to create exception objects and the object may be thrown by the user. This is accomplished with the throw statement.  Exception classes may be subclassed to create custom catchable exception classes with unique data and behavior.  There are two important exception class categories: checked exceptions and unchecked exceptions.  The Java compiler requires that all checked exceptions be handled with a try-catch and will refuse to compile a program with a checked exception that is not caught.  IOExceptions and their subclasses, such as FileNotFoundException, are examples of checked exceptions.  The handling of checked exceptions may be deferred from one method to its calling method by adding a throws statement to the method declaration.  Unchecked exceptions are not required to be handled, and may cause a program to halt if one occurs outside a try-catch block.  RuntimeExceptions, such as IndexOutOfBoundException, are examples of unchecked exceptions.  There is a formal distinction between errors in exceptions in Java: unlike exceptions, errors are fatal and cannot be handled.  Exception objects have their own methods that may be invoked when an exception object is caught.  The printStackTrace() method of Exception objects will print to the terminal the entire state of a program at the time an exception occurred.  A variation on the try-catch statement will automatically close an open resource when an exception occurs, such as an open file. This is called try-with-resources.   "
},
{
  "id": "exercises-17",
  "level": "1",
  "url": "exercises-17.html",
  "type": "Exercises",
  "number": "12.10",
  "title": "Exercises",
  "body": "Exercises  "
},
{
  "id": "section-120",
  "level": "1",
  "url": "section-120.html",
  "type": "Section",
  "number": "13.1",
  "title": "Tracing Programs",
  "body": "Tracing Programs  A running method must suspend when it calls another method. All the state of the running method must be saved so that when the called method returns the suspended method must accept the returned value and continue executing where it left off.  "
},
{
  "id": "section-121",
  "level": "1",
  "url": "section-121.html",
  "type": "Section",
  "number": "13.2",
  "title": "The Call Stack",
  "body": "The Call Stack  Tracks the state of executing and suspended methods while a program runs.  Each time a method is invoked, a new stack frame is created and pushed on the call stack. Stack frames track a number of facts about the method being executed, including all the declared variables, their instantaneous values, and the command being executed.  "
},
{
  "id": "section-122",
  "level": "1",
  "url": "section-122.html",
  "type": "Section",
  "number": "13.3",
  "title": "Recursion",
  "body": "Recursion  When tracing a program, if a method (eventually) invokes itself, this is called recursion .  Direct recursion occurs when a method invokes itself, directly.  Indirect recursion occurs when a method invokes other methods that eventually traces back to the original method.  Every method invocation gets a new stack frame, even if it is the same method invoked multiple times. Each invocation gets its own stack frame.  "
},
{
  "id": "p-417",
  "level": "2",
  "url": "section-122.html#p-417",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recursion "
},
{
  "id": "p-418",
  "level": "2",
  "url": "section-122.html#p-418",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Direct recursion "
},
{
  "id": "p-419",
  "level": "2",
  "url": "section-122.html#p-419",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Indirect recursion "
},
{
  "id": "section-123",
  "level": "1",
  "url": "section-123.html",
  "type": "Section",
  "number": "13.4",
  "title": "Solving Problems with Recursion",
  "body": "Solving Problems with Recursion  The core idea behind recursive problem solving is formulate a solution strategy whose steps include a smaller version of the original problem.  A recursive method can be categorized into two cases : the base case and the recursive case .  The recursive case occurs when the recursive method invokes itself.  The base case is the condition that stops the recursion and begins to unwind the call stack.  "
},
{
  "id": "p-422",
  "level": "2",
  "url": "section-123.html#p-422",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cases base case recursive case "
},
{
  "id": "section-124",
  "level": "1",
  "url": "section-124.html",
  "type": "Section",
  "number": "13.5",
  "title": "Example: Computing Factorial",
  "body": "Example: Computing Factorial  Iterative solution  Recursive solution  "
},
{
  "id": "section-125",
  "level": "1",
  "url": "section-125.html",
  "type": "Section",
  "number": "13.6",
  "title": "Example: Computing Fibonacci Numbers",
  "body": "Example: Computing Fibonacci Numbers  Iterative solution  Recursive solution  Doubly recursive  "
},
{
  "id": "section-126",
  "level": "1",
  "url": "section-126.html",
  "type": "Section",
  "number": "13.7",
  "title": "Example: Drawing a Pyramid",
  "body": "Example: Drawing a Pyramid  Iterative solution  Recursive solution  "
},
{
  "id": "section-127",
  "level": "1",
  "url": "section-127.html",
  "type": "Section",
  "number": "13.8",
  "title": "Example: Building a Maze",
  "body": "Example: Building a Maze  Iterative solution  Recursive solution  "
},
{
  "id": "section-128",
  "level": "1",
  "url": "section-128.html",
  "type": "Section",
  "number": "13.9",
  "title": "Key Concepts",
  "body": "Key Concepts   The call stack is a data structure that tracks all currently executing methods.  A stack frame tracks each executing method on the call stack.  A stack frame contains all information about the associated method.  Stack frames are pushed on the top of the call stack when a method starts execution and popped off the top of the call stack when execution terminates.  When a method invokes itself, a new stack frame is added to the call stack so all instances of an executing method may be tracked.  The size of the call stack is limited. If an excessive number of methods are invoked, the call stack may overflow resulting in a StackOverflowError being thrown.  When a method (eventually) invokes itself during execution, the process is called recursion.  When a recursively invoked method returns, the method call resolves to the returned value.  Many algorithms may be implemented using recursion.  Most recursive algorithms have alternative iterative implementations that tend to be more efficient in terms of the amount of memory used.  Computing a factorial, the Fibonacci number, and the Greatest Common Divisor have elegant recursive implementations as well as iterative implementations.  Recursive programs may be divided into direct recursion and indirect recursion.  All recursive programs must have at least one base case and at least one recursive case.  The base case executes when the recursive algorithm has reached the end of execution and no further recursion is required.  A recursive case must move closer to the base case in some way to ensure the recursive program terminates.  There may be multiple base cases and multiple recursive cases in a recursive algorithm.   "
},
{
  "id": "exercises-18",
  "level": "1",
  "url": "exercises-18.html",
  "type": "Exercises",
  "number": "13.10",
  "title": "Exercises",
  "body": "Exercises  "
},
{
  "id": "section-129",
  "level": "1",
  "url": "section-129.html",
  "type": "Section",
  "number": "14.1",
  "title": "Searching and Sorting Algorithms",
  "body": "Searching and Sorting Algorithms  "
},
{
  "id": "section-130",
  "level": "1",
  "url": "section-130.html",
  "type": "Section",
  "number": "14.2",
  "title": "Sequential Search",
  "body": "Sequential Search  "
},
{
  "id": "section-131",
  "level": "1",
  "url": "section-131.html",
  "type": "Section",
  "number": "14.3",
  "title": "Binary Search",
  "body": "Binary Search  Iterative implementation  Recursive implementation  "
},
{
  "id": "section-132",
  "level": "1",
  "url": "section-132.html",
  "type": "Section",
  "number": "14.4",
  "title": "Selection Sort",
  "body": "Selection Sort  "
},
{
  "id": "section-133",
  "level": "1",
  "url": "section-133.html",
  "type": "Section",
  "number": "14.5",
  "title": "Insertion Sort",
  "body": "Insertion Sort  "
},
{
  "id": "section-134",
  "level": "1",
  "url": "section-134.html",
  "type": "Section",
  "number": "14.6",
  "title": "Merge Sort",
  "body": "Merge Sort  "
},
{
  "id": "section-135",
  "level": "1",
  "url": "section-135.html",
  "type": "Section",
  "number": "14.7",
  "title": "Complexity",
  "body": "Complexity  Worst case complexity (Big-Oh)  Best case complexity  Average case complexity  "
},
{
  "id": "section-136",
  "level": "1",
  "url": "section-136.html",
  "type": "Section",
  "number": "14.8",
  "title": "Key Concepts",
  "body": "Key Concepts   Algorithms are systematic ways of solving a given problem.  Two categories of algorithms include searching for a value and sorting a linear sequence of values.  Algorithms for searching include sequential search and binary search  Sequential search is ...  Binary search is ...  Three algorithms for sorting include selection sort, insertion sort, and merge sort.  Selection sort is ...  Insertion sort is ...  Merge sort is ...  The cost of an algorithm may be determined by mathematical analysis. This result of analysis in a mathematical expression that describes how cost grows with some respect to some input, such as the the size of the data structure processed.  How an algorithms grows is referred to as Big-Oh notation.   "
},
{
  "id": "exercises-19",
  "level": "1",
  "url": "exercises-19.html",
  "type": "Exercises",
  "number": "14.9",
  "title": "Exercises",
  "body": "Exercises  "
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
  "id": "table-19",
  "level": "2",
  "url": "appendix_ascii_table.html#table-19",
  "type": "Table",
  "number": "A.0.1",
  "title": "Americal Standard Code Information Interchange (ASCII)",
  "body": " Americal Standard Code Information Interchange (ASCII)    Decimal Code  Symbol  Description   0 NUL Null character  1 SOH Start of Heading  2 STX Start of Text  3 ETX End of Text  3 ETX End of Text  4 EOT End of Transmission  5 ENQ Enquiry  6 ACK Acknowledge  7 BEL Bell, Alert  8 BS Backspace  9 HT Horizontal Tab  10 LF Line Feed  11 VT Vertical Tabulation  12 FF Form Feed  13 CR Carriage Return  14 SO Shift Out  15 SI Shift In  16 DLE Data Link Escape  17 DC1 Device Control One (XON)  18 DC2 Device Control Two  19 DC3 Device Control Three (XOFF)  20 DC4 Device Control Four  21 NAK Negative Acknowledge  22 SYN Synchronous Idle  23 ETB End of Transmission Block  24 CAN Cancel  25 EM End of medium  26 SUB Substitute  27 ESC Escape  28 FS File Separator  29 GS Group Separator  30 RS Record Separator  31 US Unit Separator  32 SP Space  33 ! Exclamation mark  34 \" Double quotes (or speech marks)  35 # Number sign  36 $ Dollar  37 % Per cent sign  38 & Ampersand  39 ' Single quote  40 ( Open parenthesis (or open bracket)  41 ) Close parenthesis (or close bracket)  42 * Asterisk  43 + Plus  44 , Comma  45 - Hyphen-minus  46 . Period, dot or full stop  47 \/ Slash or divide  48 0 Zero  49 1 One  50 2 Two  51 3 Three  52 4 Four  53 5 Five  54 6 Six  55 7 Seven  56 8 Eight  57 9 Nine  58 : Colon  59 ; Semicolon  60 Less than (or open angled bracket)  61 = Equals  62 > Greater than (or close angled bracket)  63 ? Question mark  64 @ At sign  65 A Uppercase A  66 B Uppercase B  67 C Uppercase C  68 D Uppercase D  69 E Uppercase E  70 F Uppercase F  71 G Uppercase G  72 H Uppercase H  73 I Uppercase I  74 J Uppercase J  75 K Uppercase K  76 L Uppercase L  77 M Uppercase M  78 N Uppercase N  79 O Uppercase O  80 P Uppercase P  81 Q Uppercase Q  82 R Uppercase R  83 S Uppercase S  84 T Uppercase T  85 U Uppercase U  86 V Uppercase V  87 W Uppercase W  88 X Uppercase X  89 Y Uppercase Y  90 Z Uppercase Z  91 [ Opening bracket  92 \\ Backslash  93 ] Closing bracket  94 ^ Caret - circumflex  95 _ Underscore  96 ` Grave accent  97 a Lowercase a  98 b Lowercase b  99 c Lowercase c  100 d Lowercase d  101 e Lowercase e  102 f Lowercase f  103 g Lowercase g  104 h Lowercase h  105 i Lowercase i  106 j Lowercase j  107 k Lowercase k  108 l Lowercase l  109 m Lowercase m  110 n Lowercase n  111 o Lowercase o  112 p Lowercase p  113 q Lowercase q  114 r Lowercase r  115 s Lowercase s  116 t Lowercase t  117 u Lowercase u  118 v Lowercase v  119 w Lowercase w  120 x Lowercase x  121 y Lowercase y  122 z Lowercase z  123 { Opening brace  124 | Vertical bar  125 } Closing brace  126 ~ Equivalency sign - tilde  127 DEL Delete   "
},
{
  "id": "appendix-2",
  "level": "1",
  "url": "appendix-2.html",
  "type": "Appendix",
  "number": "B",
  "title": "Debugging",
  "body": " Debugging    Debugging is the process of identifying and correcting errors in a program  The simplest form of debugging a program involved hand tracing its statements and program flow.  Another form of debugging involves strategically placed print statements in a program that reveal its intermediate state during execution.  Java assertions are statement that evaluate an expression that should evaluate to true. An AssertionError is thrown when the expression evaluates to false.  A debugger is special software what allows you to step through a program and introspect its state and values between each step.    "
},
{
  "id": "appendix-testing",
  "level": "1",
  "url": "appendix-testing.html",
  "type": "Appendix",
  "number": "C",
  "title": "Testing",
  "body": " Testing   This is the introduction.   The Importance of Testing  The compiler tells us if we have syntax error s and the execution engine throws exceptions when something goes wrong while the program is running ( runtime errors ). How can we check when the program runs without error, but produces incorrect results ( logic errors )? The best way to check for logic errors is through testing.  A good test plan executes all paths through your source code and presents a wide range of possible inputs. It checks results produced to make sure all they are correct.   Java assertions and AssertionError  Java assertions and AssertionError   Unit Testing  Integration Testing  Key Concepts   Testing is an important part of software development during which time test cases are developed and run to ensure a program is correct.  Test cases should cover all behavior expected by a program. This is called test coverage.  Special testing situations include a boundary (edge) case, a corner case and a special case  Software testing includes unit testing and integration testing  During unit testing individual isolated parts (units) of a program are tested for correctness independently  During integration testing the interaction between software units is tested for correctness   Exercises   "
},
{
  "id": "p-442",
  "level": "2",
  "url": "appendix-testing.html#p-442",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "syntax error runtime errors logic errors "
},
{
  "id": "glossary",
  "level": "1",
  "url": "glossary.html",
  "type": "Glossary",
  "number": "",
  "title": "Glossary",
  "body": "  abstract-class  abstract class  An abstract class is    abstract-method  abstract method  An abstract method is    glossary-ascii  ASCII  American Standard Code for Information Interchange    base-class  base class  Also called a superclass    derived-class  derived class  Also called a subclass    doodlepad  DoodlePad  DoodlePad is an open source, precompiled Java library of interactive Java Shape classes. DoodlePad is built on Java Swing, and is designed as a learning tool. A key feature of DoodlePad is that the standard Swing infrastructure is unnecessary. DoodlePad automatically bootstraps and necessary infrastructure to create a fully functioning Swing program with as little as a Shape class instantiation. Custom methods may be invoked automatically when interacting with Shape objects. Linking a Shape with a custom method is accomplished with method references, not by implementing the required Swing interfaces. Interfaces is a topic that is not covered until the end of a standard CS1 progression. (See DoodlePad ).    dynamic-binding  dynamic binding  When a method of a derived class is invoked at runtime using a variable of type base class.    extends  extends  Keyword used to set up an inheritance relationship between classes    gc  Garbage Collection  ...    inheritance  inheritance  A relationship between two classes where one class may access the members of another class    instanceof  instanceof  The operator used to test of an object is the type of a class or one if its inherited base classes.    java  Java  The Java Programming Language is ...    jdk  JDK  The Java Development Kit (JDK) is ...    jre  JRE  The Java Runtime Environment (JRE) is ...    jshell  JShell  The Java Shell tool (JShell) is an interactive console for executing snippets using the Java programming language. When started in verbose mode, JShelll will evaluate Java code snippets and print the result as well as the result type.    jvm  JVM  The Java virtual machine (JVM) is an abstract computing machine that executes instructions from a well-defined standardized low-level instruction set. The JVM has been ported to a variety of computing platforms to abstract away platform-specific details making it possible to run the identical compiled Java and other JVM-based programs across platforms.    nullary-constructor  nullary constructor  A constructor having no parameters    object  Object  The class inherited by all Java classes.    OOP  object oriented programming  A style of computer programming that focusses on the design and use of objects. It it characterized by several principles, including encapsulation and polymorphism.    overload  overload  To define two or more methods in a class with a common name but a different signatures    override  override  To define a method in a derived class having the same signature as a method in one of its base classes.    pemdas  PEMDAS  An acronym for \"parentheses, exponents, multiplication, division, addition, subtraction.\" Indicats the order in which operations are performed when evaluating a mathematical expression.    polymorphism  polymorphism  A key concept in object oriented programming where one item may have many forms.    protected  protected  Visibility modifier allowing access only from a derived class.    shadowing  shadowing  When a variable declared in a local scope has the same name as a variable declared in an outer scope    string  String  A class provided by Java that encapsulates a sequence of characters.    super  super  Keyword use to set base class scope    signature  signature  A method's unique name and the number, type and order of its parameters.    glossary-unicode  UNICODE  An international standard for encoding characters that make up in most of the world's writing systems   "
},
{
  "id": "references",
  "level": "1",
  "url": "references.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " Fincher, Sally A and Robins, Anthony V, eds. (2019) The Cambridge Handbook of Computing Education Research . Cambridge University Press, Cambridge, UK, 906 pp. ISBN 978-1-108-65455-5. (doi:10.1017\/9781108654555)  Knuth, Donald E., Literate Programming . The Computer Journal , 1983, .  Fred Leise, Kate Mertes, Nan Badgett, Indexing for Editors and Authors: A Practical Guide to Understanding Indexes , American Society of Indexers, 2008  "
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
},
{
  "id": "section-137",
  "level": "1",
  "url": "section-137.html",
  "type": "Section",
  "number": "15.1",
  "title": "Visualizer",
  "body": " Visualizer   Visualize   "
},
{
  "id": "section-138",
  "level": "1",
  "url": "section-138.html",
  "type": "Section",
  "number": "15.2",
  "title": "Active Code",
  "body": " Active Code  Examples from https:\/\/github.com\/PreTeXtBook\/pretext\/blob\/master\/examples\/sample-book\/rune.xml  Python programs are made interactive in HTML, on request.   An interactive Python program, using Runestone   print(\"Hello, World!\")    A Java program will only be interactive if hosted on a Runestone server.   Informal Java Hello, World  A Java program, interactive on a Runestone server   \"hi\" in Java  import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }    Javascript programs are made interactive in HTML, on request.   An interactive JavaScript program, using Runestone   document.write('Hello, world!');    "
},
{
  "id": "program-activecode-python",
  "level": "2",
  "url": "section-138.html#program-activecode-python",
  "type": "Listing",
  "number": "15.2.1",
  "title": "",
  "body": " An interactive Python program, using Runestone   print(\"Hello, World!\")   "
},
{
  "id": "program-activecode-java",
  "level": "2",
  "url": "section-138.html#program-activecode-java",
  "type": "Listing",
  "number": "15.2.2",
  "title": "Informal Java “Hello, World”",
  "body": " Informal Java Hello, World  A Java program, interactive on a Runestone server   \"hi\" in Java  import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }   "
},
{
  "id": "program-activecode-javascript",
  "level": "2",
  "url": "section-138.html#program-activecode-javascript",
  "type": "Listing",
  "number": "15.2.3",
  "title": "",
  "body": " An interactive JavaScript program, using Runestone   document.write('Hello, world!');   "
},
{
  "id": "exercises-21",
  "level": "1",
  "url": "exercises-21.html",
  "type": "Exercises",
  "number": "15.3",
  "title": "Exercises",
  "body": " Exercises  True\/False The following integer literal is a long: 123L  The trailing type letter tells you the answer.  Multiple Choice What type of literal is 123L   int  long  float  double  The trailing type letter tells you the answer.  Parson's Problem Rearrange the statements so the output is 1, 2, 3 , in that order.  int i = 0;  while(i < 3) {  i++;  System.out.println(i);  }   Matching Match the definition with the term. This is feedback   A key concept in object oriented programming where one item may have many forms.  polymorphism    A method's unique name and the number, type and order of its parameters.  signature    To define two or more methods in a class with a common name but a different signatures  overloading    Keyword used to set up an inheritance relationship between classes  extends    To define a method in a derived class having the same signature as a method in one of its base classes.  overriding   This is a hint This is the answer This is the solution  Clickable Area Locate all the Java keywords in the following code snippet.  for ( int x=0; x<10; x++) {  System.out.println(\"Hello\");  }     Fill-In, Integer Answer  The game of bowling uses pins that you try to knock down. (This answer blank has been set to be very wide.)      Arranged in a triangle, there are pins, a so-called triangular number.      Close ! You may have used hexadecimal notation, when you did not really mean to.      Incorrect.      Fill-In, String and Number Answers  Complete the following line of a Python program so that it will declare an integer variable age with an initial value of 5 . (These two answer blanks have been set to be very short.)   age =  ;      A variable of type int is appropriate for whole number ages.      Remember that Java uses just the first three letters of the word integer to define an integral type.        An integer variable may be initialized to a value.      Use 5 as the initial value of the variable.      Fill-In, Case-Insensitive Answer  The word is the opposite of yes . (Try a mixture of upper and lower-case letters.)      The correct answers are no, No, nO, and NO.    Incorrect.     Fill-In, Decimal Answer  The decimal number is an approximation of to within three significant figures. ( Wikipedia ).       Any value in the interval is correct.      Incorrect. Did you provide three significant figures ?      Short Answer  This sample book is configured to make some simple questions interactive on a capable platform, by adding a <response> element as a signal.   "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "exercises-21.html#exercise-22",
  "type": "Exercise",
  "number": "15.3.1",
  "title": "True\/False.",
  "body": "True\/False The following integer literal is a long: 123L  The trailing type letter tells you the answer. "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "exercises-21.html#exercise-23",
  "type": "Exercise",
  "number": "15.3.2",
  "title": "Multiple Choice.",
  "body": "Multiple Choice What type of literal is 123L   int  long  float  double  The trailing type letter tells you the answer. "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "exercises-21.html#exercise-24",
  "type": "Exercise",
  "number": "15.3.3",
  "title": "Parson’s Problem.",
  "body": "Parson's Problem Rearrange the statements so the output is 1, 2, 3 , in that order.  int i = 0;  while(i < 3) {  i++;  System.out.println(i);  }  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "exercises-21.html#exercise-25",
  "type": "Exercise",
  "number": "15.3.4",
  "title": "Matching.",
  "body": "Matching Match the definition with the term. This is feedback   A key concept in object oriented programming where one item may have many forms.  polymorphism    A method's unique name and the number, type and order of its parameters.  signature    To define two or more methods in a class with a common name but a different signatures  overloading    Keyword used to set up an inheritance relationship between classes  extends    To define a method in a derived class having the same signature as a method in one of its base classes.  overriding   This is a hint This is the answer This is the solution "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "exercises-21.html#exercise-26",
  "type": "Exercise",
  "number": "15.3.5",
  "title": "Clickable Area.",
  "body": "Clickable Area Locate all the Java keywords in the following code snippet.  for ( int x=0; x<10; x++) {  System.out.println(\"Hello\");  }    "
},
{
  "id": "fillin-integer",
  "level": "2",
  "url": "exercises-21.html#fillin-integer",
  "type": "Exercise",
  "number": "15.3.6",
  "title": "Fill-In, Integer Answer.",
  "body": "Fill-In, Integer Answer  The game of bowling uses pins that you try to knock down. (This answer blank has been set to be very wide.)      Arranged in a triangle, there are pins, a so-called triangular number.      Close ! You may have used hexadecimal notation, when you did not really mean to.      Incorrect.     "
},
{
  "id": "fillin-string-integer",
  "level": "2",
  "url": "exercises-21.html#fillin-string-integer",
  "type": "Exercise",
  "number": "15.3.7",
  "title": "Fill-In, String and Number Answers.",
  "body": "Fill-In, String and Number Answers  Complete the following line of a Python program so that it will declare an integer variable age with an initial value of 5 . (These two answer blanks have been set to be very short.)   age =  ;      A variable of type int is appropriate for whole number ages.      Remember that Java uses just the first three letters of the word integer to define an integral type.        An integer variable may be initialized to a value.      Use 5 as the initial value of the variable.     "
},
{
  "id": "fillin-case-insensitive",
  "level": "2",
  "url": "exercises-21.html#fillin-case-insensitive",
  "type": "Exercise",
  "number": "15.3.8",
  "title": "Fill-In, Case-Insensitive Answer.",
  "body": "Fill-In, Case-Insensitive Answer  The word is the opposite of yes . (Try a mixture of upper and lower-case letters.)      The correct answers are no, No, nO, and NO.    Incorrect.    "
},
{
  "id": "fillin-decimal",
  "level": "2",
  "url": "exercises-21.html#fillin-decimal",
  "type": "Exercise",
  "number": "15.3.9",
  "title": "Fill-In, Decimal Answer.",
  "body": "Fill-In, Decimal Answer  The decimal number is an approximation of to within three significant figures. ( Wikipedia ).       Any value in the interval is correct.      Incorrect. Did you provide three significant figures ?     "
},
{
  "id": "short-answer-question",
  "level": "2",
  "url": "exercises-21.html#short-answer-question",
  "type": "Exercise",
  "number": "15.3.10",
  "title": "Short Answer.",
  "body": "Short Answer  This sample book is configured to make some simple questions interactive on a capable platform, by adding a <response> element as a signal.  "
},
{
  "id": "exercises-22",
  "level": "1",
  "url": "exercises-22.html",
  "type": "Exercises",
  "number": "15.4",
  "title": "Exercises",
  "body": "Exercises  Identify valid variables names  Order of Operations  Predict expression evaluation value and type Follow automatic promotions.  "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "exercises-22.html#exercise-32",
  "type": "Exercise",
  "number": "15.4.1",
  "title": "Identify valid variables names.",
  "body": "Identify valid variables names "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "exercises-22.html#exercise-33",
  "type": "Exercise",
  "number": "15.4.2",
  "title": "Order of Operations.",
  "body": "Order of Operations "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "exercises-22.html#exercise-34",
  "type": "Exercise",
  "number": "15.4.3",
  "title": "Predict expression evaluation value and type.",
  "body": "Predict expression evaluation value and type Follow automatic promotions. "
},
{
  "id": "exercises-23",
  "level": "1",
  "url": "exercises-23.html",
  "type": "Exercises",
  "number": "15.5",
  "title": "Exercises",
  "body": " Matching Drag the term on the left to the definition on the right.   Java Virtual Machine (JVM)  a platform independent utility responsible for executing compiled Java bytecode    Java Runtime Environment (JRE)  The minimum Java software required to run Java programs    Java Development Kit (JDK)  A suite of tools required to author Java programs    JShell  A tool for executing Java code snippets interactively    Matching Drag the OOP concept on the left to the definition on the right.  Matching OOP Terms  matching-oop   Drag each term on hte left to the definition on the right.    Encapsulation   Helps in organizing code, as the internal workings of an object are hidden from the outside, and it also provides data protection and security    Inheritance  Allows the creation of new classes based on existing classes. Promotes code reuse and supports the concept of hierarchical relationships between classes    Polymorphism  Among other things, allows objects of different classes to be treated as objects of a common superclass.    Abstraction  Focuses on capturing the essential features and behaviors of an object while hiding unnecessary details. Helps in designing complex systems by breaking them down into manageable and modular components.    "
},
{
  "id": "matching-java",
  "level": "2",
  "url": "exercises-23.html#matching-java",
  "type": "Exercise",
  "number": "15.5.1",
  "title": "Matching.",
  "body": "Matching Drag the term on the left to the definition on the right.   Java Virtual Machine (JVM)  a platform independent utility responsible for executing compiled Java bytecode    Java Runtime Environment (JRE)  The minimum Java software required to run Java programs    Java Development Kit (JDK)  A suite of tools required to author Java programs    JShell  A tool for executing Java code snippets interactively   "
},
{
  "id": "matching-oop",
  "level": "2",
  "url": "exercises-23.html#matching-oop",
  "type": "Exercise",
  "number": "15.5.2",
  "title": "Matching.",
  "body": "Matching Drag the OOP concept on the left to the definition on the right.  Matching OOP Terms  matching-oop   Drag each term on hte left to the definition on the right.    Encapsulation   Helps in organizing code, as the internal workings of an object are hidden from the outside, and it also provides data protection and security    Inheritance  Allows the creation of new classes based on existing classes. Promotes code reuse and supports the concept of hierarchical relationships between classes    Polymorphism  Among other things, allows objects of different classes to be treated as objects of a common superclass.    Abstraction  Focuses on capturing the essential features and behaviors of an object while hiding unnecessary details. Helps in designing complex systems by breaking them down into manageable and modular components.   "
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
