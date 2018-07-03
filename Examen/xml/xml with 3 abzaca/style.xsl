<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>

        <head>
            <title>Articles</title>
            <link rel="stylesheet" href="cssStyle.css"/>
        </head>

        <body>
            <h1>Текст</h1>

            <h2>ZAGOLOVOK</h2>
            <p class="p1">
                <xsl:value-of select="articles/article_1" />
            </p>
            <h2>ZAGOLOVOK</h2>
            <p class="p2">
                <xsl:value-of select="articles/article_2" />
            </p>
            <h2>ZAGOLOVOK</h2>
            <p class="p3">
                <xsl:value-of select="articles/article_3" />
            </p>
        </body>

        </html>
    </xsl:template>
</xsl:stylesheet>
