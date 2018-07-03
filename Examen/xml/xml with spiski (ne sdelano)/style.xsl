<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>

        <body>
            <h1>spisok</h1>
            <ul>
                <xsl:for-each select="ul/li">
                    <li>
                        <xsl:value-of select="li[1]" />
                    </li>
                </xsl:for-each>
            </ul>
        </body>

        </html>
    </xsl:template>
</xsl:stylesheet>
