const blogs = {
        topics : [
            {
            title: 'What is SQLAlchemy?',
            content: 'SQLAlchemy is the Python SQL toolkit that allows developers to access and manage SQL databases using Pythonic domain language. You can write a query in the form of a string or chain Python objects for similar queries. Working with objects provides developers flexibility and allows them to build high-performance SQL-based applications. In simple words, it allows users to connect databases using Python language, run SQL queries using object-based programming, and streamline the workflow.',
            },
            {
                title: 'Install SQLAlchemy',
                content: "It is fairly easy to install the package and get started with coding. You can install SQLAlchemy using the Python Package Manager (pip): <strong>pip install sqlalchemy. In case, you are using the Anaconda distribution of Python, try to enter the command in conda terminal: conda install -c anaconda sqlalchemy. Let's check if the package is successfully installed: on Your terminal type this: sqlalchemy.__version__.",
            },
            {
                title: 'Getting Started' ,
                content: 'In this section, we will learn to connect SQLite databases, create table objects, and use them to run the SQL query. ',
            },
            {
                title: 'Connecting the database',
                content: 'We will be using the European Football SQLite database from Kaggle, and it has two tables: divisions and matchs.First, we will create SQLite engine objects using ‘create_object’ and pass the location address of the database. Then, we will create a connection object by connecting the engine. We will use the ‘conn’ object to run all types of SQL queries. "from sqlalchemy as db,  engine = db.create_engine("sqlite:///european_database.sqlite")", conn = engine.connect(). If you want to connect PostgreSQL, MySQL, Oracle, and Microsoft SQL Server databases, check out engine configuration for smooth connectivity to the server.',
            },
            {
                title: 'Accessing the table' ,
                content: 'To create a table object, we need to provide table names and metadata. You can produce metadata using SQLAlchemy’s `MetaData()` function. "metadata = db.MetaData() #extracting the metadata, division= db.Table("divisions", metadata, autoload=True, autoload_with=engine) #Table object".'
            },
            {
                title: 'Simple SQL query',
                content: 'Now comes the fun part. We will use the table object to run the query and extract the results. In the code below, we are selecting all of the columns for the “division” table. query = division.select() #SELECT * FROM divisions print(query)'
            },
            {
                title: 'SQL query result',
                content: 'We will now execute the query using the connection object and extract the first five rows. fetchone(): it will extract a single row at a time. fetchmany(n): it will extract the n number of rows at a time. fetchall(): it will extract all of the rows. '
            }
        ]
    };

export default blogs;
