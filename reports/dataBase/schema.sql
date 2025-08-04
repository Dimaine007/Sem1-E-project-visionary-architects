-- schema.sql

-- Drop tables if they exist
DROP TABLE IF EXISTS projects, project_categories, team_members, contact_messages, blog_posts, services, site_settings;

-- Table: Project Categories
CREATE TABLE project_categories (
                                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                                    name TEXT NOT NULL UNIQUE
);

-- Table: Projects
CREATE TABLE projects (
                          id INTEGER PRIMARY KEY AUTOINCREMENT,
                          title TEXT NOT NULL,
                          description TEXT,
                          category_id INTEGER,
                          location TEXT,
                          year_completed INTEGER,
                          image_url TEXT,
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          FOREIGN KEY (category_id) REFERENCES project_categories(id)
);

-- Table: Team Members
CREATE TABLE team_members (
                              id INTEGER PRIMARY KEY AUTOINCREMENT,
                              name TEXT NOT NULL,
                              role TEXT,
                              bio TEXT,
                              photo_url TEXT
);

-- Table: Services
CREATE TABLE services (
                          id INTEGER PRIMARY KEY AUTOINCREMENT,
                          title TEXT NOT NULL,
                          description TEXT
);

-- Table: Blog Posts
CREATE TABLE blog_posts (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            title TEXT NOT NULL,
                            content TEXT,
                            author TEXT,
                            published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                            cover_image_url TEXT
);

-- Table: Contact Messages
CREATE TABLE contact_messages (
                                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                                  name TEXT NOT NULL,
                                  email TEXT NOT NULL,
                                  message TEXT NOT NULL,
                                  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: Site Settings (for things like footer, company info, etc.)
CREATE TABLE site_settings (
                               id INTEGER PRIMARY KEY AUTOINCREMENT,
                               key TEXT NOT NULL UNIQUE,
                               value TEXT
);