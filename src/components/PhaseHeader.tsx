import { toDate } from '../utils/utils';
import { FairLaunchAccount } from './fair-launch';
import { CandyMachineAccount } from './candy-machine';

export enum Phase {
  AnticipationPhase, // FL, AKA Phase 0
  SetPrice, // FL, AKA Phase 1
  GracePeriod, // FL, AKA Phase 2
  Lottery, // FL
  RaffleFinished, // FL, AKA Phase 3
  WaitForCM, // FL,
  Phase4,
  Unknown,
}

export function getPhase(
  fairLaunch: FairLaunchAccount | undefined,
  candyMachine: CandyMachineAccount | undefined,
): Phase {
  const curr = new Date().getTime();
  const phaseOne = toDate(fairLaunch?.state.data.phaseOneStart)?.getTime();
  const phaseOneEnd = toDate(fairLaunch?.state.data.phaseOneEnd)?.getTime();
  const phaseTwoEnd = toDate(fairLaunch?.state.data.phaseTwoEnd)?.getTime();
  const candyMachineGoLive = toDate(candyMachine?.state.goLiveDate)?.getTime();

  if (phaseOne && curr < phaseOne) {
    return Phase.AnticipationPhase;
  } else if (phaseOneEnd && curr <= phaseOneEnd) {
    return Phase.SetPrice;
  } else if (phaseTwoEnd && curr <= phaseTwoEnd) {
    return Phase.GracePeriod;
  } else if (
    !fairLaunch?.state.phaseThreeStarted &&
    phaseTwoEnd &&
    curr > phaseTwoEnd
  ) {
    return Phase.Lottery;
  } else if (
    (!fairLaunch || fairLaunch?.state.phaseThreeStarted) &&
    candyMachineGoLive &&
    curr > candyMachineGoLive
  ) {
    return Phase.Phase4;
  } else if (fairLaunch?.state.phaseThreeStarted) {
    if (!candyMachine) {
      return Phase.RaffleFinished;
    } else {
      return Phase.WaitForCM;
    }
  }
  return Phase.Unknown;
}