<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<h2>Одногруппники</h2>
				<table border="1">
					<tr bgcolor="#9acd32">
						<th>ФИО</th>
						<th>Средний балл</th>
						<th>Год рождееия</th>
					</tr>
					<xsl:for-each select="group/groupmate">
						<xsl:sort select="data"/>
						<tr>
							<xsl:choose>
								<xsl:when test="score &lt; 6">
									<td bgcolor="#ff0000">
										<xsl:value-of select="full_name/s_name"/>
										<xsl:value-of select="full_name/f_name"/>
										<xsl:value-of select="full_name/l_name"/>
									</td>
								</xsl:when>
								<xsl:when test="score = 6">
									<td bgcolor="#008b00">
										<xsl:value-of select="full_name/s_name"/>
										<xsl:value-of select="full_name/f_name"/>
										<xsl:value-of select="full_name/l_name"/>
									</td>
								</xsl:when>
								<xsl:otherwise>
									<td>
										<xsl:value-of select="full_name/s_name"/>
										<xsl:value-of select="full_name/f_name"/>
										<xsl:value-of select="full_name/l_name"/>
									</td>
								</xsl:otherwise>
							</xsl:choose>
							<td>
								<xsl:value-of select="score"/>
							</td>
							<td>
								<xsl:value-of select="data"/>
							</td>
						</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
