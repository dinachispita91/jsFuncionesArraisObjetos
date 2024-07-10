console.log(`euros 💵💵💵💵💵`)

function dinero(importe) {
    let sinComa = importe*100
    let cents = sinComa%100
    let euros=(sinComa-cents)/100

    console.log(`tu saldo  es  ${euros} euros con   ${cents} centimos` )
}



dinero(452.76 )


