
//throw

function sayMyName(name = ' ')
{
    if (name === ' ')
    {
        throw 'Nome é obrigatorio'
    }
    console.log(name)

}
try
{
    sayMyName ('Mayk')
}
catch (e)
{
    console.log(e)
}
console.log('apos ao try / catch')
