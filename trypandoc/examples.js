const examples = {
  ["Hello world"]:
    { text: '*Hello* world!',
      from: 'markdown',
      to: 'html5'},
  ["BibTeX to CSL JSON"]:
    { text: `@BOOK{Wurm2011-ho,
  title     = "{Substanz und Qualität : Ein Beitrag zur Interpretation der
               plotinischen Traktate VI,1, 2 und 3}",
  author    = "Wurm, Klaus",
  publisher = "De Gruyter",
  series    = "Quellen und Studien zur Philosophie",
  edition   = "Reprint 2011",
  year      =  2011,
  address   = "Berlin",
  keywords  = "!!! Plotinus translation",
  language  = "de"
}`,
      from: 'bibtex',
      to: 'csljson' },
  ["Markdown to Docbook with citations"]:
  { text: `---
references:
- author:
  - family: Salam
    given: Abdus
  container-title: "Elementary particle theory: Relativistic groups and
    analyticity. Proceedings of the eighth Nobel symposium"
  editor:
  - family: Svartholm
    given: Nils
  event-date: 1968-05-19/1968-05-25
  event-place: Aspenäsgarden, Lerum
  id: salam
  issued: 1968
  page: 367-377
  publisher: Almquist & Wiksell
  publisher-place: Stockholm
  title: Weak and electromagnetic interactions
  type: paper-conference
---

@salam [p. 370] says some interesting things.`,
    from: 'markdown',
    to: 'docbook5',
    standalone: true,
    citeproc: true,
    files: {} },
  ["MediaWiki to docx with equations"]:
  { text: `Just as the components of a vector change when we change the [[basis (linear algebra)|basis]] of the vector space, the components of a tensor also change under such a transformation.  Each type of tensor comes equipped with a ''transformation law'' that details how the components of the tensor respond to a [[change of basis]].  The components of a vector can respond in two distinct ways to a [[change of basis]] (see [[covariance and contravariance of vectors]]), where the new [[basis vectors]] <math>\\mathbf{\\hat{e}}_i</math> are expressed in terms of the old basis vectors <math>\\mathbf{e}_j</math> as,
:<math>\\mathbf{\\hat{e}}_i = \\sum_{j=1}^n \\mathbf{e}_j R^j_i = \\mathbf{e}_j R^j_i .</math>

Here ''R''<sup>'' j''</sup><sub>''i''</sub> are the entries of the change of basis matrix, and in the rightmost expression the [[summation]] sign was suppressed: this is the [[Einstein summation convention]], which will be used throughout this article.<ref group="Note">The Einstein summation convention, in brief, requires the sum to be taken over all values of the index whenever the same symbol appears as a subscript and superscript in the same term.  For example, under this convention <math>B_i C^i = B_1 C^1 + B_2 C^2 + \\cdots B_n C^n</math></ref>  The components ''v''<sup>''i''</sup> of a column vector '''v''' transform with the [[matrix inverse|inverse]] of the matrix ''R'',
:<math>\\hat{v}^i = \\left(R^{-1}\\right)^i_j v^j,</math>

where the hat denotes the components in the new basis.  This is called a ''contravariant'' transformation law, because the vector components transform by the ''inverse'' of the change of basis.  In contrast, the components, ''w''<sub>''i''</sub>, of a covector (or row vector), '''w''', transform with the matrix ''R'' itself,
:<math>\\hat{w}_i = w_j R^j_i .</math>`,
    from: 'mediawiki',
    to: 'docx',
    standalone: true },

  ["Man page to ConTeXt"]:
  { text: `.TP
\\f[C]-L\\f[R] \\f[I]SCRIPT\\f[R], \\f[C]--lua-filter=\\f[R]\\f[I]SCRIPT\\f[R]
Transform the document in a similar fashion as JSON filters (see
\\f[C]--filter\\f[R]), but use pandoc\\[cq]s built-in Lua filtering system.
The given Lua script is expected to return a list of Lua filters which
will be applied in order.
Each Lua filter must contain element-transforming functions indexed by
the name of the AST element on which the filter function should be
applied.
.RS
.PP
The \\f[C]pandoc\\f[R] Lua module provides helper functions for element
creation.
It is always loaded into the script\\[cq]s Lua environment.
.PP
See the Lua filters documentation for further details.
.PP
In order of preference, pandoc will look for Lua filters in
.IP "1." 3
a specified full or relative path,
.IP "2." 3
\\f[C]$DATADIR/filters\\f[R] where \\f[C]$DATADIR\\f[R] is the user data
directory (see \\f[C]--data-dir\\f[R], above).
.PP
Filters, Lua filters, and citeproc processing are applied in the order
specified on the command line.
.RE
.TP
\\f[C]-M\\f[R] \\f[I]KEY\\f[R][\\f[C]=\\f[R]\\f[I]VAL\\f[R]], \\f[C]--metadata=\\f[R]\\f[I]KEY\\f[R][\\f[C]:\\f[R]\\f[I]VAL\\f[R]]
Set the metadata field \\f[I]KEY\\f[R] to the value \\f[I]VAL\\f[R].
A value specified on the command line overrides a value specified in the
document using YAML metadata blocks.
Values will be parsed as YAML boolean or string values.
If no value is specified, the value will be treated as Boolean true.
Like \\f[C]--variable\\f[R], \\f[C]--metadata\\f[R] causes template
variables to be set.
But unlike \\f[C]--variable\\f[R], \\f[C]--metadata\\f[R] affects the
metadata of the underlying document (which is accessible from filters
and may be printed in some output formats) and metadata values will be
escaped when inserted into the template.`,
    from: 'man',
    to: 'context' },
  ["LaTeX with macros to reStructuredText"]:
  { text: `% from https://en.wikibooks.org/wiki/LaTeX/Macros
\\newcommand{\\wbalTwo}[2][Wikimedia]{
This is the Wikibook about LaTeX
supported by {#1} and {#2}!}

\\begin{itemize}
\\item \\wbalTwo{John Doe}
\\item \\wbalTwo[lots of users]{John Doe}
\\end{itemize}`,
    from: 'latex',
    to: 'rst',
    standalone: true,
    citeproc: false,
    files: {} },

  ["CSV table to org"]:
  { text: `"Year", "Score", "Title"
1968,  86, "Greetings"
1970,  17, "Bloody Mama"
1970,  73, "Hi, Mom!"
1971,  40, "Born to Win"
1973,  98, "Mean Streets"
1973,  88, "Bang the Drum Slowly"
1974,  97, "The Godfather, Part II"
1976,  41, "The Last Tycoon"
1976,  99, "Taxi Driver"`,
    from: 'csv',
    to: 'org' },

  ["Markdown citations to plain with CSL style"]:
  { text: `---
csl: 'le-tapuscrit-note.csl'
lang: fr-FR
bibliography: refs.bib
---

Foo [@legras_michel_2010].`,
    from: 'markdown',
    to: 'plain',
    citeproc: true,
    files: {
      ["refs.bib"]:
        `@book{legras_michel_2010,
  author = {Le~Gras, Gwénaëlle},
  publisher = {Scope},
  title = {Michel Simon~: l’art de la disgrâce},
  series = {Jeux d’acteurs},
  date = {2010},
  address = {Paris},
  isbn = {978-2-912573-52-0},
  langid = {fre}}`,
      ["le-tapuscrit-note.csl"]:
        `<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="note" default-locale="fr-FR" version="1.0" page-range-format="expanded">
  <info>
    <title>Le tapuscrit (École des hautes études en sciences sociales) (note, French)</title>
    <title-short>Tapuscrit-EHESS</title-short>
    <id>http://www.zotero.org/styles/le-tapuscrit-note</id>
    <link href="http://www.zotero.org/styles/le-tapuscrit-note" rel="self"/>
    <link href="http://www.editions.ehess.fr/ouvrages/ouvrage/le-tapuscrit/" rel="documentation"/>
    <author>
      <name>Franziska Heimburger</name>
      <email>zotero@franziska.fr</email>
    </author>
    <category citation-format="note"/>
    <category field="social_science"/>
    <category field="generic-base"/>
    <updated>2018-07-12T11:20:37+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <locale xml:lang="fr">
    <terms>
      <term name="ordinal-01">ère</term>
      <term name="ordinal-02">e</term>
      <term name="ordinal-03">e</term>
      <term name="ordinal-04">e</term>
      <term name="cited">op.&#160;cit.</term>
      <term name="page" form="short">p.</term>
      <term name="editor" form="short">
        <single>ed.</single>
        <multiple>eds.</multiple>
      </term>
      <term name="in">dans</term>
    </terms>
  </locale>
  <macro name="author">
    <choose>
      <if variable="author">
        <names variable="author">
          <name form="long" and="text" delimiter-precedes-last="never" sort-separator=" "/>
        </names>
      </if>
      <else-if variable="editor">
        <names variable="editor">
          <name form="long" and="text" delimiter-precedes-last="never" sort-separator=" "/>
          <label form="short" prefix="&#160;(" suffix=".)"/>
        </names>
      </else-if>
    </choose>
  </macro>
  <macro name="author-bib">
    <choose>
      <if variable="author">
        <names variable="author">
          <name name-as-sort-order="all" form="long" and="text" delimiter-precedes-last="never" sort-separator=" ">
            <name-part name="family" font-variant="small-caps"/>
          </name>
        </names>
      </if>
      <else-if variable="editor">
        <names variable="editor">
          <name name-as-sort-order="all" form="long" and="text" delimiter-precedes-last="never" sort-separator=" ">
            <name-part name="family" font-variant="small-caps"/>
          </name>
          <label form="short" prefix="&#160;(" suffix=".)"/>
        </names>
      </else-if>
    </choose>
  </macro>
  <macro name="author-ibid">
    <choose>
      <if variable="author">
        <names variable="author">
          <name and="text" initialize="true" initialize-with="." delimiter-precedes-last="never" sort-separator=" " font-style="normal"/>
        </names>
      </if>
      <else-if variable="editor">
        <names variable="editor">
          <name form="long" and="text" delimiter-precedes-last="never" sort-separator=" "/>
          <label form="short" prefix="&#160;(" suffix=".)"/>
        </names>
      </else-if>
    </choose>
  </macro>
  <macro name="editor">
    <names variable="editor">
      <name form="long" and="text" delimiter-precedes-last="never" sort-separator=" "/>
      <label form="short" prefix="&#160;(" suffix=".)"/>
    </names>
  </macro>
  <macro name="translator">
    <names variable="translator">
      <name form="long" and="text" delimiter-precedes-last="never" sort-separator=" " prefix=" traduit par "/>
    </names>
  </macro>
  <macro name="title">
    <choose>
      <if type="bill book graphic legal_case motion_picture report song" match="any">
        <text variable="title" text-case="capitalize-first" font-style="italic"/>
      </if>
      <else-if type="article-journal article-newspaper article-magazine" match="any">
        <group delimiter=", ">
          <text variable="title" text-case="capitalize-first" quotes="true"/>
          <text variable="container-title" font-style="italic"/>
        </group>
      </else-if>
      <else-if type="thesis" match="any">
        <group delimiter="">
          <text variable="title" text-case="capitalize-first" font-style="italic" suffix=","/>
          <text variable="genre" suffix=", " prefix=" "/>
          <text variable="publisher"/>
        </group>
      </else-if>
      <else-if type="manuscript" match="any">
        <group delimiter=",">
          <text variable="title" text-case="capitalize-first" font-style="italic"/>
          <text variable="genre" prefix=" [" suffix="]"/>
        </group>
      </else-if>
      <else-if type="chapter entry-dictionary entry-encyclopedia" match="any">
        <group delimiter="">
          <text variable="title" text-case="capitalize-first" quotes="true"/>
          <text value="dans" suffix=" " prefix=" "/>
          <text macro="editor" suffix=", "/>
          <text variable="container-title" text-case="capitalize-first" font-style="italic"/>
        </group>
      </else-if>
      <else-if type="webpage post-weblog" match="any">
        <group delimiter="">
          <text variable="title" text-case="capitalize-first" font-style="italic" suffix=", "/>
          <text variable="URL"/>
          <group prefix=" , ">
            <date variable="issued">
              <date-part name="day" suffix=" "/>
              <date-part name="month" suffix=" "/>
              <date-part name="year"/>
            </date>
          </group>
        </group>
      </else-if>
      <else>
        <text variable="title" quotes="true"/>
      </else>
    </choose>
  </macro>
  <macro name="pub-place">
    <choose>
      <if type="bill book chapter entry-dictionary entry-encyclopedia thesis graphic legal_case manuscript motion_picture paper-conference report song" match="any">
        <choose>
          <if variable="publisher-place" match="any">
            <text variable="publisher-place"/>
          </if>
          <else>
            <text value="s.l."/>
          </else>
        </choose>
      </if>
    </choose>
  </macro>
  <macro name="publisher">
    <choose>
      <if type="bill book chapter entry-dictionary entry-encyclopedia graphic legal_case motion_picture paper-conference report song" match="any">
        <text variable="publisher"/>
      </if>
    </choose>
  </macro>
  <macro name="yearpage">
    <choose>
      <if type="bill book graphic legal_case motion_picture paper-conference manuscript report song thesis" match="any">
        <group delimiter=", ">
          <date variable="issued">
            <date-part name="year"/>
          </date>
          <group>
            <text term="volume" form="short" suffix="."/>
            <text variable="number-of-volumes" prefix=". " suffix="/"/>
            <text variable="volume"/>
          </group>
          <choose>
            <if variable="locator" match="any">
              <group delimiter="&#8239;">
                <label variable="locator" form="short"/>
                <text variable="locator"/>
              </group>
            </if>
            <else-if variable="locator" match="none">
              <text variable="number-of-pages" suffix="&#160;p"/>
            </else-if>
          </choose>
        </group>
      </if>
      <else-if type="chapter entry-dictionary entry-encyclopedia" match="any">
        <group delimiter=" ">
          <date variable="issued">
            <date-part name="year" suffix=", "/>
          </date>
          <group>
            <text term="volume" form="short" suffix="."/>
            <text variable="number-of-volumes" prefix=". " suffix="/"/>
            <text variable="volume" suffix=","/>
          </group>
          <choose>
            <if variable="locator" match="any">
              <group delimiter="&#8239;">
                <label variable="locator" form="short"/>
                <text variable="locator"/>
              </group>
            </if>
            <else-if variable="locator" match="none">
              <label variable="page" form="short"/>
              <text variable="page"/>
            </else-if>
          </choose>
        </group>
      </else-if>
      <else-if type="article-journal" match="any">
        <group delimiter=" " font-style="normal">
          <choose>
            <if variable="locator" match="any">
              <group delimiter="&#8239;">
                <label variable="locator" form="short"/>
                <text variable="locator"/>
              </group>
            </if>
            <else-if variable="locator" match="none">
              <label variable="page" form="short"/>
              <text variable="page"/>
            </else-if>
          </choose>
        </group>
      </else-if>
      <else-if type="article-newspaper article-magazine" match="any">
        <date variable="issued">
          <date-part name="day" suffix=" "/>
          <date-part name="month" form="short" suffix=" "/>
          <date-part name="year"/>
        </date>
        <group delimiter=" " font-style="normal">
          <label variable="page" form="short"/>
          <text variable="page"/>
        </group>
        <group delimiter=" " font-style="normal">
          <choose>
            <if variable="locator" match="any">
              <group delimiter="&#8239;">
                <label variable="locator" form="short"/>
                <text variable="locator"/>
              </group>
            </if>
            <else-if variable="locator" match="none">
              <label variable="page" form="short"/>
            </else-if>
          </choose>
        </group>
      </else-if>
      <else-if type="webpage post-weblog" match="any">
        <group delimiter=" " prefix="(" suffix=")">
          <text value="consulté le" suffix=" " prefix=" "/>
          <date variable="accessed" form="text">
            <date-part name="day"/>
            <date-part name="month"/>
            <date-part name="year"/>
          </date>
        </group>
      </else-if>
    </choose>
  </macro>
  <macro name="yearpage-bib">
    <choose>
      <if type="bill book graphic legal_case motion_picture paper-conference report song thesis" match="any">
        <group delimiter=", ">
          <group delimiter=", ">
            <date variable="issued">
              <date-part name="year"/>
            </date>
            <group>
              <text term="volume" form="short" suffix="."/>
              <text variable="number-of-volumes" prefix=". " suffix="/"/>
              <text variable="volume"/>
            </group>
            <text variable="number-of-pages" suffix="&#160;p"/>
          </group>
          <group>
            <label variable="locator" form="short"/>
            <text variable="locator"/>
          </group>
        </group>
      </if>
      <else-if type="chapter entry-dictionary entry-encyclopedia" match="any">
        <group delimiter=", ">
          <date variable="issued">
            <date-part name="year"/>
          </date>
          <group>
            <text term="volume" form="short" suffix="."/>
            <text variable="number-of-volumes" prefix=". " suffix="/"/>
            <text variable="volume"/>
          </group>
          <group>
            <label variable="page" form="short"/>
            <text variable="page" prefix="&#160;"/>
          </group>
        </group>
      </else-if>
      <else-if type="article-journal chapter" match="any">
        <group delimiter=" ">
          <label variable="page" form="short"/>
          <text variable="page"/>
        </group>
      </else-if>
      <else-if type="article-newspaper article-magazine" match="any">
        <group delimiter=" ">
          <date variable="issued">
            <date-part name="day" suffix=" "/>
            <date-part name="month" form="short" suffix=" "/>
            <date-part name="year"/>
          </date>
          <label variable="page" form="short"/>
          <text variable="page"/>
        </group>
      </else-if>
      <else-if type="manuscript">
        <group delimiter="" font-style="normal">
          <choose>
            <if variable="issued">
              <date variable="issued">
                <date-part name="day" suffix=" "/>
                <date-part name="month" suffix=" "/>
                <date-part name="year"/>
              </date>
            </if>
            <else>
              <text value="s. d."/>
            </else>
          </choose>
        </group>
      </else-if>
      <else-if type="webpage post-weblog" match="any">
        <group delimiter=" ">
          <text value="consulté le" suffix=" " prefix=" "/>
          <date variable="accessed" form="text">
            <date-part name="day"/>
            <date-part name="month"/>
            <date-part name="year"/>
          </date>
        </group>
      </else-if>
    </choose>
  </macro>
  <macro name="edition">
    <choose>
      <if type="bill book graphic legal_case motion_picture report song chapter paper-conference" match="any">
        <choose>
          <if is-numeric="edition">
            <group delimiter=" ">
              <number variable="edition" form="ordinal"/>
              <text term="edition" form="short"/>
            </group>
          </if>
          <else>
            <text variable="edition" text-case="capitalize-first" suffix="."/>
          </else>
        </choose>
      </if>
      <else-if type="article-journal article-magazine" match="any">
        <group delimiter="">
          <choose>
            <if variable="issued">
              <date variable="issued">
                <date-part name="day" suffix=" "/>
                <date-part name="month" suffix=" "/>
                <date-part name="year"/>
              </date>
              <text macro="volume" prefix=", "/>
            </if>
            <else>
              <text macro="volume" text-case="capitalize-first"/>
            </else>
          </choose>
        </group>
      </else-if>
    </choose>
    <text macro="issue" prefix=", "/>
  </macro>
  <macro name="volume">
    <choose>
      <if is-numeric="volume">
        <text term="volume" form="short" suffix=".&#160;"/>
        <text variable="volume"/>
      </if>
      <else>
        <text variable="volume"/>
      </else>
    </choose>
  </macro>
  <macro name="issue">
    <choose>
      <if is-numeric="issue">
        <text term="issue" form="short" suffix="&#160;"/>
        <text variable="issue"/>
      </if>
      <else>
        <text variable="issue"/>
      </else>
    </choose>
  </macro>
  <macro name="collection">
    <text variable="collection-title" quotes="true" prefix=" (coll.&#160;" suffix=")"/>
  </macro>
  <citation et-al-min="4" et-al-use-first="1">
    <layout suffix="." delimiter="&#160;; ">
      <choose>
        <if position="ibid-with-locator">
          <group delimiter=", ">
            <text term="ibid" text-case="capitalize-first" font-style="italic" suffix="."/>
            <text variable="locator" prefix="p.&#160;"/>
          </group>
        </if>
        <else-if position="ibid">
          <text term="ibid" text-case="capitalize-first" font-style="italic"/>
        </else-if>
        <else-if position="subsequent">
          <group delimiter=", ">
            <text macro="author-ibid"/>
            <choose>
              <if type="bill book graphic legal_case motion_picture report song thesis manuscript" match="any">
                <text variable="title" form="short" font-style="italic"/>
                <text term="cited" font-style="italic" suffix="."/>
              </if>
              <else>
                <text variable="title" text-case="capitalize-first" form="short" quotes="true"/>
                <text value="art cit"/>
              </else>
            </choose>
            <text variable="locator" prefix="p.&#160;"/>
          </group>
        </else-if>
        <else>
          <choose>
            <if type="manuscript">
              <group delimiter=", ">
                <text variable="archive"/>
                <text variable="archive_location"/>
                <text variable="call-number"/>
                <text macro="title"/>
                <text macro="yearpage-bib"/>
              </group>
            </if>
            <else-if type="bill chapter article-journal article-newspaper interview book graphic legal_case motion_picture paper-conference report song thesis webpage post-weblog article-magazine" match="any">
              <group delimiter=", ">
                <text macro="author"/>
                <text macro="title"/>
                <text macro="translator"/>
                <text macro="edition"/>
                <text macro="pub-place"/>
                <text macro="publisher"/>
                <text macro="yearpage"/>
              </group>
            </else-if>
          </choose>
        </else>
      </choose>
    </layout>
  </citation>
  <bibliography>
    <sort>
      <key macro="author" names-min="3" names-use-first="3"/>
      <key variable="issued" sort="descending"/>
    </sort>
    <layout suffix=".">
      <choose>
        <if type="manuscript">
          <group delimiter=", ">
            <text variable="archive"/>
            <text variable="archive_location"/>
            <text variable="call-number"/>
            <text macro="title"/>
            <text macro="yearpage-bib"/>
          </group>
        </if>
        <else-if type="bill chapter article-journal article-newspaper interview book graphic legal_case motion_picture paper-conference report song thesis webpage post-weblog article-magazine" match="any">
          <group delimiter=", ">
            <text macro="author-bib"/>
            <text macro="title"/>
            <text macro="translator"/>
            <text macro="edition"/>
            <text macro="pub-place"/>
            <group delimiter=" ">
              <text macro="publisher"/>
              <text macro="collection"/>
            </group>
            <text macro="yearpage-bib"/>
          </group>
        </else-if>
      </choose>
    </layout>
  </bibliography>
</style>` }
    }
}


