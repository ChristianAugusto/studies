def tag_bloco(texto, classe='success', inline=False): # classe possui um valor padrão
    tag = 'span' if inline else 'div'
    return f'<{tag} class="{classe}">{texto}</{tag}>'


print(tag_bloco('bloco'))
print(tag_bloco('inline e classe', 'info', True))
print(tag_bloco('inline', inline=True))