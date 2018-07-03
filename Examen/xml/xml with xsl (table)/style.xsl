<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>

        <body>
            <h1>Table</h1>
            <table border="2">
                <tr bgcolor="#0062ff">
                    <th>Full name</th>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
                <xsl:for-each select="students/student">
                    <tr>
                        <td>
                            <xsl:value-of select="full_name/second_name" />
                            <xsl:value-of select="full_name/first_name" />
                            <xsl:value-of select="full_name/last_name" />
                        </td>
                        <td>
                            <xsl:value-of select="score" />
                        </td>
                        <td>
                            <xsl:value-of select="date" />
                        </td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>

        </html>
    </xsl:template>
</xsl:stylesheet>
