<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>

        <body>
            <h1>Table</h1>
            <table border="1">
                <tr bgcolor="#00fff5">
                    <th>Group</th>
                    <th>Full name</th>
                    <th>Math</th>
                    <th>Chemestry</th>
                    <th>K'ar</th>
                </tr>
                <xsl:for-each select="students/student">
                    <tr>
                        <td>
                            <xsl:value-of select="group" />
                        </td>
                        <td>
                            <xsl:value-of select="full_name/second_name" />
                            <xsl:value-of select="full_name/first_name" />
                            <xsl:value-of select="full_name/last_name" />
                        </td>
                        <td>
                            <xsl:value-of select="math" />
                        </td>
                        <td>
                            <xsl:value-of select="chemestry" />
                        </td>
                        <td>
                            <xsl:value-of select="kar" />
                        </td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>

        </html>
    </xsl:template>
</xsl:stylesheet>
