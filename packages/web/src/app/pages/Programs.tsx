import styled from "styled-components";
import {useEffect, useState} from "react";

import {trpcProxyClient} from "../services";

const ProgramsStyles = styled.div`
`

export function Programs() {
  const [flows, setFlows] = useState<Awaited<ReturnType<typeof trpcProxyClient.programConnection.query>>>()
  useEffect(() => {
    trpcProxyClient.programConnection.query().then(resp => {
      console.log(resp)
      setFlows(resp)
    })
  }, [])
  return (
    <ProgramsStyles>
      programs: {flows?.edges.length}.
    </ProgramsStyles>
  );
}
