import Callable from "@axiona/function/callable.js";

export type ShutdownCode = number|NodeJS.Signals|Error;

export default function Shutdown(
    emitter : Callable<[ShutdownCode], void>,/*queue: Set<PriorityValue & OnceValue<Callable<[ShutdownCode], Promise<any>|any>>>*/
    log : Callable<[string], void> = ()=>{}
) : Callable<[ShutdownCode], void> {

    // let exited : boolean = false;
    //
    // const emit = function (code: ShutdownCode) {
    //     exited = true;
    //     emitter(code);
    // }

    /** do something when app is closing */
    process.on('exit', emitter);

    /** catches ctrl+c event */
    process.on('SIGINT', emitter);

    /** catches "kill pid" (for example: nodemon restart) */
    process.on('SIGUSR1', emitter);
    process.on('SIGUSR2', emitter);

    /** catch kill */
    process.on('SIGTERM', emitter);

    /** catches uncaught exceptions */
    process.on('uncaughtException', emitter);

    return  (code : ShutdownCode) => {

        if(code instanceof Error) {

            log(code.message);
            log(code.toString());
            log(`application exit [${code.name}]`);

        } else {

            log(`application exit [${code}]`);
        }

        /** ensure process killed */
        // if(!exited) {

            process.exit(0);
        // }
    }

}
