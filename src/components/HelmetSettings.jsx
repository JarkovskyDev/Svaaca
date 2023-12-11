import React from 'react'
import {Helmet} from "react-helmet";

const HelmetSettings = () => {
  return (
    <div>
        <Helmet>
            <html lang="cs" />
            <title>Svááča</title>
            <meta name="description" content="Místo, kde dostanete svááču jako od maminky. Dělané s láskou." />
        </Helmet>
    </div>
  )
}

export default HelmetSettings