var React = require('react');
var PropTypes = require('prop-types');


function ExamDetail (props) {

    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-11">
                    <button className="btn btn-secondary">Edit</button>
                    <button className="btn btn-danger" >Delete </button>
                    <button className="btn btn-dark" onClick={props.resetExamData}>Inchide fișa</button>
                    <hr/>
                <h4>Fișa consultatie din data: </h4> 
                    <strong><em>{props.props.dataConsultatie}</em></strong>
                    <hr/>    

                        <div className='card bg-light'>   

                                <label htmlFor="CNP" className='card-header'><strong>CNP Pacient:</strong></label>
                                    <div id="CNP" className='card-body'>{props.props.CNP}</div>

                                {typeof props.props['dataOP'] === 'string'
                                ?<div className='displayHere'><label htmlFor='dataOP' className='card-header'><strong>Data OP:</strong></label>
                                    <div id='dataOP' className='card-body'>{props.props.dataOP}</div></div>
                                : undefined}
                                
                                {typeof props.props['diagnostic'] === 'string'
                                ?<div className='displayHere'><label htmlFor='diagnostic' className='card-header'><strong>Diagnostic:</strong></label>
                                    <div id='diagnostic' className='card-body'>{props.props.diagnostic}</div></div>
                                : undefined}

                                {typeof props.props['medicamente'] === 'string'
                                ?<div className='displayHere'><label htmlFor='medicamente' className='card-header'><strong>Medicamente:</strong></label>
                                    <div id='medicamente' className='card-body'>{props.props.medicamente}</div></div>
                                : undefined}

                                {typeof props.props['interventii'] === 'string'
                                ?<div className='displayHere'><label htmlFor='interventii' className='card-header'><strong>Interventii:</strong></label>
                                    <div id='interventii' className='card-body'>{props.props.interventii}</div></div>
                                : undefined}
                                
                                {typeof props.props['motiveleConsultatiei'] === 'string'
                                ? <div className='displayHere'><label htmlFor="motiveleConsultatiei" className='card-header'><strong>Motivele Consultatiei:</strong></label>
                                 <div id="motiveleConsultatiei" className='card-body'>{props.props.motiveleConsultatiei}</div> </div>
                                : undefined}
                                
                                {typeof props.props['antecedenteHeredocolaterale'] === 'string'
                                ? <div className='displayHere'><label htmlFor='antecedenteHeredocolaterale' className='card-header'><strong>Antecedente Heredocolaterale:</strong></label>
                                    <div id='antecedenteHeredocolaterale' className='card-body'>{props.props.antecedenteHeredocolaterale}</div></div>
                                : undefined}

                                {typeof props.props['antecedenteHeredocolaterale'] === 'string'
                                ? <div className='displayHere'><label htmlFor='antecedentePersonalePatologice' className='card-header'><strong>Antecedente Personale Patologice:</strong></label>
                                    <div id='antecedentePersonalePatologice' className='card-body'>{props.props.antecedentePersonalePatologice}</div></div>
                                : undefined}

                                {typeof props.props['antecedenteHeredocolaterale'] === 'string'
                                ? <div className='displayHere'><label htmlFor='antecedenteGinecologice' className='card-header'><strong>Antecedente Ginecologice:</strong></label>
                                    <div id='antecedenteGinecologice' className='card-body'>{props.props.antecedenteGinecologice}</div></div>
                                : undefined}

                                {typeof props.props['antecedenteObstetricale'] === 'string'
                                ? <div className='displayHere'><label htmlFor='antecedenteObstetricale' className='card-header'><strong>Antecedente Obstetricale:</strong></label>
                                    <div id='antecedenteObstetricale' className='card-body'>{props.props.antecedenteObstetricale}</div></div>
                                : undefined}

                                {typeof props.props['nasterea'] === 'string'
                                ? <div className='displayHere'><label htmlFor='nasterea' className='card-header'><strong>Nastere:</strong></label>
                                    <div id='nasterea' className='card-body'>{props.props.nasterea}</div></div>
                                : undefined}

                                {typeof props.props['dateGenerale'] === 'string'
                                ? <div className='displayHere'><label htmlFor='dateGenerale' className='card-header'><strong>Date Generale:</strong></label>
                                    <div id='dateGenerale' className='card-body'>{props.props.dateGenerale}</div></div>
                                : undefined}

                                {typeof props.props['diverse'] === 'string'
                                ? <div className='displayHere'><label htmlFor='diverse' className='card-header'><strong>Diverse:</strong></label>
                                    <div id='diverse' className='card-body'>{props.props.diverse}</div></div>
                                : undefined}

                                {typeof props.props['statusGinecologic'] === 'string'
                                ? <div className='displayHere'><label htmlFor='statusGinecologic' className='card-header'><strong>Status Ginecologic:</strong></label>
                                    <div id='statusGinecologic' className='card-body'>{props.props.statusGinecologic}</div></div>
                                : undefined}

                                {typeof props.props['ecografie'] === 'string'
                                ? <div className='displayHere'><label htmlFor='ecografie' className='card-header'><strong>Ecografie:</strong></label>
                                    <div id='ecografie' className='card-body'>{props.props.ecografie}</div></div>
                                : undefined}

                                {typeof props.props['secretieVaginala'] === 'string'
                                ? <div className='displayHere'><label htmlFor='secretieVaginala' className='card-header'><strong>Secretie Vaginala:</strong></label>
                                    <div id='secretieVaginala' className='card-body'>{props.props.secretieVaginala}</div></div>
                                : undefined}
                                
                                {typeof props.props['testBabesPapanicolau'] === 'string'
                                ? <div className='displayHere'><label htmlFor='testBabesPapanicolau' className='card-header'><strong>Test Babes-Papanicolau:</strong></label>
                                    <div id='testBabesPapanicolau' className='card-body'>{props.props.testBabesPapanicolau}</div></div>
                                : undefined}

                                {typeof props.props['secretieCervicala'] === 'string'
                                ? <div className='displayHere'><label htmlFor='secretieCervicala' className='card-header'><strong>Secretie Cervicala:</strong></label>
                                    <div id='secretieCervicala' className='card-body'>{props.props.secretieCervicala}</div></div>
                                : undefined}

                                {typeof props.props['spermograma'] === 'string'
                                ? <div className='displayHere'><label htmlFor='spermograma' className='card-header'><strong>Spermograma:</strong></label>
                                    <div id='spermograma' className='card-body'>{props.props.spermograma}</div></div>
                                : undefined}
                                
                                {typeof props.props['curbaTermicaBazala'] === 'string'
                                ? <div className='displayHere'><label htmlFor='curbaTermicaBazala' className='card-header'><strong>Curba Termica Bazala:</strong></label>
                                    <div id='curbaTermicaBazala' className='card-body'>{props.props.curbaTermicaBazala}</div></div>
                                : undefined}

                                {typeof props.props['histeroSalpingoGrafie'] === 'string'
                                ? <div className='displayHere'><label htmlFor='histeroSalpingoGrafie' className='card-header'><strong>histeroSalpingoGrafie:</strong></label>
                                    <div id='histeroSalpingoGrafie' className='card-body'>{props.props.histeroSalpingoGrafie}</div></div>
                                : undefined}

                                {typeof props.props['gleraCervicala'] === 'string'
                                ? <div className='displayHere'><label htmlFor='gleraCervicala' className='card-header'><strong>Glera Cervicala:</strong></label>
                                    <div id='gleraCervicala' className='card-body'>{props.props.gleraCervicala}</div></div>
                                : undefined}

                                {typeof props.props['testPostCoital'] === 'string'   
                                ? <div className='displayHere'><label htmlFor='testPostCoital' className='card-header'><strong>Test Post-Coital:</strong></label>
                                    <div id='testPostCoital' className='card-body'>{props.props.testPostCoital}</div></div>
                                : undefined}

                                {typeof props.props['examenHistoPatologic'] === 'string' 
                                ? <div className='displayHere'><label htmlFor='examenHistoPatologic' className='card-header'><strong>Examen Histo-Patologic:</strong></label>
                                    <div id='examenHistoPatologic' className='card-body'>{props.props.examenHistoPatologic}</div></div>
                                : undefined}

                                {typeof props.props['examinariRecomandate'] === 'string'
                                ? <div className='displayHere'><label htmlFor='examinariRecomandate' className='card-header'><strong>Examinari Recomandate:</strong></label>
                                    <div id='examinariRecomandate' className='card-body'>{props.props.examinariRecomandate}</div></div>
                                : undefined}

                                {typeof props.props['climacteriu'] === 'string'
                                ? <div className='displayHere'><label htmlFor='climacteriu' className='card-header'><strong>Climacteriu:</strong></label>
                                    <div id='climacteriu' className='card-body'>{props.props.climacteriu}</div></div>
                                : undefined}

                                {typeof props.props['riscBeneficiu'] === 'string'
                                ? <div className='displayHere'><label htmlFor='riscBeneficiu' className='card-header'><strong>Risc Beneficiu:</strong></label>
                                    <div id='riscBeneficiu' className='card-body'>{props.props.riscBeneficiu}</div></div>
                                : undefined}

                                {typeof props.props['examinariParacliniceSolicitate'] === 'string'
                                ? <div className='displayHere'><label htmlFor='examinariParacliniceSolicitate' className='card-header'><strong>Examinari Paraclinice Solicitate:</strong></label>
                                    <div id='examinariParacliniceSolicitate' className='card-body'>{props.props.examinariParacliniceSolicitate}</div></div>
                                : undefined}

                                {typeof props.props['protocolOperator'] === 'string'
                                ? <div className='displayHere'><label htmlFor='protocolOperator' className='card-header'><strong>Protocol Operator:</strong></label>
                                    <div id='protocolOperator' className='card-body'>{props.props.protocolOperator}</div></div>
                                : undefined}

                                {typeof props.props['dataUltimeiMenstruatii'] === 'string' 
                                ? <div className='displayHere'><label htmlFor='dataUltimeiMenstruatii' className='card-header'><strong>Data Ultimei Menstruatii:</strong></label>
                                    <div id='dataUltimeiMenstruatii' className='card-body'>{props.props.dataUltimeiMenstruatii}</div></div>
                                : undefined}                                   
                                
                                    
                                                                        
                                                            
                        </div>
                    
                </div>
           </div>
        </div>
    )
}
//we need to filter the empty fields so we can only display the ones with information
ExamDetail.propTypes = {
    props: PropTypes.object.isRequired,
    resetExamData: PropTypes.func.isRequired
}


module.exports = ExamDetail;
