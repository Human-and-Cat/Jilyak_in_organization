<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>

		<body>
			<h2>Универы со спец ПОИТ</h2>
			<table border="1">
				<tr bgcolor="#9acd32">
					<th>Универ</th>
					<th>Б/Пл</th>
					<th>Набор</th>
					<th>Город</th>
				</tr>
				<xsl:for-each select="SPECIALIZATION/POIT">
					<tr>
						<td>
							<xsl:value-of select="UNIVERSITY" />
						</td>
						<td>
							<xsl:value-of select="PASSING/BUDGET" />/
							<xsl:value-of select="PASSING/PAY" />
						</td>
						<td>
							<xsl:value-of select="PAGES" />
						</td>
						<td>
							<xsl:value-of select="CITY" />
						</td>
					</tr>
				</xsl:for-each>
			</table>
		</body>

		</html>
	</xsl:template>
</xsl:stylesheet>
