chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
});

function onMessage(doit) {
  console.log(`onMessage(${doit})`)
  if (doit) {
    unveil()
  }
}

const SP_VEIL_PREFIX = 'modal_overlay'
const SP_MESSAGE_CONTAINER_PREFIX = 'sp_message_container'

function unveil() {
  console.log('unveil started')
  const veilElems = document.querySelectorAll('.modal_overlay')
  for(const veilElem of veilElems) {
    if(veilElem.id === '') {
      veilElem.parentElement.remove()
    }
  }

  console.log('veil removed')
  console.log('unveil finished')
}
