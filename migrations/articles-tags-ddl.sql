CREATE TABLE articles_tags (
    id int(10) unsigned NOT NULL AUTO_INCREMENT,
    article_id int(10) unsigned NOT NULL,
    tag_id int(10) unsigned NOT NULL,
    
    PRIMARY KEY(id),
    UNIQUE KEY tags_articles_unique (article_id, tag_id),
    

    FOREIGN KEY(tag_id) REFERENCES tags (id) ON DELETE CASCADE,
    
    FOREIGN KEY(article_id) REFERENCES articles (id) ON DELETE CASCADE
) ENGINE=INNODB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;