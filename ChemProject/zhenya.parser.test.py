import bs4
parserfile = open('parsertextfile.txt', 'w', encoding='utf-8')
helpfile = open('helpparserfile.txt', 'w', encoding='utf-8')
newresultfile = open('newres.txt', 'w', encoding='utf-8')
html_document = open('test.html', 'r', encoding='utf-8')
tables = bs4.BeautifulSoup(html_document, features='html.parser').find_all('table', 'wikitable')
result = str()

for htr in tables:
    for htd in htr:
        if str(type(htd)) == '<class \'bs4.element.Tag\'>':result += str(htd)

result = result.replace('<sub>', '')
result = result.replace('</sub>', '')

while '<' in result:
    result = result.replace(result[result.find('<'):result.find('>') + 1], '|')
    result = result.replace('\n', '')

while '||' in result:
    result = result.replace('||','|')

resultarr = result[1:].split('|')

for i in range(1,len(resultarr) + 1):
    if i % 3 == 0:
        resultarr[i] = ''

for i in resultarr:
    if i == '': resultarr.pop(resultarr.index(i))
        
resultarr = resultarr[3:]

newresultfile.write(str(resultarr))
parserfile.write(str(result))
helpfile.write(str(tables))
