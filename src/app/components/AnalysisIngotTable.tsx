import * as React from 'react';

import { StyleRulesCallback, withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import List, {ListItem, ListItemText} from 'material-ui/List';

import {Component} from "../common/";
import {Analysis, AnalysisRowProps} from "../models/";
import Table from './Table';

const datumTitles = {
  type: 'Type',
  subtype: 'Subtype',
  count: 'Count',
  mass: 'Mass',
  volume: 'Volume'
}

export type AnalysisIngotTableClasses = 'root';
const styles: StyleRulesCallback<AnalysisIngotTableClasses> = (theme) => ({
  root: {}
})

class AnalysisIngotTable extends Component<AnalysisRowProps, AnalysisIngotTableClasses> {

  getData(): {[field in keyof typeof datumTitles]: number|string}[] {
    return this.props.analysis.ingots.map(([ingot, count])=>({
        type: ingot.type,
        subtype: ingot.subtype,
        count: Math.round(count),
        mass: Math.round(ingot.mass * count),
        volume: Math.round(ingot.volume * count)
    }));
  }

  render() {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Table
            columns={Object.keys(datumTitles)}
            headers={datumTitles}
            data={this.getData()}
          />
        </Grid>
      </Grid>
    );
  }

}
export default withStyles(styles)<AnalysisRowProps>(AnalysisIngotTable);
