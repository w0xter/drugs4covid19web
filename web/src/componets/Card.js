import React from 'react'
const images = require.context('../assets/', true);
export default function Card({data}){
    return(
        <div class="card fullCard">
            <img src={images('./'+data.source)} class="card-img-top img-fluid p-2"/>
            <div class="card-body text-left d-flex flex-column">
                <div className="mt-auto">
                <h5 class="card-title title pt-2 ">{data.step}) {data.title}</h5>
                <p class="card-text text-justify montserrat ">{data.content}</p>
                </div>
            </div>
            <div className="card-footer whiteBg">
                <button className="btn btn1 float-right" data-toggle="modal" data-target={"#modal-" + data.step}>¿Cómo funciona?</button>
            </div>
            <div class="modal fade" id={"modal-" + data.step} tabindex="-1" role="dialog" aria-labelledby={"modal-label-" + data.step} aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id={"modal-label-" + data.step}>{data.title}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>{data.content}</p>
                    <p className="text-justify">


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed urna at massa ultricies convallis sit amet sit amet lorem. Cras urna urna, venenatis at turpis vitae, eleifend scelerisque sem. Morbi feugiat et nisi a varius. Duis eget accumsan magna. Fusce blandit facilisis felis. Curabitur ut eros faucibus ante ultricies consequat. Donec ac iaculis enim. Nullam id quam gravida, elementum ante eget, dignissim magna. Proin lacinia arcu sed nulla sodales, in gravida nulla viverra. Suspendisse ut convallis augue.

Sed rutrum eu erat id pellentesque. Donec facilisis varius tortor, id lobortis dolor aliquet eu. In tincidunt eros at quam tempus ullamcorper. Morbi massa arcu, sodales quis turpis ut, dignissim gravida elit. In non ex ultricies, mollis nibh sed, venenatis eros. In vel augue porta, feugiat velit et, vulputate purus. In ut libero a ante elementum vehicula vitae ac velit. Duis posuere nulla a enim accumsan, non venenatis augue facilisis. Praesent dignissim, dolor id rhoncus auctor, lorem mi laoreet urna, a pellentesque lectus enim ac nibh. Sed semper consectetur eros, et fermentum tellus condimentum non. Vivamus bibendum dolor quis nunc varius, sit amet ullamcorper eros ultrices. Etiam vehicula ex nunc, ut tincidunt ex porttitor id.

Suspendisse sagittis eros mi, sit amet faucibus risus dignissim consequat. Phasellus in mattis massa. In id condimentum odio. Phasellus mattis orci non vulputate venenatis. Quisque velit mauris, viverra et elit eget, semper vestibulum lectus. Maecenas et laoreet dui, vitae dignissim massa. Phasellus accumsan, ante vel tincidunt gravida, dui est facilisis justo, a fringilla augue mi ut urna. Etiam dignissim, tortor eu venenatis auctor, felis diam maximus eros, et consectetur augue arcu id nulla. Suspendisse auctor non justo a euismod. Ut rhoncus accumsan orci in commodo. Curabitur semper turpis eleifend consequat malesuada. Donec quis eleifend ligula, quis tempor purus. Curabitur lobortis feugiat sapien, sed ornare elit tempor sed. Aliquam nec sagittis nisl. Duis accumsan ante neque, in pretium metus iaculis a. Vestibulum fringilla velit turpis.

Suspendisse porttitor cursus sem sed egestas. Praesent eget laoreet enim, ac euismod libero. Integer sed ante eu lectus tempus pulvinar. Curabitur eget ultricies arcu. Morbi eleifend mi et consequat hendrerit. Nulla nec ipsum iaculis, hendrerit erat sit amet, tempor velit. Integer diam est, vestibulum vitae tincidunt at, rhoncus non felis.

Suspendisse vel risus nec odio porta finibus vel sed sem. Praesent consectetur ullamcorper nibh ut euismod. Donec in tellus sit amet velit suscipit rhoncus id sed orci. Duis varius eleifend eros id vulputate. Proin a dolor sit amet metus dapibus iaculis. Sed est velit, tempus nec blandit vitae, iaculis ut turpis. Donec venenatis semper erat id sollicitudin. Ut in egestas ante. Vestibulum blandit nisl arcu. Ut congue lacus et justo egestas elementum. Ut semper venenatis justo, eleifend rhoncus elit elementum at. Nam dictum lectus dapibus neque porta aliquam. Phasellus aliquam magna ac sem tempus, id lacinia nibh hendrerit. Nulla molestie vehicula lectus, in dignissim justo. Maecenas rutrum, felis a ultrices aliquam, lectus felis molestie ante, quis suscipit leo dui at dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    </p>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
      </div>
    )
}