package web.controller;

import core.service.NodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import web.converter.NodeConverter;
import web.dto.NodeDto;

import java.util.List;

@RestController
public class NodeController {

    @Autowired
    NodeService service;
    @Autowired
    NodeConverter converter;

    @GetMapping(value = "/nodes")
    public List<NodeDto> getAllNodes(){

        return converter.convertModelsToDtosSorted(service.getAllNodes());
    }

}
