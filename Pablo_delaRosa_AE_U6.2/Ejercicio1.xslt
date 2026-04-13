<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8"/>
                <title>Blog de la Escuela - <xsl:value-of select="escuela/sedes/sede/nombre"/></title>
                <style>
                    /* Estilos para simular un Blog moderno */
                    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f7f9; color: #333; margin: 0; }
                    header { background-color: #2c3e50; color: white; padding: 60px 20px; text-align: center; }
                    .main-container { max-width: 850px; margin: -40px auto 40px; padding: 0 20px; }
                    
                    /* Estilo de cada Post (Ciclo) */
                    .blog-post { background: white; border-radius: 8px; padding: 30px; margin-bottom: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-top: 6px solid #3498db; }
                    .post-category { color: #3498db; font-weight: bold; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }
                    h2 { margin: 10px 0; color: #2c3e50; font-size: 2rem; }
                    .post-meta { font-size: 0.9rem; color: #7f8c8d; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #eee; }
                    
                    /* Estilo de las Asignaturas (Contenido del post) */
                    .subject-card { background: #f9f9f9; border: 1px solid #edf2f7; border-left: 4px solid #2ecc71; padding: 15px; margin: 10px 0; border-radius: 4px; }
                    .subject-name { font-weight: bold; color: #2d3748; }
                    .course-tag { background: #edf2f7; color: #4a5568; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; margin-left: 10px; }
                    .requirement { color: #e53e3e; font-size: 0.85rem; margin-top: 5px; font-style: italic; }
                    
                    footer { text-align: center; padding: 40px; background: #2c3e50; color: #bdc3c7; margin-top: 50px; }
                </style>
            </head>
            <body>

                <header>
                    <h1>Blog Académico: <xsl:value-of select="escuela/sedes/sede/nombre"/></h1>
                    <p>Ubicación: <xsl:value-of select="escuela/sedes/sede/ubicacion"/></p>
                </header>

                <div class="main-container">
                    <xsl:for-each select="escuela/ciclos/ciclo">
                        <article class="blog-post">
                            <span class="post-category">Formación Profesional</span>
                            <h2><xsl:value-of select="nombre"/></h2>
                            <div class="post-meta">
                                Código del programa: <strong><xsl:value-of select="codigo"/></strong> | 
                                Sede: <xsl:value-of select="/escuela/sedes/sede/nombre"/>
                            </div>

                            <p>Explora las asignaturas clave que forman parte de este itinerario educativo:</p>

                            <div class="content">
                                <xsl:for-each select="asignaturas/asignatura">
                                    <div class="subject-card">
                                        <span class="subject-name"><xsl:value-of select="nombre"/></span>
                                        <span class="course-tag"><xsl:value-of select="curso"/>º CURSO</span>
                                        
                                        <xsl:if test="pre-requisito">
                                            <div class="requirement">
                                                ⚠ Importante: Requiere haber cursado <xsl:value-of select="pre-requisito"/>.
                                            </div>
                                        </xsl:if>
                                    </div>
                                </xsl:for-each>
                            </div>
                        </article>
                    </xsl:for-each>
                </div>

                <footer>
                    <p>© 2026 Escuela de Desarrollo - Generado vía XSLT (U6.4)</p>
                </footer>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>