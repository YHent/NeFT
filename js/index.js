function header() {
    let height = $('.container-fluid').scrollTop();
    if(height > 1){
        document.getElementById("nav").style.backgroundColor = '#00000073';
        $('.link-secondary').attr('style', 'color: #fff !important');
        $('#nav > a').html(`
            <svg xmlns="http://www.w3.org/2000/svg" width="105.285" height="28.948" viewBox="0 0 105.285 28.948">
                <g id="그룹_217" data-name="그룹 217" transform="translate(-100 -44.052)">
                    <g id="그룹_202" data-name="그룹 202" transform="translate(100 44.052)">
                        <path id="패스_77" data-name="패스 77"
                            d="M128.1,585.646h5.322l14.267,17.17V585.3h6.387v28.561h-5.322l-14.28-17.17V614.22H128.1Z"
                            transform="translate(-128.1 -585.3)" fill="#fff" />
                        <path id="패스_78" data-name="패스 78" d="M734.153,593.74h-9.29v22.921H718.49V593.74H709.2V588.1h24.953Z"
                            transform="translate(-628.868 -587.713)" fill="#fff" />
                        <g id="그룹_200" data-name="그룹 200" transform="translate(56.817 0.387)">
                            <path id="패스_79" data-name="패스 79" d="M539.1,675.5v16.479h6.373V681.044H558.44V675.5H539.1Z"
                                transform="translate(-539.1 -663.418)" fill="#fff" />
                            <path id="패스_80" data-name="패스 80" d="M539.1,588.1v5.6h20.958v-5.6Z"
                                transform="translate(-539.1 -588.1)" fill="#fff" />
                        </g>
                        <g id="그룹_201" data-name="그룹 201" transform="translate(30.98 0.387)">
                            <path id="패스_81" data-name="패스 81" d="M358.587,593.63h14.861V588.1h-15.7l-5.543,5.53Z"
                                transform="translate(-352.2 -588.1)" fill="#fff" />
                            <path id="패스_82" data-name="패스 82" d="M372.217,675.744V670.2H352.2v5.544h20.017Z"
                                transform="translate(-352.2 -658.85)" fill="#fff" />
                            <path id="패스_83" data-name="패스 83" d="M358.587,754.6H352.2v5.543h21.566V754.6Z"
                                transform="translate(-352.2 -731.583)" fill="#fff" />
                        </g>
                    </g>
                    <path id="패스_84" data-name="패스 84" d="M358.03,587.8v5.543H352.5Z" transform="translate(-221.479 -543.402)"
                        fill="#ffa943" />
                </g>
            </svg>
        `);
    } else {
            document.getElementById("nav").style.backgroundColor = 'transparent';
            $('.link-secondary').attr('style', 'color: #565e64 !important');
        if (page=="notice" || page=="weare") {
            $('#nav > a').html(`
                <svg xmlns="http://www.w3.org/2000/svg" width="111.223" height="30.543" viewBox="0 0 111.223 30.543">
                    <g id="그룹_206" data-name="그룹 206" transform="translate(8746 523.869)">
                        <g id="그룹_204" data-name="그룹 204" transform="translate(-8746 -523.869)">
                            <path id="패스_69" data-name="패스 69"
                                d="M128.1,205.665h5.621L148.788,223.8V205.3h6.745v30.164h-5.621L134.831,217.33v18.513H128.1Z"
                                transform="translate(-128.1 -205.3)" fill="#020a38" />
                            <path id="패스_70" data-name="패스 70"
                                d="M735.753,213.857h-9.811v24.207h-6.731V213.857H709.4V207.9h26.353Z"
                                transform="translate(-624.53 -207.52)" fill="#020a38" />
                            <g id="그룹_198" data-name="그룹 198" transform="translate(60.035 0.365)">
                                <path id="패스_71" data-name="패스 71"
                                    d="M539.3,295.3v17.4h6.745V301.155H559.74V295.3H539.3Z"
                                    transform="translate(-539.3 -282.525)" fill="#020a38" />
                                <path id="패스_72" data-name="패스 72" d="M539.3,207.8v5.928h22.134V207.8Z"
                                    transform="translate(-539.3 -207.8)" fill="#020a38" />
                            </g>
                            <g id="그룹_199" data-name="그룹 199" transform="translate(32.762 0.365)">
                                <path id="패스_73" data-name="패스 73" d="M359.231,213.655h15.7V207.8H358.34l-5.84,5.855Z"
                                    transform="translate(-352.5 -207.8)" fill="#020a38" />
                                <path id="패스_74" data-name="패스 74" d="M373.626,295.84V290H352.5v5.84h21.126Z"
                                    transform="translate(-352.5 -277.999)" fill="#020a38" />
                                <path id="패스_75" data-name="패스 75" d="M359.231,374.4H352.5v5.855h22.761V374.4Z"
                                    transform="translate(-352.5 -350.076)" fill="#020a38" />
                            </g>
                        </g>
                        <path id="패스_85" data-name="패스 85" d="M358.367,207.8v5.853H352.5Z"
                            transform="translate(-9065.77 -731.3)" fill="#ffa943" />
                    </g>
                </svg>
            `);
        }
        
    }
    //
}