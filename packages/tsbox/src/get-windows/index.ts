import { consola } from "consola";
import { activeWindow } from "get-windows";

consola.log(await activeWindow());
